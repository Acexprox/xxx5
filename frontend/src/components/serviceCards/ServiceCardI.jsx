import React from "react";
import { ShieldAlert, Zap, BadgeCheck, Crown } from "lucide-react";

const ServiceCardI = () => {
  return (
    <div data-testid="service-card-i" className="relative w-[370px] min-w-[370px] h-[620px] rounded-[30px] bg-white border border-gray-200 shadow-sm overflow-hidden">
      {/* Radial halo */}
      <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-yellow-400/30 blur-3xl" aria-hidden></div>
      <div className="absolute -bottom-16 -left-16 w-80 h-80 rounded-full bg-sky-400/20 blur-3xl" aria-hidden></div>

      <div className="relative z-10 p-6 h-full flex flex-col">
        {/* Header */}
        <div className="text-center">
          <h3 className="text-2xl font-extrabold text-gray-900">بطائق الكترونية</h3>
          <p className="text-sm font-semibold text-gray-500 mt-1">مسبقة الدفع</p>
        </div>

        {/* Micro divider */}
        <div className="mt-4 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />

        {/* Info */}
        <div className="mt-4 grid grid-cols-1 gap-3">
          <div className="bg-white rounded-xl border border-gray-200 p-3 shadow-[0_1px_0_#fff_inset]">
            <div className="text-sm font-bold text-gray-700">فئات متعددة:</div>
            <div className="text-xs text-gray-500">مالية، العاب، تسوق</div>
          </div>
          <div className="bg-white rounded-xl border border-gray-200 p-3 shadow-[0_1px_0_#fff_inset]">
            <div className="text-sm font-bold text-gray-700">توافق عالمي:</div>
            <div className="text-xs text-gray-500">منصات، تطبيقات، مواقع</div>
          </div>
          <div className="bg-white rounded-xl border-2 border-dashed border-gray-300 p-3 text-center font-bold text-sm text-gray-800">باقات متنوعة</div>
        </div>

        {/* CTA */}
        <div className="mt-6 flex justify-center">
          <button type="button" className="text-xs font-extrabold px-6 py-2 rounded-full bg-gray-900 text-white">المزيد</button>
        </div>

        {/* Features */}
        <div className="mt-6 grid grid-cols-4 gap-2 text-center">
          <div className="flex flex-col items-center gap-1">
            <span className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center border border-emerald-100"><ShieldAlert size={18} /></span>
            <span className="text-[11px] font-bold text-gray-700">أمان</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <span className="w-10 h-10 rounded-xl bg-orange-50 text-orange-700 flex items-center justify-center border border-orange-100"><Zap size={18} /></span>
            <span className="text-[11px] font-bold text-gray-700">سرعة</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <span className="w-10 h-10 rounded-xl bg-sky-50 text-sky-700 flex items-center justify-center border border-sky-100"><BadgeCheck size={18} /></span>
            <span className="text-[11px] font-bold text-gray-700">ثقة</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <span className="w-10 h-10 rounded-xl bg-rose-50 text-rose-700 flex items-center justify-center border border-rose-100"><Crown size={18} /></span>
            <span className="text-[11px] font-bold text-gray-700">جودة</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCardI;