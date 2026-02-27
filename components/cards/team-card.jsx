"use client";

import { cn } from "@/animete";

export function TeamCard() {
  return (
    <div className="w-full">
      <div
        className={cn(
          "group w-full cursor-pointer overflow-hidden relative card h-[400px] rounded-2xl shadow-xl mx-auto flex flex-col justify-end p-4 border border-transparent dark:border-neutral-800",
          "bg-[url(https://images.unsplash.com/photo-1476842634003-7dcca8f832de?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80)] bg-cover bg-center",
          "transition-all duration-500",
        )}
      >
        {/* Video Background - Faqat hover bo'lganda ko'rinadi */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"
        >
          <source src="/videos/main.mp4" type="video/mp4" />
        </video>

        {/* Qora overlay (Gradiant) - Matn yaxshi ko'rinishi uchun */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-60 transition-opacity duration-500 z-20" />

        {/* Matn qismi */}
        <div className="text relative z-30 w-full">
          <h1 className="font-bold text-xl text-gray-50 relative">
            John Diegle
          </h1>
          <p className="font-normal text-base text-gray-50 relative mt-1 pb-3">
            Project manager at Yusolve
          </p>
        </div>
      </div>
    </div>
  );
}
