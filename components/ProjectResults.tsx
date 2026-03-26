"use client";

import React from "react";
import { motion } from "framer-motion";
import { ChartLineUp, User, RocketLaunch, Clock, Info } from "@phosphor-icons/react";

interface StatItem {
    label: string;
    value: string;
    icon: string;
}

interface ProjectResultsProps {
    stats?: StatItem[];
}

const iconsMap: Record<string, React.ReactNode> = {
    trend: <ChartLineUp className="w-6 h-6" />,
    user: <User className="w-6 h-6" />,
    speed: <RocketLaunch className="w-6 h-6" />,
    time: <Clock className="w-6 h-6" />,
};

export const ProjectResults = ({ stats }: ProjectResultsProps) => {
    const defaultStats: StatItem[] = [
        { label: "User Engagement", value: "+45%", icon: "trend" },
        { label: "Retention Rate", value: "89%", icon: "user" },
        { label: "Performance", value: "99/100", icon: "speed" },
        { label: "Project Delivery", value: "12 Weeks", icon: "time" },
    ];

    const displayStats = stats && stats.length > 0 ? stats : defaultStats;

    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 pt-12 transition-colors duration-500">
            {displayStats.map((stat, idx) => (
                <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="p-6 md:p-8 bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800 rounded-[2.5rem] space-y-4 hover:shadow-xl dark:shadow-none transition-all duration-500 group"
                >
                    <div className="w-12 h-12 rounded-2xl bg-white dark:bg-slate-800 flex items-center justify-center text-primary-site dark:text-blue-400 group-hover:bg-primary-site group-hover:text-white transition-all duration-500 shadow-sm text-2xl">
                        {iconsMap[stat.icon] || <ChartLineUp className="w-6 h-6" />}
                    </div>
                    <div className="space-y-1">
                        <p className="text-[10px] uppercase font-bold tracking-widest text-slate-400 dark:text-slate-600 transition-colors">{stat.label}</p>
                        <h4 className="text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tighter transition-colors">{stat.value}</h4>
                    </div>
                </motion.div>
            ))}
        </div>
    );
};
