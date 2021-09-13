import { Container } from "react-bootstrap";
import JobsList from "../components/home/JobsList";

const Home = (props) => {
  const { data } = props;
  return (
    <Container className="mt-5">
      <h1 className="mb-5">Remote Jobs all around the World!</h1>
      <h2 className="mb-5">{data && data["job-count"]} jobs Found</h2>
      <JobsList jobs={data?.jobs} />
    </Container>
  );
};

export default Home;
