import React from 'react';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  if (totalPages <= 1) return null;

  return (
    <div className="flex items-center justify-between pt-8 border-t border-zinc-200">
      <span className="text-xs text-zinc-500 font-medium">
        Page <span className="font-bold text-black">{currentPage}</span> of <span className="font-bold text-black">{totalPages}</span>
      </span>

      <div className="flex items-center space-x-2">
        <button
          disabled={currentPage === 1}
          onClick={() => onPageChange(Math.max(currentPage - 1, 1))}
          className="px-3 py-1.5 rounded-lg border border-zinc-300 text-xs font-bold disabled:opacity-40 disabled:cursor-not-allowed hover:bg-zinc-100"
        >
          Previous
        </button>
        {[...Array(totalPages)].map((_, idx) => (
          <button
            key={idx + 1}
            onClick={() => onPageChange(idx + 1)}
            className={`w-8 h-8 rounded-lg text-xs font-bold ${
              currentPage === idx + 1
                ? 'bg-[#121212] text-[#E5A83B]'
                : 'bg-white border border-zinc-200 text-zinc-700 hover:bg-zinc-50'
            }`}
          >
            {idx + 1}
          </button>
        ))}
        <button
          disabled={currentPage === totalPages}
          onClick={() => onPageChange(Math.min(currentPage + 1, totalPages))}
          className="px-3 py-1.5 rounded-lg border border-zinc-300 text-xs font-bold disabled:opacity-40 disabled:cursor-not-allowed hover:bg-zinc-100"
        >
          Next
        </button>
      </div>
    </div>
  );
};