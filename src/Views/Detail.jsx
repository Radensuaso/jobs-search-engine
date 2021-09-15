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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <>{loading ? <Loading /> : <JobDetails job={job} />}</>;
};

export default Detail;
