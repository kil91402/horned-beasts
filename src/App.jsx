// step 1 import React
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import SelectedBeast from './components/SelectedBeast'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import data from './components/data.json'
import 'bootstrap/dist/css/bootstrap.min.css';

// step2 create a component

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      beast: data,
      show: true,
      selectedBeast: {},
      filteredBy: "numberOfHorns"
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    let filteredBy = event.target.filteredBy.value; 
    this.setState({
      filteredBy: filteredBy
    });
  }
  

  handleSelect = (event) => {
    let value = event.target.value;
    this.setState({
      filteredBy: value
    });
  }

  handleShowModal = (beast) => {
    this.setState({ selectedBeast: beast, show: true });

  };

  handleCloseModal = () => {
    this.setState({ show: false });
  };


  render() {
    let filteredHorns = this.state.beast
    if (this.state.filteredBy === "All") {
      filteredHorns = this.state.beast;
    } else if (this.state.filteredBy === "1") {
      filteredHorns = this.state.beast.filter((beast) => beast.horns === 1);
    } else if (this.state.filteredBy === "2") {
      filteredHorns = this.state.beast.filter((beast) => beast.horns === 2);
    } else if (this.state.filteredBy === "100") {
      filteredHorns = this.state.beast.filter((beast) => beast.horns === 100);
    }
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
  <label htmlFor="numberOfHorns"> Search: </label>
  <input type="text" horns="filteredBy" /> 
  <button type="submit">Go</button>
  <select onChange={this.handleSelect} value={this.state.filteredBy}>
    <option value="all">All</option>
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
    <option value="100">100</option>
  </select>
</form>

        <SelectedBeast beast={this.state.selectedBeast}
          show={this.state.show}
          handleShowModal={this.handleShowModal}
          handleClose={this.handleCloseModal} />
        <Header />
        <Footer />
        <Main handleShowModal={this.handleShowModal} beastData={filteredHorns} />

      </div>

    );
  }
}


// step3 export your component
export default App