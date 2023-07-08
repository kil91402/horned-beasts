import React from 'react'
import HornedBeast from './components/HornedBeast.jsx'
import App from './App.jsx'
import data from './components/data.json'
import './index.css'

class Main extends React.Component {

  render() {
    let beastComponents = [];
    data.forEach((title) => {
      beastComponents.push(
        <HornedBeast title={beast.title} imgLink={beast.image_url} />
      )
    })
    return (
      <div>
        <h2>Horned Beasts</h2>
        {beastComponents}

      </div>
    )
  }
}