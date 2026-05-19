"use client";

import React, { useState } from "react";
import {
  ArrowLeft,
  BookOpen,
  CheckCircle2,
  FileText,
  GraduationCap,
  ShieldCheck,
  UploadCloud,
} from "lucide-react";

const educationSystems = {
  "CBC": [
    "Grade 4",
    "Grade 5",
    "Grade 6",
    "Grade 7",
    "Grade 8",
    "Grade 9",
  ],
  "8-4-4 / KCSE": [
    "Class 6",
    "Class 7",
    "Class 8",
    "Form 1",
    "Form 2",
    "Form 3",
    "Form 4",
  ],
  "IGCSE": [
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
  "IB": [
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

export default function AssignmentsPage() {
  const [educationSystem, setEducationSystem] = useState("");
  const [studentClass, setStudentClass] = useState("");
  const [selectedFileName, setSelectedFileName] = useState("");
  const [formStatus, setFormStatus] = useState("");

  const classOptions = educationSystem
    ? educationSystems[educationSystem] || []
    : [];

  function handleSubmit(event) {
    event.preventDefault();

    setFormStatus(
      "Assignment form is ready. Next we will connect this to real file upload storage."
    );
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

      <section className="bg-slate-950 px-6 pb-16 pt-12 text-white lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="mb-4 inline-flex rounded-full bg-blue-950 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-blue-200">
              Assignment Submission
            </p>

            <h1 className="text-4xl font-black tracking-tight md:text-6xl">
              Upload your completed maths assignment.
            </h1>

            <p className="mt-5 text-lg leading-8 text-slate-300">
              Select your education system first. The correct class or level
              options will appear automatically.
            </p>
          </div>
        </div>
      </section>

      <section className="-mt-10 px-6 pb-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.75fr_1.25fr]">
          <aside className="rounded-[2rem] bg-white p-6 shadow-xl ring-1 ring-slate-200">
            <h2 className="text-2xl font-black">Before You Upload</h2>

            <div className="mt-6 space-y-4">
              <InfoItem
                icon={<BookOpen className="h-5 w-5" />}
                title="Choose your system"
                text="CBC, 8-4-4 / KCSE, IGCSE, Cambridge, IB, or SAT/AP."
              />
              <InfoItem
                icon={<FileText className="h-5 w-5" />}
                title="Attach your work"
                text="You can upload PDF, Word document, photo, or scanned work."
              />
              <InfoItem
                icon={<ShieldCheck className="h-5 w-5" />}
                title="Submit for feedback"
                text="Your tutor will use the details to review your work properly."
              />
            </div>
          </aside>

          <form
            onSubmit={handleSubmit}
            className="rounded-[2rem] bg-white p-6 shadow-xl ring-1 ring-slate-200 lg:p-8"
          >
            <div className="mb-8">
              <h2 className="text-3xl font-black">Assignment Details</h2>
              <p className="mt-2 text-slate-600">
                Fill in the details below before uploading your assignment.
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
              />
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
                  <FormField
                    label="Maths Topic"
                    name="topic"
                    placeholder="e.g. Quadratic Equations"
                    required
                  />

                  <FormField
                    label="Teacher / Tutor Name Optional"
                    name="tutorName"
                    placeholder="e.g. Mr. Kiptoo"
                  />
                </div>

                <div className="mt-5">
                  <label className="mb-2 block text-sm font-black text-slate-700">
                    Assignment File
                  </label>

                  <label className="flex cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed border-slate-300 bg-slate-50 px-5 py-10 text-center transition hover:border-blue-500 hover:bg-blue-50">
                    <UploadCloud className="mb-3 h-12 w-12 text-blue-600" />

                    <span className="text-sm font-black text-slate-800">
                      Click to choose assignment file
                    </span>

                    <span className="mt-1 text-xs text-slate-500">
                      PDF, Word document, photo, or scanned work
                    </span>

                    <input
                      type="file"
                      name="file"
                      required
                      accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                      className="hidden"
                      onChange={(event) =>
                        setSelectedFileName(event.target.files?.[0]?.name || "")
                      }
                    />
                  </label>

                  {selectedFileName && (
                    <p className="mt-3 rounded-xl bg-green-50 px-4 py-3 text-sm font-bold text-green-700">
                      Selected file: {selectedFileName}
                    </p>
                  )}
                </div>

                <div className="mt-5">
                  <label className="mb-2 block text-sm font-black text-slate-700">
                    Message to Tutor Optional
                  </label>

                  <textarea
                    name="message"
                    rows={4}
                    placeholder="Write any question or comment about the assignment."
                    className="w-full resize-none rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                  />
                </div>

                <button
                  type="submit"
                  className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-4 font-black text-white shadow-lg shadow-blue-600/20 hover:bg-blue-500"
                >
                  Submit Assignment
                  <UploadCloud className="h-5 w-5" />
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
    </main>
  );
}

function FormField({ label, name, placeholder, required }) {
  return (
    <div>
      <label className="mb-2 block text-sm font-black text-slate-700">
        {label}
      </label>

      <input
        type="text"
        name={name}
        placeholder={placeholder}
        required={required}
        className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
      />
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
