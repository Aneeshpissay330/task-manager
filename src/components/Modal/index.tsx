import React from 'react';

interface ModalProps {
  visible: boolean;
  onClose: () => void;
  children: React.ReactNode;
  className?: string;
}

const Modal: React.FC<ModalProps> = ({ visible, onClose, children, className = '' }) => {
  if (!visible) return null;

  return (
    <div
      id="modal-overlay"
      className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50"
      onClick={onClose}
    >
      <section
        className={`w-full max-w-md bg-white rounded-2xl shadow-2xl px-8 py-10 mx-4 border border-bordergray ${className}`}
        onClick={e => e.stopPropagation()}
      >
        {children}
      </section>
    </div>
  );
};

export default Modal;
