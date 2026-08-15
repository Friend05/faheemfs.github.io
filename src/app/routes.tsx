import { createBrowserRouter } from "react-router";
import { Home } from "./pages/Home";
import { CaseStudyPage } from "./pages/CaseStudyPage";

const routerBasename = import.meta.env.BASE_URL.replace(/\/$/, "") || "/";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
  },
  {
    path: "/case-study/:id",
    Component: CaseStudyPage,
  },
], {
  basename: routerBasename,
});
