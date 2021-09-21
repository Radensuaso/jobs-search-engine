import JobDetails from "../components/detail/JobDetails";

const Detail = ({ match }) => <JobDetails jobId={match.params.jobId} />;
export default Detail;
