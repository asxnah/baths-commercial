"use client";

import { useState } from "react";
import { X } from "lucide-react";

export default function OrderModal({ projectTitle }: { projectTitle: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);

    setTimeout(() => {
      setIsOpen(false);
      setIsSubmitted(false);
    }, 3000);
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="w-full bg-black hover:bg-neutral-700 text-white font-semibold py-4 px-6 rounded-lg transition-colors text-lg shadow-lg"
      >
        Заказать проект
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 relative animate-in fade-in duration-200">
            <button
              onClick={() => {
                setIsOpen(false);
                setIsSubmitted(false);
              }}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
            >
              <X size={24} />
            </button>

            {!isSubmitted ? (
              <>
                <h3 className="text-2xl font-bold mb-2">Заказать проект</h3>
                <p className="text-gray-600 mb-6">
                  {projectTitle} ·{" "}
                  {projectTitle.includes("Современная")
                    ? "4 800 000"
                    : "3 500 000"}{" "}
                  ₽
                </p>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <input
                    type="text"
                    placeholder="Ваше имя"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                  <input
                    type="tel"
                    placeholder="Телефон"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                  <input
                    type="email"
                    placeholder="Email (по желанию)"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />

                  <button
                    type="submit"
                    className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-4 rounded-lg transition-colors"
                  >
                    Отправить заявку
                  </button>
                </form>

                <p className="text-xs text-gray-500 mt-6 text-center">
                  Мы перезвоним вам в ближайшее время
                </p>
              </>
            ) : (
              <div className="text-center py-12">
                <div className="text-6xl mb-6">✅</div>
                <h3 className="text-2xl font-bold mb-3">Заказано!</h3>
                <p className="text-gray-600">
                  Спасибо! Мы свяжемся с вами в ближайшее время.
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
