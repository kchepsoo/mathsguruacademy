"use client";

import React from "react";
import {
  ArrowRight,
  BookOpen,
  CalendarDays,
  CheckCircle2,
  FileText,
  GraduationCap,
  Mail,
  MapPin,
  MonitorPlay,
  Phone,
  PlayCircle,
  ShieldCheck,
  Trophy,
  UploadCloud,
  Users,
} from "lucide-react";

const curriculumList = [
  "CBC",
  "8-4-4 / KCSE",
  "IGCSE",
  "Cambridge A Level",
  "IB",
  "SAT / AP Prep",
];

const gradeLevels = [
  "Upper Primary",
  "Junior Secondary",
  "Senior School",
  "Form 1 - Form 4",
  "IGCSE Year 7 - 11",
  "A Level / Advanced",
];

const resources = [
  {
    title: "Algebra",
    text: "Equations, functions, polynomials & more",
  },
  {
    title: "Geometry",
    text: "Triangles, circles, angles & construction",
  },
  {
    title: "Statistics & Probability",
    text: "Data handling, probability & graphs",
  },
  {
    title: "Calculus",
    text: "Limits, derivatives, integrals & more",
  },
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-950">
      <Header />
      <Hero />
      <SuccessSection />
      <CurriculumSection />
      <ResourcesSection />
      <AssignmentSection />
      <CTASection />
      <Footer />
    </main>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/95 text-white backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <a href="/" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-blue-700">
            <GraduationCap className="h-7 w-7" />
          </div>

          <div className="leading-tight">
            <p className="text-lg font-black tracking-wide">
              MATHS <span className="text-blue-400">GURU</span>
            </p>
            <p className="text-xs font-semibold tracking-[0.25em] text-slate-300">
              ACADEMY
            </p>
          </div>
        </a>

        <nav className="hidden items-center gap-7 text-sm font-semibold text-slate-200 lg:flex">
          <a href="/" className="text-blue-400">
            Home
          </a>
          <a href="#live-lessons" className="hover:text-blue-400">
            Live Lessons
          </a>
          <a href="#resources" className="hover:text-blue-400">
            Resources
          </a>
          <a href="#curricula" className="hover:text-blue-400">
            Curricula
          </a>
          <a href="/assignments" className="hover:text-blue-400">
            Assignments
          </a>
          <a href="#about" className="hover:text-blue-400">
            About Us
          </a>
          <a href="#contact" className="hover:text-blue-400">
            Contact
          </a>
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href="#contact"
            className="rounded-xl border border-white/30 px-5 py-2.5 text-sm font-bold hover:bg-white/10"
          >
            Log In
          </a>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-blue-600/25 hover:bg-blue-500"
          >
            Join a Lesson <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-950 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_25%,rgba(37,99,235,0.35),transparent_35%),linear-gradient(135deg,#020617_0%,#07142f_48%,#020617_100%)]" />
      <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:64px_64px]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-24">
        <div>
          <div className="mb-6 inline-flex rounded-full bg-blue-950/80 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-blue-200 ring-1 ring-blue-400/20">
            Online maths tuition for every learner
          </div>

          <h1 className="max-w-3xl text-5xl font-black leading-tight tracking-tight md:text-6xl lg:text-7xl">
            Learn Maths. <br />
            <span className="text-blue-500">Master</span> Your Future.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200">
            Live interactive lessons, recorded resources, assignments, and exam
            preparation for students across different grades and curriculums.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-7 py-4 font-bold text-white shadow-xl shadow-blue-600/30 hover:bg-blue-500"
            >
              Join a Live Lesson
              <MonitorPlay className="h-5 w-5" />
            </a>

            <a
              href="#resources"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/40 px-7 py-4 font-bold text-white hover:bg-white/10"
            >
              <BookOpen className="h-5 w-5" />
              Explore Resources
            </a>
          </div>

          <div className="mt-10 grid max-w-2xl grid-cols-2 gap-4 border-t border-white/10 pt-6 md:grid-cols-4">
            <HeroStat
              icon={<MonitorPlay />}
              title="Live Lessons"
              text="Interactive learning"
            />
            <HeroStat
              icon={<BookOpen />}
              title="Resources"
              text="Videos, notes & more"
            />
            <HeroStat
              icon={<UploadCloud />}
              title="Assignments"
              text="Upload & get feedback"
              href="/assignments"
            />
            <HeroStat
              icon={<Trophy />}
              title="Exam Prep"
              text="Better results"
            />
          </div>
        </div>

        <div className="relative">
          <div className="rounded-[2rem] border border-white/10 bg-white/10 p-5 shadow-2xl backdrop-blur">
            <div className="rounded-[1.5rem] bg-gradient-to-br from-blue-100 to-white p-6 text-slate-950">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-700">
                    Next Lesson
                  </p>
                  <h2 className="mt-2 text-3xl font-black">
                    Quadratic Equations
                  </h2>
                  <p className="mt-2 text-slate-600">Today, 4:00 PM</p>
                </div>

                <div className="rounded-2xl bg-blue-600 p-4 text-white">
                  <CalendarDays className="h-7 w-7" />
                </div>
              </div>

              <div className="mt-8 grid gap-4">
                <HeroCard
                  icon={<Users className="h-5 w-5" />}
                  title="Interactive class"
                  text="Ask questions and solve examples with the tutor."
                />
                <HeroCard
                  icon={<BookOpen className="h-5 w-5" />}
                  title="Resource access"
                  text="Watch videos, read notes, and practise worksheets."
                />
                <HeroCard
                  icon={<FileText className="h-5 w-5" />}
                  title="Assignment support"
                  text="Submit work and receive detailed feedback."
                  href="/assignments"
                />
              </div>

              <div className="mt-8 rounded-2xl bg-slate-950 p-5 text-white">
                <p className="text-sm text-slate-300">
                  Contact Maths Guru Academy
                </p>
                <p className="mt-2 font-bold">0704155710</p>
                <p className="text-sm text-slate-300">
                  mathsguruacademy@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SuccessSection() {
  return (
    <section id="live-lessons" className="bg-white px-6 py-16 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          title="Everything You Need to Succeed in Maths"
          text="A clear learning system combining live lessons, resources, assignment support, and exam preparation."
        />

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <FeatureCard
            color="bg-blue-600"
            icon={<MonitorPlay />}
            title="Live Online Lessons"
            text="Join live interactive classes, ask questions, and learn in real time."
          />
          <FeatureCard
            color="bg-emerald-600"
            icon={<BookOpen />}
            title="Resources"
            text="Access video lessons, notes, worksheets, and practice materials."
          />
          <FeatureCard
            color="bg-purple-600"
            icon={<UploadCloud />}
            title="Assignment Support"
            text="Upload assignments for marking, feedback, and improvement."
            href="/assignments"
          />
          <FeatureCard
            color="bg-orange-600"
            icon={<Trophy />}
            title="Exam Preparation"
            text="Past papers, revision notes, exam tips, and targeted practice."
          />
        </div>
      </div>
    </section>
  );
}

function CurriculumSection() {
  return (
    <section id="curricula" className="bg-white px-6 pb-16 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionTitle title="Curricula We Support" />

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
          {curriculumList.map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-slate-200 bg-white p-5 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                <CheckCircle2 className="h-6 w-6" />
              </div>
              <p className="font-black">{item}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <h3 className="text-2xl font-black">Grade Levels</h3>
          <p className="mt-2 text-slate-600">
            From Upper Primary to Advanced Level — we have got you covered.
          </p>

          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-6">
            {gradeLevels.map((level) => (
              <div
                key={level}
                className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-bold shadow-sm"
              >
                {level}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ResourcesSection() {
  return (
    <section id="resources" className="bg-slate-50 px-6 py-16 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-[2rem] bg-white p-6 shadow-sm ring-1 ring-slate-200">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-2xl font-black">
              What You’ll Find in Resources
            </h2>
            <a href="#contact" className="text-sm font-bold text-blue-600">
              View all resources →
            </a>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {resources.map((item) => (
              <div key={item.title}>
                <div className="relative flex aspect-video items-center justify-center rounded-xl bg-slate-950 text-white">
                  <PlayCircle className="h-10 w-10 text-blue-400" />
                </div>
                <h3 className="mt-3 font-black">{item.title}</h3>
                <p className="mt-1 text-sm leading-6 text-slate-600">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[2rem] bg-white p-6 shadow-sm ring-1 ring-slate-200">
          <h2 className="text-2xl font-black">How It Works</h2>

          <div className="mt-6 space-y-6">
            <Step
              number="1"
              color="bg-blue-600"
              title="Choose What You Need"
              text="Pick live lesson, resource, or assignment support."
            />
            <Step
              number="2"
              color="bg-emerald-600"
              title="Learn & Practise"
              text="Attend lessons, access resources, and practise questions."
            />
            <Step
              number="3"
              color="bg-purple-600"
              title="Improve & Succeed"
              text="Get feedback, track progress, and achieve your goals."
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function AssignmentSection() {
  return (
    <section id="assignments" className="bg-slate-50 px-6 pb-16 lg:px-8">
      <div className="mx-auto max-w-7xl rounded-[2rem] bg-white p-6 shadow-sm ring-1 ring-slate-200 lg:p-8">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div className="flex items-center gap-5">
            <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-3xl bg-blue-100 text-blue-600">
              <UploadCloud className="h-12 w-12" />
            </div>

            <div>
              <h2 className="text-2xl font-black">Upload Your Assignment</h2>
              <p className="mt-2 text-slate-600">
                Submit completed work and get detailed feedback from your tutor.
              </p>

              <a
                href="/assignments"
                className="mt-4 inline-flex rounded-xl bg-blue-600 px-5 py-3 text-sm font-bold text-white hover:bg-blue-500"
              >
                Upload Now
              </a>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            <MiniInfo icon={<FileText />} title="PDF, Images, Word & More" />
            <MiniInfo icon={<ShieldCheck />} title="Secure & Confidential" />
            <MiniInfo icon={<CheckCircle2 />} title="Detailed Feedback" />
          </div>
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section id="contact" className="bg-slate-50 px-6 pb-16 lg:px-8">
      <div className="mx-auto max-w-7xl rounded-[2rem] bg-gradient-to-r from-blue-800 to-blue-600 p-8 text-white shadow-xl lg:p-10">
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div className="flex items-center gap-5">
            <div className="hidden h-20 w-20 items-center justify-center rounded-3xl bg-white text-blue-700 sm:flex">
              <GraduationCap className="h-11 w-11" />
            </div>

            <div>
              <h2 className="text-3xl font-black">
                Ready to Improve in Maths?
              </h2>
              <p className="mt-2 text-blue-50">
                Join live lessons, access resources, submit assignments, and
                prepare for exams.
              </p>
            </div>
          </div>

          <a
            href="tel:0704155710"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-7 py-4 font-black text-blue-700 hover:bg-blue-50"
          >
            Join a Live Lesson <MonitorPlay className="h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer id="about" className="bg-slate-950 px-6 py-14 text-white lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-2 lg:grid-cols-5">
        <div className="lg:col-span-1">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-blue-700">
              <GraduationCap className="h-6 w-6" />
            </div>

            <div>
              <p className="font-black">
                MATHS <span className="text-blue-400">GURU</span>
              </p>
              <p className="text-xs tracking-[0.25em] text-slate-300">
                ACADEMY
              </p>
            </div>
          </div>

          <p className="mt-5 text-sm leading-7 text-slate-300">
            Empowering students to master maths and achieve excellence.
          </p>
        </div>

        <FooterColumn
          title="Quick Links"
          links={[
            { label: "Live Lessons", href: "#live-lessons" },
            { label: "Resources", href: "#resources" },
            { label: "Assignments", href: "/assignments" },
            { label: "Curricula", href: "#curricula" },
            { label: "About Us", href: "#about" },
          ]}
        />

        <FooterColumn
          title="Curricula"
          links={[
            { label: "CBC", href: "#curricula" },
            { label: "8-4-4 / KCSE", href: "#curricula" },
            { label: "IGCSE", href: "#curricula" },
            { label: "Cambridge A Level", href: "#curricula" },
            { label: "IB", href: "#curricula" },
            { label: "SAT / AP Prep", href: "#curricula" },
          ]}
        />

        <FooterColumn
          title="Support"
          links={[
            { label: "FAQs", href: "#contact" },
            { label: "How It Works", href: "#resources" },
            { label: "Privacy Policy", href: "#contact" },
            { label: "Terms of Service", href: "#contact" },
          ]}
        />

        <div>
          <h3 className="font-black">Contact Us</h3>

          <div className="mt-5 space-y-4 text-sm text-slate-300">
            <p className="flex items-center gap-3">
              <Phone className="h-4 w-4 text-blue-400" />
              <a href="tel:0704155710">0704155710</a>
            </p>

            <p className="flex items-center gap-3">
              <Mail className="h-4 w-4 text-blue-400" />
              <a href="mailto:mathsguruacademy@gmail.com">
                mathsguruacademy@gmail.com
              </a>
            </p>

            <p className="flex items-center gap-3">
              <MapPin className="h-4 w-4 text-blue-400" />
              Nairobi, Kenya
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-7xl border-t border-white/10 pt-6 text-center text-sm text-slate-400">
        © 2024 Maths Guru Academy. All rights reserved.
      </div>
    </footer>
  );
}

function HeroStat({ icon, title, text, href }) {
  const content = (
    <>
      <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-600 text-white">
        {React.cloneElement(icon, { className: "h-4 w-4" })}
      </div>

      <div>
        <p className="text-sm font-black">{title}</p>
        <p className="text-xs text-slate-400">{text}</p>
      </div>
    </>
  );

  if (href) {
    return (
      <a href={href} className="flex items-start gap-3 hover:opacity-80">
        {content}
      </a>
    );
  }

  return <div className="flex items-start gap-3">{content}</div>;
}

function HeroCard({ icon, title, text, href }) {
  const content = (
    <>
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-blue-700">
        {icon}
      </div>

      <div>
        <h3 className="font-black">{title}</h3>
        <p className="mt-1 text-sm text-slate-600">{text}</p>
      </div>
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        className="flex gap-4 rounded-2xl bg-white p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
      >
        {content}
      </a>
    );
  }

  return <div className="flex gap-4 rounded-2xl bg-white p-4 shadow-sm">{content}</div>;
}

function SectionTitle({ title, text }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <h2 className="text-3xl font-black tracking-tight md:text-4xl">
        {title}
      </h2>
      {text && <p className="mt-3 text-slate-600">{text}</p>}
    </div>
  );
}

function FeatureCard({ color, icon, title, text, href }) {
  const content = (
    <>
      <div
        className={`mb-5 flex h-14 w-14 items-center justify-center rounded-xl ${color} text-white`}
      >
        {React.cloneElement(icon, { className: "h-7 w-7" })}
      </div>

      <h3 className="text-lg font-black">{title}</h3>
      <p className="mt-3 leading-7 text-slate-600">{text}</p>
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
      >
        {content}
      </a>
    );
  }

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
      {content}
    </div>
  );
}

function Step({ number, color, title, text }) {
  return (
    <div className="flex gap-4">
      <div
        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full ${color} font-black text-white`}
      >
        {number}
      </div>

      <div>
        <h3 className="font-black">{title}</h3>
        <p className="mt-1 leading-7 text-slate-600">{text}</p>
      </div>
    </div>
  );
}

function MiniInfo({ icon, title }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 text-center">
      <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-white text-blue-600 shadow-sm">
        {React.cloneElement(icon, { className: "h-6 w-6" })}
      </div>

      <p className="text-sm font-black">{title}</p>
    </div>
  );
}

function FooterColumn({ title, links }) {
  return (
    <div>
      <h3 className="font-black">{title}</h3>

      <div className="mt-5 space-y-3 text-sm text-slate-300">
        {links.map((link) => (
          <a key={link.label} href={link.href} className="block hover:text-blue-400">
            {link.label}
          </a>
        ))}
      </div>
    </div>
  );
}
