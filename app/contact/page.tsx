import { Metadata } from 'next';
import { ContactClient } from "./ContactClient";

export const metadata: Metadata = {
  title: "Hubungi Webenze - Konsultasi Gratis Sekarang",
  description: "Siap membangun website profesional? Hubungi tim Webenze untuk konsultasi gratis mengenai kebutuhan digital bisnis Anda.",
};

export default function ContactPage() {
  return <ContactClient />;
}


