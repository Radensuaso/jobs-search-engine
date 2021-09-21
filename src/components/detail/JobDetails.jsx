import { Markup } from "interweave";
import { Row, Col, Alert } from "react-bootstrap";
import { useEffect, useState } from "react";
import axios from "axios";
import Loading from "../helpers/Loading";

const JobDetails = ({ jobId }) => {
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const getSingleJob = async (jobId) => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_BE_URL}?_id=${jobId}`
      );
      if (response.status === 200) {
        setError(false);
        return response.data.data[0];
      } else {
        setError(true);
      }
    } catch (error) {
      setError(true);
    }
  };

  useEffect(() => {
    getSingleJob(jobId)
      .then((response) => setJob(response))
      .then(() =>
        setTimeout(() => {
          setLoading(false);
        }, 1000)
      )
      .catch((error) => setError(true));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Row>
      {loading ? (
        <Loading />
      ) : error ? (
        <Alert variant="danger">Something went Wrong!</Alert>
      ) : (
        <Col xs={12}>
          <h2 className="mb-5">Title: {job?.title}</h2>
          <h4>Company name</h4>
          <p>{job?.company_name}</p>
          <h5>Category</h5>
          <p>{job?.category}</p>
          <h5>Job type</h5>
          <p>{job?.job_type}</p>
          <h5>Candidate required location</h5>
          <p>{job?.candidate_required_location}</p>
          <h5>Url</h5>
          <p>
            <a href={job?.url} rel="noreferrer" target="_blank">
              Job Page
            </a>
          </p>
          <h5>Publication date</h5>
          <p>{job?.publication_date}</p>
          {job?.salary && (
            <>
              <h5>Salary</h5>
              <p>{job?.salary}</p>
            </>
          )}
          <h5>Description</h5>
          <Markup content={job?.description} />
        </Col>
      )}
    </Row>
  );
};

export default JobDetails;
