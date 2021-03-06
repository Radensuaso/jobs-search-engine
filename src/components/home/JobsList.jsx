import { Table, Button, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import { BsStarFill } from "react-icons/bs";
import {
  addToFavAction,
  fetchJobsAction,
  removeFromFavAction,
} from "../../redux/actions";
import Loading from "../helpers/Loading";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
// import { connect } from "react-redux";
/* 
const mapStateToProps = (state) => ({
  favoritesList: state.favorites.favoritesList,
  jobsList: state.jobs.jobsList,
  loading: state.jobs.loading,
  error: state.jobs.error,
});

const mapDispatchToProps = (dispatch) => ({
  addToFav: (job) => dispatch(addToFavAction(job)),
  removeFromFav: (job) => dispatch(removeFromFavAction(job)),
  fetchJobs: () => dispatch(fetchJobsAction()),
}); */

const JobsList = () => {
  const favoritesList = useSelector((state) => state.favorites.favoritesList);
  const jobsList = useSelector((state) => state.jobs.jobsList);
  const loading = useSelector((state) => state.jobs.loading);
  const error = useSelector((state) => state.jobs.error);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchJobsAction());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <h2 className="mb-5">{`${jobsList && jobsList.length} jobs Found.`}</h2>
      {loading ? (
        <Loading />
      ) : error ? (
        <Alert variant="danger">Something went Wrong!</Alert>
      ) : (
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
            {jobsList.map((job, i) => (
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
                  {favoritesList.some((f) => f._id === job._id) ? (
                    <Button
                      variant="success"
                      onClick={() => dispatch(removeFromFavAction(job))}
                    >
                      <BsStarFill />
                    </Button>
                  ) : (
                    <Button
                      variant="secondary"
                      onClick={() => dispatch(addToFavAction(job))}
                    >
                      <BsStarFill />
                    </Button>
                  )}
                </th>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </>
  );
};

export default JobsList;
