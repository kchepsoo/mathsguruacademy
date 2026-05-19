import { put } from "@vercel/blob";
import { NextResponse } from "next/server";

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
  return value
    .toString()
    .trim()
    .replace(/[^a-zA-Z0-9-_]/g, "-")
    .replace(/-+/g, "-")
    .toLowerCase();
}

export async function POST(request) {
  try {
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
        uploadedAt: new Date().toISOString(),
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
