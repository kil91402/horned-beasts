// step 1 import React
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import SelectedBeast from './components/SelectedBeast'
import Modal from 'react-bootstrap/Modal'
import data from './components/data.json'
import 'bootstrap/dist/css/bootstrap.min.css';

// step2 create a component

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      beast: data,
      show: true,
      selectedBeast: null,
    };
  }

  handleShowModal = () => {
    this.setState({ show: true });
  };

  handleCloseModal = () => {
    this.setState({ show: false });
  };


  render() {
    const { beast, selectedBeast } = this.state;

    return (
      <div>
        {beast.map((beast) => (
          <div key={beast._id} onClick={() => this.handleShowModal(beast)}>

          </div>
        )
        )}
        <SelectedBeast beast={this.state.beast} show={this.state.show} handleShow={this.handleShowModal} handleClose={this.handleCloseModal} />
        <Header />
        <Footer />
        <Main />

      </div>

    );
  }
}


// step3 export your component
export default App