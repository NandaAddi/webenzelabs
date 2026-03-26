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
    <section id="pricing" className="py-32 bg-white border-y border-slate-100 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none">
         <div className="absolute top-0 right-10 w-[600px] h-[600px] bg-blue-50/50 rounded-full blur-[150px]" />
         <div className="absolute bottom-0 left-10 w-[600px] h-[600px] bg-primary-site/5 rounded-full blur-[150px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <SectionHeading 
          title="Pilih Paket Webenze" 
          subtitle="Biaya transparan dan terjangkau untuk setiap skala kebutuhan digital Anda."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto mt-20 items-stretch">
          {packages.map((pkg, index) => {
            const content = (
              <div className="flex flex-col h-full w-full">
                
                <div className="mb-10 relative z-20">
                  <p className="text-[10px] uppercase tracking-[0.3em] font-extrabold text-primary-site mb-4">{pkg.highlight ? 'Premium Plan' : 'Standard Plan'}</p>
                  <h3 className="text-3xl font-extrabold text-slate-900 mb-3 tracking-tighter">{pkg.title}</h3>
                  <div className="flex items-baseline gap-1 pt-2">
                    <span className="text-4xl font-extrabold text-primary-site tracking-tighter">{pkg.price}</span>
                  </div>
                </div>
                
                <ul className="flex-1 space-y-5 mb-12 relative z-20">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-4">
                      <div className="h-6 w-6 rounded-full bg-primary-site/10 flex items-center justify-center shrink-0 border border-primary-site/10">
                        <Check size={12} weight="bold" className="text-primary-site" />
                      </div>
                      <span className="text-slate-600 text-base font-medium leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="relative z-20 w-full mt-auto">
                    <Button 
                        variant={pkg.highlight ? 'primary' : 'outline'} 
                        className={pkg.highlight ? 'w-full bg-primary-site hover:bg-primary-hover text-white shadow-xl shadow-blue-500/20 py-6 rounded-2xl' : 'w-full border-slate-200 text-slate-700 hover:bg-slate-50 py-6 rounded-2xl'}
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
                          <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary-site text-white px-5 py-1.5 rounded-full text-[10px] font-extrabold shadow-xl z-30 uppercase tracking-widest border-2 border-white">
                            Paling Populer
                          </div>
                        )}
                        <MovingBorderContainer
                          as="div"
                          containerClassName="h-full w-full min-h-[550px]"
                          className="bg-white border-2 border-slate-50 flex-col p-10 items-start justify-start relative text-left shadow-[0_40px_100px_-15px_rgba(39,105,185,0.15)]"
                          borderRadius="2.5rem"
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
                className="bg-white border border-slate-100 rounded-[2.5rem] p-10 flex flex-col relative shadow-xl shadow-slate-200/60 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 min-h-[520px]"
              >
                {pkg.highlight && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary-site text-white px-5 py-1.5 rounded-full text-[10px] font-extrabold shadow-xl z-30 uppercase tracking-widest border-2 border-white">
                    Paling Populer
                  </div>
                )}
                {content}
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  );
}


