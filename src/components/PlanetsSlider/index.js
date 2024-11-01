// Import dependencies
import PlanetItem from '../PlanetItem'
import Slider from 'react-slick'

import './index.css'

// Define PlanetsSlider component
const PlanetsSlider = props => {
  const {planetsList} = props

  const settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  return (
    <div className="planets-slider-container" data-testid="planets">
      <h1 className="header">PLANETS</h1>
      <Slider {...settings}>
        {planetsList.map(eachPlanet => (
          <PlanetItem key={eachPlanet.id} data={eachPlanet} />
        ))}
      </Slider>
    </div>
  )
}

export default PlanetsSlider
