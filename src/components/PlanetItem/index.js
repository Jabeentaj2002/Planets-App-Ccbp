// Write your code here
import './index.css'

const PlanetItem = props => {
  const {data} = props
  const {imageUrl, name, description} = data

  return (
    <div className="planet-item-container">
      <img src={imageUrl} className="image-url" alt={`Planet ${name}`} />
      <h1>{name}</h1>
      <p>{description}</p>
    </div>
  )
}

export default PlanetItem
