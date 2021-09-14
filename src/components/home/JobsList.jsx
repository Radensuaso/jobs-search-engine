import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";

const JobsList = (props) => {
  const { jobs } = props;
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Title</th>
          <th>Job Type</th>
          <th>Company name</th>
          <th>Category</th>
          <th>Url</th>
          <th>Publication Date</th>
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
            <th>
              <a href={job.url} rel="noreferrer" target="_blank">
                {job.url}
              </a>
            </th>
            <th>{job.publication_date}</th>
          </tr>
        ))}
      </tbody>
    </Table>

    /* 
    <ListGroup>
      {jobs?.map((job) => (
        <ListGroup.Item>
          <Row>
            <Col>
              <span>Title:</span>
              <br /> <span>{job.title}</span>
            </Col>
            <Col>
              <span>Company name:</span>
              <br />
              <span>{job.company_name}</span>
            </Col>
            <Col>
              <span>Category:</span>
              <br /> <span>{job.category}</span>
            </Col>
          </Row>
        </ListGroup.Item>
      ))}
    </ListGroup> */
  );
};

export default JobsList;
