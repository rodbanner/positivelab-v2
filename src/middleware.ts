import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const host = request.headers.get("host") || "";

  // Redirect audit.positivelab.ai to the GEO audit page on the main site
  if (host.startsWith("audit.")) {
    return NextResponse.redirect("https://www.positivelab.ai/answer-economy/geo-audit", 301);
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/((?!_next|favicon.ico|.*\\..*).*)",
};
