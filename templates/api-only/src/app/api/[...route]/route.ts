import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const RouteParams = z.object({
  route: z.array(z.string()),
});

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ route: string[] }> }
) {
  const resolvedParams = await params;
  const parsed = RouteParams.safeParse({ route: resolvedParams.route });

  if (!parsed.success) {
    return NextResponse.json(
      { error: "Invalid route", details: parsed.error.flatten() },
      { status: 400 }
    );
  }

  return NextResponse.json({
    message: "API is working",
    route: parsed.data.route,
  });
}

export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ route: string[] }> }
) {
  try {
    const body = await request.json();
    const resolvedParams = await params;

    return NextResponse.json({
      received: body,
      route: resolvedParams.route,
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Invalid JSON body" },
      { status: 400 }
    );
  }
}
