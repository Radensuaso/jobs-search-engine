import { withRouter } from "react-router-dom";
import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
  Container,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { BsStarFill } from "react-icons/bs";

const NavbarTop = ({ query, setQuery, getSearchedJobs }) => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" className="justify-content-between">
          <Nav className="mr-auto my-2 my-lg-0" navbarScroll>
            <Link to="/" className="nav-link">
              Home
            </Link>
            <Form className="d-flex ms-4" onSubmit={(e) => getSearchedJobs(e)}>
              <FormControl
                type="search"
                placeholder="Search"
                className="mr-2"
                aria-label="Search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
              <Button type="submit" variant="outline-success">
                Search
              </Button>
            </Form>
          </Nav>
          <Button>
            <BsStarFill />
            <span className="ms-2">0</span>
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default withRouter(NavbarTop);
