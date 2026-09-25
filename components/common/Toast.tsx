import React from 'react';

interface ToastProps {
  message: string;
}

export const Toast: React.FC<ToastProps> = ({ message }) => {
  if (!message) return null;

  return (
    <div 
      role="status" 
      aria-live="polite"
      className="fixed bottom-6 right-6 z-50 bg-[#121212] text-white px-5 py-3.5 rounded-xl shadow-2xl border border-[#E5A83B]/40 flex items-center space-x-3 animate-bounce"
    >
      <div className="w-2.5 h-2.5 rounded-full bg-[#E5A83B] animate-ping" />
      <span className="text-sm font-semibold tracking-wide">{message}</span>
    </div>
  );
};