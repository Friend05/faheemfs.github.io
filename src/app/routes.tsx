import { createBrowserRouter } from "react-router";
import { Home } from "./pages/Home";
import { CaseStudyPage } from "./pages/CaseStudyPage";

function getBasename() {
  if (typeof window !== 'undefined') {
    const pathname = window.location.pathname;
    if (pathname.startsWith('/faheemfs.github.io')) {
      return '/faheemfs.github.io';
    }
  }
  const rawBase = import.meta.env.BASE_URL || '/';
  if (rawBase !== './' && rawBase !== '.') {
    return rawBase.replace(/\/$/, '') || '/';
  }
  return '/';
}

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
  },
  {
    path: "/case-study/:id",
    Component: CaseStudyPage,
  },
  {
    path: "*",
    Component: Home,
  },
], {
  basename: getBasename(),
});
