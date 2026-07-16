import React from "react";

interface ModalProps {
  title: string;
  children?: React.ReactNode;
  onClose: () => void;
}

export default function Modal({ title, children, onClose }: ModalProps) {
  return (
    /* 1. Added 'backdrop-blur-sm' for a premium frosted-glass effect behind the modal */
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100] flex items-center justify-center p-4 animate-in fade-in duration-200">
      
      {/* 2. Added shadow-2xl and a subtle border to make it pop on laptop screens */}
      <div className="bg-white text-slate-800 rounded-[2rem] max-w-md w-full p-8 max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-100 relative scale-in-center animate-in zoom-in-95 duration-200">
        
        {/* Optional: Added an 'X' close button in the top right for standard desktop UX */}
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 text-slate-400 hover:text-slate-900 transition-colors text-2xl font-bold cursor-pointer"
        >
          &times;
        </button>

        <h2 className="text-2xl font-black mb-6 text-slate-900 pr-8">{title}</h2>
        
        <div className="text-base leading-relaxed text-slate-600 space-y-4">
          {children}
        </div>

        {/* 3. Updated button matching the new premium auto blue theme */}
        <button 
          onClick={onClose} 
          className="w-full bg-blue-600 text-white font-bold text-lg py-4 rounded-2xl mt-8 hover:bg-blue-700 transition transform active:scale-95 shadow-lg shadow-blue-200 cursor-pointer"
        >
          Close
        </button>
      </div>
    </div>
  );
}