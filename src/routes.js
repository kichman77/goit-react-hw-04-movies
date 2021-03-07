import { lazy } from "react";
import { v4 as id } from "uuid";

// import { HomePage, MoviesPage } from "./components";

const HomePage = lazy(() => {
  return import("./components/HomePage/HomePage");
});
const MoviesPage = lazy(() => {
  return import("./components/MoviesPage/MoviesPage");
});
const MovieDetailsPage = lazy(() => {
  return import("./components/MovieDetailsPage/MovieDetailsPage");
});
const routes = [
  {
    exact: true,
    path: "/",
    component: HomePage,
    key: id(),
  },
  {
    exact: true,
    path: "/movies",
    component: MoviesPage,
    key: id(),
  },
  {
    exact: false,
    path: "/movies/:movieId",
    component: MovieDetailsPage,
    key: id(),
  },
];

export default routes;
