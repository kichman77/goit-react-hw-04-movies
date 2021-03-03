import React, { Component, Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import { v4 as id } from "uuid";
import "./App.css";
import { Header } from "./components";
// import { HomePage, MoviesPage, Header, MovieDetailsPage } from "./components";
// import api from "./services/apiService";
import routes from "./routes";

class App extends Component {
  state = {};
  componentDidMount() {}
  componentDidUpdate(prevProps, prevState) {}

  componentWillUnmount() {}
  render() {
    return (
      <div className="App">
        <Header />
        {/* <MovieDetailsPage/> */}
        {/* <HomePage /> */}
        {/* <MoviesPage /> */}
        <Suspense fallback="loading...">
          <Switch>
            {routes.map((route) => {
              return <Route key={id()} {...route} />;
            })}
          </Switch>
        </Suspense>
      </div>
    );
  }
}

export default App;
