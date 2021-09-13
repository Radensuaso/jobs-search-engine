import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavbarTop from "./components/NavsAndFooters/NavbarTop";

function App() {
  return (
    <div className="App">
      <Router>
        <NavbarTop />
      </Router>
    </div>
  );
}

export default App;
