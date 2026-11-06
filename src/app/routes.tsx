import { createHashRouter } from "react-router";
import { Home } from "./pages/Home";
import { CaseStudyPage, AdditionalProjectsPage } from "./pages/CaseStudyPage";

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
    path: "/additional-projects",
    Component: AdditionalProjectsPage,
  },
  {
    path: "*",
    Component: Home,
  },
]);
