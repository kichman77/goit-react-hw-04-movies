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
  state = {
    trends: [],
  };
  componentDidMount() {
    api.getTrends().then((result) => {
      this.setState({
        trends:[...result]
      });
    });
  }
  componentDidUpdate(prevProps, prevState) {}

  componentWillMount() {}

  render() {
    return (
      <div className="App">
        <Header />
        <Cast />
        <HomePage trends={this.state.trends}/>
        <MovieDetailsPage />
        <MoviesPage />
        <Reviews />
      </div>
    );
  }
}

export default App;
