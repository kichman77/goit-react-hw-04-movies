import React, { Component, Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import {v4 as id} from "uuid"
import "./App.css";
import { HomePage, MoviesPage, Header } from "./components";
import api from "./services/apiService";
import routes from "./routes";

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
        {/* <MoviesPage /> */}
        <Suspense fallback="loading...">
          <Switch>
            {/* <Route exact path="/" component={HomePage} />
            <Route exact path="/movies" component={MoviesPage} /> */}
            {routes.map((route)=>{
              return <Route key={id()} {...route}/>
            })}
          </Switch>
        </Suspense>
      </div>
    );
  }
}

export default App;
