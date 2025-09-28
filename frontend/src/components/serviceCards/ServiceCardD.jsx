import React from "react";
import { Fingerprint, Timer, Medal, CheckCircle2 } from "lucide-react";

const ServiceCardD = () => {
  return (
    <div data-testid="service-card-d" className="relative w-[370px] min-w-[370px] h-[620px] rounded-[28px] bg-[#f7f8fa] shadow-[inset_8px_8px_18px_#e2e6eb,inset_-8px_-8px_18px_#ffffff,0_8px_30px_rgba(0,0,0,0.06)] p-7 border border-white">
      {/* Header */}
      <div className="text-center">
        <h3 className="text-2xl font-extrabold text-gray-900">بطائق الكترونية</h3>
        <p className="text-sm font-semibold text-gray-500 mt-1">مسبقة الدفع</p>
      </div>

      {/* Soft divider */}
      <div className="mt-4 h-1 rounded-full bg-gradient-to-r from-gray-200 to-white"></div>

      {/* Info */}
      <div className="mt-4 space-y-3">
        <div className="rounded-2xl p-4 bg-[#f7f8fa] shadow-[inset_4px_4px_8px_#e2e6eb,inset_-4px_-4px_8px_#ffffff]">
          <div className="text-sm font-bold text-gray-700">فئات متعددة:</div>
          <div className="text-xs text-gray-500">مالية، العاب، تسوق</div>
        </div>
        <div className="rounded-2xl p-4 bg-[#f7f8fa] shadow-[inset_4px_4px_8px_#e2e6eb,inset_-4px_-4px_8px_#ffffff]">
          <div className="text-sm font-bold text-gray-700">توافق عالمي:</div>
          <div className="text-xs text-gray-500">منصات، تطبيقات، مواقع</div>
        </div>
        <div className="rounded-2xl p-4 text-center font-bold text-sm text-gray-800 border border-gray-200">باقات متنوعة</div>
      </div>

      {/* CTA */}
      <div className="mt-6 flex justify-center">
        <button type="button" className="text-xs font-extrabold px-6 py-2 rounded-full bg-white shadow-[4px_4px_10px_#e2e6eb,-4px_-4px_10px_#ffffff] border border-gray-200">المزيد</button>
      </div>

      {/* Features */}
      <div className="mt-6 grid grid-cols-4 gap-2 text-center">
        <div className="flex flex-col items-center gap-1">
          <span className="w-10 h-10 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center border border-emerald-100"><Fingerprint size={18} /></span>
          <span className="text-[11px] font-bold text-gray-700">أمان</span>
        </div>
        <div className="flex flex-col items-center gap-1">
          <span className="w-10 h-10 rounded-2xl bg-orange-50 text-orange-600 flex items-center justify-center border border-orange-100"><Timer size={18} /></span>
          <span className="text-[11px] font-bold text-gray-700">سرعة</span>
        </div>
        <div className="flex flex-col items-center gap-1">
          <span className="w-10 h-10 rounded-2xl bg-sky-50 text-sky-600 flex items-center justify-center border border-sky-100"><Medal size={18} /></span>
          <span className="text-[11px] font-bold text-gray-700">ثقة</span>
        </div>
        <div className="flex flex-col items-center gap-1">
          <span className="w-10 h-10 rounded-2xl bg-rose-50 text-rose-600 flex items-center justify-center border border-rose-100"><CheckCircle2 size={18} /></span>
          <span className="text-[11px] font-bold text-gray-700">جودة</span>
        </div>
      </div>
    </div>
  );
};

export default ServiceCardD;