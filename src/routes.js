import { lasy } from "react";
import { HomePage, MoviesPage } from "./components";
const routes = [
  {
    exact: true,
    path: "/",
    component: HomePage,
  },
  {
    exact: true,
    path: "/movies",
    component: MoviesPage,
  },
];

export default routes;
