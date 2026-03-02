import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const host = request.headers.get("host") || "";

  // Route audit.positivelab.ai to the GEO audit page
  if (host.startsWith("audit.")) {
    const url = request.nextUrl.clone();
    if (url.pathname === "/") {
      url.pathname = "/answer-economy/geo-audit";
      return NextResponse.rewrite(url);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/((?!_next|favicon.ico|.*\\..*).*)",
};
