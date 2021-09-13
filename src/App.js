import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { getJobs, getSearchedJobs } from "./tools/axiosTools.js";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavbarTop from "./components/navsAndFooters/NavbarTop";
import Home from "./views/Home";
import Detail from "./views/Detail";

function App() {
  const [query, setQuery] = useState("");
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  const getSearchedJobsHandler = (e) => {
    e.preventDefault();
    setLoading(true);
    setData((query) => getSearchedJobs(query));
    setLoading(false);
  };

  useEffect(() => {
    setData(getJobs);
    setLoading(false);
  }, []);

  return (
    <div className="App">
      <Router>
        <NavbarTop
          query={query}
          setQuery={setQuery}
          getSearchedJobsHandler={getSearchedJobsHandler}
        />
        <Route
          path="/"
          exact
          render={(routerProps) => (
            <Home {...routerProps} data={data} loading={loading} />
          )}
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
