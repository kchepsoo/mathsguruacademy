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
      .from("live_lesson_requests")
      .select("*")
      .order("created_at", { ascending: false })
      .limit(50);

    if (error) {
      console.error("Supabase live lessons query error:", error);

      return NextResponse.json(
        {
          success: false,
          error: `Supabase live lessons query error: ${error.message}`,
        },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      liveLessons: data || [],
    });
  } catch (error) {
    console.error("Admin live lessons error:", error);

    return NextResponse.json(
      {
        success: false,
        error: `Live lessons API error: ${error.message}`,
      },
      { status: 500 }
    );
  }
}
