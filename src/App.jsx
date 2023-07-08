// step 1 import React
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import 'bootstrap/dist/css/bootstrap.min.css';


// step2 create a component
class App extends React.Component {

  render() {

    return (
      <div>
        <Header />
        <Footer />
        <Main />

      </div>

    );
  }
}


// step3 export your component
export default App;