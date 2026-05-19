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
} from "lucide-react";

export default function HomePage() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files?.[0];
    if (file) setSelectedFile(file);
  };

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.35),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(168,85,247,0.25),_transparent_35%)]" />
        <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col px-6 py-8 lg:px-8">
          <nav className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-slate-950 shadow-lg">
                <GraduationCap className="h-6 w-6" />
              </div>
              <div>
                <p className="text-lg font-bold tracking-tight">Maths Guru Academy</p>
                <p className="text-xs text-slate-300">Assignments made simple</p>
              </div>
            </div>
            <a
              href="#upload"
              className="hidden rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-slate-200 sm:inline-flex"
            >
              Upload Assignment
            </a>
          </nav>

          <div className="grid flex-1 items-center gap-12 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:py-20">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm text-slate-200 backdrop-blur">
                <CheckCircle2 className="h-4 w-4" />
                Fast assignment submission for maths students
              </div>

              <h1 className="max-w-3xl text-5xl font-black leading-tight tracking-tight sm:text-6xl lg:text-7xl">
                Submit maths assignments without stress.
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                A simple online space where students can upload completed maths work,
                include their details, and make it easier for the tutor to review,
                track, and respond quickly.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#upload"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-500 px-7 py-4 font-semibold text-white shadow-xl shadow-blue-500/25 transition hover:bg-blue-400"
                >
                  Start Uploading
                  <ArrowRight className="h-5 w-5" />
                </a>
                <a
                  href="#how-it-works"
                  className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/10 px-7 py-4 font-semibold text-white backdrop-blur transition hover:bg-white/15"
                >
                  See how it works
                </a>
              </div>

              <div className="mt-10 grid max-w-xl gap-4 sm:grid-cols-3">
                <Stat value="3" label="Simple steps" />
                <Stat value="24/7" label="Student access" />
                <Stat value="PDF" label="Image or doc upload" />
              </div>
            </motion.div>

            <motion.div
              id="upload"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="rounded-[2rem] border border-white/10 bg-white/10 p-4 shadow-2xl backdrop-blur-xl"
            >
              <div className="rounded-[1.5rem] bg-white p-6 text-slate-950 shadow-xl sm:p-8">
                <div className="mb-6 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-100 text-blue-600">
                    <UploadCloud className="h-6 w-6" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold">Upload Assignment</h2>
                    <p className="text-sm text-slate-500">Student submission form</p>
                  </div>
                </div>

                <form className="space-y-4" onSubmit={(event) => event.preventDefault()}>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <Field label="Student name" placeholder="e.g. Brian Kiptoo" />
                    <Field label="Class / Grade" placeholder="e.g. Form 2" />
                  </div>

                  <Field label="Topic" placeholder="e.g. Quadratic equations" />

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
                    Upload connection will be added next using storage and a database.
                  </p>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="how-it-works" className="bg-white px-6 py-20 text-slate-950 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
              How it works
            </p>
            <h2 className="text-4xl font-black tracking-tight sm:text-5xl">
              Built for students and tutors.
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              The first version keeps the process simple: students complete work,
              upload it, and the tutor receives clean submission details.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <Feature
              icon={<BookOpen className="h-6 w-6" />}
              title="Student completes work"
              description="They finish their maths assignment offline, on paper, PDF, or a document."
            />
            <Feature
              icon={<UploadCloud className="h-6 w-6" />}
              title="They upload online"
              description="The student enters their name, class, topic, and attaches the completed file."
            />
            <Feature
              icon={<CheckCircle2 className="h-6 w-6" />}
              title="Tutor reviews faster"
              description="Submissions become easier to track, mark, and organize by student and topic."
            />
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-6 py-20 text-slate-950 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-3">
          <InfoCard
            icon={<Clock3 className="h-6 w-6" />}
            title="Urgent-ready"
            text="We start with a usable landing page and form layout, then connect the backend step by step."
          />
          <InfoCard
            icon={<ShieldCheck className="h-6 w-6" />}
            title="Safe structure"
            text="Later we can add login, file limits, virus-safe storage rules, and teacher-only dashboard access."
          />
          <InfoCard
            icon={<FileText className="h-6 w-6" />}
            title="Easy tracking"
            text="Next versions can show submission history, status, marks, corrections, and tutor comments."
          />
        </div>
      </section>
    </main>
  );
}

function Field({ label, placeholder }) {
  return (
    <div>
      <label className="mb-2 block text-sm font-semibold text-slate-700">{label}</label>
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

function InfoCard({ icon, title, text }) {
  return (
    <div className="rounded-[2rem] bg-white p-7 shadow-sm ring-1 ring-slate-200">
      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-white">
        {icon}
      </div>
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="mt-3 leading-7 text-slate-600">{text}</p>
    </div>
  );
}
