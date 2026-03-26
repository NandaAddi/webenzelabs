"use client";

import React from "react";
import { 
  FileCode, 
  Database, 
  ChartLineUp, 
  Wind, 
  FramerLogo, 
  Lightning,
  PaintBrush,
  Globe
} from "@phosphor-icons/react";

interface TechItem {
    name: string;
    icon: React.ReactNode;
}

const allTech: Record<string, TechItem> = {
    NextJs: { name: "Next.js", icon: <Globe className="w-5 h-5 text-slate-900 dark:text-white" /> },
    React: { name: "React", icon: <FileCode className="w-5 h-5 text-blue-500" /> },
    Tailwind: { name: "Tailwind CSS", icon: <Wind className="w-5 h-5 text-sky-400" /> },
    Framer: { name: "Framer Motion", icon: <FramerLogo className="w-5 h-5 text-pink-500" /> },
    Supabase: { name: "Supabase", icon: <Database className="w-5 h-5 text-emerald-500" /> },
    Typescript: { name: "TypeScript", icon: <ChartLineUp className="w-5 h-5 text-blue-600" /> },
    Vercel: { name: "Vercel", icon: <Lightning className="w-5 h-5 text-slate-900 dark:text-white" /> },
    Contentful: { name: "Contentful", icon: <Database className="w-5 h-5 text-orange-500" /> },
    Adobe: { name: "Adobe Creative Cloud", icon: <PaintBrush className="w-5 h-5 text-red-500" /> },
};

interface ProjectTechStackProps {
    techStack?: string[];
}

export const ProjectTechStack = ({ techStack }: ProjectTechStackProps) => {
    // Default stack for any project since we don't have this in DB yet
    const defaultStack = ["NextJs", "React", "Tailwind", "Framer", "Supabase", "Typescript"];
    const stack = techStack && techStack.length > 0 ? techStack : defaultStack;

    return (
        <div className="space-y-12 transition-colors duration-500">
            <div className="flex items-center gap-4">
                <div className="h-px flex-1 bg-slate-100 dark:bg-slate-800" />
                <h2 className="text-[10px] font-extrabold uppercase tracking-[0.4em] text-slate-400 dark:text-slate-600 whitespace-nowrap">Development Ecosystem</h2>
                <div className="h-px flex-1 bg-slate-100 dark:bg-slate-800" />
            </div>

            <div className="flex flex-wrap gap-4">
                {stack.map((key) => {
                    const tech = allTech[key];
                    if (!tech) return <div key={key} className="px-4 py-2 bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800 rounded-xl text-xs font-bold text-slate-700 dark:text-slate-300">{key}</div>;
                    return (
                        <div 
                            key={key} 
                            className="flex items-center gap-3 px-6 py-4 bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800 rounded-2xl hover:bg-white dark:hover:bg-slate-900 hover:border-primary-site group transition-all duration-300 shadow-sm hover:shadow-xl dark:shadow-none"
                        >
                            <div className="w-10 h-10 rounded-xl bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 flex items-center justify-center group-hover:bg-primary-site/5 transition-all">
                                {tech.icon}
                            </div>
                            <span className="text-sm font-bold text-slate-700 dark:text-slate-300 tracking-tight group-hover:text-slate-900 dark:group-hover:text-white transition-colors">{tech.name}</span>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
