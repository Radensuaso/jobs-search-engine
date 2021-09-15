import { Table, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { BsStarFill } from "react-icons/bs";

const JobsList = ({ jobs }) => {
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
              <Button>
                <BsStarFill />
              </Button>
            </th>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default JobsList;
