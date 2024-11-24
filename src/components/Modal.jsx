import React from 'react';

const Modal = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center backdrop-blur-[1px] justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg w-96">
        <div className="px-4 py-2 border-b">
          <h2 className="text-xl font-semibold dark:text-black">{title}</h2>
          <button
            onClick={onClose}
            className="absolute top-2 right-2 text-[42px] dark:text-white text-black"
          >
            &times;
          </button>
        </div>
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
