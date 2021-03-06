import { Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { BsTrashFill } from "react-icons/bs";
import { removeFromFavAction } from "../../redux/actions";
import { useSelector, useDispatch } from "react-redux";
// import { connect } from "react-redux";

/* const mapStateToProps = (state) => ({
  favoritesList: state.favorites.favoritesList,
});

const mapDispatchToProps = (dispatch) => ({
  removeFromFav: (job) => dispatch(removeFromFavAction(job)),
}); */

const FavoritesList = () => {
  const favoritesList = useSelector((state) => state.favorites.favoritesList);
  const dispatch = useDispatch();

  return (
    <Row className="mt-4">
      {favoritesList.map((job) => (
        <Col key={job._id} xm={12} md={4} lg={3} className="mb-4">
          <Card style={{ minHeight: "20rem" }}>
            <Card.Body className="d-flex flex-column justify-content-between">
              <Card.Title>{job.title}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                {job.company_name}
              </Card.Subtitle>
              <Card.Text>
                <span>{job.job_type}</span> <br />
                <span>{job.category}</span> <br />
                <span>{job.publication_date}</span>
              </Card.Text>
              <Link to={`/Detail/${job._id}`}>Details</Link>
              <Button
                variant="danger"
                onClick={() => dispatch(removeFromFavAction(job))}
              >
                <BsTrashFill />
              </Button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default FavoritesList;
