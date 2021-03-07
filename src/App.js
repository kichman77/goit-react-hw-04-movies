import React, { Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import { Header } from "./components";
import routes from "./routes";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Suspense fallback="loading...">
        <Switch>
          {routes.map((route) => {
            return <Route {...route} />;
          })}
        </Switch>
      </Suspense>
    </div>
  );
};

export default App;
