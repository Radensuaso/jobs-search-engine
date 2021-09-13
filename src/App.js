import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { getJobs } from "./tools/axiosTools.js";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavbarTop from "./components/navsAndFooters/NavbarTop";
import Home from "./views/Home";
import Detail from "./views/Detail";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    getJobs(setData);
  }, []);

  return (
    <div className="App">
      <Router>
        <NavbarTop />
        <Route
          path="/"
          exact
          render={(routerProps) => <Home {...routerProps} data={data} />}
        />
        <Route
          path="/Detail/:jobId"
          exact
          render={(routerProps) => <Detail {...routerProps} />}
        />
      </Router>
    </div>
  );
}

export default App;
