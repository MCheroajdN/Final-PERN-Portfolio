import React from 'react';
import { Row, Col, Table } from 'reactstrap';

const Weather = (props) => {
  const { data } = props;

  if (!data)
    return <div></div>;

  return (
    <Row className="weather">
      <Col sm="12" md={{ size: 4, offset: 4 }}>
        <h2>{data.name}</h2>
        <img src={`http://openweathermap.org/img/w/${data.weather[0].icon}.png`} alt="Weather Icon"/>
        <span>{data.weather[0].main}</span>&nbsp;
        <span>{Math.floor(data.main.temp)}&deg;F</span>
     
     </Col>

     <Table></Table>
      
    </Row>
  );
};

export default Weather;