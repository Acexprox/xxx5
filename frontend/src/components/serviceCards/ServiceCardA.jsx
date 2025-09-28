import React from "react";
import { ShieldCheck, Rocket, BadgeCheck, Gem } from "lucide-react";

const ServiceCardA = () => {
  return (
    <div data-testid="service-card-a" className="relative w-[370px] max-w-[370px] min-w-[370px] min-h-[620px] max-h-[620px] h-[620px] rounded-2xl p-6 bg-white shadow-[0_1px_0_#fff_inset,0_0_0_1px_rgba(0,0,0,0.06),0_10px_30px_rgba(0,0,0,0.08)]">
      <div className="absolute inset-0 rounded-2xl p-[2px] pointer-events-none" aria-hidden>
        <div className="w-full h-full rounded-2xl bg-gradient-to-br from-yellow-400/60 via-orange-400/40 to-rose-400/40 blur-[2px]"></div>
      </div>

      <div className="relative z-10 flex flex-col gap-4 h-full">
        {/* Header */}
        <div className="text-center mt-2">
          <h3 className="text-2xl font-extrabold text-gray-900 tracking-tight">بطائق الكترونية</h3>
          <p className="text-sm font-semibold text-gray-500 mt-1">مسبقة الدفع</p>
        </div>

        {/* Decorative divider */}
        <div className="mx-auto w-40 h-1 rounded-full bg-gradient-to-r from-yellow-500 via-orange-500 to-rose-500" />

        {/* Info blocks */}
        <div className="mt-2 grid grid-cols-1 gap-3 px-2">
          <div className="rounded-xl border border-gray-200 p-3 bg-white/70 backdrop-blur-sm">
            <div className="text-sm font-bold text-gray-700">فئات متعددة:</div>
            <div className="text-xs text-gray-500">مالية، العاب، تسوق</div>
          </div>
          <div className="rounded-xl border border-gray-200 p-3 bg-white/70 backdrop-blur-sm">
            <div className="text-sm font-bold text-gray-700">توافق عالمي:</div>
            <div className="text-xs text-gray-500">منصات، تطبيقات، مواقع</div>
          </div>
          <div className="rounded-xl border border-dashed border-gray-300 p-3 bg-white">
            <div className="text-sm font-bold text-gray-800 text-center">باقات متنوعة</div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-auto flex items-center justify-between px-1">
          <div className="h-px flex-1 bg-gradient-to-l from-gray-200 to-transparent rounded" />
          <button type="button" className="mx-2 inline-flex items-center justify-center text-xs font-bold text-gray-700 bg-white border border-gray-200 rounded-full px-4 py-2 shadow-sm">المزيد</button>
          <div className="h-px flex-1 bg-gradient-to-r from-gray-200 to-transparent rounded" />
        </div>

        {/* Features */}
        <div className="grid grid-cols-4 gap-2 text-center pt-2">
          <div className="flex flex-col items-center gap-1">
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 border border-emerald-100"><ShieldCheck size={18} /></span>
            <span className="text-[11px] font-bold text-gray-700">أمان</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-orange-50 text-orange-600 border border-orange-100"><Rocket size={18} /></span>
            <span className="text-[11px] font-bold text-gray-700">سرعة</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-sky-50 text-sky-600 border border-sky-100"><BadgeCheck size={18} /></span>
            <span className="text-[11px] font-bold text-gray-700">ثقة</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-rose-50 text-rose-600 border border-rose-100"><Gem size={18} /></span>
            <span className="text-[11px] font-bold text-gray-700">جودة</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCardA;