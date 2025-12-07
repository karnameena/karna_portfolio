import { lazy, Suspense } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
// modals
import ModalProjectCard from "../scenes/Projects/ModalProjectCard/ModalProjectCard";
// scenes (lazy loaded)
const Home = lazy(() => import("../scenes/Home/Home"));
const About = lazy(() => import("../scenes/About/About"));
const Projects = lazy(() => import("../scenes/Projects/Projects"));
const Resume = lazy(() => import("../scenes/Resume/Resume"));

export const routes = {
  HOME: "/",
  ABOUT: "/about",
  PROJECTS: "/projects",
  PROJECT: "/project/:id",
  RESUME: "/resume",
};

const BaseRoutes = () => {
  const location = useLocation();
  const background = location.state?.background;

  return (
    <Suspense fallback={<div>Loading…</div>}>
      {/* Routes use background routing for modal support */}
      <Routes location={background || location}>
        <Route path={routes.HOME} element={<Home />} />
        <Route path={routes.ABOUT} element={<About />} />
        <Route path={routes.PROJECTS} element={<Projects />} />
        <Route path={routes.PROJECT} element={<ModalProjectCard />} />
        <Route path={routes.RESUME} element={<Resume />} />
      </Routes>

      {background && (
        <Routes>
          <Route path={routes.PROJECT} element={<ModalProjectCard />} />
        </Routes>
      )}
    </Suspense>
  );
};

export default BaseRoutes;
