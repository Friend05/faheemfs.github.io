import { createBrowserRouter } from "react-router";
import { Home } from "./pages/Home";
import { CaseStudyPage } from "./pages/CaseStudyPage";

const rawBase = import.meta.env.BASE_URL || '/';
const routerBasename = rawBase === './' || rawBase === '.' ? '/' : (rawBase.replace(/\/$/, '') || '/');


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
