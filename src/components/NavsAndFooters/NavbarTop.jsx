import { withRouter } from "react-router-dom";
import { Navbar, Nav, Form, FormControl, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { BsStarFill } from "react-icons/bs";
import { connect } from "react-redux";
import { MdWork } from "react-icons/md";

const mapStateToProps = (state) => ({
  favLength: state.favorites.list.length,
});

const NavbarTop = ({ query, setQuery, getSearchedJobs, favLength }) => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Link to="/" className="navbar-brand">
          <MdWork />
        </Link>
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
            </Form>
          </Nav>
          <Link className="btn btn-primary" to="/Favorites">
            <BsStarFill />
            <span className="ms-2">{favLength}</span>
          </Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default connect(mapStateToProps)(withRouter(NavbarTop));
