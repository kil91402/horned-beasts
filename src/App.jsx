// step 1 import React
import React from 'react';
import HornedBeast from './components/HornedBeast';
import Header from './components/Header'
import Footer from './components/Footer'
import Main from './main'

// step2 create a component
class App extends React.Component {

  render() {
    return (
      <div>
        <Header />
        <HornedBeast name="UniWhal" />
        <HornedBeast name="Rhino Family" />
        <HornedBeast name="Unicorn Head" />

      </div>
    );
  }
}


// step3 export your component
export default App;