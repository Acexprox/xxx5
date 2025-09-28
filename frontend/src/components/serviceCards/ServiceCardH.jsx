import React from "react";
import { Lock, Flashlight, BadgeCheck, Award } from "lucide-react";

const ServiceCardH = () => {
  return (
    <div data-testid="service-card-h" className="relative w-[370px] min-w-[370px] h-[620px] rounded-2xl bg-white border border-gray-200 shadow-[0_12px_30px_rgba(0,0,0,0.08)] overflow-hidden">
      {/* Ticket notch */}
      <div className="absolute left-0 right-0 top-36 h-8 bg-gray-50 border-y border-gray-200">
        <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white border border-gray-200" />
        <div className="absolute -right-4 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white border border-gray-200" />
      </div>

      <div className="p-6">
        {/* Header */}
        <div className="text-center">
          <h3 className="text-2xl font-extrabold text-gray-900">بطائق الكترونية</h3>
          <p className="text-sm font-semibold text-gray-500 mt-1">مسبقة الدفع</p>
        </div>

        {/* Divider */}
        <div className="mt-4 h-[3px] bg-gradient-to-r from-gray-100 via-yellow-400 to-gray-100 rounded-full" />

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
          <div className="rounded-xl border-2 border-dashed border-gray-300 p-3 text-center font-bold text-sm">باقات متنوعة</div>
        </div>

        {/* CTA */}
        <div className="mt-6 flex justify-center">
          <button type="button" className="text-xs font-extrabold px-6 py-2 rounded-full bg-yellow-100 text-yellow-800 border border-yellow-300">المزيد</button>
        </div>

        {/* Features */}
        <div className="mt-6 grid grid-cols-4 gap-2 text-center">
          <div className="flex flex-col items-center gap-1">
            <span className="w-10 h-10 rounded-full bg-emerald-600 text-white flex items-center justify-center"><Lock size={18} /></span>
            <span className="text-[11px] font-bold text-gray-700">أمان</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <span className="w-10 h-10 rounded-full bg-orange-600 text-white flex items-center justify-center"><Flashlight size={18} /></span>
            <span className="text-[11px] font-bold text-gray-700">سرعة</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <span className="w-10 h-10 rounded-full bg-sky-600 text-white flex items-center justify-center"><BadgeCheck size={18} /></span>
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

export default ServiceCardH;