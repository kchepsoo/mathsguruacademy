import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
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

    await resend.emails.send({
      from: "Maths Guru Academy <onboarding@resend.dev>",
      to: "mathsguruacademy@gmail.com",
      subject: `New Live Lesson Request - ${studentName}`,
      html: `
        <h2>New Live Lesson Request</h2>

        <p><strong>Student Name:</strong> ${studentName}</p>
        <p><strong>Parent / Guardian Phone:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email || "Not provided"}</p>
        <p><strong>Preferred Time:</strong> ${preferredTime}</p>

        <hr />

        <p><strong>Education System:</strong> ${educationSystem}</p>
        <p><strong>Class / Level:</strong> ${studentClass}</p>
        <p><strong>Lesson Type:</strong> ${lessonType}</p>
        <p><strong>Topic:</strong> ${topic || "Not provided"}</p>

        <hr />

        <p><strong>Message:</strong></p>
        <p>${message || "No message provided."}</p>
      `,
    });

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
