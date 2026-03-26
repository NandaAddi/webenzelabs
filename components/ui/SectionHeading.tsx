import React from "react";

export function SectionHeading({ title, subtitle }: { title: string, subtitle?: string }) {
  return (
    <div className="text-center mb-16 px-4">
      <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-slate-100 mb-6 tracking-tighter">{title}</h2>
      {subtitle && <p className="text-slate-600 dark:text-slate-400 text-lg max-w-3xl mx-auto leading-relaxed">{subtitle}</p>}
    </div>
  );
}


