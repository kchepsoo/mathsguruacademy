import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

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
    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      return NextResponse.json(
        {
          success: false,
          error: "Missing RESEND_API_KEY in Vercel environment variables.",
        },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);

    const formData = await request.formData();

    const studentName = formData.get("studentName");
    const phone = formData.get("phone");
    const email = formData.get("email");
    const preferredTime = formData.get("preferredTime");
    const educationSystem = formData.get("educationSystem");
    const studentClass = formData.get("studentClass");
    const lessonType = formData.get("lessonType");
    const topic = formData.get("topic");
    const message = formData.get("message");

    if (
      !studentName ||
      !phone ||
      !preferredTime ||
      !educationSystem ||
      !studentClass ||
      !lessonType
    ) {
      return NextResponse.json(
        {
          success: false,
          error: "Please fill in all required fields.",
        },
        { status: 400 }
      );
    }

    const emailResult = await resend.emails.send({
      from: "Maths Guru Academy <noreply@mathsguruacademy.com>",
      to: "mathsguruacademy@gmail.com",
      subject: `New Live Lesson Request - ${escapeHtml(studentName)}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6;">
          <h2>New Live Lesson Request</h2>

          <p><strong>Student Name:</strong> ${escapeHtml(studentName)}</p>
          <p><strong>Parent / Guardian Phone:</strong> ${escapeHtml(phone)}</p>
          <p><strong>Email:</strong> ${escapeHtml(email) || "Not provided"}</p>
          <p><strong>Preferred Time:</strong> ${escapeHtml(preferredTime)}</p>

          <hr />

          <p><strong>Education System:</strong> ${escapeHtml(educationSystem)}</p>
          <p><strong>Class / Level:</strong> ${escapeHtml(studentClass)}</p>
          <p><strong>Lesson Type:</strong> ${escapeHtml(lessonType)}</p>
          <p><strong>Topic:</strong> ${escapeHtml(topic) || "Not provided"}</p>

          <hr />

          <p><strong>Message:</strong></p>
          <p>${escapeHtml(message) || "No message provided."}</p>
        </div>
      `,
    });

    if (emailResult.error) {
      console.error("Resend error:", emailResult.error);

      return NextResponse.json(
        {
          success: false,
          error: emailResult.error.message || "Email failed to send.",
        },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Live lesson request sent successfully.",
    });
  } catch (error) {
    console.error("Live lesson request error:", error);

    return NextResponse.json(
      {
        success: false,
        error: "Something went wrong while sending the request.",
      },
      { status: 500 }
    );
  }
}
