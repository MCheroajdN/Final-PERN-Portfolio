import React from 'react';
import { Row, Col, Table } from 'reactstrap';

const Weather = (props) => {
  const { data } = props;

  if (!data)
    return <div></div>;

  return (
    <Row className="weather">
     
     <Col ></Col>

     <Table></Table>
      
    </Row>
  );
};

export default Weather;