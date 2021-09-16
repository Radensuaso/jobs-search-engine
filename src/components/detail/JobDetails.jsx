import { Markup } from "interweave";
import { Row, Col } from "react-bootstrap";
import { useEffect, useState } from "react";
import axios from "axios";

const JobDetails = ({ jobId }) => {
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const getSingleJob = (jobId) => {
    axios.get(`${process.env.REACT_APP_BE_URL}?_id=${jobId}`);
    if (response.status === 200) {
      setJob(response.data.data[0]);
    }
  };

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BE_URL}?_id=${jobId}`)
      .then((response) => {
        if (response === 200) {
          setJob(response);
        } else {
          setError(true);
        }
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Row>
      {/* 
      <Col xs={12}>
        <h2 className="mb-5">Title: {job?.title}</h2>
        <h4>Company name</h4>
        <p>{job.company_name}</p>
        <h5>Category</h5>
        <p>{job.category}</p>
        <h5>Job type</h5>
        <p>{job.job_type}</p>
        <h5>Candidate required location</h5>
        <p>{job.candidate_required_location}</p>
        <h5>Url</h5>
        <p>
          <a href={job.url} rel="noreferrer" target="_blank">
            Job Page
          </a>
        </p>
        <h5>Publication date</h5>
        <p>{job.publication_date}</p>
        {job.salary && (
          <>
            <h5>Salary</h5>
            <p>{job?.salary}</p>
          </>
        )}
        <h5>Description</h5>
        <Markup content={job.description} />
      </Col> */}
    </Row>
  );
};

export default JobDetails;
