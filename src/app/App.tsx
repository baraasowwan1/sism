import { useState, useEffect, useCallback, useRef } from "react";

import img1 from "../imports/Screenshot_2026-06-20_120557.png";
import img2 from "../imports/Screenshot_2026-06-20_120613.png";
import img3 from "../imports/Screenshot_2026-06-20_120632.png";
import img4 from "../imports/Screenshot_2026-06-20_120648.png";
import img5 from "../imports/Screenshot_2026-06-20_120712.png";
import img6 from "../imports/Screenshot_2026-06-20_120817.png";
import img7 from "../imports/Screenshot_2026-06-20_120835.png";
import img8 from "../imports/Screenshot_2026-06-20_120847.png";
import img9 from "../imports/Screenshot_2026-06-20_120857.png";
import img10 from "../imports/Screenshot_2026-06-20_120917.png";

/* موبايل المبيعات */
import mobAccount  from "../imports/Screenshot_2026-06-21_132752.png";
import mobContact  from "../imports/Screenshot_2026-06-21_132809.png";
import mobLead     from "../imports/Screenshot_2026-06-21_132825.png";
import mobQuote    from "../imports/Screenshot_2026-06-21_133030.png";
import mobInvoice  from "../imports/Screenshot_2026-06-21_133047.png";
import mobOrder    from "../imports/Screenshot_2026-06-21_133105.png";
import mobCases    from "../imports/Screenshot_2026-06-21_133122.png";
import mobFlow     from "../imports/Screenshot_2026-06-21_133140.png";
import mobDoc      from "../imports/Screenshot_2026-06-21_133205.png";
import mobCalls    from "../imports/Screenshot_2026-06-21_133222.png";
import mobMeeting  from "../imports/Screenshot_2026-06-21_133241.png";
import mobReport   from "../imports/Screenshot_2026-06-21_133301.png";
import mobSettings from "../imports/Screenshot_2026-06-21_133318.png";

import hrmLogin    from "../imports/WhatsApp_Image_2026-06-20_at_12.37.36_PM.jpeg";
import hrmDash     from "../imports/WhatsApp_Image_2026-06-20_at_12.37.37_PM__3_.jpeg";
import hrmAttend   from "../imports/WhatsApp_Image_2026-06-20_at_12.37.37_PM__1_.jpeg";
import hrmLeaves   from "../imports/WhatsApp_Image_2026-06-20_at_12.37.37_PM__2_.jpeg";
import hrmCalendar from "../imports/WhatsApp_Image_2026-06-20_at_12.37.37_PM.jpeg";
import hrmProfile  from "../imports/WhatsApp_Image_2026-06-20_at_12.37.37_PM__4_.jpeg";

import logoImg from "../imports/logo_dark_1739275736.png";

const BRAND      = "#a7ce00";
const BRAND_DARK = "#8aaa00";
const SLIDE_DURATION = 5500;

type SlideKind =
  | { kind: "intro" }
  | { kind: "module-intro"; module: string; moduleAr: string; desc: string }
  | { kind: "screen";  image: string; module: string; title: string; subtitle: string; desc: string; tag: string }
  | { kind: "mobile";  image: string; module: string; title: string; subtitle: string; desc: string; tag: string }
  | { kind: "pair";    desktopImage: string; mobileImage: string; module: string; title: string; subtitle: string; desc: string; tag: string }
  | { kind: "outro" };

const slides: SlideKind[] = [
  /* ── intro ─────────────────────────────────── */
  { kind: "intro" },

  /* ── Sales module ───────────────────────────── */
  {
    kind: "module-intro", module: "Sales", moduleAr: "وحدة المبيعات",
    desc: "نظام متكامل لإدارة دورة المبيعات بالكامل — من إنشاء العروض وإدارة الطلبات وحتى المتابعة والتقارير التحليلية الشاملة",
  },

  /* ── 10 أزواج: صورة قديمة (ديسكتوب) + صورة جديدة (موبايل) ── */
  { kind: "pair", desktopImage: img1,  mobileImage: mobOrder,   module: "المبيعات", tag: "أوامر المبيعات",
    title: "إدارة أوامر المبيعات",    subtitle: "تتبع الطلبات من الإنشاء حتى التسليم",
    desc: "أنشئ وتابع أوامر المبيعات من الديسكتوب أو الموبايل مع عرض الحالة الآنية لكل أمر وتحديد المستخدم المسؤول ومراجعة المبالغ في مكان واحد" },

  { kind: "pair", desktopImage: img2,  mobileImage: mobCases,   module: "المبيعات", tag: "إدارة الحالات",
    title: "إدارة حالات العملاء",     subtitle: "تنظيم وتصنيف طلبات العملاء بدقة",
    desc: "تتبع حالات العملاء من أي جهاز مع تصنيفها حسب الأولوية والمستخدم المعين، مما يضمن استجابة سريعة وخدمة عملاء احترافية على أعلى مستوى" },

  { kind: "pair", desktopImage: img3,  mobileImage: mobFlow,    module: "المبيعات", tag: "تدفق العمل",
    title: "إدارة تدفق العمل",        subtitle: "تنسيق فوري بين أعضاء الفريق",
    desc: "تابع تدفق العمليات واطلع على آخر التحديثات في الوقت الفعلي من الديسكتوب أو الموبايل، ولا تفوّت أي معلومة مهمة في أي مكان كنت" },

  { kind: "pair", desktopImage: img4,  mobileImage: mobDoc,     module: "المبيعات", tag: "وثائق المبيعات",
    title: "إدارة وثائق المبيعات",    subtitle: "أرشفة مركزية لجميع مستندات البيع",
    desc: "احتفظ بجميع وثائق المبيعات في مكان واحد وتصفحها من أي جهاز، مع إمكانية البحث الفوري والوصول السريع وتتبع حالة كل وثيقة" },

  { kind: "pair", desktopImage: img5,  mobileImage: mobCalls,   module: "المبيعات", tag: "المكالمات",
    title: "إدارة مكالمات العملاء",   subtitle: "سجل تفصيلي لكل تواصل مع العملاء",
    desc: "سجّل جميع مكالمات العملاء وتفاصيلها من الديسكتوب أو الموبايل، ليتمكن الفريق من الرجوع إليها في أي وقت وضمان استمرارية الخدمة" },

  { kind: "pair", desktopImage: img6,  mobileImage: mobMeeting, module: "المبيعات", tag: "الاجتماعات",
    title: "إدارة الاجتماعات",        subtitle: "جدولة وتوثيق كل لقاء مع العملاء",
    desc: "نظم اجتماعاتك مع العملاء والفريق من الديسكتوب أو الموبايل، مع تتبع الحضور وتوثيق النتائج والإجراءات المتفق عليها لضمان متابعة فعّالة" },

  { kind: "pair", desktopImage: img7,  mobileImage: mobReport,  module: "المبيعات", tag: "التقارير",
    title: "تقرير الملخص الإضافي",    subtitle: "رؤية شاملة لمؤشرات الأداء التشغيلي",
    desc: "احصل على تقارير تحليلية تفصيلية من أي جهاز تعكس الأداء الفعلي للمبيعات مع رسوم بيانية تفاعلية وتصفية حسب الفترة الزمنية والحالة" },

  { kind: "pair", desktopImage: img8,  mobileImage: mobReport,  module: "المبيعات", tag: "التقارير",
    title: "تقرير ملخص الفواتير",     subtitle: "تحليل مالي دقيق لحركة الفواتير",
    desc: "استعرض ملخصاً مالياً شاملاً لجميع الفواتير مع مخططات بيانية توضح الاتجاهات والأنماط عبر الزمن لدعم قراراتك المالية في أي مكان" },

  { kind: "pair", desktopImage: img9,  mobileImage: mobReport,  module: "المبيعات", tag: "التقارير",
    title: "تقرير أوامر المبيعات",    subtitle: "تحليل تفصيلي لأداء المبيعات",
    desc: "راقب أداء أوامر المبيعات بمؤشرات رئيسية من الديسكتوب والموبايل، مع إمكانية مقارنة الأهداف بالإنجازات الفعلية وتصفية النتائج بمرونة تامة" },

  { kind: "pair", desktopImage: img10, mobileImage: mobSettings, module: "المبيعات", tag: "إعداد النظام",
    title: "إدارة أنواع الحسابات",    subtitle: "هيكل هرمي مرن لتصنيف الحسابات",
    desc: "خصّص أنواع حساباتك وفق احتياجات عملك بهيكل هرمي متعدد المستويات، وأدر إعدادات النظام بسهولة من الديسكتوب أو تطبيق الموبايل" },

  /* ── HRM module ─────────────────────────────── */
  {
    kind: "module-intro", module: "HRM", moduleAr: "تطبيق الموارد البشرية",
    desc: "تطبيق موبايل متكامل يمنح الموظف تحكماً كاملاً بحضوره وإجازاته وجدوله الزمني من أي مكان وفي أي وقت",
  },
  { kind: "mobile", image: hrmLogin,    module: "الموارد البشرية", tag: "تسجيل الدخول",   title: "تسجيل الدخول",              subtitle: "وصول آمن لكل موظف بحسابه الخاص",             desc: "واجهة دخول بسيطة وآمنة تتيح لكل موظف الوصول إلى نظام الموارد البشرية عبر البريد الإلكتروني وكلمة المرور مع خيار تذكّر الجلسة" },
  { kind: "mobile", image: hrmDash,     module: "الموارد البشرية", tag: "لوحة التحكم",    title: "لوحة التحكم الرئيسية",      subtitle: "تسجيل الحضور بلمسة واحدة",                   desc: "يرى الموظف الوقت الحالي والتاريخ بشكل واضح، ويسجّل حضوره وانصرافه بضغطة زر واحدة مع عرض فوري لإجمالي ساعات العمل اليومية" },
  { kind: "mobile", image: hrmAttend,   module: "الموارد البشرية", tag: "سجل الحضور",     title: "سجل الحضور والانصراف",      subtitle: "تاريخ كامل لأوقات الدخول والخروج",           desc: "يطّلع الموظف على كامل سجل حضوره الشهري بتفاصيل دقيقة لكل يوم تشمل وقت الدخول والخروج وعدد ساعات العمل الفعلية" },
  { kind: "mobile", image: hrmLeaves,   module: "الموارد البشرية", tag: "الإجازات",        title: "إدارة طلبات الإجازة",        subtitle: "قدّم طلب إجازة في ثوانٍ",                    desc: "يستطيع الموظف متابعة طلبات إجازاته وتقديم طلبات جديدة بسهولة تامة، مع إمكانية الاطلاع على رصيد الإجازة المتبقي في أي وقت" },
  { kind: "mobile", image: hrmCalendar, module: "الموارد البشرية", tag: "التقويم",          title: "تقويم الفعاليات والأحداث",  subtitle: "نظرة شاملة على جدول الشهر كاملاً",          desc: "يعرض التقويم الشهري التفاعلي جميع الفعاليات والإجازات الرسمية وأيام العمل والعطل دفعةً واحدة، مما يسهّل التخطيط المسبق" },
  { kind: "mobile", image: hrmProfile,  module: "الموارد البشرية", tag: "الملف الشخصي",   title: "الملف الشخصي والإعدادات",   subtitle: "تحكم كامل بالحساب والتفضيلات",               desc: "يدير الموظف بياناته الشخصية وكلمة مروره ولغة واجهة التطبيق ومساحة العمل من مكان واحد مع دعم كامل للواجهة العربية" },

  /* ── outro ──────────────────────────────────── */
  { kind: "outro" },
];

/* ════════════════════════════════════════════════════════
   TOPBAR
════════════════════════════════════════════════════════ */
function Topbar({ current, total }: { current: number; total: number }) {
  const s = slides[current];
  const moduleLabel =
    s.kind === "screen" || s.kind === "mobile" ? s.module :
    s.kind === "module-intro" ? s.moduleAr : "";

  return (
    <div
      className="flex items-center justify-between px-4 md:px-8"
      style={{
        height: 60,
        background: "#fff",
        borderBottom: "1px solid rgba(0,0,0,0.07)",
        boxShadow: "0 1px 4px rgba(0,0,0,0.05)",
        flexShrink: 0,
      }}
    >
      {/* موبايل: أكبر — ديسكتوب: عادي */}
      <img src={logoImg} alt="SIMS Creation"
        className="block md:hidden" style={{ height: 46, width: "auto" }} />
      <img src={logoImg} alt="SIMS Creation"
        className="hidden md:block" style={{ height: 38, width: "auto" }} />

      {moduleLabel && (
        <div
          className="hidden sm:flex items-center gap-2 text-sm font-semibold"
          style={{ fontFamily: "Cairo, sans-serif", color: BRAND_DARK, direction: "rtl" }}
        >
          <span className="w-2 h-2 rounded-full" style={{ background: BRAND, flexShrink: 0 }} />
          {moduleLabel}
        </div>
      )}
    </div>
  );
}

/* ════════════════════════════════════════════════════════
   INTRO
════════════════════════════════════════════════════════ */
function IntroSlide({ visible }: { visible: boolean }) {
  return (
    <div
      className="absolute inset-0 flex flex-col items-center justify-center px-6"
      style={{
        background: "#f5f6f8",
        opacity: visible ? 1 : 0,
        transition: "opacity 0.7s ease",
      }}
    >
      {/* خلفية نقاط */}
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage:`radial-gradient(circle, rgba(167,206,0,0.2) 1px, transparent 1px)`,
        backgroundSize:"28px 28px", opacity:0.5,
      }} />

      {/* عناصر عائمة 3D */}
      <div className="absolute pointer-events-none" style={{ top:"10%", left:"5%",   width:56, height:56, borderRadius:"50%",  border:`2px solid ${BRAND}`, opacity:0.22, animation:"float3DA 7s ease-in-out infinite" }} />
      <div className="absolute pointer-events-none" style={{ top:"15%", right:"7%",  width:30, height:30, borderRadius:8,        background:BRAND,             opacity:0.13, animation:"float3DB 5.5s ease-in-out infinite 1s" }} />
      <div className="absolute pointer-events-none" style={{ bottom:"20%", left:"8%",  width:20, height:20, borderRadius:"50%",  background:BRAND,             opacity:0.2,  animation:"float3DC 6s ease-in-out infinite 0.6s" }} />
      <div className="absolute pointer-events-none" style={{ bottom:"18%", right:"5%", width:44, height:44, borderRadius:"50%",  border:`2px solid ${BRAND}`,  opacity:0.18, animation:"float3DD 8s ease-in-out infinite 0.3s" }} />
      <div className="absolute pointer-events-none" style={{ top:"45%", left:"2%",   width:12, height:12, borderRadius:"50%",    background:BRAND,             opacity:0.35, animation:"dot3D 3s ease-in-out infinite" }} />
      <div className="absolute pointer-events-none" style={{ top:"38%", right:"3%",  width:12, height:12, borderRadius:"50%",    background:BRAND,             opacity:0.35, animation:"dot3D 3s ease-in-out infinite 1.2s" }} />
      <div className="absolute pointer-events-none" style={{ top:"65%", left:"15%",  width:18, height:18, borderRadius:4,        background:BRAND,             opacity:0.12, animation:"float3DE 5s ease-in-out infinite 2s" }} />
      {/* حلقات 3D */}
      {[0.4, 1.6, 2.8].map((delay, k) => (
        <div key={k} className="absolute pointer-events-none" style={{
          top:"50%", left:"50%", transform:"translate(-50%,-50%)",
          width:200+k*50, height:200+k*50, borderRadius:"50%",
          border:`${k===0?2:1}px solid ${BRAND}`, opacity:0,
          animation:`ring3D ${3+k*0.4}s ease-out infinite ${delay}s`,
        }} />
      ))}

      <div
        className="relative z-10 flex flex-col items-center gap-5 text-center max-w-lg"
        style={{ fontFamily: "Cairo, sans-serif" }}
        dir="rtl"
      >
        <div style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(16px)",
          transition: "opacity 0.8s ease 0.1s, transform 0.8s ease 0.1s",
        }}>
          <img src={logoImg} alt="SIMS Creation" style={{ height: "clamp(60px, 14vw, 110px)", width: "auto" }} />
        </div>
        <div className="flex items-center gap-3 w-full" style={{ opacity: visible ? 1 : 0, transition: "opacity 0.6s ease 0.3s" }}>
          <div className="flex-1 h-px" style={{ background: "rgba(0,0,0,0.1)" }} />
          <div className="w-2 h-2 rounded-full" style={{ background: BRAND }} />
          <div className="flex-1 h-px" style={{ background: "rgba(0,0,0,0.1)" }} />
        </div>
        <div style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(10px)", transition: "opacity 0.7s ease 0.4s, transform 0.7s ease 0.4s" }}>
          <h1 className="font-black leading-tight mb-2" style={{ fontSize: "clamp(1.5rem, 4.5vw, 2.6rem)", color: "#1a1c1e" }}>
            نظام إدارة الأعمال المتكامل
          </h1>
          <p style={{ color: "#6b7280", fontSize: "clamp(0.85rem, 2vw, 1rem)" }}>
            حلول متطورة لإدارة المبيعات والموارد البشرية
          </p>
        </div>
        <div className="flex gap-3 flex-wrap justify-center" style={{ opacity: visible ? 1 : 0, transition: "opacity 0.6s ease 0.7s" }}>
          {[{ label: "وحدة المبيعات", icon: "📊" }, { label: "تطبيق الموارد البشرية", icon: "📱" }].map(({ label, icon }) => (
            <div key={label} className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold shadow-sm"
              style={{ background: "#fff", border: `2px solid ${BRAND}`, color: "#1a1c1e" }}>
              <span>{icon}</span><span>{label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ════════════════════════════════════════════════════════
   MODULE INTRO
════════════════════════════════════════════════════════ */
function ModuleIntroSlide({ slide, visible }: { slide: Extract<SlideKind, { kind: "module-intro" }>; visible: boolean }) {
  return (
    <div
      className="absolute inset-0 flex items-center justify-center px-6"
      style={{ background: "#fff", opacity: visible ? 1 : 0, transition: "opacity 0.7s ease" }}
    >
      {/* عناصر عائمة 3D */}
      <div className="absolute pointer-events-none" style={{ top:"8%",    left:"4%",   width:48, height:48, borderRadius:"50%", border:`2px solid ${BRAND}`, opacity:0.15, animation:"float3DA 8s ease-in-out infinite" }} />
      <div className="absolute pointer-events-none" style={{ bottom:"15%",left:"6%",   width:24, height:24, borderRadius:6,     background:BRAND,            opacity:0.1,  animation:"float3DC 6s ease-in-out infinite 0.7s" }} />
      <div className="absolute pointer-events-none" style={{ top:"20%",   right:"4%",  width:14, height:14, borderRadius:"50%", background:BRAND,            opacity:0.25, animation:"dot3D 3.5s ease-in-out infinite" }} />
      <div className="absolute pointer-events-none" style={{ bottom:"25%",right:"5%",  width:36, height:36, borderRadius:"50%", border:`1.5px solid ${BRAND}`,opacity:0.18, animation:"float3DD 7s ease-in-out infinite 1s" }} />
      <div className="absolute pointer-events-none" style={{ top:"50%",   right:"12%", width:22, height:22, borderRadius:4,     background:BRAND,            opacity:0.1,  animation:"float3DE 5.5s ease-in-out infinite 1.8s" }} />
      {/* خط متحرك SVG */}
      <svg className="absolute pointer-events-none" style={{ top:0, left:0, width:"100%", height:"100%", opacity:0.12 }} preserveAspectRatio="none">
        <line x1="0" y1="30%" x2="100%" y2="70%" stroke={BRAND} strokeWidth="1" strokeDasharray="200" style={{ animation:"drawLine 2.5s ease forwards" }} />
        <line x1="0" y1="70%" x2="60%" y2="20%" stroke={BRAND} strokeWidth="0.8" strokeDasharray="200" style={{ animation:"drawLine 3s ease forwards 0.5s" }} />
      </svg>

      {/* ghost text */}
      <div className="absolute inset-0 flex items-center justify-end pr-4 overflow-hidden pointer-events-none" dir="ltr">
        <span className="font-black select-none" style={{
          fontSize: "clamp(4rem, 20vw, 16rem)", color: BRAND, opacity: 0.05,
          letterSpacing: "-0.04em", lineHeight: 1, fontFamily: "Cairo, sans-serif",
        }}>{slide.module}</span>
      </div>
      <div dir="rtl" className="relative z-10 text-center max-w-2xl" style={{ fontFamily: "Cairo, sans-serif" }}>
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold mb-4 border"
          style={{ borderColor: BRAND, background: `${BRAND}18`, color: BRAND_DARK,
            opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(8px)",
            transition: "opacity 0.6s ease 0.15s, transform 0.6s ease 0.15s" }}>
          <span className="w-2 h-2 rounded-full" style={{ background: BRAND }} />
          {slide.module} Module
        </div>
        <h2 className="font-black leading-tight mb-3" style={{
          fontSize: "clamp(2rem, 7vw, 4rem)", color: "#1a1c1e",
          opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(12px)",
          transition: "opacity 0.7s ease 0.25s, transform 0.7s ease 0.25s",
        }}>{slide.moduleAr}</h2>
        <div className="mx-auto mb-4 h-1 w-14 rounded-full" style={{ background: BRAND, opacity: visible ? 1 : 0, transition: "opacity 0.5s ease 0.4s" }} />
        <p className="leading-relaxed" style={{
          color: "#6b7280", fontSize: "clamp(0.9rem, 2vw, 1.15rem)",
          opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(8px)",
          transition: "opacity 0.7s ease 0.45s, transform 0.7s ease 0.45s",
        }}>{slide.desc}</p>
      </div>
    </div>
  );
}

/* ── موكاب هاتف مشترك — مع 3D animation عشوائية ── */
const PHONE_ANIMS = ["phone3D", "phone3D_B", "phone3D_C"];
const PHONE_DURS  = ["7s", "8.5s", "6.5s", "9s", "7.5s"];

function Phone({ src, alt, width, seed = 0 }: { src: string; alt: string; width: number; seed?: number }) {
  const h   = Math.round(width * (19.5 / 9));
  const r   = Math.round(width * 0.165);
  const anim = PHONE_ANIMS[seed % PHONE_ANIMS.length];
  const dur  = PHONE_DURS[seed  % PHONE_DURS.length];
  const delay = `${(seed * 0.7) % 2.5}s`;

  return (
    <div style={{
      animation: `${anim} ${dur} ease-in-out infinite ${delay}`,
      transformStyle: "preserve-3d",
      flexShrink: 0,
    }}>
      <div style={{
        position: "relative", width, height: h,
        borderRadius: r, background: "#1a1a1a", border: "3px solid #2e2e2e",
        boxShadow: "0 20px 60px rgba(0,0,0,0.28), 0 4px 12px rgba(0,0,0,0.15), 0 0 0 1px rgba(255,255,255,0.06)",
        overflow: "hidden",
      }}>
        <div style={{ position: "absolute", top: 7, left: "50%", transform: "translateX(-50%)", width: "36%", height: 13, background: "#1a1a1a", borderRadius: 7, zIndex: 3 }} />
        <img src={src} alt={alt} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "right top" }} />
        <div style={{ position: "absolute", bottom: 7, left: "50%", transform: "translateX(-50%)", width: "34%", height: 3, background: "rgba(0,0,0,0.28)", borderRadius: 2, zIndex: 4 }} />
      </div>
    </div>
  );
}

/* ── موكاب لابتوب مشترك — مع 3D float ── */
function LaptopMockup({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="flex flex-col items-center w-full select-none"
      style={{ animation:"laptop3D 9s ease-in-out infinite", transformStyle:"preserve-3d" }}>
      {/* الشاشة */}
      <div
        className="w-full relative overflow-hidden"
        style={{
          aspectRatio: "16 / 10",
          borderRadius: 10,
          background: "#1c1c1e",
          border: "7px solid #2c2c2e",
          boxShadow: "0 24px 64px rgba(0,0,0,0.28), 0 4px 12px rgba(0,0,0,0.18), inset 0 0 0 1px rgba(255,255,255,0.06)",
        }}
      >
        {/* كاميرا */}
        <div style={{
          position: "absolute", top: 5, left: "50%", transform: "translateX(-50%)",
          width: 6, height: 6, borderRadius: "50%", background: "#3a3a3a", zIndex: 2,
        }} />
        <img src={src} alt={alt} style={{
          width: "100%", height: "100%",
          objectFit: "contain", objectPosition: "top right",
          background: "#fff", display: "block",
        }} />
      </div>
      {/* قاعدة */}
      <div style={{ width: "28%", height: 10, background: "linear-gradient(to bottom, #3a3a3a, #2a2a2a)", borderRadius: "0 0 4px 4px" }} />
      <div style={{ width: "55%", height: 5, background: "#1e1e1e", borderRadius: "0 0 6px 6px" }} />
    </div>
  );
}

/* ── كتلة النص المشتركة ── */
function SlideTextBlock({ slide, visible, delay = 0.15 }: {
  slide: { module: string; tag: string; title: string; subtitle: string; desc: string };
  visible: boolean; delay?: number;
}) {
  return (
    <div dir="rtl" className="flex flex-col gap-2 md:gap-3 w-full"
      style={{
        fontFamily: "Cairo, sans-serif",
        opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(8px)",
        transition: `opacity 0.65s ease ${delay}s, transform 0.65s ease ${delay}s`,
      }}>
      <div className="flex items-center gap-2 flex-wrap">
        <span className="text-xs font-bold px-3 py-1 rounded-full"
          style={{ background: BRAND, color: "#1a1c1e" }}>{slide.module}</span>
        <span className="text-xs" style={{ color: "#bbb" }}>›</span>
        <span className="text-xs px-3 py-1 rounded-full font-medium"
          style={{ background: `${BRAND}15`, border: `1px solid ${BRAND}50`, color: BRAND_DARK }}>{slide.tag}</span>
      </div>
      <h2 className="font-black leading-snug"
        style={{ fontSize: "clamp(1.1rem, 2.2vw, 1.8rem)", color: "#1a1c1e" }}>{slide.title}</h2>
      <div className="h-1 w-8 rounded-full" style={{ background: BRAND }} />
      <p className="font-semibold text-sm" style={{ color: BRAND_DARK }}>{slide.subtitle}</p>
      <p className="leading-relaxed text-sm" style={{ color: "#6b7280" }}>{slide.desc}</p>
    </div>
  );
}

/* ════════════════════════════════════════════════════════
   SCREEN SLIDE — لابتوب موكاب (نفس نمط HRM)
   موبايل: نص فوق + لابتوب يملأ الباقي
   ديسكتوب: لابتوب يسار + نص sidebar يمين
════════════════════════════════════════════════════════ */
function ScreenSlide({ slide, visible }: { slide: Extract<SlideKind, { kind: "screen" }>; visible: boolean }) {
  return (
    <div className="absolute inset-0 overflow-hidden flex flex-col md:flex-row"
      style={{ background: "#f0f1f3", opacity: visible ? 1 : 0, transition: "opacity 0.65s ease" }}>

      {/* ══ MOBILE: نص فوق + لابتوب يملأ الباقي ══ */}
      <div className="md:hidden flex-shrink-0 px-5 pt-5 pb-3"
        style={{ background: "#fff", borderBottom: "1px solid rgba(0,0,0,0.06)" }}>
        <SlideTextBlock slide={slide} visible={visible} delay={0.1} />
      </div>
      <div className="md:hidden flex-1 min-h-0 flex items-center justify-center px-6 py-4"
        style={{
          opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(10px)",
          transition: "opacity 0.7s ease 0.3s, transform 0.7s ease 0.3s",
        }}>
        <div style={{ width: "100%", maxWidth: 420 }}>
          <LaptopMockup src={slide.image} alt={slide.title} />
        </div>
      </div>

      {/* ══ DESKTOP: لابتوب يسار + نص يمين ══ */}
      <div className="hidden md:flex flex-1 items-center justify-center p-8 min-w-0"
        style={{
          opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(8px)",
          transition: "opacity 0.7s ease 0.1s, transform 0.7s ease 0.1s",
        }}>
        <div style={{ width: "88%", maxWidth: 780 }}>
          <LaptopMockup src={slide.image} alt={slide.title} />
        </div>
      </div>
      <div className="hidden md:flex flex-shrink-0 w-72 items-center px-7 py-6"
        style={{
          background: "#fff", borderLeft: "1px solid rgba(0,0,0,0.06)",
          opacity: visible ? 1 : 0, transform: visible ? "translateX(0)" : "translateX(10px)",
          transition: "opacity 0.65s ease 0.2s, transform 0.65s ease 0.2s",
        }}>
        <SlideTextBlock slide={slide} visible={visible} delay={0.2} />
      </div>
    </div>
  );
}

/* ════════════════════════════════════════════════════════
   PAIR SLIDE — لابتوب + هاتف معاً (ديسكتوب وموبايل)
   ديسكتوب: لابتوب يسار + هاتف بجانبه + نص يمين
   موبايل: نص فوق + هاتف يملأ الباقي
════════════════════════════════════════════════════════ */
function PairSlide({ slide, visible }: { slide: Extract<SlideKind, { kind: "pair" }>; visible: boolean }) {
  return (
    <div className="absolute inset-0 overflow-hidden flex flex-col md:flex-row"
      style={{ background: "#f0f1f3", opacity: visible ? 1 : 0, transition: "opacity 0.65s ease" }}>

      {/* ══ MOBILE: نص فوق + خلفية ديسكتوب + هاتف فوقها ══ */}
      <div className="md:hidden flex-shrink-0 px-5 pt-5 pb-3"
        style={{ background: "#fff", borderBottom: "1px solid rgba(0,0,0,0.06)" }}>
        <SlideTextBlock slide={slide} visible={visible} delay={0.1} />
      </div>

      {/* منطقة الصورة — ديسكتوب في الخلف، هاتف في المقدمة */}
      <div className="md:hidden flex-1 min-h-0 relative overflow-hidden"
        style={{
          opacity: visible ? 1 : 0,
          transition: "opacity 0.7s ease 0.25s",
        }}>
        {/* خلفية: صورة الديسكتوب ممتدة */}
        <img
          src={slide.desktopImage}
          alt=""
          style={{
            position: "absolute", inset: 0,
            width: "100%", height: "100%",
            objectFit: "cover", objectPosition: "right top",
            filter: "brightness(0.45) blur(1px)",
          }}
        />
        {/* overlay داكن خفيف */}
        <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.15)" }} />

        {/* الهاتف في المقدمة — حجم ثابت مبني على عرض الشاشة */}
        <div className="absolute inset-0 flex items-center justify-center"
          style={{
            transform: visible ? "translateY(0)" : "translateY(12px)",
            transition: "transform 0.7s ease 0.35s",
          }}>
          <div style={{
            /* عرض ثابت = 42% من عرض الشاشة، ارتفاع من النسبة */
            width: "clamp(130px, 42vw, 175px)",
            aspectRatio: "9 / 19.5",
            position: "relative", borderRadius: 28,
            background: "#1a1a1a", border: "3px solid #333",
            boxShadow: "0 20px 60px rgba(0,0,0,0.5), 0 4px 12px rgba(0,0,0,0.3)",
            overflow: "hidden", flexShrink: 0,
          }}>
            <div style={{ position: "absolute", top: 7, left: "50%", transform: "translateX(-50%)", width: "36%", height: 13, background: "#1a1a1a", borderRadius: 7, zIndex: 3 }} />
            <img
              src={slide.mobileImage}
              alt={slide.title}
              style={{
                position: "absolute", inset: 0,
                width: "100%", height: "100%",
                objectFit: "cover", objectPosition: "right top",
              }}
            />
            <div style={{ position: "absolute", bottom: 7, left: "50%", transform: "translateX(-50%)", width: "34%", height: 3, background: "rgba(0,0,0,0.3)", borderRadius: 2, zIndex: 4 }} />
          </div>
        </div>
      </div>

      {/* ══ DESKTOP: لابتوب + هاتف يسار + نص يمين ══ */}
      <div className="hidden md:flex flex-1 items-center justify-center gap-6 px-6 py-6 min-w-0"
        style={{
          opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(8px)",
          transition: "opacity 0.7s ease 0.1s, transform 0.7s ease 0.1s",
        }}>
        {/* لابتوب */}
        <div style={{ width: "62%", maxWidth: 580, flexShrink: 0 }}>
          <LaptopMockup src={slide.desktopImage} alt={slide.title} />
        </div>
        {/* هاتف بجانب اللابتوب */}
        <Phone src={slide.mobileImage} alt={slide.title} width={138} seed={1} />
      </div>

      {/* نص sidebar */}
      <div className="hidden md:flex flex-shrink-0 w-72 items-center px-7 py-6"
        style={{
          background: "#fff", borderLeft: "1px solid rgba(0,0,0,0.06)",
          opacity: visible ? 1 : 0, transform: visible ? "translateX(0)" : "translateX(10px)",
          transition: "opacity 0.65s ease 0.2s, transform 0.65s ease 0.2s",
        }}>
        <SlideTextBlock slide={slide} visible={visible} delay={0.2} />
      </div>
    </div>
  );
}

/* ════════════════════════════════════════════════════════
   MOBILE SCREEN SLIDE — portrait phone screenshots
════════════════════════════════════════════════════════ */
function MobileScreenSlide({ slide, visible }: { slide: Extract<SlideKind, { kind: "mobile" }>; visible: boolean }) {
  return (
    <div
      className="absolute inset-0 flex flex-col lg:flex-row items-stretch"
      style={{ background: "#f0f1f3", opacity: visible ? 1 : 0, transition: "opacity 0.65s ease" }}
    >
      {/* ══ MOBILE: نص فوق + هاتف يملأ الباقي ══ */}
      <div className="md:hidden flex-shrink-0 px-5 pt-5 pb-3"
        style={{ background: "#fff", borderBottom: "1px solid rgba(0,0,0,0.06)" }}>
        <SlideTextBlock slide={slide} visible={visible} delay={0.1} />
      </div>
      <div className="md:hidden flex-1 min-h-0 flex items-center justify-center py-3"
        style={{
          opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(10px)",
          transition: "opacity 0.7s ease 0.3s, transform 0.7s ease 0.3s",
          background: "#f0f1f3",
        }}>
        {/* عرض ثابت من الشاشة → ارتفاع من النسبة، لا يتأثر بطول النص */}
        <div style={{
          width: "clamp(150px, 50vw, 210px)",
          aspectRatio: "9 / 19.5",
          position: "relative", borderRadius: 28, background: "#1a1a1a", border: "3px solid #2e2e2e",
          boxShadow: "0 16px 48px rgba(0,0,0,0.2)", overflow: "hidden", flexShrink: 0,
        }}>
          <div style={{ position: "absolute", top: 7, left: "50%", transform: "translateX(-50%)", width: "36%", height: 13, background: "#1a1a1a", borderRadius: 7, zIndex: 3 }} />
          <img src={slide.image} alt={slide.title} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "top" }} />
          <div style={{ position: "absolute", bottom: 7, left: "50%", transform: "translateX(-50%)", width: "34%", height: 3, background: "rgba(0,0,0,0.28)", borderRadius: 2, zIndex: 4 }} />
        </div>
      </div>

      {/* ══ DESKTOP: هاتفان يسار + نص يمين ══ */}
      <div className="hidden md:flex flex-1 items-center justify-center gap-8 p-8 min-w-0"
        style={{
          opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(8px)",
          transition: "opacity 0.7s ease 0.1s, transform 0.7s ease 0.1s",
        }}>
        <Phone src={slide.image} alt={slide.title} width={230} seed={2} />
      </div>
      <div className="hidden md:flex flex-shrink-0 w-72 items-center px-7 py-6"
        style={{
          background: "#fff", borderLeft: "1px solid rgba(0,0,0,0.06)",
          opacity: visible ? 1 : 0, transform: visible ? "translateX(0)" : "translateX(10px)",
          transition: "opacity 0.65s ease 0.2s, transform 0.65s ease 0.2s",
        }}>
        <SlideTextBlock slide={slide} visible={visible} delay={0.2} />
      </div>
    </div>
  );
}

/* ════════════════════════════════════════════════════════
   OUTRO
════════════════════════════════════════════════════════ */
function OutroSlide({ visible }: { visible: boolean }) {
  return (
    <div
      className="absolute inset-0 flex flex-col items-center justify-center px-6"
      style={{ background: "#fff", opacity: visible ? 1 : 0, transition: "opacity 0.7s ease" }}
    >
      <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage:`radial-gradient(circle, rgba(167,206,0,0.18) 1px, transparent 1px)`, backgroundSize:"28px 28px", opacity:0.45 }} />

      {/* عناصر عائمة 3D */}
      <div className="absolute pointer-events-none" style={{ top:"12%",   left:"6%",   width:60, height:60, borderRadius:"50%", border:`2px solid ${BRAND}`, opacity:0.2,  animation:"float3DA 8.5s ease-in-out infinite" }} />
      <div className="absolute pointer-events-none" style={{ top:"10%",   right:"8%",  width:32, height:32, borderRadius:8,     background:BRAND,            opacity:0.12, animation:"float3DB 6s ease-in-out infinite 0.5s" }} />
      <div className="absolute pointer-events-none" style={{ bottom:"22%",left:"7%",   width:22, height:22, borderRadius:"50%", background:BRAND,            opacity:0.2,  animation:"float3DC 7s ease-in-out infinite 1s" }} />
      <div className="absolute pointer-events-none" style={{ bottom:"18%",right:"6%",  width:48, height:48, borderRadius:"50%", border:`2px solid ${BRAND}`, opacity:0.18, animation:"float3DD 9s ease-in-out infinite" }} />
      <div className="absolute pointer-events-none" style={{ top:"55%",   left:"14%",  width:16, height:16, borderRadius:4,     background:BRAND,            opacity:0.15, animation:"float3DE 5s ease-in-out infinite 2.2s" }} />
      {/* نجوم دوران 3D */}
      <div className="absolute pointer-events-none" style={{ top:"25%",left:"12%", width:22, height:22, opacity:0.2, animation:"spin3D 10s linear infinite" }}>
        <svg viewBox="0 0 20 20" fill={BRAND}><polygon points="10,1 12.5,7 19,7 14,11.5 16,18 10,14 4,18 6,11.5 1,7 7.5,7"/></svg>
      </div>
      <div className="absolute pointer-events-none" style={{ bottom:"28%",right:"11%", width:16, height:16, opacity:0.18, animation:"spin3D 7s linear infinite reverse 1s" }}>
        <svg viewBox="0 0 20 20" fill={BRAND}><polygon points="10,1 12.5,7 19,7 14,11.5 16,18 10,14 4,18 6,11.5 1,7 7.5,7"/></svg>
      </div>
      {/* حلقات 3D */}
      {[0.3, 1.4, 2.6].map((delay, k) => (
        <div key={k} className="absolute pointer-events-none" style={{
          top:"42%", left:"50%", transform:"translate(-50%,-50%)",
          width:160+k*45, height:160+k*45, borderRadius:"50%",
          border:`1px solid ${BRAND}`, opacity:0,
          animation:`ring3D ${3.5+k*0.5}s ease-out infinite ${delay}s`,
        }} />
      ))}

      <div dir="rtl" className="relative z-10 flex flex-col items-center gap-5 text-center max-w-lg"
        style={{ fontFamily: "Cairo, sans-serif" }}>
        <div style={{ opacity: visible ? 1 : 0, transform: visible ? "scale(1)" : "scale(0.9)", transition: "opacity 0.8s ease 0.1s, transform 0.8s ease 0.1s" }}>
          <img src={logoImg} alt="SIMS Creation" style={{ height: "clamp(52px, 12vw, 100px)", width: "auto" }} />
        </div>
        <div className="w-12 h-1 rounded-full" style={{ background: BRAND, opacity: visible ? 1 : 0, transition: "opacity 0.6s ease 0.35s" }} />
        <h2 className="font-black leading-tight" style={{ fontSize: "clamp(1.3rem, 3.5vw, 2.2rem)", color: "#1a1c1e", opacity: visible ? 1 : 0, transition: "opacity 0.7s ease 0.45s" }}>
          ابدأ رحلتك نحو الكفاءة التشغيلية
        </h2>
        <p style={{ color: "#6b7280", fontSize: "clamp(0.85rem, 2vw, 1rem)", opacity: visible ? 1 : 0, transition: "opacity 0.6s ease 0.6s" }}>
          نظام متكامل يربط مبيعاتك بمواردك البشرية في منصة واحدة ذكية وسهلة الاستخدام
        </p>
        <div style={{ opacity: visible ? 1 : 0, transition: "opacity 0.6s ease 0.75s" }}>
          <div className="px-8 py-3 rounded-xl font-bold text-sm shadow-md" style={{ background: BRAND, color: "#1a1c1e", fontFamily: "Cairo, sans-serif" }}>
            تواصل معنا الآن
          </div>
        </div>
      </div>
    </div>
  );
}

/* ════════════════════════════════════════════════════════
   VIDEO EXPORT — رسم مباشر على Canvas 2D (بدون html2canvas)
   يضمن جودة مثالية على أي جهاز موبايل أو ديسكتوب
════════════════════════════════════════════════════════ */
const EW = 1280, EH = 720;
const TB = 52, BB = 64, CH = EH - TB - BB; // 604
const TEXT_W = 288;
const IMG_W  = EW - TEXT_W;               // 992
const EXPORT_FPS    = 30;
const FRAME_MS      = 1000 / EXPORT_FPS;
const EXPORT_SLIDE_MS = 4500;

type C2D = CanvasRenderingContext2D;

function sleep(ms: number) { return new Promise(r => setTimeout(r, ms)); }

function loadImg(src: string): Promise<HTMLImageElement> {
  return new Promise((res, rej) => {
    const i = new Image(); i.crossOrigin = "anonymous";
    i.onload = () => res(i); i.onerror = rej; i.src = src;
  });
}

function hex2rgba(hex: string, a: number) {
  const r = parseInt(hex.slice(1,3),16), g = parseInt(hex.slice(3,5),16), b = parseInt(hex.slice(5,7),16);
  return `rgba(${r},${g},${b},${a})`;
}

function rr(ctx: C2D, x: number, y: number, w: number, h: number, r: number) {
  ctx.beginPath();
  if ((ctx as any).roundRect) { (ctx as any).roundRect(x,y,w,h,r); }
  else {
    ctx.moveTo(x+r,y); ctx.lineTo(x+w-r,y); ctx.quadraticCurveTo(x+w,y,x+w,y+r);
    ctx.lineTo(x+w,y+h-r); ctx.quadraticCurveTo(x+w,y+h,x+w-r,y+h);
    ctx.lineTo(x+r,y+h); ctx.quadraticCurveTo(x,y+h,x,y+h-r);
    ctx.lineTo(x,y+r); ctx.quadraticCurveTo(x,y,x+r,y);
  }
  ctx.closePath();
}

function wrapText(ctx: C2D, text: string, x: number, y: number, maxW: number, lh: number): number {
  const words = text.split(" "); let line = "", cy = y;
  for (const w of words) {
    const test = line + w + " ";
    if (ctx.measureText(test).width > maxW && line) { ctx.fillText(line.trim(), x, cy); line = w+" "; cy += lh; }
    else line = test;
  }
  if (line.trim()) { ctx.fillText(line.trim(), x, cy); cy += lh; }
  return cy;
}

function drawTopbar(ctx: C2D, logo: HTMLImageElement, n: number, total: number) {
  ctx.fillStyle = "#fff"; ctx.fillRect(0, 0, EW, TB);
  ctx.fillStyle = "rgba(0,0,0,0.07)"; ctx.fillRect(0, TB, EW, 1);
  const lh = 28, lw = logo.width*(lh/logo.height);
  ctx.drawImage(logo, 20, (TB-lh)/2, lw, lh);
  const txt = `${n} / ${total}`;
  ctx.font = "bold 13px Cairo, Arial, sans-serif";
  ctx.direction = "ltr"; ctx.textAlign = "center";
  const tw = ctx.measureText(txt).width, pw = tw+28, ph = 26;
  const px = EW-20-pw, py = (TB-ph)/2;
  ctx.fillStyle = BRAND; rr(ctx, px, py, pw, ph, 13); ctx.fill();
  ctx.fillStyle = "#fff"; ctx.fillText(txt, px+pw/2, py+17);
}

function drawBottomBar(ctx: C2D) {
  ctx.fillStyle = "#fff"; ctx.fillRect(0, EH-BB, EW, BB);
  ctx.fillStyle = "rgba(0,0,0,0.07)"; ctx.fillRect(0, EH-BB, EW, 1);
  ctx.fillStyle = "#eef0f2"; rr(ctx, 20, EH-BB+10, EW-40, 4, 2); ctx.fill();
}

function drawTextPanel(ctx: C2D, s: {module:string;tag:string;title:string;subtitle:string;desc:string}, panelX: number) {
  ctx.fillStyle = "#fff"; ctx.fillRect(panelX, TB, TEXT_W, CH);
  ctx.fillStyle = "rgba(0,0,0,0.06)"; ctx.fillRect(panelX+TEXT_W-1, TB, 1, CH);
  ctx.fillStyle = BRAND; ctx.fillRect(0, 0, 4, EH);
  ctx.save(); ctx.direction = "rtl";
  const rx = panelX+TEXT_W-24, tw = TEXT_W-48;
  let ty = TB+44;
  // module pill
  ctx.font = "bold 11px Cairo, Arial, sans-serif";
  const mW = ctx.measureText(s.module).width+20;
  ctx.fillStyle = BRAND; rr(ctx, rx-mW, ty-14, mW, 22, 11); ctx.fill();
  ctx.fillStyle = "#1a1c1e"; ctx.textAlign = "center"; ctx.fillText(s.module, rx-mW/2, ty);
  ctx.fillStyle = "#bbb"; ctx.font = "12px Arial"; ctx.fillText("›", rx-mW-12, ty);
  // tag pill
  ctx.font = "bold 11px Cairo, Arial, sans-serif";
  const tgW = ctx.measureText(s.tag).width+20;
  ctx.fillStyle = hex2rgba(BRAND, 0.12); rr(ctx, rx-mW-24-tgW, ty-14, tgW, 22, 11); ctx.fill();
  ctx.strokeStyle = hex2rgba(BRAND, 0.5); ctx.lineWidth=1; rr(ctx, rx-mW-24-tgW, ty-14, tgW, 22, 11); ctx.stroke();
  ctx.fillStyle = BRAND_DARK; ctx.textAlign="center"; ctx.fillText(s.tag, rx-mW-24-tgW/2, ty);
  ty += 38;
  // title
  ctx.fillStyle = "#1a1c1e"; ctx.font = "900 26px Cairo, Arial, sans-serif"; ctx.textAlign = "right";
  ty = wrapText(ctx, s.title, rx, ty, tw, 34)+4;
  ctx.fillStyle = BRAND; ctx.fillRect(rx-36, ty, 36, 3); ty += 18;
  // subtitle
  ctx.fillStyle = BRAND_DARK; ctx.font = "600 14px Cairo, Arial, sans-serif"; ctx.textAlign = "right";
  ty = wrapText(ctx, s.subtitle, rx, ty, tw, 22)+6;
  // desc
  ctx.fillStyle = "#6b7280"; ctx.font = "400 13px Cairo, Arial, sans-serif"; ctx.textAlign = "right";
  wrapText(ctx, s.desc, rx, ty, tw, 21);
  ctx.restore();
}

function drawBrowserFrame(ctx: C2D, img: HTMLImageElement, x: number, y: number, w: number, h: number, tag: string) {
  const chrH = 34, r = 10;
  ctx.shadowColor="rgba(0,0,0,0.1)"; ctx.shadowBlur=16; ctx.shadowOffsetY=4;
  ctx.fillStyle = "#fff"; rr(ctx,x,y,w,h,r); ctx.fill();
  ctx.shadowColor="transparent"; ctx.shadowBlur=0; ctx.shadowOffsetY=0;
  ctx.fillStyle = "#f0f1f3"; ctx.save(); rr(ctx,x,y,w,chrH,[r,r,0,0] as any); ctx.fill(); ctx.restore();
  ctx.fillStyle = "rgba(0,0,0,0.07)"; ctx.fillRect(x,y+chrH,w,1);
  [["#ff5f57",14],["#febc2e",32],[BRAND,50]].forEach(([c,ox])=>{
    ctx.fillStyle = c as string; ctx.beginPath(); ctx.arc(x+(ox as number),y+chrH/2,5,0,Math.PI*2); ctx.fill();
  });
  ctx.fillStyle = "#e4e5e7"; rr(ctx, x+68, y+7, w-88, 20, 4); ctx.fill();
  ctx.fillStyle = "#888"; ctx.font = "11px monospace"; ctx.direction="ltr"; ctx.textAlign="left";
  ctx.fillText(`sims.creation.com › ${tag}`, x+76, y+21);
  ctx.save(); rr(ctx,x,y+chrH+1,w,h-chrH-1,[0,0,r,r] as any); ctx.clip();
  const ia = img.naturalWidth/img.naturalHeight, aa = w/(h-chrH);
  let dx=0,dw=w,dh=h-chrH;
  if(ia>aa){dw=(h-chrH)*ia; dx=-(dw-w)/2;} else {dh=w/ia;}
  ctx.drawImage(img,x+dx,y+chrH+1,dw,dh);
  ctx.restore();
  ctx.strokeStyle="rgba(0,0,0,0.08)"; ctx.lineWidth=1; rr(ctx,x,y,w,h,r); ctx.stroke();
}

function drawPhone(ctx: C2D, img: HTMLImageElement, cx: number, cy: number, pw: number) {
  const ph=Math.round(pw*(19.5/9)), x=cx-pw/2, y=cy-ph/2, r=Math.round(pw*0.16);
  ctx.shadowColor="rgba(0,0,0,0.2)"; ctx.shadowBlur=24; ctx.shadowOffsetY=8;
  ctx.fillStyle="#1a1a1a"; rr(ctx,x,y,pw,ph,r); ctx.fill();
  ctx.shadowColor="transparent"; ctx.shadowBlur=0; ctx.shadowOffsetY=0;
  ctx.save(); rr(ctx,x+3,y+3,pw-6,ph-6,r-2); ctx.clip();
  const ia=img.naturalWidth/img.naturalHeight, sa=(pw-6)/(ph-6);
  let dx=0,dy=0,dw=pw-6,dh=ph-6;
  if(ia>sa){dw=(ph-6)*ia; dx=-(dw-(pw-6))/2;} else {dh=(pw-6)/ia;}
  ctx.drawImage(img,x+3+dx,y+3+dy,dw,dh);
  ctx.restore();
  ctx.fillStyle="#1a1a1a"; rr(ctx,cx-pw*0.19,y+8,pw*0.38,13,6); ctx.fill();
  ctx.fillStyle="rgba(0,0,0,0.3)"; rr(ctx,cx-pw*0.17,y+ph-12,pw*0.34,4,2); ctx.fill();
  ctx.strokeStyle="#333"; ctx.lineWidth=3; rr(ctx,x,y,pw,ph,r); ctx.stroke();
}

function drawDots(ctx: C2D) {
  for(let x=14;x<EW;x+=28) for(let y=14;y<EH;y+=28) {
    ctx.fillStyle=hex2rgba(BRAND,0.15); ctx.beginPath(); ctx.arc(x,y,1,0,Math.PI*2); ctx.fill();
  }
}

function drawIntroCanvas(ctx: C2D, logo: HTMLImageElement, n: number, total: number) {
  ctx.fillStyle="#f5f6f8"; ctx.fillRect(0,0,EW,EH);
  drawDots(ctx);
  ctx.fillStyle=BRAND; ctx.fillRect(0,0,EW,6); ctx.fillRect(0,EH-6,EW,6);
  drawTopbar(ctx,logo,n,total); drawBottomBar(ctx);
  const lh=100, lw=logo.width*(lh/logo.height);
  ctx.drawImage(logo, EW/2-lw/2, TB+60, lw, lh);
  const cy=TB+60+lh+40;
  ctx.fillStyle="rgba(0,0,0,0.1)"; ctx.fillRect(EW/2-130,cy,110,1); ctx.fillRect(EW/2+20,cy,110,1);
  ctx.fillStyle=BRAND; ctx.beginPath(); ctx.arc(EW/2,cy,4,0,Math.PI*2); ctx.fill();
  ctx.fillStyle="#1a1c1e"; ctx.font="900 42px Cairo, Arial, sans-serif"; ctx.textAlign="center"; ctx.direction="rtl";
  ctx.fillText("نظام إدارة الأعمال المتكامل", EW/2, cy+56);
  ctx.fillStyle="#6b7280"; ctx.font="400 18px Cairo, Arial, sans-serif";
  ctx.fillText("حلول متطورة لإدارة المبيعات والموارد البشرية", EW/2, cy+90);
  let px=EW/2-210;
  ["وحدة المبيعات","تطبيق الموارد البشرية"].forEach(pill=>{
    ctx.font="bold 14px Cairo, Arial, sans-serif";
    const pw=ctx.measureText(pill).width+40;
    ctx.fillStyle="#fff"; rr(ctx,px,cy+116,pw,36,10); ctx.fill();
    ctx.strokeStyle=BRAND; ctx.lineWidth=2; rr(ctx,px,cy+116,pw,36,10); ctx.stroke();
    ctx.fillStyle="#1a1c1e"; ctx.textAlign="center"; ctx.fillText(pill,px+pw/2,cy+139);
    px+=pw+16;
  });
}

function drawModuleIntroCanvas(ctx: C2D, slide: Extract<SlideKind,{kind:"module-intro"}>, logo: HTMLImageElement, n: number, total: number) {
  ctx.fillStyle="#fff"; ctx.fillRect(0,0,EW,EH);
  ctx.fillStyle=BRAND; ctx.fillRect(0,0,4,EH);
  ctx.fillStyle=hex2rgba(BRAND,0.05); ctx.font="900 220px Cairo, Arial, sans-serif";
  ctx.textAlign="right"; ctx.direction="ltr"; ctx.fillText(slide.module, EW-20, EH/2+80);
  drawTopbar(ctx,logo,n,total); drawBottomBar(ctx);
  ctx.font="bold 13px Cairo, Arial, sans-serif"; ctx.direction="ltr";
  const bt=`${slide.module} Module`, bw=ctx.measureText(bt).width+32;
  const bY=TB+90;
  ctx.fillStyle=hex2rgba(BRAND,0.15); rr(ctx,EW/2-bw/2,bY,bw,28,14); ctx.fill();
  ctx.strokeStyle=BRAND; ctx.lineWidth=1; rr(ctx,EW/2-bw/2,bY,bw,28,14); ctx.stroke();
  ctx.fillStyle=BRAND_DARK; ctx.textAlign="center"; ctx.fillText(bt,EW/2,bY+18);
  ctx.fillStyle="#1a1c1e"; ctx.font="900 64px Cairo, Arial, sans-serif"; ctx.direction="rtl"; ctx.textAlign="center";
  ctx.fillText(slide.moduleAr, EW/2, bY+96);
  ctx.fillStyle=BRAND; ctx.fillRect(EW/2-28,bY+112,56,4);
  ctx.fillStyle="#6b7280"; ctx.font="400 18px Cairo, Arial, sans-serif"; ctx.direction="rtl"; ctx.textAlign="center";
  wrapText(ctx, slide.desc, EW/2, bY+148, 700, 28);
}

function drawScreenCanvas(ctx: C2D, slide: Extract<SlideKind,{kind:"screen"}>, img: HTMLImageElement, logo: HTMLImageElement, n: number, total: number) {
  ctx.fillStyle="#f5f6f8"; ctx.fillRect(0,0,EW,EH);
  drawTopbar(ctx,logo,n,total); drawBottomBar(ctx);
  drawTextPanel(ctx,slide,0);
  const pad=16;
  drawBrowserFrame(ctx,img, TEXT_W+pad, TB+pad, IMG_W-pad*2, CH-pad*2, slide.tag);
}

function drawMobileCanvas(ctx: C2D, slide: Extract<SlideKind,{kind:"mobile"}>, img: HTMLImageElement, logo: HTMLImageElement, n: number, total: number) {
  ctx.fillStyle="#f0f1f3"; ctx.fillRect(0,0,EW,EH);
  drawTopbar(ctx,logo,n,total); drawBottomBar(ctx);
  drawTextPanel(ctx,slide,IMG_W);
  const cy = TB+CH/2;
  drawPhone(ctx,img, IMG_W/2-115, cy, 190);
  drawPhone(ctx,img, IMG_W/2+120, cy, 230);
}

function drawOutroCanvas(ctx: C2D, logo: HTMLImageElement, n: number, total: number) {
  ctx.fillStyle="#fff"; ctx.fillRect(0,0,EW,EH);
  drawDots(ctx);
  ctx.fillStyle=BRAND; ctx.fillRect(0,0,EW,6); ctx.fillRect(0,EH-6,EW,6);
  drawTopbar(ctx,logo,n,total); drawBottomBar(ctx);
  const lh=90, lw=logo.width*(lh/logo.height);
  ctx.drawImage(logo,EW/2-lw/2,TB+80,lw,lh);
  ctx.fillStyle=BRAND; ctx.fillRect(EW/2-24,TB+80+lh+18,48,4);
  ctx.fillStyle="#1a1c1e"; ctx.font="900 40px Cairo, Arial, sans-serif"; ctx.textAlign="center"; ctx.direction="rtl";
  ctx.fillText("ابدأ رحلتك نحو الكفاءة التشغيلية", EW/2, TB+80+lh+72);
  ctx.fillStyle="#6b7280"; ctx.font="400 17px Cairo, Arial, sans-serif";
  ctx.fillText("نظام متكامل يربط مبيعاتك بمواردك البشرية في منصة واحدة", EW/2, TB+80+lh+108);
  ctx.font="bold 16px Cairo, Arial, sans-serif";
  const btnTxt="تواصل معنا الآن", bw=ctx.measureText(btnTxt).width+48;
  const bx=EW/2-bw/2, by=TB+80+lh+138;
  ctx.fillStyle=BRAND; rr(ctx,bx,by,bw,44,10); ctx.fill();
  ctx.fillStyle="#1a1c1e"; ctx.textAlign="center"; ctx.fillText(btnTxt,EW/2,by+27);
}

export default function App() {
  const [current, setCurrent]   = useState(0);
  const [leaving, setLeaving]   = useState<number | null>(null);
  const [dir, setDir]           = useState<"next" | "prev">("next");
  const [playing, setPlaying]   = useState(true);
  const [progress, setProgress] = useState(0);
  const timerRef    = useRef<ReturnType<typeof setInterval> | null>(null);
  const progressRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const leaveTimer  = useRef<ReturnType<typeof setTimeout> | null>(null);

  const clearTimers = () => {
    if (timerRef.current)    clearInterval(timerRef.current);
    if (progressRef.current) clearInterval(progressRef.current);
  };

  const changeTo = useCallback((idx: number, forceDir?: "next" | "prev") => {
    idx = Math.max(0, Math.min(slides.length - 1, idx));
    setCurrent(c => {
      const d = forceDir ?? (idx > c ? "next" : "prev");
      setDir(d);
      setLeaving(c);
      if (leaveTimer.current) clearTimeout(leaveTimer.current);
      leaveTimer.current = setTimeout(() => setLeaving(null), 600);
      return idx;
    });
    setProgress(0);
  }, []);

  const goTo = useCallback((idx: number) => changeTo(idx), [changeTo]);
  const next = useCallback(() => changeTo((current + 1) % slides.length, "next"), [changeTo, current]);
  const prev = useCallback(() => changeTo((current - 1 + slides.length) % slides.length, "prev"), [changeTo, current]);

  useEffect(() => {
    clearTimers();
    if (!playing) return;
    setProgress(0);
    const tick = 50;
    progressRef.current = setInterval(() => setProgress(p => Math.min(p + (tick / SLIDE_DURATION) * 100, 100)), tick);
    timerRef.current    = setInterval(() => { changeTo((current + 1) % slides.length, "next"); }, SLIDE_DURATION);
    return clearTimers;
  }, [playing, current]);

  /* flash overlay key */
  const [flashKey, setFlashKey] = useState(0);
  useEffect(() => { setFlashKey(k => k + 1); }, [current]);

  const s = slides[current];
  const slideTitle = s.kind === "screen" || s.kind === "mobile" || s.kind === "pair" ? s.title
    : s.kind === "module-intro" ? s.moduleAr
    : s.kind === "intro" ? "نظام SIMS Creation" : "ختام";

  return (
    <div className="flex flex-col overflow-hidden" style={{ width: "100vw", height: "100dvh", fontFamily: "Cairo, sans-serif", background: "#f5f6f8" }}>

      {/* ── Topbar ─── */}
      <Topbar current={current} total={slides.length} />

      {/* ══ 3D Keyframes & Animations ══ */}
      <style>{`
        /* ── انتقالات 3D بين الشرائح ── */
        @keyframes sEnterNext {
          from { opacity:0; transform: perspective(1100px) translateX(80px) rotateY(18deg) scale(0.94); }
          to   { opacity:1; transform: perspective(1100px) translateX(0)   rotateY(0deg)  scale(1);    }
        }
        @keyframes sEnterPrev {
          from { opacity:0; transform: perspective(1100px) translateX(-80px) rotateY(-18deg) scale(0.94); }
          to   { opacity:1; transform: perspective(1100px) translateX(0)     rotateY(0deg)   scale(1);    }
        }
        @keyframes sExitNext {
          from { opacity:1; transform: perspective(1100px) translateX(0)     rotateY(0deg)   scale(1);    }
          to   { opacity:0; transform: perspective(1100px) translateX(-80px) rotateY(-18deg) scale(0.94); }
        }
        @keyframes sExitPrev {
          from { opacity:1; transform: perspective(1100px) translateX(0)   rotateY(0deg)  scale(1);    }
          to   { opacity:0; transform: perspective(1100px) translateX(80px) rotateY(18deg) scale(0.94); }
        }

        /* ── فلاش الانتقال ── */
        @keyframes flashBar {
          0%   { transform:scaleX(0); transform-origin:left;  opacity:1; }
          45%  { transform:scaleX(1); transform-origin:left;  opacity:1; }
          46%  { transform:scaleX(1); transform-origin:right;            }
          100% { transform:scaleX(0); transform-origin:right; opacity:0.5; }
        }

        /* ── 3D حركة الهاتف ── */
        @keyframes phone3D {
          0%   { transform: perspective(700px) rotateY(-10deg) rotateX(3deg)  translateY(0px);   }
          20%  { transform: perspective(700px) rotateY(6deg)   rotateX(-2deg) translateY(-12px); }
          45%  { transform: perspective(700px) rotateY(12deg)  rotateX(4deg)  translateY(-6px);  }
          70%  { transform: perspective(700px) rotateY(-4deg)  rotateX(-3deg) translateY(-14px); }
          100% { transform: perspective(700px) rotateY(-10deg) rotateX(3deg)  translateY(0px);   }
        }
        @keyframes phone3D_B {
          0%   { transform: perspective(700px) rotateY(8deg)   rotateX(-2deg) translateY(-4px);  }
          30%  { transform: perspective(700px) rotateY(-12deg) rotateX(4deg)  translateY(-16px); }
          60%  { transform: perspective(700px) rotateY(5deg)   rotateX(-1deg) translateY(-8px);  }
          100% { transform: perspective(700px) rotateY(8deg)   rotateX(-2deg) translateY(-4px);  }
        }
        @keyframes phone3D_C {
          0%   { transform: perspective(700px) rotateY(-6deg)  rotateX(5deg)  translateY(-10px); }
          40%  { transform: perspective(700px) rotateY(10deg)  rotateX(-3deg) translateY(0px);   }
          75%  { transform: perspective(700px) rotateY(-8deg)  rotateX(2deg)  translateY(-18px); }
          100% { transform: perspective(700px) rotateY(-6deg)  rotateX(5deg)  translateY(-10px); }
        }

        /* ── 3D حركة اللابتوب ── */
        @keyframes laptop3D {
          0%   { transform: perspective(1400px) rotateY(-4deg) rotateX(2deg)  translateY(0px);   }
          33%  { transform: perspective(1400px) rotateY(3deg)  rotateX(-1deg) translateY(-8px);  }
          66%  { transform: perspective(1400px) rotateY(-2deg) rotateX(3deg)  translateY(-4px);  }
          100% { transform: perspective(1400px) rotateY(-4deg) rotateX(2deg)  translateY(0px);   }
        }

        /* ── عناصر عائمة 3D ── */
        @keyframes float3DA {
          0%,100%{ transform:perspective(500px) translateZ(0)   translateY(0)    rotateY(0deg)   rotateX(0deg);  }
          25%    { transform:perspective(500px) translateZ(24px) translateY(-16px) rotateY(20deg) rotateX(8deg);  }
          50%    { transform:perspective(500px) translateZ(-12px) translateY(-6px) rotateY(-12deg) rotateX(-5deg);}
          75%    { transform:perspective(500px) translateZ(18px) translateY(-20px) rotateY(8deg)  rotateX(12deg); }
        }
        @keyframes float3DB {
          0%,100%{ transform:perspective(500px) translateZ(0)    translateY(0)    rotateZ(0deg)  rotateX(0deg); }
          30%    { transform:perspective(500px) translateZ(-16px) translateY(-12px) rotateZ(25deg) rotateX(-10deg);}
          70%    { transform:perspective(500px) translateZ(20px)  translateY(-8px)  rotateZ(-15deg) rotateX(8deg); }
        }
        @keyframes float3DC {
          0%,100%{ transform:perspective(500px) translateZ(0)    translateY(0)    rotateY(0deg); }
          50%    { transform:perspective(500px) translateZ(30px)  translateY(-22px) rotateY(30deg); }
        }
        @keyframes float3DD {
          0%,100%{ transform:perspective(500px) translateZ(0)    translateX(0)   rotateX(0deg);  }
          33%    { transform:perspective(500px) translateZ(16px)  translateX(12px) rotateX(18deg); }
          66%    { transform:perspective(500px) translateZ(-8px)  translateX(-8px) rotateX(-12deg);}
        }
        @keyframes float3DE {
          0%,100%{ transform:perspective(500px) translateZ(0) scale(1) rotateZ(0deg); }
          40%    { transform:perspective(500px) translateZ(20px) scale(1.15) rotateZ(20deg); }
          80%    { transform:perspective(500px) translateZ(-10px) scale(0.88) rotateZ(-15deg); }
        }

        /* ── حلقة توسع 3D ── */
        @keyframes ring3D {
          0%   { transform:perspective(600px) scale(0.6) rotateX(60deg); opacity:0.7; }
          100% { transform:perspective(600px) scale(2.0) rotateX(0deg);  opacity:0;   }
        }

        /* ── خط SVG يرسم نفسه ── */
        @keyframes drawLine { from{stroke-dashoffset:300} to{stroke-dashoffset:0} }

        /* ── نجمة دوران 3D ── */
        @keyframes spin3D {
          from { transform:perspective(400px) rotateY(0deg) rotateZ(0deg); }
          to   { transform:perspective(400px) rotateY(360deg) rotateZ(180deg); }
        }

        /* ── dot 3D ── */
        @keyframes dot3D {
          0%,100%{ transform:perspective(300px) translateZ(0) translateY(0); }
          50%    { transform:perspective(300px) translateZ(20px) translateY(-10px); }
        }
      `}</style>

      {/* ── Flash overlay لحظة الانتقال ─── */}
      <div key={flashKey} style={{
        position:"fixed", inset:0, zIndex:99,
        pointerEvents:"none", background:BRAND,
        animation:"flashBar 0.55s cubic-bezier(0.4,0,0.2,1) forwards",
      }} />

      {/* ── Slide viewport ─── */}
      <div id="slide-viewport" className="relative flex-1 overflow-hidden">
        {slides.map((sl, i) => {
          const isActive  = i === current;
          const isLeaving = i === leaving;
          const enterAnim = dir === "next" ? "sEnterNext" : "sEnterPrev";
          const exitAnim  = dir === "next" ? "sExitNext"  : "sExitPrev";
          const animation = isActive
            ? `${enterAnim} 0.6s cubic-bezier(0.25,0.46,0.45,0.94) forwards`
            : isLeaving
            ? `${exitAnim}  0.6s cubic-bezier(0.25,0.46,0.45,0.94) forwards`
            : "none";

          return (
            <div key={i} className="absolute inset-0"
              style={{
                zIndex: isActive ? 2 : isLeaving ? 1 : 0,
                pointerEvents: isActive ? "auto" : "none",
                opacity: (!isActive && !isLeaving) ? 0 : undefined,
                animation,
              }}>
              {sl.kind === "intro"        && <IntroSlide visible={isActive} />}
              {sl.kind === "module-intro" && <ModuleIntroSlide slide={sl} visible={isActive} />}
              {sl.kind === "screen"       && <ScreenSlide slide={sl} visible={isActive} />}
              {sl.kind === "pair"         && <PairSlide slide={sl} visible={isActive} />}
              {sl.kind === "mobile"       && <MobileScreenSlide slide={sl} visible={isActive} />}
              {sl.kind === "outro"        && <OutroSlide visible={isActive} />}
            </div>
          );
        })}
      </div>

      {/* ── Bottom bar — معلومات التواصل ─── */}
      <div
        className="flex-shrink-0"
        style={{ background: "#fff", boxShadow: "0 -1px 4px rgba(0,0,0,0.05)" }}
      >
        {/* معلومات التواصل */}
        <div className="flex items-center justify-center gap-4 md:gap-8 px-4 py-2.5 flex-wrap">

          {/* واتساب */}
          <a href="https://wa.me/962795826473" target="_blank" rel="noreferrer"
            className="flex items-center gap-2 text-xs md:text-sm font-medium transition-opacity hover:opacity-70"
            style={{ color: "#1a1c1e", textDecoration: "none", fontFamily: "Cairo, sans-serif" }}>
            {/* WhatsApp icon */}
            <svg width="16" height="16" viewBox="0 0 24 24" fill="#25D366">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            <span>+962 7 9582 6473</span>
          </a>

          {/* فاصل */}
          <div className="hidden md:block w-px h-4" style={{ background: "rgba(0,0,0,0.12)" }} />

          {/* فيسبوك */}
          <a href="https://facebook.com/simscreationjo" target="_blank" rel="noreferrer"
            className="flex items-center gap-2 text-xs md:text-sm font-medium transition-opacity hover:opacity-70"
            style={{ color: "#1a1c1e", textDecoration: "none", fontFamily: "Cairo, sans-serif" }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="#1877F2">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
            <span>simscreationjo</span>
          </a>

          {/* فاصل */}
          <div className="hidden md:block w-px h-4" style={{ background: "rgba(0,0,0,0.12)" }} />

          {/* انستغرام */}
          <a href="https://instagram.com/simscreationcompany" target="_blank" rel="noreferrer"
            className="flex items-center gap-2 text-xs md:text-sm font-medium transition-opacity hover:opacity-70"
            style={{ color: "#1a1c1e", textDecoration: "none", fontFamily: "Cairo, sans-serif" }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="url(#ig)">
              <defs>
                <linearGradient id="ig" x1="0%" y1="100%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#f09433"/>
                  <stop offset="25%" stopColor="#e6683c"/>
                  <stop offset="50%" stopColor="#dc2743"/>
                  <stop offset="75%" stopColor="#cc2366"/>
                  <stop offset="100%" stopColor="#bc1888"/>
                </linearGradient>
              </defs>
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
            </svg>
            <span>simscreationcompany</span>
          </a>

        </div>
      </div>


    </div>
  );
}
