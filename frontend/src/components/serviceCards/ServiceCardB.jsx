import React from "react";
import { Lock, Zap, ThumbsUp, Award } from "lucide-react";

const ServiceCardB = () => {
  return (
    <div data-testid="service-card-b" className="relative w-[370px] min-w-[370px] h-[620px] rounded-2xl bg-white shadow-[0_10px_30px_rgba(0,0,0,0.12)] overflow-hidden border border-gray-100">
      {/* Left rail */}
      <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-b from-yellow-400 to-orange-500" aria-hidden></div>

      <div className="relative z-10 h-full grid grid-rows-[auto_auto_1fr_auto_auto] px-6 pl-8">
        {/* Header */}
        <div className="text-right mt-6">
          <h3 className="text-2xl font-extrabold text-gray-900">بطائق الكترونية</h3>
          <p className="text-sm text-gray-600 font-semibold mt-1">مسبقة الدفع</p>
        </div>

        {/* Divider */}
        <div className="mt-3 h-[3px] w-full bg-gray-100 rounded-full">
          <div className="h-[3px] w-1/2 bg-gradient-to-l from-orange-500 to-yellow-400 rounded-full"></div>
        </div>

        {/* Info */}
        <div className="mt-4 space-y-3">
          <div className="rounded-xl border border-gray-200 p-3">
            <div className="text-sm font-bold text-gray-700">فئات متعددة:</div>
            <div className="text-xs text-gray-500">مالية، العاب، تسوق</div>
          </div>
          <div className="rounded-xl border border-gray-200 p-3">
            <div className="text-sm font-bold text-gray-700">توافق عالمي:</div>
            <div className="text-xs text-gray-500">منصات، تطبيقات، مواقع</div>
          </div>
          <div className="rounded-xl border-dashed border-2 border-gray-300 p-3 text-center font-bold text-sm text-gray-800">باقات متنوعة</div>
        </div>

        {/* CTA */}
        <div className="mt-4 flex items-center justify-end">
          <button type="button" className="text-xs font-extrabold text-gray-800 bg-yellow-100 hover:bg-yellow-200 border border-yellow-300 rounded-full px-5 py-2">المزيد</button>
        </div>

        {/* Features */}
        <div className="mt-4 grid grid-cols-4 gap-2 text-center">
          <div className="flex flex-col items-center gap-1">
            <span className="w-10 h-10 rounded-full bg-emerald-600 text-white flex items-center justify-center"><Lock size={18} /></span>
            <span className="text-[11px] font-bold text-gray-700">أمان</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <span className="w-10 h-10 rounded-full bg-orange-600 text-white flex items-center justify-center"><Zap size={18} /></span>
            <span className="text-[11px] font-bold text-gray-700">سرعة</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <span className="w-10 h-10 rounded-full bg-sky-600 text-white flex items-center justify-center"><ThumbsUp size={18} /></span>
            <span className="text-[11px] font-bold text-gray-700">ثقة</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <span className="w-10 h-10 rounded-full bg-rose-600 text-white flex items-center justify-center"><Award size={18} /></span>
            <span className="text-[11px] font-bold text-gray-700">جودة</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCardB;