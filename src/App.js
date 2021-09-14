import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { getJobs } from "./tools/axiosTools.js";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavbarTop from "./components/navsAndFooters/NavbarTop";
import Home from "./views/Home";
import Detail from "./views/Detail";

function App() {
  const [query, setQuery] = useState("");
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  const getSearchedJobs = (e) => {
    e.preventDefault();
    setLoading(true);
    getJobs(query)
      .then((j) => setJobs(j.data))
      .then(() => setLoading(false))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getJobs("")
      .then((j) => setJobs(j.data))
      .then(() => setLoading(false))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="App">
      <Router>
        <NavbarTop
          query={query}
          setQuery={setQuery}
          getSearchedJobs={getSearchedJobs}
        />
        <Route
          path="/"
          exact
          render={(routerProps) => (
            <Home {...routerProps} jobs={jobs} loading={loading} />
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
