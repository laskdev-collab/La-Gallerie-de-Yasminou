import React from 'react';

export const CornerRose: React.FC<{ className?: string, rotate?: number }> = ({ className = "", rotate = 0 }) => (
  <svg 
    width="100" 
    height="100" 
    viewBox="0 0 100 100" 
    className={`absolute pointer-events-none opacity-30 ${className}`}
    style={{ transform: `rotate(${rotate}deg)` }}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M50 50 C 60 40, 80 40, 90 50 C 80 60, 60 60, 50 50" fill="none" stroke="#fb7185" strokeWidth="1" />
    <path d="M50 50 C 40 60, 20 60, 10 50 C 20 40, 40 40, 50 50" fill="none" stroke="#fb7185" strokeWidth="1" />
    <path d="M50 50 C 40 40, 40 20, 50 10 C 60 20, 60 40, 50 50" fill="none" stroke="#fb7185" strokeWidth="1" />
    <path d="M50 50 C 60 60, 60 80, 50 90 C 40 80, 40 60, 50 50" fill="none" stroke="#fb7185" strokeWidth="1" />
    <circle cx="50" cy="50" r="5" fill="#e6c89c" opacity="0.5" />
  </svg>
);

export const DividerOrnament: React.FC<{ className?: string }> = ({ className = "" }) => (
  <div className={`flex items-center justify-center w-full py-8 ${className}`}>
    <div className="h-px w-24 bg-gradient-to-r from-transparent via-orange-200 to-transparent"></div>
    <div className="mx-4 text-rose-300">❦</div>
    <div className="h-px w-24 bg-gradient-to-r from-transparent via-orange-200 to-transparent"></div>
  </div>
);