import { FilterState, SortMode, Product } from '../types/products';
import { SAMPLE_PRODUCTS } from '../constants/sampleData';

export function buildMongoDBQuery(filters: FilterState) {
  const query: Record<string, any> = { active: true };
  const conditions: any[] = [];

  if (filters.search && filters.search.trim() !== '') {
    const term = filters.search.trim();
    conditions.push({
      $or: [
        { name: { $regex: term, $options: 'i' } },
        { brand: { $regex: term, $options: 'i' } },
        { description: { $regex: term, $options: 'i' } },
        { tags: { $in: [new RegExp(term, 'i')] } }
      ]
    });
  }

  if (filters.category && filters.category !== 'all') {
    query.category = filters.category;
  }

  if (filters.brand && filters.brand.length > 0) {
    query.brand = { $in: filters.brand };
  }

  if (filters.gender && filters.gender !== 'all') {
    query.gender = filters.gender;
  }

  if (filters.minPrice > 0 || filters.maxPrice < 30000) {
    query.price = {};
    if (filters.minPrice > 0) query.price.$gte = Number(filters.minPrice);
    if (filters.maxPrice < 30000) query.price.$lte = Number(filters.maxPrice);
  }

  if (filters.minRating > 0) {
    query.rating = { $gte: Number(filters.minRating) };
  }

  if (filters.sizes && filters.sizes.length > 0) {
    query.sizes = { $in: filters.sizes };
  }

  if (filters.inStockOnly) {
    query.stock = { $gt: 0 };
  }

  if (filters.badge && filters.badge !== 'all') {
    if (filters.badge === 'featured') query.featured = true;
    if (filters.badge === 'bestseller') query.bestseller = true;
    if (filters.badge === 'newArrival') query.newArrival = true;
  }

  if (conditions.length > 0) {
    query.$and = conditions;
  }

  return query;
}

export function executeProductSearchService(
  filters: FilterState, 
  sortMode: SortMode, 
  page = 1, 
  pageSize = 6
) {
  const queryObj = buildMongoDBQuery(filters);
  let results = [...SAMPLE_PRODUCTS];

  if (queryObj.category) {
    results = results.filter(p => p.category === queryObj.category);
  }

  if (queryObj.brand && queryObj.brand.$in) {
    results = results.filter(p => queryObj.brand.$in.includes(p.brand));
  }

  if (queryObj.gender) {
    results = results.filter(p => p.gender === queryObj.gender || p.gender === 'unisex');
  }

  if (queryObj.price) {
    if (queryObj.price.$gte !== undefined) results = results.filter(p => p.price >= queryObj.price.$gte);
    if (queryObj.price.$lte !== undefined) results = results.filter(p => p.price <= queryObj.price.$lte);
  }

  if (queryObj.rating && queryObj.rating.$gte !== undefined) {
    results = results.filter(p => p.rating >= queryObj.rating.$gte);
  }

  if (queryObj.sizes && queryObj.sizes.$in) {
    results = results.filter(p => p.sizes.some(s => queryObj.sizes.$in.includes(s)));
  }

  if (queryObj.stock && queryObj.stock.$gt !== undefined) {
    results = results.filter(p => p.stock > 0);
  }

  if (queryObj.featured) results = results.filter(p => p.featured);
  if (queryObj.bestseller) results = results.filter(p => p.bestseller);
  if (queryObj.newArrival) results = results.filter(p => p.newArrival);

  if (filters.search && filters.search.trim() !== '') {
    const term = filters.search.toLowerCase().trim();
    results = results.filter(p => 
      p.name.toLowerCase().includes(term) ||
      p.brand.toLowerCase().includes(term) ||
      p.shortDescription.toLowerCase().includes(term) ||
      p.tags.some(t => t.toLowerCase().includes(term))
    );
  }

  results.sort((a, b) => {
    switch (sortMode) {
      case 'price-asc': return a.price - b.price;
      case 'price-desc': return b.price - a.price;
      case 'rating-desc': return b.rating - a.rating;
      case 'newest': return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
      case 'bestseller': return (b.bestseller ? 1 : 0) - (a.bestseller ? 1 : 0);
      case 'featured': default: return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
    }
  });

  const total = results.length;
  const totalPages = Math.ceil(total / pageSize) || 1;
  const startIndex = (page - 1) * pageSize;
  const paginatedResults = results.slice(startIndex, startIndex + pageSize);

  return {
    products: paginatedResults,
    total,
    page,
    pageSize,
    totalPages,
    queryPipeline: queryObj
  };
}