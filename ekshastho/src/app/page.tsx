"use client";

import { useState } from "react";

type Lang = "en" | "bn";

const content = {
  en: {
    nav: {
      features: "Features",
      technology: "Technology",
      why: "Why Us",
      contact: "Contact",
    },
    hero: {
      badge: "By Bindulogic Limited",
      title: "Health in One Platform",
      subtitle:
        "EkShastho connects doctors, patients, and hospitals to make healthcare faster and better for everyone.",
      cta: "Get in Touch",
      secondary: "Learn More",
    },
    about: {
      title: "What is EkShastho?",
      body: "EkShastho is a complete health platform. Whether you are running a large hospital or a local primary healthcare facility, our system gives you the tools you need to manage everything smoothly. You do not need many different software programs anymore—EkShastho does it all.",
    },
    features: {
      title: "Key Features",
      items: [
        {
          title: "Complete Patient Records",
          desc: "Keep all medical history, test results, and doctor notes safe in one secure profile.",
        },
        {
          title: "Smart Booking System",
          desc: "Patients can easily book appointments from their phones, reducing long wait times.",
        },
        {
          title: "Team Member Management",
          desc: "Easily manage schedules, tasks, and access for every team member in your organization.",
        },
        {
          title: "Primary Healthcare Integration",
          desc: "Connect local primary healthcare facilities directly to larger hospitals for better patient care and quick referrals.",
        },
        {
          title: "Digital Prescriptions",
          desc: "Doctors can write and send prescriptions digitally to avoid mistakes and save time.",
        },
        {
          title: "Secure & Scalable",
          desc: "Built for growth with modern architecture that keeps patient data private and the system fast.",
        },
      ],
    },
    tech: {
      title: "Fast and Secure Technology",
      body: "We believe in using the best tools for the future. EkShastho is built on a fast, modern technology stack using advanced JavaScript, TypeScript, and PostgreSQL. By moving away from older, slow frameworks, we make sure that your health platform is always quick, highly secure, and ready to grow as your business grows.",
    },
    why: {
      title: "Why Choose EkShastho?",
      items: [
        {
          title: "Very Easy to Use",
          desc: "The design is simple, so anyone can learn how to use it quickly.",
        },
        {
          title: "All-in-One Place",
          desc: "Manage your patients, doctors, and daily work without switching between different systems.",
        },
        {
          title: "100% Secure",
          desc: "We use top-level security to keep all patient health data totally private.",
        },
      ],
    },
    cta: {
      title: "Ready to transform your healthcare facility?",
      body: "Contact us today to learn how EkShastho can help your hospital or clinic.",
      button: "Contact Us",
    },
    contact: {
      title: "Contact",
      email: "Email",
      phone: "Phone",
      office: "Office",
      address: "House: 7, Road: 2, Block: B, Mirpur 10, Dhaka 1216",
    },
    footer: {
      rights: "© 2026 Bindulogic Limited. All rights reserved.",
      tagline: "EkShastho – Health in One Platform",
    },
  },
  bn: {
    nav: {
      features: "ফিচার",
      technology: "প্রযুক্তি",
      why: "কেন আমরা",
      contact: "যোগাযোগ",
    },
    hero: {
      badge: "বাইন্ডুলজিক লিমিটেড কর্তৃক",
      title: "এক প্ল্যাটফর্মে স্বাস্থ্যসেবা",
      subtitle:
        "একস্বাস্থ্য ডাক্তার, রোগী এবং হাসপাতালকে সংযুক্ত করে স্বাস্থ্যসেবাকে সবার জন্য দ্রুত ও আরও ভালো করে তোলে।",
      cta: "যোগাযোগ করুন",
      secondary: "আরও জানুন",
    },
    about: {
      title: "একস্বাস্থ্য কী?",
      body: "একস্বাস্থ্য একটি সম্পূর্ণ স্বাস্থ্য প্ল্যাটফর্ম। আপনি বড় হাসপাতাল চালান বা স্থানীয় প্রাথমিক স্বাস্থ্যসেবা কেন্দ্র—আমাদের সিস্টেম আপনাকে সবকিছু মসৃণভাবে পরিচালনার জন্য প্রয়োজনীয় টুলস দেয়। আর আলাদা আলাদা সফটওয়্যার লাগবে না—একস্বাস্থ্যই সব করে।",
    },
    features: {
      title: "মূল ফিচারসমূহ",
      items: [
        {
          title: "সম্পূর্ণ রোগীর রেকর্ড",
          desc: "সমস্ত চিকিৎসা ইতিহাস, পরীক্ষার ফলাফল এবং ডাক্তারের নোট এক নিরাপদ প্রোফাইলে রাখুন।",
        },
        {
          title: "স্মার্ট বুকিং সিস্টেম",
          desc: "রোগীরা মোবাইল থেকে সহজেই অ্যাপয়েন্টমেন্ট বুক করতে পারেন, অপেক্ষার সময় কমে।",
        },
        {
          title: "টিম ম্যানেজমেন্ট",
          desc: "আপনার প্রতিষ্ঠানের প্রতিটি সদস্যের সময়সূচি, কাজ এবং অ্যাক্সেস সহজে পরিচালনা করুন।",
        },
        {
          title: "প্রাথমিক স্বাস্থ্যসেবা সংযোগ",
          desc: "স্থানীয় প্রাথমিক স্বাস্থ্য কেন্দ্রগুলোকে বড় হাসপাতালের সাথে সরাসরি সংযুক্ত করে দ্রুত রেফারেল ও ভালো সেবা নিশ্চিত করুন।",
        },
        {
          title: "ডিজিটাল প্রেসক্রিপশন",
          desc: "ডাক্তাররা ডিজিটালি প্রেসক্রিপশন লিখে পাঠাতে পারেন—ভুল কমে, সময় বাঁচে।",
        },
        {
          title: "নিরাপদ ও স্কেলযোগ্য",
          desc: "আধুনিক আর্কিটেকচারে তৈরি—রোগীর ডেটা প্রাইভেট থাকে এবং সিস্টেম দ্রুত চলে।",
        },
      ],
    },
    tech: {
      title: "দ্রুত ও নিরাপদ প্রযুক্তি",
      body: "আমরা ভবিষ্যতের সেরা টুলস ব্যবহার করি। একস্বাস্থ্য আধুনিক জাভাস্ক্রিপ্ট, টাইপস্ক্রিপ্ট এবং পোস্টগ্রেএসকিউএল দিয়ে তৈরি। পুরনো ধীর ফ্রেমওয়ার্ক ছেড়ে আমরা নিশ্চিত করি যে আপনার স্বাস্থ্য প্ল্যাটফর্ম সবসময় দ্রুত, উচ্চ নিরাপদ এবং ব্যবসা বাড়ার সাথে সাথে প্রস্তুত থাকবে।",
    },
    why: {
      title: "কেন একস্বাস্থ্য বেছে নেবেন?",
      items: [
        {
          title: "খুব সহজ ব্যবহার",
          desc: "ডিজাইন সহজ, তাই যে কেউ দ্রুত শিখে নিতে পারেন।",
        },
        {
          title: "সবকিছু এক জায়গায়",
          desc: "রোগী, ডাক্তার এবং দৈনন্দিন কাজ এক সিস্টেমেই পরিচালনা করুন।",
        },
        {
          title: "১০০% নিরাপদ",
          desc: "শীর্ষ-স্তরের নিরাপত্তা ব্যবহার করে রোগীর স্বাস্থ্য ডেটা সম্পূর্ণ গোপন রাখা হয়।",
        },
      ],
    },
    cta: {
      title: "আপনার স্বাস্থ্যসেবা কেন্দ্র পরিবর্তন করতে প্রস্তুত?",
      body: "আজই যোগাযোগ করুন এবং জানুন একস্বাস্থ্য কীভাবে আপনার হাসপাতাল বা ক্লিনিককে সাহায্য করতে পারে।",
      button: "যোগাযোগ করুন",
    },
    contact: {
      title: "যোগাযোগ",
      email: "ইমেইল",
      phone: "ফোন",
      office: "অফিস",
      address: "হাউস: ৭, রোড: ২, ব্লক: বি, মিরপুর ১০, ঢাকা ১২১৬",
    },
    footer: {
      rights: "© ২০২৬ বাইন্ডুলজিক লিমিটেড। সর্বস্বত্ব সংরক্ষিত।",
      tagline: "একস্বাস্থ্য – এক প্ল্যাটফর্মে স্বাস্থ্যসেবা",
    },
  },
};

export default function Home() {
  const [lang, setLang] = useState<Lang>("en");
  const t = content[lang];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-primary-600 to-accent-500 flex items-center justify-center text-white font-bold text-lg">
              E
            </div>
            <span className="font-semibold text-xl text-slate-900 tracking-tight">
              EkShastho
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
            <a href="#features" className="hover:text-primary-600 transition">
              {t.nav.features}
            </a>
            <a href="#technology" className="hover:text-primary-600 transition">
              {t.nav.technology}
            </a>
            <a href="#why" className="hover:text-primary-600 transition">
              {t.nav.why}
            </a>
            <a href="#contact" className="hover:text-primary-600 transition">
              {t.nav.contact}
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setLang(lang === "en" ? "bn" : "en")}
              className="text-sm font-medium px-3 py-1.5 rounded-full border border-slate-200 hover:border-primary-300 hover:bg-primary-50 transition text-slate-700"
            >
              {lang === "en" ? "বাংলা" : "English"}
            </button>
            <a
              href="#contact"
              className="hidden sm:inline-flex items-center px-4 py-2 rounded-lg bg-primary-600 text-white text-sm font-medium hover:bg-primary-700 transition shadow-sm"
            >
              {t.hero.cta}
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-accent-50" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 pt-20 pb-24 sm:pt-28 sm:pb-32">
          <div className="max-w-3xl">
            <span className="inline-block text-sm font-medium text-primary-700 bg-primary-100 px-3 py-1 rounded-full mb-6">
              {t.hero.badge}
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight tracking-tight mb-6">
              {t.hero.title}
            </h1>
            <p className="text-lg sm:text-xl text-slate-600 leading-relaxed mb-10 max-w-2xl">
              {t.hero.subtitle}
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="inline-flex items-center px-6 py-3.5 rounded-xl bg-primary-600 text-white font-medium hover:bg-primary-700 transition shadow-lg shadow-primary-600/25"
              >
                {t.hero.cta}
              </a>
              <a
                href="#features"
                className="inline-flex items-center px-6 py-3.5 rounded-xl border border-slate-200 bg-white text-slate-700 font-medium hover:border-primary-300 hover:bg-primary-50 transition"
              >
                {t.hero.secondary}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
              {t.about.title}
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              {t.about.body}
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20 sm:py-24 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 text-center mb-14">
            {t.features.title}
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.features.items.map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-md hover:border-primary-100 transition"
              >
                <div className="w-10 h-10 rounded-xl bg-primary-100 text-primary-600 flex items-center justify-center mb-4 font-semibold">
                  {i + 1}
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology */}
      <section id="technology" className="py-20 sm:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
              {t.tech.title}
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              {t.tech.body}
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-3">
              {["TypeScript", "JavaScript", "PostgreSQL", "Modern Stack"].map(
                (tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 rounded-full bg-slate-100 text-slate-700 text-sm font-medium"
                  >
                    {tech}
                  </span>
                )
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section id="why" className="py-20 sm:py-24 bg-gradient-to-b from-primary-50 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 text-center mb-14">
            {t.why.title}
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {t.why.items.map((item, i) => (
              <div key={i} className="text-center">
                <div className="w-14 h-14 mx-auto rounded-2xl bg-white shadow-sm border border-primary-100 flex items-center justify-center text-primary-600 text-xl font-bold mb-5">
                  {i + 1}
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 sm:py-24 bg-primary-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            {t.cta.title}
          </h2>
          <p className="text-primary-100 text-lg mb-8 max-w-2xl mx-auto">
            {t.cta.body}
          </p>
          <a
            href="#contact"
            className="inline-flex items-center px-8 py-4 rounded-xl bg-white text-primary-700 font-semibold hover:bg-primary-50 transition shadow-lg"
          >
            {t.cta.button}
          </a>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 sm:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 text-center mb-14">
            {t.contact.title}
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center p-6 rounded-2xl bg-slate-50 border border-slate-100">
              <div className="text-sm font-medium text-slate-500 mb-2">
                {t.contact.email}
              </div>
              <a
                href="mailto:contact@bindulogic.com"
                className="text-primary-600 font-medium hover:underline"
              >
                contact@bindulogic.com
              </a>
            </div>
            <div className="text-center p-6 rounded-2xl bg-slate-50 border border-slate-100">
              <div className="text-sm font-medium text-slate-500 mb-2">
                {t.contact.phone}
              </div>
              <a
                href="tel:+8801302606005"
                className="text-primary-600 font-medium hover:underline"
              >
                +88 01302606005
              </a>
            </div>
            <div className="text-center p-6 rounded-2xl bg-slate-50 border border-slate-100">
              <div className="text-sm font-medium text-slate-500 mb-2">
                {t.contact.office}
              </div>
              <p className="text-slate-700 text-sm leading-relaxed">
                {t.contact.address}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-100 bg-slate-50 py-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary-600 to-accent-500 flex items-center justify-center text-white font-bold text-sm">
              E
            </div>
            <span className="font-medium text-slate-800">{t.footer.tagline}</span>
          </div>
          <p className="text-sm text-slate-500">{t.footer.rights}</p>
        </div>
      </footer>
    </div>
  );
}
