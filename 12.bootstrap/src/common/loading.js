import Spinner from 'react-bootstrap/Spinner';

function BasicExample() {
  return (
    <>
    <hr></hr>
    <Spinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
    <hr></hr>
    </>
  );
}

export default BasicExample;