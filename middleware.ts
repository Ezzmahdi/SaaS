import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  publicRoutes: ['/','/about','/careers','/contact','pricing']
});

export const config = {
  matcher: ["/((?!.+.[w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};