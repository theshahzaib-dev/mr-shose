import React, { useRef } from 'react';
import { Sparkles, ArrowRight, PhoneCall, Pause, Play, ChevronLeft, ChevronRight } from 'lucide-react';
import { BRAND_CONFIG, HERO_SLIDES } from '@/lib/constants/config';
import { VectorShoeGraphic } from '../common/VectorShoeGraphic';

interface HeroSliderProps {
  currentSlide: number;
  isPlaying: boolean;
  prefersReducedMotion: boolean;
  onSetSlide: (index: number) => void;
  onTogglePlay: () => void;
  onNextSlide: () => void;
  onPrevSlide: () => void;
  onActionClick: (text: string) => void;
  setIsPlaying: (playing: boolean) => void;
}

export const HeroSlider: React.FC<HeroSliderProps> = ({
  currentSlide,
  isPlaying,
  prefersReducedMotion,
  onSetSlide,
  onTogglePlay,
  onNextSlide,
  onPrevSlide,
  onActionClick,
  setIsPlaying,
}) => {
  const currentSlideData = HERO_SLIDES[currentSlide];
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    if (distance > 50) onNextSlide();
    if (distance < -50) onPrevSlide();
    touchStartX.current = 0;
    touchEndX.current = 0;
  };

  return (
    <section 
      className="relative bg-[#121212] text-white overflow-hidden py-12 sm:py-20 lg:py-28"
      onMouseEnter={() => setIsPlaying(false)}
      onMouseLeave={() => !prefersReducedMotion && setIsPlaying(true)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      aria-label="Featured Footwear Showcase"
    >
      <div className={`absolute inset-0 bg-gradient-to-r ${currentSlideData.bgGradient} transition-all duration-700 opacity-95`} />
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#E5A83B_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Left Content Column */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 bg-[#E5A83B]/15 border border-[#E5A83B]/40 rounded-full">
              <Sparkles className="w-3.5 h-3.5 text-[#E5A83B]" />
              <span className="text-[10px] sm:text-xs font-black tracking-widest text-[#E5A83B] uppercase">
                {currentSlideData.badge}
              </span>
            </div>

            <div className="space-y-2">
              <span className="text-xs sm:text-sm font-extrabold tracking-[0.3em] text-gray-400 uppercase block">
                {currentSlideData.eyebrow}
              </span>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tight text-white leading-none">
                {currentSlideData.title}
              </h1>
              <h2 className="text-xl sm:text-3xl font-extrabold tracking-wider text-[#E5A83B] uppercase">
                {currentSlideData.subtitle}
              </h2>
            </div>

            <p className="text-gray-300 text-sm sm:text-base max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal">
              {currentSlideData.description}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href={currentSlideData.primaryAction.href}
                onClick={(e) => {
                  e.preventDefault();
                  onActionClick(currentSlideData.primaryAction.text);
                }}
                className="w-full sm:w-auto px-8 py-4 bg-[#E5A83B] text-black font-extrabold text-xs uppercase tracking-widest rounded-xl hover:bg-[#C98E2A] transition-all shadow-xl hover:shadow-2xl flex items-center justify-center space-x-2 group focus:outline-none focus:ring-2 focus:ring-white"
              >
                <span>{currentSlideData.primaryAction.text}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href={`https://wa.me/${BRAND_CONFIG.whatsappNumber.replace('+', '')}`}
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold text-xs uppercase tracking-widest rounded-xl transition-all flex items-center justify-center space-x-2 focus:outline-none focus:ring-2 focus:ring-[#E5A83B]"
              >
                <PhoneCall className="w-4 h-4 text-[#E5A83B]" />
                <span>{currentSlideData.secondaryAction.text}</span>
              </a>
            </div>
          </div>

          {/* Right Shoe Visual Showcase */}
          <div className="lg:col-span-5 flex justify-center items-center relative">
            <div className="relative w-full max-w-md lg:max-w-none transform transition-transform duration-700 hover:scale-105">
              <div className="absolute inset-0 bg-[#E5A83B]/20 rounded-full blur-3xl -z-10" />
              <img
          src={currentSlideData.thumbnail}
          alt={currentSlideData.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
            </div>
          </div>

        </div>

        {/* Bottom Controls */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center space-x-3">
            {HERO_SLIDES.map((slide, idx) => (
              <button
                key={slide.id}
                onClick={() => onSetSlide(idx)}
                className={`relative h-2.5 rounded-full transition-all duration-300 focus:outline-none focus:ring-1 focus:ring-[#E5A83B] ${
                  currentSlide === idx ? 'w-10 bg-[#E5A83B]' : 'w-2.5 bg-white/30 hover:bg-white/60'
                }`}
                aria-label={`Go to slide ${idx + 1}: ${slide.title}`}
              />
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <button
              onClick={onTogglePlay}
              className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors focus:outline-none focus:ring-2 focus:ring-[#E5A83B]"
              aria-label={isPlaying ? "Pause autoplay slider" : "Play autoplay slider"}
            >
              {isPlaying ? <Pause className="w-4 h-4 text-[#E5A83B]" /> : <Play className="w-4 h-4 text-white" />}
            </button>

            <div className="flex items-center space-x-2">
              <button
                onClick={onPrevSlide}
                className="p-2.5 rounded-full bg-white/10 hover:bg-[#E5A83B] hover:text-black text-white transition-all focus:outline-none focus:ring-2 focus:ring-[#E5A83B]"
                aria-label="Previous Slide"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={onNextSlide}
                className="p-2.5 rounded-full bg-white/10 hover:bg-[#E5A83B] hover:text-black text-white transition-all focus:outline-none focus:ring-2 focus:ring-[#E5A83B]"
                aria-label="Next Slide"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};