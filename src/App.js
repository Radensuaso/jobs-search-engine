import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavbarTop from "./components/navsAndFooters/NavbarTop";
import Home from "./views/Home";
import Detail from "./views/Detail";
import Favorites from "./views/Favorites";
import { Container } from "react-bootstrap";

const App = () => (
  <div className="App">
    <Router>
      <NavbarTop />
      <Container className="mt-5">
        <Route path="/" exact component={Home} />
        <Route path="/Favorites" exact component={Favorites} />
        <Route path="/Detail/:jobId" exact component={Detail} />
      </Container>
    </Router>
  </div>
);

export default App;
