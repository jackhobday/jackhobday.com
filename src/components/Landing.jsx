import { useState } from 'react'
import './Landing.css'
import headshot1 from '../assets/images/personalwebsiteheadshot1.jpg'
import headshot2 from '../assets/images/personalwebsiteheadshot2.jpg'
import headshot3 from '../assets/images/personalwebsiteheadshot3.jpg'

const Landing = () => {
  const images = [headshot1, headshot2, headshot3]
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const handleImageClick = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length)
  }

  return (
    <main className="landing">
      <div className="landing-content">
        <div className="headshot-container" onClick={handleImageClick}>
          <img
            src={images[currentImageIndex]}
            alt="Jack Hobday"
            className="headshot"
          />
        </div>
        <h1 className="name">Jack Hobday</h1>
        <p className="tagline">on a path to becoming remarkable</p>
      </div>
    </main>
  )
}

export default Landing

