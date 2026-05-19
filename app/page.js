"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  UploadCloud,
  BookOpen,
  CheckCircle2,
  Clock3,
  ShieldCheck,
  GraduationCap,
  FileText,
  ArrowRight,
  Video,
  MonitorPlay,
  Trophy,
  School,
  Target,
  PlayCircle,
  Star,
} from "lucide-react";

const curriculums = [
  "CBC",
  "8-4-4 / KCSE",
  "IGCSE",
  "Cambridge A Level",
  "IB",
  "SAT / AP Prep",
];

const gradeGroups = [
  "Upper Primary",
  "Junior Secondary",
  "Senior School",
  "Form 1 - Form 4",
  "IGCSE Years 7 - 11",
  "Advanced / A Level",
];

export default function HomePage() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files?.[0];
    if (file) setSelectedFile(file);
  };

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(37,99,235,0.35),_transparent_34%),radial-gradient(circle_at_bottom_right,_rgba(14,165,233,0.25),_transparent_38%)]" />

        <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col px-6 py-8 lg:px-8">
          <nav className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-slate-950 shadow-lg">
                <GraduationCap className="h-6 w-6" />
              </div>
              <div>
                <p className="text-lg font-bold tracking-tight">
                  Maths Guru Academy
                </p>
                <p className="text-xs text-slate-300">
                  Learn. Practise. Improve.
                </p>
              </div>
            </div>

            <div className="hidden items-center gap-6 text-sm font-medium text-slate-200 lg:flex">
              <a href="#programmes" className="hover:text-white">
                Programmes
              </a>
              <a href="#videos" className="hover:text-white">
                Videos
              </a>
              <a href="#curriculum" className="hover:text-white">
                Curriculum
              </a>
              <a href="#upload" className="hover:text-white">
                Upload Work
              </a>
            </div>

            <a
              href="#contact"
              className="hidden rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-slate-200 sm:inline-flex"
            >
              Join a Lesson
            </a>
          </nav>

          <div className="grid flex-1 items-center gap-12 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:py-20">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm text-slate-200 backdrop-blur">
                <Star className="h-4 w-4" />
                Online maths tuition for different grades and curriculums
              </div>

              <h1 className="max-w-4xl text-5xl font-black leading-tight tracking-tight sm:text-6xl lg:text-7xl">
                Master maths with live lessons, videos, and guided practice.
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                Maths Guru Academy helps students learn mathematics through live
                online tuition, recorded topic videos, assignments, revision
                support, and exam preparation for CBC, 8-4-4 / KCSE, IGCSE, and
                international pathways.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#programmes"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-500 px-7 py-4 font-semibold text-white shadow-xl shadow-blue-500/25 transition hover:bg-blue-400"
                >
                  Explore Programmes
                  <ArrowRight className="h-5 w-5" />
                </a>
                <a
                  href="#upload"
                  className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/10 px-7 py-4 font-semibold text-white backdrop-blur transition hover:bg-white/15"
                >
                  Upload Assignment
                </a>
              </div>

              <div className="mt-10 grid max-w-2xl gap-4 sm:grid-cols-3">
                <Stat value="Live" label="interactive lessons" />
                <Stat value="Videos" label="topic recordings" />
                <Stat value="Exams" label="focused revision" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="rounded-[2rem] border border-white/10 bg-white/10 p-4 shadow-2xl backdrop-blur-xl"
            >
              <div className="rounded-[1.5rem] bg-white p-6 text-slate-950 shadow-xl sm:p-8">
                <div className="mb-6 flex items-center justify-between gap-4">
                  <div>
                    <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
                      What we offer
                    </p>
                    <h2 className="mt-2 text-3xl font-black">
                      Maths support in one place
                    </h2>
                  </div>
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-blue-600">
                    <School className="h-7 w-7" />
                  </div>
                </div>

                <div className="grid gap-4">
                  <HeroService
                    icon={<Video className="h-5 w-5" />}
                    title="Live online maths lessons"
                    text="Interactive sessions where students ask questions and learn step by step."
                  />
                  <HeroService
                    icon={<MonitorPlay className="h-5 w-5" />}
                    title="Recorded topic videos"
                    text="Students can replay lessons for algebra, geometry, calculus, statistics, and more."
                  />
                  <HeroService
                    icon={<UploadCloud className="h-5 w-5" />}
                    title="Assignment submission"
                    text="Completed work can be uploaded for review, marking, and feedback."
                  />
                  <HeroService
                    icon={<Trophy className="h-5 w-5" />}
                    title="Exam preparation"
                    text="Revision support for school tests, KCSE, IGCSE, A Level, and other exams."
                  />
                </div>

                <div className="mt-6 rounded-3xl bg-slate-950 p-5 text-white">
                  <p className="text-sm text-slate-300">Next step</p>
                  <div className="mt-3 flex items-center justify-between gap-4">
                    <div>
                      <p className="font-bold">Book a maths lesson</p>
                      <p className="text-sm text-slate-400">
                        Online support for your level
                      </p>
                    </div>
                    <a
                      href="#contact"
                      className="rounded-full bg-blue-500 px-4 py-2 text-sm font-bold hover:bg-blue-400"
                    >
                      Start
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section
        id="programmes"
        className="bg-white px-6 py-20 text-slate-950 lg:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <SectionIntro
            eyebrow="Programmes"
            title="A complete maths learning platform."
            text="Students can attend live classes, watch recorded explanations, submit assignments, and prepare for exams with structured tutor support."
          />

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Feature
              icon={<Video className="h-6 w-6" />}
              title="Live Lessons"
              description="Scheduled online classes with explanations, examples, guided practice, and question time."
            />
            <Feature
              icon={<PlayCircle className="h-6 w-6" />}
              title="Recorded Videos"
              description="Topic-by-topic video lessons students can watch again when revising or catching up."
            />
            <Feature
              icon={<UploadCloud className="h-6 w-6" />}
              title="Assignment Uploads"
              description="Students submit completed work so the tutor can review progress and give feedback."
            />
            <Feature
              icon={<Target className="h-6 w-6" />}
              title="Exam Preparation"
              description="Past paper practice, revision plans, formula review, and targeted weak-area improvement."
            />
          </div>
        </div>
      </section>

      <section
        id="curriculum"
        className="bg-slate-50 px-6 py-20 text-slate-950 lg:px-8"
      >
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
              Curriculum support
            </p>
            <h2 className="text-4xl font-black tracking-tight sm:text-5xl">
              Built for local and international learners.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              Maths Guru Academy can support students from Kenyan and
              international education systems. The platform can later separate
              content by curriculum, grade, topic, and exam target.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {curriculums.map((item) => (
              <div
                key={item}
                className="rounded-3xl bg-white p-5 shadow-sm ring-1 ring-slate-200"
              >
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-blue-600" />
                  <p className="font-bold">{item}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mx-auto mt-12 max-w-7xl rounded-[2rem] bg-white p-6 shadow-sm ring-1 ring-slate-200">
          <h3 className="text-2xl font-black">Grade and level coverage</h3>
          <div className="mt-5 flex flex-wrap gap-3">
            {gradeGroups.map((item) => (
              <span
                key={item}
                className="rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section
        id="videos"
        className="bg-white px-6 py-20 text-slate-950 lg:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <SectionIntro
            eyebrow="Video library"
            title="Recorded lessons for every key topic."
            text="The video section can grow into a full library where students choose their grade, curriculum, topic, and lesson."
          />

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <VideoCard
              title="Algebra"
              topics="Equations, inequalities, functions, sequences"
            />
            <VideoCard
              title="Geometry"
              topics="Angles, circles, constructions, mensuration"
            />
            <VideoCard
              title="Statistics"
              topics="Data handling, probability, graphs, averages"
            />
          </div>
        </div>
      </section>

      <section id="upload" className="bg-slate-950 px-6 py-20 text-white lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-blue-400">
              Assignment support
            </p>
            <h2 className="text-4xl font-black tracking-tight sm:text-5xl">
              Upload completed maths work for review.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-300">
              This is one part of the platform: students can submit homework,
              tests, scanned work, or documents so the tutor can check
              understanding and give feedback.
            </p>

            <div className="mt-8 grid gap-4">
              <InfoPoint
                icon={<Clock3 className="h-5 w-5" />}
                text="Track work by student, grade, and topic."
              />
              <InfoPoint
                icon={<ShieldCheck className="h-5 w-5" />}
                text="Later we can add login and secure file storage."
              />
              <InfoPoint
                icon={<FileText className="h-5 w-5" />}
                text="Useful for marking, corrections, and progress records."
              />
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/10 p-4 shadow-2xl backdrop-blur-xl">
            <div className="rounded-[1.5rem] bg-white p-6 text-slate-950 shadow-xl sm:p-8">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-100 text-blue-600">
                  <UploadCloud className="h-6 w-6" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold">Upload Assignment</h2>
                  <p className="text-sm text-slate-500">
                    Student submission form
                  </p>
                </div>
              </div>

              <form
                className="space-y-4"
                onSubmit={(event) => event.preventDefault()}
              >
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="Student name" placeholder="e.g. Brian Kiptoo" />
                  <Field
                    label="Class / Grade"
                    placeholder="e.g. Form 2 or Year 10"
                  />
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <Field
                    label="Curriculum"
                    placeholder="e.g. CBC, KCSE, IGCSE"
                  />
                  <Field
                    label="Topic"
                    placeholder="e.g. Quadratic equations"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-700">
                    Assignment file
                  </label>
                  <label className="flex cursor-pointer flex-col items-center justify-center rounded-3xl border-2 border-dashed border-slate-300 bg-slate-50 px-5 py-8 text-center transition hover:border-blue-400 hover:bg-blue-50">
                    <UploadCloud className="mb-3 h-10 w-10 text-blue-500" />
                    <span className="text-sm font-semibold text-slate-800">
                      Click to choose a file
                    </span>
                    <span className="mt-1 text-xs text-slate-500">
                      PDF, photo, Word document, or scanned work
                    </span>
                    <input
                      type="file"
                      className="hidden"
                      accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                      onChange={handleFileChange}
                    />
                  </label>

                  {selectedFile && (
                    <div className="mt-3 flex items-center gap-2 rounded-2xl bg-green-50 px-4 py-3 text-sm font-medium text-green-700">
                      <FileText className="h-4 w-4" />
                      {selectedFile.name}
                    </div>
                  )}
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-700">
                    Message to tutor optional
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Any question or comment about the assignment?"
                    className="w-full resize-none rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-blue-400 focus:ring-4 focus:ring-blue-100"
                  />
                </div>

                <button className="flex w-full items-center justify-center gap-2 rounded-2xl bg-slate-950 px-5 py-4 font-bold text-white transition hover:bg-blue-600">
                  Submit Assignment
                  <ArrowRight className="h-5 w-5" />
                </button>

                <p className="text-center text-xs text-slate-500">
                  Upload connection will be added next using storage and a
                  database.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="bg-blue-600 px-6 py-20 text-white lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-blue-100">
              Get started
            </p>
            <h2 className="text-4xl font-black tracking-tight sm:text-5xl">
              Ready to improve in maths?
            </h2>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-blue-50">
              Join live lessons, access video lessons, submit assignments, and
              prepare for exams with structured support.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href="#programmes"
              className="rounded-full bg-white px-7 py-4 text-center font-bold text-blue-700 hover:bg-blue-50"
            >
              View Programmes
            </a>
            <a
              href="#upload"
              className="rounded-full border border-white/40 px-7 py-4 text-center font-bold text-white hover:bg-white/10"
            >
              Upload Work
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

function SectionIntro({ eyebrow, title, text }) {
  return (
    <div className="max-w-3xl">
      <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
        {eyebrow}
      </p>
      <h2 className="text-4xl font-black tracking-tight sm:text-5xl">
        {title}
      </h2>
      <p className="mt-4 text-lg leading-8 text-slate-600">{text}</p>
    </div>
  );
}

function Field({ label, placeholder }) {
  return (
    <div>
      <label className="mb-2 block text-sm font-semibold text-slate-700">
        {label}
      </label>
      <input
        type="text"
        placeholder={placeholder}
        className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-blue-400 focus:ring-4 focus:ring-blue-100"
      />
    </div>
  );
}

function Stat({ value, label }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/10 p-4 backdrop-blur">
      <p className="text-2xl font-black">{value}</p>
      <p className="mt-1 text-sm text-slate-300">{label}</p>
    </div>
  );
}

function HeroService({ icon, title, text }) {
  return (
    <div className="flex gap-4 rounded-3xl border border-slate-200 bg-slate-50 p-4">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-blue-100 text-blue-600">
        {icon}
      </div>
      <div>
        <h3 className="font-bold">{title}</h3>
        <p className="mt-1 text-sm leading-6 text-slate-600">{text}</p>
      </div>
    </div>
  );
}

function Feature({ icon, title, description }) {
  return (
    <div className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-100 text-blue-600">
        {icon}
      </div>
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="mt-3 leading-7 text-slate-600">{description}</p>
    </div>
  );
}

function VideoCard({ title, topics }) {
  return (
    <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm">
      <div className="flex aspect-video items-center justify-center bg-slate-950 text-white">
        <MonitorPlay className="h-14 w-14" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-black">{title}</h3>
        <p className="mt-2 leading-7 text-slate-600">{topics}</p>
        <button className="mt-5 inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-sm font-bold text-blue-700">
          View lessons <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}

function InfoPoint({ icon, text }) {
  return (
    <div className="flex items-center gap-3 rounded-3xl border border-white/10 bg-white/10 p-4 text-slate-200">
      <div className="text-blue-300">{icon}</div>
      <p>{text}</p>
    </div>
  );
}
