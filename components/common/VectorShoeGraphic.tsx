import React from 'react';

interface VectorShoeGraphicProps {
  type: 'formal' | 'sneaker' | 'runner';
  accentColor?: string;
}

export const VectorShoeGraphic: React.FC<VectorShoeGraphicProps> = ({ type, accentColor }) => {
  if (type === "formal") {
    return (
      <svg viewBox="0 0 500 280" className="w-full h-auto drop-shadow-[0_25px_35px_rgba(0,0,0,0.8)] filter">
        <defs>
          <linearGradient id="leatherGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#4A2E12" />
            <stop offset="50%" stopColor="#2D1A08" />
            <stop offset="100%" stopColor="#120A03" />
          </linearGradient>
          <linearGradient id="goldHighlight" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#E5A83B" />
            <stop offset="100%" stopColor="#C98E2A" />
          </linearGradient>
        </defs>
        <path d="M40 220 Q120 230 250 225 T460 200 L470 215 Q350 240 230 240 Q100 240 30 225 Z" fill="#121212" />
        <path d="M45 215 Q120 222 250 218 T455 195 L460 202 Q350 225 230 225 Q100 225 38 215 Z" fill="#E5A83B" />
        <path d="M45 215 Q60 160 120 130 Q200 110 320 140 Q400 160 455 195 Q380 190 250 195 Q120 195 45 215 Z" fill="url(#leatherGrad)" />
        <rect x="220" y="130" width="35" height="40" rx="4" fill="none" stroke="url(#goldHighlight)" strokeWidth="6" />
        <line x1="220" y1="150" x2="255" y2="150" stroke="#E5A83B" strokeWidth="4" />
        <path d="M360 150 Q380 170 395 192" fill="none" stroke="#E5A83B" strokeWidth="2" strokeDasharray="4 3" />
        <ellipse cx="250" cy="245" rx="210" ry="15" fill="#000000" opacity="0.6" />
      </svg>
    );
  }

  if (type === "sneaker") {
    return (
      <svg viewBox="0 0 500 280" className="w-full h-auto drop-shadow-[0_25px_35px_rgba(0,0,0,0.8)] filter">
        <defs>
          <linearGradient id="sneakerUpper" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2A2B30" />
            <stop offset="100%" stopColor="#121316" />
          </linearGradient>
        </defs>
        <path d="M30 210 Q100 235 240 235 T470 195 L475 220 Q350 250 230 250 Q90 250 25 225 Z" fill="#FFFFFF" />
        <path d="M35 218 Q120 230 240 230 T465 200 L468 208 Q350 236 230 236 Q90 236 30 220 Z" fill="#E5A83B" />
        <path d="M35 210 Q50 150 110 120 Q190 95 300 130 Q390 150 465 195 Q380 190 240 195 Q100 195 35 210 Z" fill="url(#sneakerUpper)" />
        <path d="M140 160 Q220 125 340 165 Q250 180 160 170 Z" fill="#E5A83B" opacity="0.9" />
        <line x1="200" y1="125" x2="225" y2="140" stroke="#FFFFFF" strokeWidth="4" strokeLinecap="round" />
        <line x1="220" y1="130" x2="245" y2="145" stroke="#FFFFFF" strokeWidth="4" strokeLinecap="round" />
        <line x1="240" y1="135" x2="265" y2="150" stroke="#FFFFFF" strokeWidth="4" strokeLinecap="round" />
        <ellipse cx="250" cy="252" rx="220" ry="12" fill="#000000" opacity="0.7" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 500 280" className="w-full h-auto drop-shadow-[0_25px_35px_rgba(229,168,59,0.35)] filter">
      <defs>
        <linearGradient id="runnerGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1E1E1E" />
          <stop offset="50%" stopColor="#2A2A2A" />
          <stop offset="100%" stopColor="#121212" />
        </linearGradient>
      </defs>
      <path d="M25 200 Q100 225 240 225 T475 180 L480 200 Q350 240 230 240 Q80 240 20 215 Z" fill="#E5A83B" />
      <path d="M30 195 Q100 215 240 215 T470 175 L473 185 Q350 220 230 220 Q80 220 25 205 Z" fill="#FFFFFF" />
      <path d="M30 195 Q55 130 120 100 Q210 75 330 120 Q410 145 470 175 Q380 175 240 180 Q100 180 30 195 Z" fill="url(#runnerGrad)" />
      <path d="M120 140 Q200 100 320 135" fill="none" stroke="#E5A83B" strokeWidth="5" strokeLinecap="round" />
      <path d="M140 155 Q210 120 300 150" fill="none" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" opacity="0.8" />
      <path d="M40 185 Q50 140 80 130 L95 180 Z" fill="#E5A83B" />
      <ellipse cx="250" cy="242" rx="225" ry="14" fill="#000000" opacity="0.75" />
    </svg>
  );
};