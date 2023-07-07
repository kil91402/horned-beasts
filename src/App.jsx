// step 1 import React
import React from 'react';
import HornedBeast from './components/HornedBeast';
import Header from './components/Header';
import Footer from './components/Footer';


// step2 create a component
class App extends React.Component {

  render() {
    return (
      <div>
        <Header />
        <HornedBeast name="UniWhal" description="A unicorn and a narwhal nuzzling their horns" />
        <HornedBeast name="Rhino Family" description="Parent rhino with two babies" />
        <HornedBeast name="Unicorn Head" description="Someone wearing a very silly unicorn head mask" />
      </div>
    );
  }
}


// step3 export your component
export default App;