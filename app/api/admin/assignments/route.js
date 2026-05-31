import { NextResponse } from "next/server";
import { createSupabaseAdmin } from "@/lib/supabaseAdmin";

export const runtime = "nodejs";

function isAuthorized(request) {
  const adminPassword = process.env.ADMIN_PASSWORD;
  const providedPassword = request.headers.get("x-admin-password");

  return adminPassword && providedPassword === adminPassword;
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
      .from("assignment_submissions")
      .select("*")
      .order("created_at", { ascending: false })
      .limit(50);

    if (error) {
      console.error("Supabase assignments query error:", error);

      return NextResponse.json(
        {
          success: false,
          error: `Supabase assignments query error: ${error.message}`,
        },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      assignments: data || [],
    });
  } catch (error) {
    console.error("Admin assignments error:", error);

    return NextResponse.json(
      {
        success: false,
        error: `Assignments API error: ${error.message}`,
      },
      { status: 500 }
    );
  }
}
