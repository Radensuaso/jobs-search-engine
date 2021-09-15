import { Container } from "react-bootstrap";
import { useState, useEffect } from "react";
import { getSingleJob } from "../tools/axiosTools";
import Loading from "../components/helpers/Loading";
import JobDetails from "../components/detail/JobDetails";

const Detail = ({ match }) => {
  const { jobId } = match.params;

  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getSingleJob(jobId)
      .then((j) => setJob(j.data[0]))
      .then(() => setLoading(false))
      .catch((error) => console.log(error));
  }, []);

  return (
    <Container className="mt-5">
      {loading ? <Loading /> : <JobDetails job={job} />}
    </Container>
  );
};

export default Detail;
