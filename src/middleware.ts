import { withAuth } from "@kinde-oss/kinde-auth-nextjs/middleware";
import { NextRequest } from "next/server";

export default async function middleware(req: NextRequest) {
  return withAuth(req, {
    isReturnToCurrentPage: true,
  });
}
export const config = {
  matcher: ["/create-a-hero"],
};
