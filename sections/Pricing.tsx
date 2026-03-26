"use client";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";
import { Check } from "@phosphor-icons/react";
import { Button as MovingBorderContainer } from "@/components/ui/moving-border";

const packages = [
  {
    title: "Landing Page",
    price: "Rp 500.000",
    features: [
      "1 Page Website",
      "Responsive Design",
      "Basic SEO",
      "Free Domain Setup"
    ],
    cta: "Order Sekarang",
    highlight: false,
  },
  {
    title: "Company Profile Website",
    price: "Rp 1.500.000",
    features: [
      "Multi Page Website",
      "Responsive Design",
      "SEO Optimization",
      "Admin Panel",
      "Support & Maintenance"
    ],
    cta: "Order Sekarang",
    highlight: true,
  },
  {
    title: "Custom Web Development",
    price: "Hubungi Kami",
    features: [
      "Custom Features",
      "Complex Integrations",
      "Advanced Database",
      "Scalable Architecture",
      "Priority Support"
    ],
    cta: "Konsultasi Gratis",
    highlight: false,
  }
];

export function Pricing() {
  return (
    <section id="pricing" className="py-20 md:py-32 bg-white dark:bg-slate-950 border-y border-slate-100 dark:border-slate-800 relative overflow-hidden transition-colors duration-500">
      <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none">
         <div className="absolute top-0 right-10 w-[600px] h-[600px] bg-blue-50/50 dark:bg-blue-900/10 rounded-full blur-[150px]" />
         <div className="absolute bottom-0 left-10 w-[600px] h-[600px] bg-primary-site/5 dark:bg-primary-site/10 rounded-full blur-[150px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <SectionHeading 
          title="Pilih Paket Webenze" 
          subtitle="Biaya transparan dan terjangkau untuk setiap skala kebutuhan digital Anda."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 max-w-7xl mx-auto mt-12 md:mt-20 items-stretch">
          {packages.map((pkg, index) => {
            const content = (
              <div className="flex flex-col h-full w-full">
                
                <div className="mb-10 relative z-20">
                  <p className="text-[10px] uppercase tracking-[0.3em] font-extrabold text-primary-site mb-4 transition-colors">{pkg.highlight ? 'Premium Plan' : 'Standard Plan'}</p>
                  <h3 className="text-3xl font-extrabold text-slate-900 dark:text-white mb-3 tracking-tighter transition-colors">{pkg.title}</h3>
                  <div className="flex items-baseline gap-1 pt-2">
                    <span className="text-3xl md:text-4xl font-extrabold text-primary-site tracking-tighter transition-colors">{pkg.price}</span>
                  </div>
                </div>
                
                <ul className="flex-1 space-y-5 mb-12 relative z-20">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-4">
                      <div className="h-6 w-6 rounded-full bg-primary-site/10 dark:bg-primary-site/20 flex items-center justify-center shrink-0 border border-primary-site/10 dark:border-primary-site/20 transition-colors">
                        <Check size={12} weight="bold" className="text-primary-site" />
                      </div>
                      <span className="text-slate-600 dark:text-slate-400 text-base font-medium leading-relaxed transition-colors">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="relative z-20 w-full mt-auto">
                    <Button 
                        variant={pkg.highlight ? 'primary' : 'outline'} 
                        className={pkg.highlight 
                          ? 'w-full bg-primary-site hover:bg-primary-hover text-white shadow-xl shadow-blue-500/20 py-6 rounded-2xl' 
                          : 'w-full border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 py-6 rounded-2xl transition-all'
                        }
                        size="lg"
                    >
                        {pkg.cta}
                    </Button>
                </div>
              </div>
            )

            if(pkg.highlight) {
                return (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="h-full relative z-20"
                    >
                        {pkg.highlight && (
                          <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary-site text-white px-5 py-1.5 rounded-full text-[10px] font-extrabold shadow-xl z-30 uppercase tracking-widest border-2 border-white dark:border-slate-950 transition-colors">
                            Paling Populer
                          </div>
                        )}
                        <MovingBorderContainer
                          as="div"
                          containerClassName="h-full w-full min-h-[500px] md:min-h-[550px]"
                          className="bg-white dark:bg-slate-900 border-2 border-slate-50 dark:border-slate-800 flex-col p-6 md:p-10 items-start justify-start relative text-left shadow-[0_40px_100px_-15px_rgba(39,105,185,0.15)] dark:shadow-none transition-colors"
                          borderRadius="2rem md:2.5rem"
                        >
                            {content}
                        </MovingBorderContainer>
                    </motion.div>
                )
            }

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-10 flex flex-col relative shadow-xl shadow-slate-200/60 dark:shadow-none hover:shadow-2xl dark:hover:shadow-blue-500/5 hover:shadow-blue-500/10 transition-all duration-500 min-h-[480px] md:min-h-[520px]"
              >
                {content}
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  );
}


