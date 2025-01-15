import React from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";

type ModalProps = {
  isOpen: boolean;
  onClose?: () => void;
  type?: "confirm" | "alert";
  title?: string;
  message: string | React.ReactNode;
  onConfirm?: () => void;
};

export default function Modal({
  isOpen,
  onClose,
  type = "confirm",
  title,
  message,
  onConfirm,
}: ModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 font-poppins">
      <div className="bg-white rounded-md shadow-md w-full max-w-md p-6 relative">
        <button
          id="close-button"
          aria-label="close modal"
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
        >
          <AiOutlineCloseCircle size={24} />
        </button>

        {title && (
          <h2 className="text-lg font-bold mb-4 text-center">{title}</h2>
        )}
        <p className="text-gray-700 text-sm mb-6 text-center">{message}</p>

        {type === "confirm" ? (
          <div className="flex justify-center gap-4">
            <button
              id="confirm-button"
              aria-label="confirm button"
              onClick={onConfirm}
              className="px-4 py-2 bg-blue text-white active:text-red active:scale-95 font-semibold rounded-md hover:bg-blue-light"
            >
              Confirmar
            </button>
            <button
              id="cancel-button"
              aria-label="cancel command"
              onClick={onClose}
              className="px-4 py-2 bg-green text-gray-800 active:text-red active:scale-95 font-semibold rounded-md hover:bg-light-green"
            >
              Cancelar
            </button>
          </div>
        ) : (
          <div className="text-center">
            <button
              id="understood-button"
              aria-label="understood mensagem"
              onClick={onClose}
              className="px-4 py-2 bg-blue-600 text-black active:text-red active:scale-95 font-semibold rounded-md hover:bg-blue-700"
            >
              Entendido
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
