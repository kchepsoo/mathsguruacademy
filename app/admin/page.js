"use client";

import React, { useState } from "react";
import {
  BookOpen,
  CalendarDays,
  CheckCircle2,
  FileText,
  GraduationCap,
  Lock,
  LogIn,
  MonitorPlay,
  RefreshCw,
  UploadCloud,
  Users,
} from "lucide-react";

export default function AdminPage() {
  const [password, setPassword] = useState("");
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [assignments, setAssignments] = useState([]);
  const [liveLessons, setLiveLessons] = useState([]);
  const [status, setStatus] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  async function loadDashboard(adminPassword) {
    setIsLoading(true);
    setStatus("");

    try {
      const [assignmentsResponse, liveLessonsResponse] = await Promise.all([
        fetch("/api/admin/assignments", {
          headers: {
            "x-admin-password": adminPassword,
          },
        }),
        fetch("/api/admin/live-lessons", {
          headers: {
            "x-admin-password": adminPassword,
          },
        }),
      ]);

      const assignmentsResult = await assignmentsResponse.json();
      const liveLessonsResult = await liveLessonsResponse.json();

      if (!assignmentsResponse.ok || !liveLessonsResponse.ok) {
        const assignmentError =
          assignmentsResult.error ||
          `Assignments API failed with status ${assignmentsResponse.status}`;

        const liveLessonError =
          liveLessonsResult.error ||
          `Live lessons API failed with status ${liveLessonsResponse.status}`;

        setStatus(
          `Dashboard could not load. Assignments: ${assignmentError} | Live lessons: ${liveLessonError}`
        );

        setIsUnlocked(false);
        return;
      }

      setAssignments(assignmentsResult.assignments || []);
      setLiveLessons(liveLessonsResult.liveLessons || []);
      setIsUnlocked(true);
      setStatus("Dashboard loaded successfully.");
    } catch (error) {
      setStatus(`Could not load dashboard. ${error.message}`);
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

    loadDashboard(password);
  }

  if (!isUnlocked) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-slate-950 px-6 text-white">
        <div className="w-full max-w-md rounded-[2rem] border border-white/10 bg-white/10 p-8 shadow-2xl backdrop-blur">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-600">
            <Lock className="h-8 w-8" />
          </div>

          <h1 className="text-center text-3xl font-black">Admin Dashboard</h1>
          <p className="mt-3 text-center text-slate-300">
            Enter your admin password to view assignment uploads and live lesson
            requests.
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
              {isLoading ? "Loading..." : "Open Dashboard"}
              <LogIn className="h-5 w-5" />
            </button>
          </form>

          {status && (
            <p className="mt-4 rounded-xl bg-white/10 px-4 py-3 text-center text-sm font-bold text-slate-200">
              {status}
            </p>
          )}

          <a
            href="/"
            className="mt-6 block text-center text-sm font-bold text-blue-300 hover:text-blue-200"
          >
            Back to website
          </a>
        </div>
      </main>
    );
  }

  const newAssignments = assignments.filter((item) => item.status === "New");
  const newLessons = liveLessons.filter((item) => item.status === "New");
  const completedAssignments = assignments.filter(
    (item) => item.status === "Completed"
  );

  return (
    <main className="min-h-screen bg-slate-50 text-slate-950">
      <aside className="fixed left-0 top-0 hidden h-screen w-72 bg-slate-950 px-6 py-8 text-white lg:block">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-blue-700">
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
        </div>

        <nav className="mt-10 space-y-3">
          <SidebarLink icon={<BookOpen />} label="Dashboard" active />
          <SidebarLink icon={<UploadCloud />} label="Assignments" />
          <SidebarLink icon={<MonitorPlay />} label="Live Lessons" />
          <SidebarLink icon={<Users />} label="Students" />
        </nav>

        <div className="absolute bottom-8 left-6 right-6 rounded-2xl border border-white/10 bg-white/10 p-5">
          <p className="text-sm font-bold">Admin access</p>
          <p className="mt-2 text-xs leading-5 text-slate-300">
            Manage student uploads, lesson bookings, and review status.
          </p>
        </div>
      </aside>

      <section className="lg:ml-72">
        <header className="border-b border-slate-200 bg-white px-6 py-6 lg:px-8">
          <div className="mx-auto flex max-w-7xl flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-3xl font-black">Admin Dashboard</h1>
              <p className="mt-1 text-slate-600">
                View student submissions and live lesson requests.
              </p>
            </div>

            <button
              onClick={() => loadDashboard(password)}
              disabled={isLoading}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3 font-bold text-white hover:bg-blue-500 disabled:bg-slate-400"
            >
              Refresh
              <RefreshCw className="h-5 w-5" />
            </button>
          </div>
        </header>

        {status && (
          <div className="mx-auto max-w-7xl px-6 pt-6 lg:px-8">
            <div className="rounded-2xl bg-blue-50 px-5 py-4 text-sm font-bold text-blue-700">
              {status}
            </div>
          </div>
        )}

        <div className="mx-auto max-w-7xl px-6 py-8 lg:px-8">
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            <StatCard
              icon={<FileText />}
              title="Assignment Submissions"
              value={assignments.length}
              color="bg-blue-600"
            />
            <StatCard
              icon={<CalendarDays />}
              title="Live Lesson Requests"
              value={liveLessons.length}
              color="bg-purple-600"
            />
            <StatCard
              icon={<UploadCloud />}
              title="Pending Reviews"
              value={newAssignments.length + newLessons.length}
              color="bg-orange-600"
            />
            <StatCard
              icon={<CheckCircle2 />}
              title="Completed"
              value={completedAssignments.length}
              color="bg-emerald-600"
            />
          </div>

          <div className="mt-8 grid gap-8 xl:grid-cols-[1.2fr_0.8fr]">
            <section className="rounded-[2rem] bg-white p-6 shadow-sm ring-1 ring-slate-200">
              <div className="mb-5 flex items-center justify-between">
                <h2 className="text-2xl font-black">
                  Recent Assignment Submissions
                </h2>
                <span className="rounded-full bg-blue-50 px-4 py-2 text-sm font-bold text-blue-700">
                  {assignments.length} total
                </span>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full min-w-[800px] text-left text-sm">
                  <thead>
                    <tr className="border-b border-slate-200 text-slate-500">
                      <th className="py-3">Student</th>
                      <th>System</th>
                      <th>Class</th>
                      <th>Topic</th>
                      <th>File</th>
                      <th>Status</th>
                      <th>Date</th>
                    </tr>
                  </thead>

                  <tbody>
                    {assignments.map((item) => (
                      <tr key={item.id} className="border-b border-slate-100">
                        <td className="py-4 font-bold">{item.student_name}</td>
                        <td>{item.education_system}</td>
                        <td>{item.student_class}</td>
                        <td>{item.topic}</td>
                        <td>
                          <a
                            href={item.file_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-bold text-blue-600 hover:underline"
                          >
                            Open file
                          </a>
                        </td>
                        <td>
                          <StatusBadge status={item.status} />
                        </td>
                        <td>{formatDate(item.created_at)}</td>
                      </tr>
                    ))}

                    {assignments.length === 0 && (
                      <tr>
                        <td
                          colSpan="7"
                          className="py-8 text-center text-slate-500"
                        >
                          No assignment submissions yet.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </section>

            <section className="rounded-[2rem] bg-white p-6 shadow-sm ring-1 ring-slate-200">
              <div className="mb-5 flex items-center justify-between">
                <h2 className="text-2xl font-black">Live Lesson Requests</h2>
                <span className="rounded-full bg-purple-50 px-4 py-2 text-sm font-bold text-purple-700">
                  {liveLessons.length} total
                </span>
              </div>

              <div className="space-y-4">
                {liveLessons.map((item) => (
                  <div
                    key={item.id}
                    className="rounded-2xl border border-slate-200 bg-slate-50 p-4"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="font-black">{item.student_name}</h3>
                        <p className="mt-1 text-sm text-slate-600">
                          {item.education_system} — {item.student_class}
                        </p>
                      </div>
                      <StatusBadge status={item.status} />
                    </div>

                    <div className="mt-4 space-y-1 text-sm text-slate-600">
                      <p>
                        <strong>Phone:</strong> {item.phone}
                      </p>
                      <p>
                        <strong>Preferred Time:</strong> {item.preferred_time}
                      </p>
                      <p>
                        <strong>Lesson Type:</strong> {item.lesson_type}
                      </p>
                      <p>
                        <strong>Topic:</strong> {item.topic || "Not provided"}
                      </p>
                      <p>
                        <strong>Date:</strong> {formatDate(item.created_at)}
                      </p>
                    </div>
                  </div>
                ))}

                {liveLessons.length === 0 && (
                  <div className="rounded-2xl bg-slate-50 p-8 text-center text-slate-500">
                    No live lesson requests yet.
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

function SidebarLink({ icon, label, active }) {
  return (
    <div
      className={`flex items-center gap-3 rounded-xl px-4 py-3 font-bold ${
        active ? "bg-blue-600 text-white" : "text-slate-300"
      }`}
    >
      {React.cloneElement(icon, { className: "h-5 w-5" })}
      {label}
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

function StatusBadge({ status }) {
  const colors = {
    New: "bg-blue-50 text-blue-700",
    Reviewed: "bg-green-50 text-green-700",
    Completed: "bg-slate-100 text-slate-700",
    Contacted: "bg-orange-50 text-orange-700",
    Scheduled: "bg-purple-50 text-purple-700",
  };

  return (
    <span
      className={`rounded-full px-3 py-1 text-xs font-black ${
        colors[status] || "bg-slate-100 text-slate-700"
      }`}
    >
      {status}
    </span>
  );
}

function formatDate(value) {
  if (!value) return "—";

  return new Date(value).toLocaleString("en-KE", {
    dateStyle: "medium",
    timeStyle: "short",
  });
}
