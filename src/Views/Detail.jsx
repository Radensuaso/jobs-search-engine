import JobDetails from "../components/detail/JobDetails";

const Detail = ({ match }) => <JobDetails jobID={match.params.jobId} />;
export default Detail;
