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
  Lock,
  LogIn,
  MonitorPlay,
  RefreshCw,
  UploadCloud,
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
  "Video Lesson",
  "Practice Questions",
  "E-book / PDF Notes",
  "Past Paper",
  "Worksheet",
  "Formula Sheet",
  "Quiz",
  "Revision Guide",
  "Marking Scheme",
];

const topics = [
  "Algebra",
  "Geometry",
  "Trigonometry",
  "Statistics & Probability",
  "Calculus",
  "Number Work",
  "Linear Equations",
  "Quadratic Equations",
  "Mensuration",
  "Vectors",
  "Matrices",
  "Functions",
  "Sequences and Series",
  "Exam Revision",
  "General Mathematics",
];

const terms = ["Term 1", "Term 2", "Term 3", "Full Year", "Exam Revision"];

const accessLevels = ["Free", "Members Only", "Paid Resource"];

const publishStatuses = ["Draft", "Published"];

export default function AdminResourcesPage() {
  const [password, setPassword] = useState("");
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [educationSystem, setEducationSystem] = useState("");
  const [studentClass, setStudentClass] = useState("");
  const [selectedFileName, setSelectedFileName] = useState("");
  const [resources, setResources] = useState([]);
  const [status, setStatus] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isUploading, setIsUploading] = useState(false);

  const classOptions = educationSystem
    ? educationSystems[educationSystem] || []
    : [];

  async function loadResources(adminPassword) {
    setIsLoading(true);
    setStatus("");

    try {
      const response = await fetch("/api/admin/resources", {
        headers: {
          "x-admin-password": adminPassword,
        },
      });

      const result = await response.json();

      if (!response.ok) {
        setStatus(result.error || "Could not load resources.");
        setIsUnlocked(false);
        return;
      }

      setResources(result.resources || []);
      setIsUnlocked(true);
      setStatus("Resources loaded successfully.");
    } catch (error) {
      setStatus(`Could not load resources. ${error.message}`);
    } finally {
      setIsLoading(false);
    }
  }

  function handleLogin(event) {
    event.preventDefault();

    if (!password) {
      setStatus("Enter your admin password.");
      return;
    }

    loadResources(password);
  }

  async function handleUpload(event) {
    event.preventDefault();

    setIsUploading(true);
    setStatus("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("/api/admin/resources", {
        method: "POST",
        headers: {
          "x-admin-password": password,
        },
        body: formData,
      });

      const result = await response.json();

      if (!response.ok) {
        setStatus(result.error || "Resource upload failed.");
        return;
      }

      setStatus("Resource uploaded successfully.");
      form.reset();
      setEducationSystem("");
      setStudentClass("");
      setSelectedFileName("");
      loadResources(password);
    } catch (error) {
      setStatus(`Resource upload failed. ${error.message}`);
    } finally {
      setIsUploading(false);
    }
  }

  if (!isUnlocked) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-slate-950 px-6 text-white">
        <div className="w-full max-w-md rounded-[2rem] border border-white/10 bg-white/10 p-8 shadow-2xl backdrop-blur">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-600">
            <Lock className="h-8 w-8" />
          </div>

          <h1 className="text-center text-3xl font-black">Resource Manager</h1>
          <p className="mt-3 text-center text-slate-300">
            Enter your admin password to upload and manage student resources.
          </p>

          <form onSubmit={handleLogin} className="mt-8 space-y-4">
            <input
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              placeholder="Enter admin password"
              className="w-full rounded-xl border border-white/10 bg-white px-4 py-3 text-slate-950 outline-none focus:border-blue-400 focus:ring-4 focus:ring-blue-500/20"
            />

            <button
              type="submit"
              disabled={isLoading}
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-4 font-black text-white hover:bg-blue-500 disabled:cursor-not-allowed disabled:bg-slate-500"
            >
              {isLoading ? "Loading..." : "Open Resource Manager"}
              <LogIn className="h-5 w-5" />
            </button>
          </form>

          {status && (
            <p className="mt-4 rounded-xl bg-white/10 px-4 py-3 text-center text-sm font-bold text-slate-200">
              {status}
            </p>
          )}

          <a
            href="/admin"
            className="mt-6 block text-center text-sm font-bold text-blue-300 hover:text-blue-200"
          >
            Back to admin dashboard
          </a>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-50 text-slate-950">
      <header className="bg-slate-950 px-6 py-6 text-white lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-blue-700">
              <GraduationCap className="h-7 w-7" />
            </div>

            <div>
              <p className="text-lg font-black">
                MATHS <span className="text-blue-400">GURU</span> ACADEMY
              </p>
              <p className="text-sm text-slate-300">
                Admin Resource Upload Centre
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href="/admin"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/30 px-5 py-3 font-bold hover:bg-white/10"
            >
              <ArrowLeft className="h-5 w-5" />
              Dashboard
            </a>

            <button
              onClick={() => loadResources(password)}
              disabled={isLoading}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3 font-bold text-white hover:bg-blue-500 disabled:bg-slate-500"
            >
              Refresh
              <RefreshCw className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>

      <section className="px-6 py-8 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 md:grid-cols-3">
            <StatCard
              icon={<LibraryBig />}
              title="Total Resources"
              value={resources.length}
              color="bg-blue-600"
            />
            <StatCard
              icon={<CheckCircle2 />}
              title="Published"
              value={
                resources.filter((item) => item.publish_status === "Published")
                  .length
              }
              color="bg-emerald-600"
            />
            <StatCard
              icon={<FileText />}
              title="Drafts"
              value={
                resources.filter((item) => item.publish_status === "Draft")
                  .length
              }
              color="bg-orange-600"
            />
          </div>

          {status && (
            <div className="mt-6 rounded-2xl bg-blue-50 px-5 py-4 text-sm font-bold text-blue-700">
              {status}
            </div>
          )}

          <div className="mt-8 grid gap-8 xl:grid-cols-[0.9fr_1.1fr]">
            <form
              onSubmit={handleUpload}
              className="rounded-[2rem] bg-white p-6 shadow-sm ring-1 ring-slate-200 lg:p-8"
            >
              <div className="mb-6">
                <p className="mb-3 inline-flex rounded-full bg-blue-50 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-blue-700">
                  Upload Resource
                </p>
                <h1 className="text-3xl font-black">Add Learning Material</h1>
                <p className="mt-2 text-slate-600">
                  Upload videos, notes, past papers, worksheets, formula sheets,
                  quizzes, and revision guides.
                </p>
              </div>

              <FormField
                label="Resource Title"
                name="title"
                placeholder="e.g. Form 2 Quadratic Equations Notes"
                required
              />

              <div className="mt-5">
                <label className="mb-2 block text-sm font-black text-slate-700">
                  Description Optional
                </label>
                <textarea
                  name="description"
                  rows={3}
                  placeholder="Briefly describe what this resource covers."
                  className="w-full resize-none rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                />
              </div>

              <div className="mt-5 grid gap-5 md:grid-cols-2">
                <SelectField
                  label="Education System"
                  name="educationSystem"
                  value={educationSystem}
                  onChange={(event) => {
                    setEducationSystem(event.target.value);
                    setStudentClass("");
                  }}
                  options={Object.keys(educationSystems)}
                  placeholder="Select education system"
                  required
                />

                {educationSystem && (
                  <SelectField
                    label="Class / Level"
                    name="studentClass"
                    value={studentClass}
                    onChange={(event) => setStudentClass(event.target.value)}
                    options={classOptions}
                    placeholder="Select class / level"
                    required
                  />
                )}
              </div>

              <div className="mt-5 grid gap-5 md:grid-cols-2">
                <SelectField
                  label="Resource Type"
                  name="resourceType"
                  options={resourceTypes}
                  placeholder="Select resource type"
                  required
                />

                <SelectField
                  label="Topic"
                  name="topic"
                  options={topics}
                  placeholder="Select topic"
                  required
                />
              </div>

              <div className="mt-5 grid gap-5 md:grid-cols-3">
                <SelectField
                  label="Term"
                  name="term"
                  options={terms}
                  placeholder="Select term"
                />

                <SelectField
                  label="Access Level"
                  name="accessLevel"
                  options={accessLevels}
                  placeholder="Select access"
                  required
                />

                <SelectField
                  label="Publish Status"
                  name="publishStatus"
                  options={publishStatuses}
                  placeholder="Select status"
                  required
                />
              </div>

              <div className="mt-5">
                <FormField
                  label="External Link Optional"
                  name="externalUrl"
                  placeholder="YouTube, Vimeo, Google Drive, or any resource link"
                  type="url"
                />
              </div>

              <div className="mt-5">
                <label className="mb-2 block text-sm font-black text-slate-700">
                  Upload File Optional
                </label>

                <label className="flex cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed border-slate-300 bg-slate-50 px-5 py-10 text-center transition hover:border-blue-500 hover:bg-blue-50">
                  <UploadCloud className="mb-3 h-12 w-12 text-blue-600" />

                  <span className="text-sm font-black text-slate-800">
                    Click to upload resource file
                  </span>

                  <span className="mt-1 text-xs text-slate-500">
                    PDF, Word, PowerPoint, Excel, Image, or MP4
                  </span>

                  <input
                    type="file"
                    name="file"
                    accept=".pdf,.doc,.docx,.ppt,.pptx,.xls,.xlsx,.jpg,.jpeg,.png,.mp4"
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

              <button
                type="submit"
                disabled={isUploading}
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-4 font-black text-white shadow-lg shadow-blue-600/20 hover:bg-blue-500 disabled:cursor-not-allowed disabled:bg-slate-400"
              >
                {isUploading ? "Uploading Resource..." : "Upload Resource"}
                <UploadCloud className="h-5 w-5" />
              </button>
            </form>

            <section className="rounded-[2rem] bg-white p-6 shadow-sm ring-1 ring-slate-200 lg:p-8">
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <h2 className="text-3xl font-black">Recent Resources</h2>
                  <p className="mt-2 text-slate-600">
                    Uploaded learning materials will appear here.
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                {resources.map((item) => (
                  <div
                    key={item.id}
                    className="rounded-2xl border border-slate-200 bg-slate-50 p-5"
                  >
                    <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                      <div>
                        <h3 className="text-lg font-black">{item.title}</h3>
                        <p className="mt-1 text-sm text-slate-600">
                          {item.education_system} — {item.student_class}
                        </p>
                        <p className="mt-1 text-sm text-slate-600">
                          {item.resource_type} • {item.topic}
                        </p>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        <Badge text={item.publish_status} />
                        <Badge text={item.access_level} />
                      </div>
                    </div>

                    {item.description && (
                      <p className="mt-3 text-sm leading-6 text-slate-600">
                        {item.description}
                      </p>
                    )}

                    <div className="mt-4 flex flex-wrap gap-3">
                      {item.file_url && (
                        <a
                          href={item.file_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-4 py-2 text-sm font-bold text-white hover:bg-blue-500"
                        >
                          Open File
                          <Download className="h-4 w-4" />
                        </a>
                      )}

                      {item.external_url && (
                        <a
                          href={item.external_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-4 py-2 text-sm font-bold hover:bg-slate-100"
                        >
                          Open Link
                          <MonitorPlay className="h-4 w-4" />
                        </a>
                      )}
                    </div>
                  </div>
                ))}

                {resources.length === 0 && (
                  <div className="rounded-2xl bg-slate-50 p-10 text-center">
                    <LibraryBig className="mx-auto h-12 w-12 text-slate-400" />
                    <h3 className="mt-4 font-black">No resources yet</h3>
                    <p className="mt-2 text-sm text-slate-500">
                      Upload your first resource using the form.
                    </p>
                  </div>
                )}
              </div>
            </section>
          </div>
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

function SelectField({
  label,
  name,
  value,
  onChange,
  options,
  placeholder,
  required,
}) {
  return (
    <div>
      <label className="mb-2 block text-sm font-black text-slate-700">
        {label}
      </label>

      <select
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
      >
        <option value="">{placeholder}</option>
        {options.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
}

function StatCard({ icon, title, value, color }) {
  return (
    <div className="rounded-[2rem] bg-white p-6 shadow-sm ring-1 ring-slate-200">
      <div className="flex items-center gap-5">
        <div
          className={`flex h-14 w-14 items-center justify-center rounded-2xl ${color} text-white`}
        >
          {React.cloneElement(icon, { className: "h-7 w-7" })}
        </div>
        <div>
          <p className="text-sm font-bold text-slate-500">{title}</p>
          <p className="text-4xl font-black">{value}</p>
        </div>
      </div>
    </div>
  );
}

function Badge({ text }) {
  return (
    <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-black text-blue-700">
      {text || "N/A"}
    </span>
  );
}
