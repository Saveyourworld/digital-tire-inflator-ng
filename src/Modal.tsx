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
      <div className="bg-white text-gray-800 rounded-2xl max-w-md w-full p-8 max-h-[90vh] overflow-y-auto shadow-2xl border border-gray-100 relative scale-in-center animate-in zoom-in-95 duration-200">
        
        {/* Optional: Added an 'X' close button in the top right for standard desktop UX */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-900 transition-colors text-2xl"
        >
          &times;
        </button>

        <h2 className="text-2xl font-black mb-6 text-gray-900 pr-8">{title}</h2>
        
        <div className="text-base leading-relaxed text-gray-600 space-y-4">
          {children}
        </div>

        <button 
          onClick={onClose} 
          className="w-full bg-orange-600 text-white font-bold text-lg py-4 rounded-xl mt-8 hover:bg-orange-700 transition transform active:scale-95 shadow-lg shadow-orange-200"
        >
          Close
        </button>
      </div>
    </div>
  );
}