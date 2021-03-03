import { lazy } from "react";
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
  },
  {
    exact: true,
    path: "/movies",
    component: MoviesPage,
  },
  {
    exact: false,
    path: "/movies/:movieId",
    component: MovieDetailsPage,
  },
];

export default routes;
