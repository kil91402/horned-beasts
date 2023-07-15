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
    let horns = `${event.target.numHorns.value}`;
    this.setState({
      beast: [...this.state.beast]
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
    const { beast, selectedBeast } = this.state;
    console.log(this.state.selectedBeast);

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="numberOfHorns"> Search: </label>
          <input type="text" horns="numberOfHorns" />
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
        <Main handleShowModal={this.handleShowModal} />

      </div>

    );
  }
}


// step3 export your component
export default App