import { authMiddleware, redirectToSignIn } from "@clerk/nextjs/server";

export default authMiddleware({
  afterAuth(auth) {
    // handle users who aren't authenticated
    if (!auth.userId && !auth.isPublicRoute) {
      return redirectToSignIn({ returnBackUrl: "https://satellite.dev" });
    }
  },
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api)(.*)"],
};
