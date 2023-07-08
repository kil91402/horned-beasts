import React from 'react'
import HornedBeast from './HornedBeast.jsx'
import App from '../App.jsx'
import data from './data.json'


class Main extends React.Component {

  render() {
    let beastComponents = [];
    data.forEach((beast) => {
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