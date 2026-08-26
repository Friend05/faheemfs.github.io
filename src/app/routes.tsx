import { createHashRouter } from "react-router";
import { Home } from "./pages/Home";
import { CaseStudyPage } from "./pages/CaseStudyPage";

export const router = createHashRouter([
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
]);
