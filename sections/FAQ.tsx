import React from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const webenzeFaqs = [
  {
    question: "Berapa lama waktu pengerjaan website?",
    answer: "Durasi pengerjaan bergantung pada kompleksitas fitur dan desain yang diinginkan. Rata-rata, website company profile memakan waktu 2-4 minggu, sementara sistem web kustom bisa membutuhkan waktu 1-3 bulan."
  },
  {
    question: "Apakah paket layanan sudah termasuk hosting dan domain?",
    answer: "Ya, hampir seluruh paket layanan kami sudah ter-bundle otomatis dengan hosting dan domain gratis untuk tahun pertama. Anda terima beres tanpa perlu setup manual."
  },
  {
    question: "Apakah website saya akan responsif di handphone?",
    answer: "Tentu saja. Kami mengimplementasikan pendekatan Mobile-First Design. Website Anda akan dirender dengan sempurna dan berkinerja maksimal baik di desktop, tablet, maupun handphone."
  },
  {
    question: "Apakah saya bisa mengubah konten website (teks & gambar) sendiri?",
    answer: "Ya, kami melengkapi website Anda dengan Content Management System (CMS) moderen yang intuitif, sehingga Anda bisa memperbarui isi website kapan saja tanpa memerlukan skill coding."
  },
  {
    question: "Apakah ada biaya langganan bulanan?",
    answer: "Tidak ada biaya bulanan. Anda hanya perlu membayar biaya perpanjangan tahunan (hosting & domain) mulai di tahun kedua. Kami menghindari skema biaya tersembunyi."
  }
];

export function FAQ() {
  return (
    <section id="faq" className="py-24 relative bg-white border-t border-slate-100 shrink-0">
      <div className="container mx-auto px-6 max-w-4xl">
        <SectionHeading 
          title="Pertanyaan Umum (FAQ)" 
          subtitle="Beberapa hal yang sering ditanyakan mengenai layanan dan proses kerja kami."
        />
        
        <div className="mt-12 group/accordion">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {webenzeFaqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border border-slate-100 rounded-[2rem] px-8 bg-slate-50/50 hover:bg-white hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-500"
              >
                <AccordionTrigger className="py-8 text-lg font-extrabold text-slate-900 group-hover:no-underline tracking-tight">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="pb-8 text-slate-600 leading-relaxed text-base font-medium">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}


