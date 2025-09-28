import React from "react";
import { ShieldCheck, Gauge, Handshake, Gem } from "lucide-react";

const ServiceCardG = () => {
  return (
    <div data-testid="service-card-g" className="relative w-[370px] min-w-[370px] h-[620px] rounded-2xl border border-gray-200 bg-white overflow-hidden">
      {/* Split header */}
      <div className="h-28 bg-gradient-to-r from-yellow-400 via-orange-400 to-rose-400" />
      <div className="-mt-20 px-6">
        <div className="rounded-2xl bg-white shadow-md p-4">
          <h3 className="text-2xl font-extrabold text-gray-900 text-center">بطائق الكترونية</h3>
          <p className="text-sm font-semibold text-gray-500 text-center mt-1">مسبقة الدفع</p>
        </div>
      </div>

      {/* Info */}
      <div className="px-6 mt-6 space-y-3">
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

      {/* CTA vertical */}
      <div className="absolute top-1/2 -translate-y-1/2 right-4 rotate-90">
        <button type="button" className="text-[10px] tracking-widest font-extrabold px-6 py-2 rounded-full bg-gray-900 text-white">المزيد</button>
      </div>

      {/* Features */}
      <div className="absolute bottom-4 left-0 right-0 px-6">
        <div className="grid grid-cols-4 gap-2 text-center">
          <div className="flex flex-col items-center gap-1">
            <span className="w-10 h-10 rounded-full bg-emerald-50 text-emerald-700 flex items-center justify-center border border-emerald-100"><ShieldCheck size={18} /></span>
            <span className="text-[11px] font-bold text-gray-700">أمان</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <span className="w-10 h-10 rounded-full bg-orange-50 text-orange-700 flex items-center justify-center border border-orange-100"><Gauge size={18} /></span>
            <span className="text-[11px] font-bold text-gray-700">سرعة</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <span className="w-10 h-10 rounded-full bg-sky-50 text-sky-700 flex items-center justify-center border border-sky-100"><Handshake size={18} /></span>
            <span className="text-[11px] font-bold text-gray-700">ثقة</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <span className="w-10 h-10 rounded-full bg-rose-50 text-rose-700 flex items-center justify-center border border-rose-100"><Gem size={18} /></span>
            <span className="text-[11px] font-bold text-gray-700">جودة</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCardG;