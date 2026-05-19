"use client";

import React, { useState } from "react";
import {
  ArrowLeft,
  BookOpen,
  CalendarDays,
  CheckCircle2,
  Clock3,
  GraduationCap,
  Mail,
  MessageCircle,
  MonitorPlay,
  Phone,
  Users,
} from "lucide-react";

const educationSystems = {
  CBC: [
    "Grade 4",
    "Grade 5",
    "Grade 6",
    "Grade 7",
    "Grade 8",
    "Grade 9",
  ],

  "8-4-4 / KCSE": [
    "Form 1",
    "Form 2",
    "Form 3",
    "Form 4",
  ],

  IGCSE: [
    "Year 7",
    "Year 8",
    "Year 9",
    "Year 10",
    "Year 11",
  ],

  "Cambridge A Level": [
    "AS Level",
    "A2 Level",
  ],

  IB: [
    "MYP 1",
    "MYP 2",
    "MYP 3",
    "MYP 4",
    "MYP 5",
    "IB DP Year 1",
    "IB DP Year 2",
  ],

  "SAT / AP Prep": [
    "SAT Maths Prep",
    "AP Precalculus",
    "AP Calculus AB",
    "AP Calculus BC",
    "AP Statistics",
  ],
};

const lessonTypes = [
  "One-on-one lesson",
  "Group lesson",
  "Exam revision lesson",
  "Homework support lesson",
  "Topic catch-up lesson",
];

const preferredTimes = [
  "Morning",
  "Afternoon",
  "Evening",
  "Weekend",
  "I am flexible",
];

export default function LiveLessonsPage() {
  const [educationSystem, setEducationSystem] = useState("");
  const [studentClass, setStudentClass] = useState("");
  const [formStatus, setFormStatus] = useState("");

  const classOptions = educationSystem
    ? educationSystems[educationSystem] || []
    : [];

  function handleSubmit(event) {
    event.preventDefault();

    setFormStatus(
      "Your live lesson request has been received. We will contact you shortly."
    );

    event.currentTarget.reset();
    setEducationSystem("");
    setStudentClass("");
  }

  return (
    <main className="min-h-screen bg-slate-50 text-slate-950">
      <header className="bg-slate-950 px-6 py-5 text-white lg:px-8">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <a href="/" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-blue-700">
              <GraduationCap className="h-7 w-7" />
            </div>

            <div>
              <p className="text-lg font-black">
                MATHS <span className="text-blue-400">GURU</span>
              </p>
              <p className="text-xs tracking-[0.25em] text-slate-300">
                ACADEMY
              </p>
            </div>
          </a>

          <a
            href="/"
            className="inline-flex items-center gap-2 rounded-xl border border-white/30 px-4 py-2 text-sm font-bold hover:bg-white/10"
          >
            <ArrowLeft className="h-4 w-4" />
            Back Home
          </a>
        </div>
      </header>

      <section className="relative overflow-hidden bg-slate-950 px-6 pb-20 pt-14 text-white lg:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_20%,rgba(37,99,235,0.35),transparent_35%)]" />

        <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-center">
          <div>
            <p className="mb-4 inline-flex rounded-full bg-blue-950 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-blue-200">
              Live Maths Lessons
            </p>

            <h1 className="max-w-4xl text-4xl font-black tracking-tight md:text-6xl">
              Book a live maths lesson for your level.
            </h1>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
              Choose your education system, class, and lesson type. We will
              contact you to confirm the best lesson time and support option.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <HeroPoint
                icon={<MonitorPlay className="h-5 w-5" />}
                title="Online Lessons"
                text="Learn from anywhere"
              />
              <HeroPoint
                icon={<Users className="h-5 w-5" />}
                title="Tutor Support"
                text="Ask questions live"
              />
              <HeroPoint
                icon={<BookOpen className="h-5 w-5" />}
                title="Exam Focused"
                text="Practise key topics"
              />
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/10 p-5 shadow-2xl backdrop-blur">
            <div className="rounded-[1.5rem] bg-white p-6 text-slate-950">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
                    Lesson Request
                  </p>
                  <h2 className="mt-2 text-3xl font-black">
                    How it works
                  </h2>
                </div>

                <div className="rounded-2xl bg-blue-600 p-4 text-white">
                  <CalendarDays className="h-7 w-7" />
                </div>
              </div>

              <div className="mt-6 space-y-4">
                <StepCard
                  number="1"
                  title="Choose your level"
                  text="Select your curriculum and class."
                />
                <StepCard
                  number="2"
                  title="Pick lesson type"
                  text="Choose one-on-one, group, revision, or homework support."
                />
                <StepCard
                  number="3"
                  title="Get confirmation"
                  text="We contact you with the lesson time and details."
                />
              </div>

              <div className="mt-6 rounded-2xl bg-slate-950 p-5 text-white">
                <p className="text-sm text-slate-300">Need help quickly?</p>
                <p className="mt-2 font-bold">Call: 0704155710</p>
                <p className="text-sm text-slate-300">
                  mathsguruacademy@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="-mt-10 px-6 pb-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.75fr_1.25fr]">
          <aside className="rounded-[2rem] bg-white p-6 shadow-xl ring-1 ring-slate-200">
            <h2 className="text-2xl font-black">Live Lesson Options</h2>

            <div className="mt-6 space-y-4">
              <InfoItem
                icon={<MonitorPlay className="h-5 w-5" />}
                title="One-on-one lessons"
                text="Personal attention for weak areas and faster improvement."
              />

              <InfoItem
                icon={<Users className="h-5 w-5" />}
                title="Group lessons"
                text="Structured online lessons with other students at a similar level."
              />

              <InfoItem
                icon={<Clock3 className="h-5 w-5" />}
                title="Revision support"
                text="Focused exam revision, past paper practice, and topic review."
              />

              <InfoItem
                icon={<MessageCircle className="h-5 w-5" />}
                title="Homework support"
                text="Help with difficult questions, corrections, and guided practice."
              />
            </div>
          </aside>

          <form
            onSubmit={handleSubmit}
            className="rounded-[2rem] bg-white p-6 shadow-xl ring-1 ring-slate-200 lg:p-8"
          >
            <div className="mb-8">
              <h2 className="text-3xl font-black">Book a Live Lesson</h2>
              <p className="mt-2 text-slate-600">
                Fill in the details below. We will contact you to confirm the
                lesson arrangement.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              <FormField
                label="Student Name"
                name="studentName"
                placeholder="e.g. Brian Kiptoo"
                required
              />

              <FormField
                label="Parent / Guardian Phone"
                name="phone"
                placeholder="e.g. 0704155710"
                required
              />
            </div>

            <div className="mt-5 grid gap-5 md:grid-cols-2">
              <FormField
                label="Email Optional"
                name="email"
                type="email"
                placeholder="e.g. parent@email.com"
              />

              <div>
                <label className="mb-2 block text-sm font-black text-slate-700">
                  Preferred Time
                </label>

                <select
                  name="preferredTime"
                  required
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                >
                  <option value="">Select preferred time</option>
                  {preferredTimes.map((time) => (
                    <option key={time} value={time}>
                      {time}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="mt-5 grid gap-5 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-black text-slate-700">
                  Education System
                </label>

                <select
                  name="educationSystem"
                  value={educationSystem}
                  onChange={(event) => {
                    setEducationSystem(event.target.value);
                    setStudentClass("");
                  }}
                  required
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                >
                  <option value="">Select education system</option>
                  {Object.keys(educationSystems).map((system) => (
                    <option key={system} value={system}>
                      {system}
                    </option>
                  ))}
                </select>
              </div>

              {educationSystem && (
                <div>
                  <label className="mb-2 block text-sm font-black text-slate-700">
                    Class / Level
                  </label>

                  <select
                    name="studentClass"
                    value={studentClass}
                    onChange={(event) => setStudentClass(event.target.value)}
                    required
                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                  >
                    <option value="">Select class / level</option>
                    {classOptions.map((item) => (
                      <option key={item} value={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                </div>
              )}
            </div>

            {educationSystem && studentClass && (
              <>
                <div className="mt-5 grid gap-5 md:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-black text-slate-700">
                      Lesson Type
                    </label>

                    <select
                      name="lessonType"
                      required
                      className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                    >
                      <option value="">Select lesson type</option>
                      {lessonTypes.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>

                  <FormField
                    label="Topic Optional"
                    name="topic"
                    placeholder="e.g. Quadratic Equations"
                  />
                </div>

                <div className="mt-5">
                  <label className="mb-2 block text-sm font-black text-slate-700">
                    Message Optional
                  </label>

                  <textarea
                    name="message"
                    rows={4}
                    placeholder="Tell us what the student needs help with."
                    className="w-full resize-none rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                  />
                </div>

                <button
                  type="submit"
                  className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-4 font-black text-white shadow-lg shadow-blue-600/20 hover:bg-blue-500"
                >
                  Submit Live Lesson Request
                  <CalendarDays className="h-5 w-5" />
                </button>

                {formStatus && (
                  <div className="mt-5 flex items-center gap-3 rounded-xl bg-green-50 px-4 py-3 text-sm font-bold text-green-700">
                    <CheckCircle2 className="h-5 w-5" />
                    {formStatus}
                  </div>
                )}
              </>
            )}

            {!educationSystem && (
              <div className="mt-6 rounded-2xl bg-blue-50 p-5 text-sm font-bold text-blue-700">
                Start by selecting your education system.
              </div>
            )}

            {educationSystem && !studentClass && (
              <div className="mt-6 rounded-2xl bg-blue-50 p-5 text-sm font-bold text-blue-700">
                Now select your class or level for {educationSystem}.
              </div>
            )}
          </form>
        </div>
      </section>

      <section className="bg-slate-950 px-6 py-14 text-white lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-3">
          <ContactCard
            icon={<Phone className="h-6 w-6" />}
            title="Phone"
            text="0704155710"
            href="tel:0704155710"
          />
          <ContactCard
            icon={<Mail className="h-6 w-6" />}
            title="Email"
            text="mathsguruacademy@gmail.com"
            href="mailto:mathsguruacademy@gmail.com"
          />
          <ContactCard
            icon={<CalendarDays className="h-6 w-6" />}
            title="Lesson Booking"
            text="Book online and wait for confirmation."
          />
        </div>
      </section>
    </main>
  );
}

function FormField({ label, name, placeholder, required, type = "text" }) {
  return (
    <div>
      <label className="mb-2 block text-sm font-black text-slate-700">
        {label}
      </label>

      <input
        type={type}
        name={name}
        placeholder={placeholder}
        required={required}
        className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
      />
    </div>
  );
}

function HeroPoint({ icon, title, text }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur">
      <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-white">
        {icon}
      </div>
      <h3 className="font-black">{title}</h3>
      <p className="mt-1 text-sm text-slate-300">{text}</p>
    </div>
  );
}

function StepCard({ number, title, text }) {
  return (
    <div className="flex gap-4 rounded-2xl bg-slate-50 p-4">
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-blue-600 font-black text-white">
        {number}
      </div>

      <div>
        <h3 className="font-black">{title}</h3>
        <p className="mt-1 text-sm leading-6 text-slate-600">{text}</p>
      </div>
    </div>
  );
}

function InfoItem({ icon, title, text }) {
  return (
    <div className="flex gap-4 rounded-2xl bg-slate-50 p-4">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-blue-700">
        {icon}
      </div>

      <div>
        <h3 className="font-black">{title}</h3>
        <p className="mt-1 text-sm leading-6 text-slate-600">{text}</p>
      </div>
    </div>
  );
}

function ContactCard({ icon, title, text, href }) {
  const content = (
    <div className="rounded-[2rem] border border-white/10 bg-white/10 p-6">
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600 text-white">
        {icon}
      </div>
      <h3 className="text-xl font-black">{title}</h3>
      <p className="mt-2 text-slate-300">{text}</p>
    </div>
  );

  if (href) {
    return (
      <a href={href} className="transition hover:-translate-y-1">
        {content}
      </a>
    );
  }

  return content;
}
