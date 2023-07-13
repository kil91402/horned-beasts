import React from 'react'
import HornedBeast from './HornedBeast.jsx'
import data from './data.json'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container'


class Main extends React.Component {

  render() {
    let beastComponents = [];
    data.forEach((beast) => {
      beastComponents.push(
        <Col xs={3}>
          <HornedBeast title={beast.title} description={beast.description} imgLink={beast.image_url} />
        </Col>
      )
    })
    return (
      <Container>
        <Row>
          {beastComponents}
        </Row>
      </Container>
    )
  }
}
export default Main