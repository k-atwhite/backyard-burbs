import './BirdDetails.css'


const BirdDetails = ({bird}) => {
  return (
    <div className='bird-detail'>
      <h3>{bird.comName}</h3>
      <p>{bird.sciName}</p>
      <p>Last seen on: {bird.obsDt}</p>
      <p>How many? {bird.howMany}</p>
      <button>🔍</button>
    </div>
  )
}

export default BirdDetails