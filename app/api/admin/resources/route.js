import { NextResponse } from "next/server";
import { put } from "@vercel/blob";
import { createSupabaseAdmin } from "@/lib/supabaseAdmin";

export const runtime = "nodejs";

const MAX_FILE_SIZE = 50 * 1024 * 1024; // 50MB

const allowedFileTypes = [
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  "application/vnd.ms-powerpoint",
  "application/vnd.openxmlformats-officedocument.presentationml.presentation",
  "application/vnd.ms-excel",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  "image/jpeg",
  "image/png",
  "video/mp4",
];

function isAuthorized(request) {
  const adminPassword = process.env.ADMIN_PASSWORD;
  const providedPassword = request.headers.get("x-admin-password");

  return adminPassword && providedPassword === adminPassword;
}

function cleanFileName(value) {
  return String(value || "")
    .trim()
    .replace(/[^a-zA-Z0-9-_]/g, "-")
    .replace(/-+/g, "-")
    .toLowerCase();
}

export async function GET(request) {
  try {
    if (!isAuthorized(request)) {
      return NextResponse.json(
        { success: false, error: "Unauthorized." },
        { status: 401 }
      );
    }

    const supabase = createSupabaseAdmin();

    const { data, error } = await supabase
      .from("learning_resources")
      .select("*")
      .order("created_at", { ascending: false })
      .limit(100);

    if (error) {
      return NextResponse.json(
        {
          success: false,
          error: `Supabase resources query error: ${error.message}`,
        },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      resources: data || [],
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: `Resources API error: ${error.message}`,
      },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  try {
    if (!isAuthorized(request)) {
      return NextResponse.json(
        { success: false, error: "Unauthorized." },
        { status: 401 }
      );
    }

    const formData = await request.formData();

    const title = formData.get("title");
    const description = formData.get("description");
    const educationSystem = formData.get("educationSystem");
    const studentClass = formData.get("studentClass");
    const resourceType = formData.get("resourceType");
    const topic = formData.get("topic");
    const term = formData.get("term");
    const accessLevel = formData.get("accessLevel");
    const publishStatus = formData.get("publishStatus");
    const externalUrl = formData.get("externalUrl");
    const file = formData.get("file");

    if (
      !title ||
      !educationSystem ||
      !studentClass ||
      !resourceType ||
      !topic ||
      !accessLevel ||
      !publishStatus
    ) {
      return NextResponse.json(
        {
          success: false,
          error: "Please fill in all required resource details.",
        },
        { status: 400 }
      );
    }

    let fileUrl = "";
    let fileName = "";

    if (file && typeof file !== "string" && file.size > 0) {
      if (file.size > MAX_FILE_SIZE) {
        return NextResponse.json(
          {
            success: false,
            error: "File is too large. Maximum allowed file size is 50MB.",
          },
          { status: 400 }
        );
      }

      if (!allowedFileTypes.includes(file.type)) {
        return NextResponse.json(
          {
            success: false,
            error:
              "Unsupported file type. Upload PDF, Word, PowerPoint, Excel, image, or MP4.",
          },
          { status: 400 }
        );
      }

      const safeSystem = cleanFileName(educationSystem);
      const safeClass = cleanFileName(studentClass);
      const safeType = cleanFileName(resourceType);
      const safeTitle = cleanFileName(title);
      const originalFileName = cleanFileName(file.name);

      const uploadPath = `resources/${safeSystem}/${safeClass}/${safeType}/${Date.now()}-${safeTitle}-${originalFileName}`;

      const blob = await put(uploadPath, file, {
        access: "public",
        addRandomSuffix: true,
      });

      fileUrl = blob.url;
      fileName = file.name;
    }

    if (!fileUrl && !externalUrl) {
      return NextResponse.json(
        {
          success: false,
          error: "Please upload a file or provide an external video/resource link.",
        },
        { status: 400 }
      );
    }

    const supabase = createSupabaseAdmin();

    const { data, error } = await supabase
      .from("learning_resources")
      .insert([
        {
          title,
          description,
          education_system: educationSystem,
          student_class: studentClass,
          resource_type: resourceType,
          topic,
          term,
          access_level: accessLevel,
          publish_status: publishStatus,
          file_name: fileName,
          file_url: fileUrl,
          external_url: externalUrl,
          uploaded_by: "Admin",
        },
      ])
      .select()
      .single();

    if (error) {
      return NextResponse.json(
        {
          success: false,
          error: `Supabase insert error: ${error.message}`,
        },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Resource uploaded successfully.",
      resource: data,
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: `Resource upload failed: ${error.message}`,
      },
      { status: 500 }
    );
  }
}
