"use client";

import React, { useState } from "react";
import {
  ArrowLeft,
  BookOpen,
  CheckCircle2,
  Download,
  FileText,
  GraduationCap,
  LibraryBig,
  MonitorPlay,
  PenTool,
  Search,
  Trophy,
  Calculator,
  ClipboardList,
  Brain,
} from "lucide-react";

const educationSystems = {
  CBC: ["Grade 4", "Grade 5", "Grade 6", "Grade 7", "Grade 8", "Grade 9"],

  "8-4-4 / KCSE": ["Form 1", "Form 2", "Form 3", "Form 4"],

  IGCSE: ["Year 7", "Year 8", "Year 9", "Year 10", "Year 11"],

  "Cambridge A Level": ["AS Level", "A2 Level"],

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

const resourceTypes = [
  {
    title: "Video Lessons",
    description: "Recorded lessons and step-by-step topic explanations.",
    icon: <MonitorPlay className="h-6 w-6" />,
    color: "bg-blue-600",
  },
  {
    title: "Practice Questions",
    description: "Topic questions for practice, revision, and mastery.",
    icon: <PenTool className="h-6 w-6" />,
    color: "bg-emerald-600",
  },
  {
    title: "E-books & Notes",
    description: "Downloadable notes, formula sheets, and revision guides.",
    icon: <FileText className="h-6 w-6" />,
    color: "bg-purple-600",
  },
  {
    title: "Past Papers",
    description: "Exam-style questions, marking schemes, and solutions.",
    icon: <Trophy className="h-6 w-6" />,
    color: "bg-orange-600",
  },
];

const topics = [
  {
    title: "Algebra",
    description: "Equations, inequalities, functions, sequences, and polynomials.",
    videos: 12,
    questions: 80,
    notes: 6,
  },
  {
    title: "Geometry",
    description: "Angles, triangles, circles, constructions, and mensuration.",
    videos: 10,
    questions: 65,
    notes: 5,
  },
  {
    title: "Trigonometry",
    description: "Ratios, identities, graphs, equations, and applications.",
    videos: 8,
    questions: 55,
    notes: 4,
  },
  {
    title: "Statistics & Probability",
    description: "Data handling, averages, probability, graphs, and interpretation.",
    videos: 9,
    questions: 70,
    notes: 5,
  },
  {
    title: "Calculus",
    description: "Limits, differentiation, integration, and applications.",
    videos: 11,
    questions: 75,
    notes: 6,
  },
  {
    title: "Exam Revision",
    description: "Past paper practice, formulas, common mistakes, and exam tips.",
    videos: 15,
    questions: 120,
    notes: 8,
  },
];

const studyTools = [
  {
    title: "Formula Sheets",
    text: "Quick access to important formulas by topic and class.",
    icon: <Calculator className="h-5 w-5" />,
  },
  {
    title: "Topic Checklists",
    text: "Track what has been covered and what still needs practice.",
    icon: <ClipboardList className="h-5 w-5" />,
  },
  {
    title: "Quiz Practice",
    text: "Short quizzes to test understanding after each lesson.",
    icon: <Brain className="h-5 w-5" />,
  },
];

export default function ResourcesPage() {
  const [educationSystem, setEducationSystem] = useState("");
  const [studentClass, setStudentClass] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const classOptions = educationSystem
    ? educationSystems[educationSystem] || []
    : [];

  const filteredTopics = topics.filter((topic) =>
    topic.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
              Maths Learning Resources
            </p>

            <h1 className="max-w-4xl text-4xl font-black tracking-tight md:text-6xl">
              Learn with videos, notes, questions, and exam resources.
            </h1>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
              Choose your curriculum and class to access structured maths
              resources. This library will later hold videos, practice
              questions, e-books, worksheets, past papers, and revision guides.
            </p>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/10 p-5 shadow-2xl backdrop-blur">
            <div className="rounded-[1.5rem] bg-white p-6 text-slate-950">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
                    Resource Library
                  </p>
                  <h2 className="mt-2 text-3xl font-black">
                    Study support in one place
                  </h2>
                </div>

                <div className="rounded-2xl bg-blue-600 p-4 text-white">
                  <LibraryBig className="h-7 w-7" />
                </div>
              </div>

              <div className="mt-6 space-y-4">
                <MiniStep
                  title="Choose your curriculum"
                  text="CBC, KCSE, IGCSE, Cambridge, IB, or SAT/AP."
                />
                <MiniStep
                  title="Pick your class"
                  text="Find materials suitable for your current level."
                />
                <MiniStep
                  title="Study and practise"
                  text="Use videos, notes, quizzes, worksheets, and exam questions."
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="-mt-10 px-6 pb-20 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-[2rem] bg-white p-6 shadow-xl ring-1 ring-slate-200 lg:p-8">
          <div className="mb-8">
            <h2 className="text-3xl font-black">Find Resources</h2>
            <p className="mt-2 text-slate-600">
              Start by selecting your education system and class.
            </p>
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            <div>
              <label className="mb-2 block text-sm font-black text-slate-700">
                Education System
              </label>

              <select
                value={educationSystem}
                onChange={(event) => {
                  setEducationSystem(event.target.value);
                  setStudentClass("");
                }}
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
                  value={studentClass}
                  onChange={(event) => setStudentClass(event.target.value)}
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

            <div>
              <label className="mb-2 block text-sm font-black text-slate-700">
                Search Topic
              </label>

              <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3 focus-within:border-blue-500 focus-within:ring-4 focus-within:ring-blue-100">
                <Search className="h-5 w-5 text-slate-400" />
                <input
                  value={searchTerm}
                  onChange={(event) => setSearchTerm(event.target.value)}
                  placeholder="Search e.g. Algebra"
                  className="w-full text-sm outline-none"
                />
              </div>
            </div>
          </div>

          {!educationSystem && (
            <div className="mt-6 rounded-2xl bg-blue-50 p-5 text-sm font-bold text-blue-700">
              Select your education system to begin.
            </div>
          )}

          {educationSystem && !studentClass && (
            <div className="mt-6 rounded-2xl bg-blue-50 p-5 text-sm font-bold text-blue-700">
              Now select your class or level for {educationSystem}.
            </div>
          )}

          {educationSystem && studentClass && (
            <div className="mt-6 rounded-2xl bg-green-50 p-5 text-sm font-bold text-green-700">
              Showing resources for {educationSystem} — {studentClass}.
            </div>
          )}
        </div>

        <div className="mx-auto mt-10 max-w-7xl">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {resourceTypes.map((item) => (
              <ResourceTypeCard key={item.title} {...item} />
            ))}
          </div>
        </div>

        <div className="mx-auto mt-10 grid max-w-7xl gap-6 lg:grid-cols-[1fr_0.38fr]">
          <div>
            <div className="mb-5 flex items-center justify-between gap-4">
              <div>
                <h2 className="text-3xl font-black">Featured Topics</h2>
                <p className="mt-2 text-slate-600">
                  These topic cards are placeholders for now. Later, each card
                  will open real lessons, questions, and notes.
                </p>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {filteredTopics.map((topic) => (
                <TopicCard key={topic.title} topic={topic} />
              ))}
            </div>
          </div>

          <aside className="rounded-[2rem] bg-white p-6 shadow-sm ring-1 ring-slate-200">
            <h2 className="text-2xl font-black">Extra Study Tools</h2>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              These will make the platform more attractive and useful as we add
              more learning content.
            </p>

            <div className="mt-6 space-y-4">
              {studyTools.map((tool) => (
                <StudyToolCard key={tool.title} {...tool} />
              ))}
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}

function ResourceTypeCard({ icon, title, description, color }) {
  return (
    <div className="rounded-[2rem] bg-white p-6 shadow-sm ring-1 ring-slate-200 transition hover:-translate-y-1 hover:shadow-xl">
      <div
        className={`mb-5 flex h-14 w-14 items-center justify-center rounded-xl ${color} text-white`}
      >
        {icon}
      </div>

      <h3 className="text-xl font-black">{title}</h3>
      <p className="mt-3 leading-7 text-slate-600">{description}</p>
    </div>
  );
}

function TopicCard({ topic }) {
  return (
    <div className="overflow-hidden rounded-[2rem] bg-white shadow-sm ring-1 ring-slate-200 transition hover:-translate-y-1 hover:shadow-xl">
      <div className="flex aspect-video items-center justify-center bg-slate-950 text-white">
        <MonitorPlay className="h-14 w-14 text-blue-400" />
      </div>

      <div className="p-6">
        <h3 className="text-2xl font-black">{topic.title}</h3>
        <p className="mt-2 leading-7 text-slate-600">{topic.description}</p>

        <div className="mt-5 grid grid-cols-3 gap-3">
          <SmallStat label="Videos" value={topic.videos} />
          <SmallStat label="Questions" value={topic.questions} />
          <SmallStat label="Notes" value={topic.notes} />
        </div>

        <div className="mt-5 flex flex-col gap-3 sm:flex-row">
          <button className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-3 text-sm font-black text-white hover:bg-blue-500">
            View Lessons
            <MonitorPlay className="h-4 w-4" />
          </button>

          <button className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl border border-slate-200 px-4 py-3 text-sm font-black hover:bg-slate-50">
            Download
            <Download className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

function SmallStat({ label, value }) {
  return (
    <div className="rounded-xl bg-slate-50 p-3 text-center">
      <p className="text-xl font-black text-blue-600">{value}</p>
      <p className="text-xs font-bold text-slate-500">{label}</p>
    </div>
  );
}

function MiniStep({ title, text }) {
  return (
    <div className="flex gap-4 rounded-2xl bg-slate-50 p-4">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-blue-700">
        <CheckCircle2 className="h-5 w-5" />
      </div>

      <div>
        <h3 className="font-black">{title}</h3>
        <p className="mt-1 text-sm leading-6 text-slate-600">{text}</p>
      </div>
    </div>
  );
}

function StudyToolCard({ icon, title, text }) {
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
