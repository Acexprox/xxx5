import React from "react";
import { KeyRound, Zap, ThumbsUp, Trophy } from "lucide-react";

const ServiceCardF = () => {
  return (
    <div data-testid="service-card-f" className="relative w-[370px] min-w-[370px] h-[620px] rounded-3xl overflow-hidden bg-slate-900 text-white shadow-[0_20px_60px_rgba(0,0,0,0.4)]">
      {/* Glow frame */}
      <div className="absolute inset-0 rounded-3xl ring-1 ring-white/10" aria-hidden></div>
      <div className="absolute -inset-[1px] rounded-[26px] bg-[conic-gradient(at_20%_20%,#f59e0b_0deg,#ef4444_120deg,#0ea5e9_240deg,#f59e0b_360deg)] opacity-20 blur-xl" aria-hidden></div>

      <div className="relative z-10 h-full p-6 flex flex-col">
        {/* Header */}
        <div className="text-center">
          <h3 className="text-2xl font-black tracking-tight">بطائق الكترونية</h3>
          <p className="text-sm font-semibold text-slate-300 mt-1">مسبقة الدفع</p>
        </div>

        {/* Angular divider */}
        <div className="mt-4 h-[3px] bg-gradient-to-r from-yellow-400 via-orange-500 to-pink-500 rounded-full skew-x-6" />

        {/* Info */}
        <div className="mt-5 space-y-3">
          <div className="rounded-xl border border-white/10 bg-white/5 p-3">
            <div className="text-sm font-bold">فئات متعددة:</div>
            <div className="text-xs text-slate-300">مالية، العاب، تسوق</div>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-3">
            <div className="text-sm font-bold">توافق عالمي:</div>
            <div className="text-xs text-slate-300">منصات، تطبيقات، مواقع</div>
          </div>
          <div className="rounded-xl border border-dashed border-white/20 bg-white/0 p-3 text-center text-sm font-bold">باقات متنوعة</div>
        </div>

        {/* CTA */}
        <div className="mt-auto flex justify-center">
          <button type="button" className="text-xs font-extrabold px-6 py-2 rounded-full bg-white text-slate-900">المزيد</button>
        </div>

        {/* Features */}
        <div className="mt-4 grid grid-cols-4 gap-2 text-center">
          <div className="flex flex-col items-center gap-1">
            <span className="w-10 h-10 rounded-xl bg-white/10 text-emerald-300 border border-white/10 flex items-center justify-center"><KeyRound size={18} /></span>
            <span className="text-[11px] font-bold text-white">أمان</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <span className="w-10 h-10 rounded-xl bg-white/10 text-orange-300 border border-white/10 flex items-center justify-center"><Zap size={18} /></span>
            <span className="text-[11px] font-bold text-white">سرعة</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <span className="w-10 h-10 rounded-xl bg-white/10 text-sky-300 border border-white/10 flex items-center justify-center"><ThumbsUp size={18} /></span>
            <span className="text-[11px] font-bold text-white">ثقة</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <span className="w-10 h-10 rounded-xl bg-white/10 text-rose-300 border border-white/10 flex items-center justify-center"><Trophy size={18} /></span>
            <span className="text-[11px] font-bold text-white">جودة</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCardF;