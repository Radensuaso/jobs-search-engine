import { Container } from "react-bootstrap";
import JobsList from "../components/home/JobsList";
import Loading from "../components/helpers/Loading";

const Home = (props) => {
  const { jobs, loading } = props;
  return (
    <Container className="mt-5">
      <h1 className="mb-5">Remote Jobs all around the World!</h1>
      <h2 className="mb-5">
        {loading ? <Loading /> : `${jobs && jobs.length} jobs Found.`}
      </h2>
      <JobsList jobs={jobs} />
    </Container>
  );
};

export default Home;
