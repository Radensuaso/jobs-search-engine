import { Table, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { BsStarFill } from "react-icons/bs";
import { connect } from "react-redux";
import { addToFavAction, removeFromFavAction } from "../../redux/actions";

const mapStateToProps = (state) => ({
  favList: state.favorites.list,
});

const mapDispatchToProps = (dispatch) => ({
  addToFav: (job) => dispatch(addToFavAction(job)),
  removeFromFav: (job) => dispatch(removeFromFavAction(job)),
});

const JobsList = ({ jobs, addToFav, removeFromFav, favList }) => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Title</th>
          <th>Job Type</th>
          <th>Company name</th>
          <th>Category</th>
          <th>Publication Date</th>
          <th>Add to favorites</th>
        </tr>
      </thead>
      <tbody>
        {jobs.map((job, i) => (
          <tr key={job._id}>
            <th>{i + 1}</th>
            <th>
              <Link to={`/Detail/${job._id}`} target="_blank">
                {job.title}
              </Link>
            </th>
            <th>{job.job_type}</th>
            <th>{job.company_name}</th>
            <th>{job.category}</th>
            <th>{job.publication_date}</th>
            <th>
              {favList.includes(job) ? (
                <Button variant="success" onClick={() => removeFromFav(job)}>
                  <BsStarFill />
                </Button>
              ) : (
                <Button variant="secondary" onClick={() => addToFav(job)}>
                  <BsStarFill />
                </Button>
              )}
            </th>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(JobsList);
