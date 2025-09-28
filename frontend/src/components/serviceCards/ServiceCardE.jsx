import React from "react";
import { Cpu, Wallet, ShieldAlert, Star } from "lucide-react";

const ServiceCardE = () => {
  return (
    <div data-testid="service-card-e" className="relative w-[370px] min-w-[370px] h-[620px] rounded-xl bg-white border border-gray-200 shadow-sm p-6">
      {/* Header with badge */}
      <div className="flex items-center justify-between">
        <div className="text-right">
          <h3 className="text-2xl font-extrabold text-gray-900">بطائق الكترونية</h3>
          <p className="text-sm font-semibold text-gray-500 mt-1">مسبقة الدفع</p>
        </div>
        <span className="px-3 py-1 rounded-full text-[10px] font-bold bg-yellow-100 text-yellow-700 border border-yellow-300">جديد</span>
      </div>

      {/* Thin divider */}
      <div className="mt-4 h-px w-full bg-gradient-to-l from-transparent via-gray-200 to-transparent" />

      {/* Info grid */}
      <div className="mt-4 grid grid-cols-1 gap-3">
        <div className="p-3 rounded-lg bg-gray-50 border border-gray-200">
          <div className="text-sm font-bold text-gray-700">فئات متعددة:</div>
          <div className="text-xs text-gray-500">مالية، العاب، تسوق</div>
        </div>
        <div className="p-3 rounded-lg bg-gray-50 border border-gray-200">
          <div className="text-sm font-bold text-gray-700">توافق عالمي:</div>
          <div className="text-xs text-gray-500">منصات، تطبيقات، مواقع</div>
        </div>
        <div className="p-3 rounded-lg bg-white border-2 border-dashed border-gray-300 text-center font-bold text-sm text-gray-800">باقات متنوعة</div>
      </div>

      {/* CTA */}
      <div className="mt-6 flex justify-center">
        <button type="button" className="text-xs font-extrabold px-6 py-2 rounded-lg bg-gray-900 text-white">المزيد</button>
      </div>

      {/* Features */}
      <div className="mt-6 grid grid-cols-4 gap-2 text-center">
        <div className="flex flex-col items-center gap-1">
          <span className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center border border-emerald-100"><ShieldAlert size={18} /></span>
          <span className="text-[11px] font-bold text-gray-700">أمان</span>
        </div>
        <div className="flex flex-col items-center gap-1">
          <span className="w-10 h-10 rounded-lg bg-orange-50 text-orange-700 flex items-center justify-center border border-orange-100"><Cpu size={18} /></span>
          <span className="text-[11px] font-bold text-gray-700">سرعة</span>
        </div>
        <div className="flex flex-col items-center gap-1">
          <span className="w-10 h-10 rounded-lg bg-sky-50 text-sky-700 flex items-center justify-center border border-sky-100"><Wallet size={18} /></span>
          <span className="text-[11px] font-bold text-gray-700">ثقة</span>
        </div>
        <div className="flex flex-col items-center gap-1">
          <span className="w-10 h-10 rounded-lg bg-rose-50 text-rose-700 flex items-center justify-center border border-rose-100"><Star size={18} /></span>
          <span className="text-[11px] font-bold text-gray-700">جودة</span>
        </div>
      </div>
    </div>
  );
};

export default ServiceCardE;