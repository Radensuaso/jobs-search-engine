import { withRouter } from "react-router-dom";
import { Navbar, Nav, Form, FormControl, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { BsStarFill } from "react-icons/bs";
import { connect } from "react-redux";
import { MdWork } from "react-icons/md";
import { fetchJobsAction } from "../../redux/actions";

const mapStateToProps = (state) => ({
  favoritesList: state.favorites.favoritesList,
});

const mapDispatchToProps = (dispatch) => ({
  fetchJobs: (query, pathname, push) => {
    if (pathname !== "/") {
      push("/");
    }
    dispatch(fetchJobsAction(query));
  },
});

const NavbarTop = ({ favoritesList, fetchJobs, location, history }) => {
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
            <Form className="d-flex ms-4">
              <FormControl
                type="search"
                placeholder="Search"
                className="mr-2"
                aria-label="Search"
                onChange={(e) =>
                  fetchJobs(e.target.value, location.pathname, history.push)
                }
              />
            </Form>
          </Nav>
          <Link className="btn btn-primary" to="/Favorites">
            <BsStarFill />
            <span className="ms-2">{favoritesList.length}</span>
          </Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(NavbarTop));
