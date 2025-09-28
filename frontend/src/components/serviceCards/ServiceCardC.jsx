import React from "react";
import { Activity, Gauge, Shield, Crown } from "lucide-react";

const ServiceCardC = () => {
  return (
    <div data-testid="service-card-c" className="relative w-[370px] min-w-[370px] h-[620px] rounded-3xl overflow-hidden">
      {/* Glass background */}
      <div className="absolute inset-0 bg-[url('/images/desert-balloon.jpeg')] bg-cover bg-center scale-105" aria-hidden></div>
      <div className="absolute inset-0 bg-white/80 backdrop-blur-[6px]" aria-hidden></div>

      <div className="relative z-10 h-full p-6 flex flex-col">
        {/* Header */}
        <div className="text-center">
          <h3 className="text-2xl font-extrabold text-gray-900">بطائق الكترونية</h3>
          <p className="text-sm font-semibold text-gray-700 mt-1">مسبقة الدفع</p>
        </div>

        {/* Diagonal divider */}
        <div className="mt-4 h-2 bg-gradient-to-l from-sky-500 via-violet-500 to-rose-500 rounded-full rotate-[0.5deg]" />

        {/* Info */}
        <div className="mt-4 space-y-3">
          <div className="bg-white/70 rounded-xl border border-white/60 p-3 shadow-sm">
            <div className="text-sm font-bold text-gray-800">فئات متعددة:</div>
            <div className="text-xs text-gray-600">مالية، العاب، تسوق</div>
          </div>
          <div className="bg-white/70 rounded-xl border border-white/60 p-3 shadow-sm">
            <div className="text-sm font-bold text-gray-800">توافق عالمي:</div>
            <div className="text-xs text-gray-600">منصات، تطبيقات، مواقع</div>
          </div>
          <div className="bg-white/80 rounded-xl border border-dashed border-gray-300 p-3 text-center font-bold text-sm text-gray-900">باقات متنوعة</div>
        </div>

        {/* CTA */}
        <div className="mt-auto flex justify-center">
          <button type="button" className="text-xs font-extrabold text-white bg-gradient-to-r from-sky-600 to-violet-600 rounded-full px-6 py-2 shadow-md">المزيد</button>
        </div>

        {/* Features */}
        <div className="mt-4 grid grid-cols-4 gap-2 text-center">
          <div className="flex flex-col items-center gap-1">
            <span className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center border border-emerald-200"><Shield size={18} /></span>
            <span className="text-[11px] font-bold text-gray-800">أمان</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <span className="w-10 h-10 rounded-xl bg-orange-100 text-orange-700 flex items-center justify-center border border-orange-200"><Activity size={18} /></span>
            <span className="text-[11px] font-bold text-gray-800">سرعة</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <span className="w-10 h-10 rounded-xl bg-sky-100 text-sky-700 flex items-center justify-center border border-sky-200"><Gauge size={18} /></span>
            <span className="text-[11px] font-bold text-gray-800">ثقة</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <span className="w-10 h-10 rounded-xl bg-rose-100 text-rose-700 flex items-center justify-center border border-rose-200"><Crown size={18} /></span>
            <span className="text-[11px] font-bold text-gray-800">جودة</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCardC;