import React from "react";
import { Shield, Rocket, Check, Star } from "lucide-react";

const ServiceCardJ = () => {
  return (
    <div data-testid="service-card-j" className="relative w-[370px] min-w-[370px] h-[620px] rounded-xl bg-white border border-gray-200 p-6">
      {/* Typographic header */}
      <div className="text-center">
        <h3 className="text-3xl font-black tracking-tight text-gray-900">بطائق الكترونية</h3>
        <p className="text-sm font-semibold text-gray-500 mt-1">مسبقة الدفع</p>
      </div>

      {/* Slim divider */}
      <div className="mt-4 h-1 bg-gray-100 rounded-full" />

      {/* Info as pills */}
      <div className="mt-4 space-y-3">
        <div className="flex items-start justify-between gap-3 p-3 rounded-xl bg-gray-50 border border-gray-200">
          <div>
            <div className="text-sm font-bold text-gray-700">فئات متعددة:</div>
            <div className="text-xs text-gray-500">مالية، العاب، تسوق</div>
          </div>
          <span className="inline-flex items-center px-2 py-1 rounded-full text-[10px] font-bold bg-gray-200 text-gray-700">+3</span>
        </div>
        <div className="flex items-start justify-between gap-3 p-3 rounded-xl bg-gray-50 border border-gray-200">
          <div>
            <div className="text-sm font-bold text-gray-700">توافق عالمي:</div>
            <div className="text-xs text-gray-500">منصات، تطبيقات، مواقع</div>
          </div>
          <span className="inline-flex items-center px-2 py-1 rounded-full text-[10px] font-bold bg-gray-200 text-gray-700">OG</span>
        </div>
        <div className="p-3 rounded-xl bg-white border-2 border-dashed border-gray-300 text-center font-bold text-sm text-gray-800">باقات متنوعة</div>
      </div>

      {/* CTA */}
      <div className="mt-6 flex justify-center">
        <button type="button" className="text-xs font-extrabold px-6 py-2 rounded-lg border border-gray-300 bg-white">المزيد</button>
      </div>

      {/* Feature bar */}
      <div className="mt-6 grid grid-cols-4 gap-2 text-center">
        <div className="flex flex-col items-center gap-1">
          <span className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center border border-emerald-100"><Shield size={18} /></span>
          <span className="text-[11px] font-bold text-gray-700">أمان</span>
        </div>
        <div className="flex flex-col items-center gap-1">
          <span className="w-10 h-10 rounded-xl bg-orange-50 text-orange-700 flex items-center justify-center border border-orange-100"><Rocket size={18} /></span>
          <span className="text-[11px] font-bold text-gray-700">سرعة</span>
        </div>
        <div className="flex flex-col items-center gap-1">
          <span className="w-10 h-10 rounded-xl bg-sky-50 text-sky-700 flex items-center justify-center border border-sky-100"><Check size={18} /></span>
          <span className="text-[11px] font-bold text-gray-700">ثقة</span>
        </div>
        <div className="flex flex-col items-center gap-1">
          <span className="w-10 h-10 rounded-xl bg-rose-50 text-rose-700 flex items-center justify-center border border-rose-100"><Star size={18} /></span>
          <span className="text-[11px] font-bold text-gray-700">جودة</span>
        </div>
      </div>
    </div>
  );
};

export default ServiceCardJ;