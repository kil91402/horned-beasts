import React from 'react'
import HornedBeast from './HornedBeast.jsx'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container'
import data from './data.json'


class Main extends React.Component {
  render() {
    let beastComponents = [];
    
    this.props.beastData.forEach((beast) => {
      beastComponents.push(
        <Col key={beast._id} xs={3}>
          <HornedBeast
            title={beast.title}
            description={beast.description}
            ImgLink={beast.image_url}
            handleShowModal={this.props.handleShowModal}
            beast={beast}
          />
        </Col>
      );
    }
  );
        return (
    data.forEach((beast) => {
      if (this.props.filteredBy === "All" || beast.horns === parseInt(this.props.filteredBy)) {
        beastComponents.push(
          <Col key={beast._id} xs={3}>
            <HornedBeast
              title={beast.title}
              description={beast.description}
              ImgLink={beast.image_url}
              handleShowModal={this.props.handleShowModal}
              beast={beast}
            />
          </Col>
        );
      }
    });
    return (
      <Container>
        <Row>{beastComponents}</Row>
      </Container>
    );
  }
}
export default Main;
