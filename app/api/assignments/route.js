import { put } from "@vercel/blob";
import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB

const allowedFileTypes = [
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  "image/jpeg",
  "image/png",
];

function cleanFileName(value) {
  return String(value || "")
    .trim()
    .replace(/[^a-zA-Z0-9-_]/g, "-")
    .replace(/-+/g, "-")
    .toLowerCase();
}

function escapeHtml(value) {
  return String(value || "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export async function POST(request) {
  try {
    const resendApiKey = process.env.RESEND_API_KEY;

    if (!resendApiKey) {
      return NextResponse.json(
        {
          success: false,
          error: "Missing RESEND_API_KEY in Vercel environment variables.",
        },
        { status: 500 }
      );
    }

    const resend = new Resend(resendApiKey);

    const formData = await request.formData();

    const studentName = formData.get("studentName");
    const phone = formData.get("phone");
    const educationSystem = formData.get("educationSystem");
    const studentClass = formData.get("studentClass");
    const topic = formData.get("topic");
    const tutorName = formData.get("tutorName");
    const message = formData.get("message");
    const file = formData.get("file");

    if (
      !studentName ||
      !educationSystem ||
      !studentClass ||
      !topic ||
      !file ||
      typeof file === "string"
    ) {
      return NextResponse.json(
        {
          success: false,
          error:
            "Please fill in student name, education system, class, topic, and attach a file.",
        },
        { status: 400 }
      );
    }

    if (file.size > MAX_FILE_SIZE) {
      return NextResponse.json(
        {
          success: false,
          error: "File is too large. Maximum allowed file size is 10MB.",
        },
        { status: 400 }
      );
    }

    if (!allowedFileTypes.includes(file.type)) {
      return NextResponse.json(
        {
          success: false,
          error: "Only PDF, Word documents, JPG, and PNG files are allowed.",
        },
        { status: 400 }
      );
    }

    const safeStudentName = cleanFileName(studentName);
    const safeEducationSystem = cleanFileName(educationSystem);
    const safeClass = cleanFileName(studentClass);
    const safeTopic = cleanFileName(topic);
    const originalFileName = cleanFileName(file.name);

    const uploadPath = `assignments/${safeEducationSystem}/${safeClass}/${Date.now()}-${safeStudentName}-${safeTopic}-${originalFileName}`;

    const blob = await put(uploadPath, file, {
      access: "public",
      addRandomSuffix: true,
    });

    const uploadedAt = new Date().toISOString();

    const emailResult = await resend.emails.send({
      from: "Maths Guru Academy <noreply@mathsguruacademy.com>",
      to: ["mathsguruacademy@gmail.com"],
      replyTo: "mathsguruacademy@gmail.com",
      subject: `New Assignment Uploaded - ${escapeHtml(studentName)}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6;">
          <h2>New Assignment Uploaded</h2>

          <p><strong>Student Name:</strong> ${escapeHtml(studentName)}</p>
          <p><strong>Parent / Guardian Phone:</strong> ${escapeHtml(phone) || "Not provided"}</p>

          <hr />

          <p><strong>Education System:</strong> ${escapeHtml(educationSystem)}</p>
          <p><strong>Class / Level:</strong> ${escapeHtml(studentClass)}</p>
          <p><strong>Maths Topic:</strong> ${escapeHtml(topic)}</p>
          <p><strong>Teacher / Tutor Name:</strong> ${escapeHtml(tutorName) || "Not provided"}</p>

          <hr />

          <p><strong>Message:</strong></p>
          <p>${escapeHtml(message) || "No message provided."}</p>

          <hr />

          <p><strong>Uploaded File:</strong></p>
          <p>
            <a href="${blob.url}" target="_blank" rel="noopener noreferrer">
              Open uploaded assignment
            </a>
          </p>

          <p><strong>Original File Name:</strong> ${escapeHtml(file.name)}</p>
          <p><strong>Uploaded At:</strong> ${escapeHtml(uploadedAt)}</p>
        </div>
      `,
    });

    if (emailResult.error) {
      console.error("Resend assignment email error:", emailResult.error);

      return NextResponse.json(
        {
          success: false,
          error:
            emailResult.error.message ||
            "Assignment uploaded, but email notification failed.",
        },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Assignment uploaded successfully.",
      assignment: {
        studentName,
        phone,
        educationSystem,
        studentClass,
        topic,
        tutorName,
        message,
        fileName: file.name,
        fileUrl: blob.url,
        uploadedAt,
      },
    });
  } catch (error) {
    console.error("Assignment upload error:", error);

    return NextResponse.json(
      {
        success: false,
        error: "Something went wrong while uploading the assignment.",
      },
      { status: 500 }
    );
  }
}
