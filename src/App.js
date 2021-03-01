import React, { Component } from "react";
import "./App.css";
import {
  Cast,
  HomePage,
  MovieDetailsPage,
  MoviesPage,
  Reviews,
  Header,
} from "./components";
import api from "./services/apiService";

class App extends Component {
  state = {};
  componentDidMount() {}
  componentDidUpdate(prevProps, prevState) {}

  componentWillMount() {}

  render() {
    return (
      <div className="App">
        <Header />
        {/* <HomePage /> */}
        <MoviesPage />
        {/* <Cast />
        <MovieDetailsPage />
        <Reviews /> */}
      </div>
    );
  }
}

export default App;
