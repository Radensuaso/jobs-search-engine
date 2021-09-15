import { Row, Col, Card, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { BsTrashFill } from "react-icons/bs";
import { removeFromFavAction } from "../../redux/actions";

const mapStateToProps = (state) => ({ favList: state.favorites.list });

const mapDispatchToProps = (dispatch) => ({
  removeFromFav: (job) => dispatch(removeFromFavAction(job)),
});

const FavoritesList = ({ favList, removeFromFav }) => {
  return (
    <Row className="mt-4">
      {favList.map((fav) => (
        <Col key={fav._id} xm={12} md={4} lg={3} className="mb-4">
          <Card style={{ minHeight: "20rem" }}>
            <Card.Body className="d-flex flex-column justify-content-between">
              <Card.Title>{fav.title}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                {fav.company_name}
              </Card.Subtitle>
              <Card.Text>
                <span>{fav.job_type}</span> <br />
                <span>{fav.category}</span> <br />
                <span>{fav.publication_date}</span>
              </Card.Text>
              <Link to={`/Detail/${fav._id}`}>Details</Link>
              <Button variant="danger" onClick={() => removeFromFav(fav)}>
                <BsTrashFill />
              </Button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(FavoritesList);
