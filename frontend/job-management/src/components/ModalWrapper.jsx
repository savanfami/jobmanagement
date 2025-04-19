import React from 'react';



const ModalWrapper  = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div 
        className="absolute inset-0 bg-black opacity-50"
        onClick={onClose} 
      />
      <div className="relative z-10 max-h-[90vh] overflow-y-auto">
        {children}
      </div>
    </div>
  );
};

export default ModalWrapper;
