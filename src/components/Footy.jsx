import { useState } from 'react'
import './Footy.css'
import youth1 from '../assets/images/personalwebsitefootyjourneyyouth1.JPG'
import youth2 from '../assets/images/personalwebsitefootyjourneyyouth2.jpg'
import youth3 from '../assets/images/personalwebsitefootyjourneyyouth3.JPG'
import youth4 from '../assets/images/personalwebsitefootyjourneyyouth4.jpg'
import hs1 from '../assets/images/personalwebsitefootyjourneyhs1.JPG'
import hs2 from '../assets/images/personalwebsitefootyjourneyhs2.JPG'
import hs3 from '../assets/images/personalwebsitefootyjourneyhs3.JPG'
import hs4 from '../assets/images/personalwebsitefootyjourneyhs4.JPG'
import college1 from '../assets/images/personalwebsitefootyjourneycollege1.JPG'
import college2 from '../assets/images/personalwebsitefootyjourneycollege2.JPG'
import college3 from '../assets/images/personalwebsitefootyjourneycollege3.JPG'
import college4 from '../assets/images/personalwebsitefootyjourneycollege4.JPG'

const Footy = () => {
  const [selectedImage, setSelectedImage] = useState(null)

  const images = [
    youth1, youth2, youth3, youth4,
    hs1, hs2, hs3, hs4,
    college1, college2, college3, college4
  ]

  const videos = [
    'https://www.youtube.com/embed/4v6ymqzfPuw',
    'https://www.youtube.com/embed/mwu7r02LdRw',
    'https://www.youtube.com/embed/IRZTRlzyJT4'
  ]

  const handleImageClick = (image) => {
    setSelectedImage(image)
  }

  const closeModal = () => {
    setSelectedImage(null)
  }

  return (
    <main className="footy">
      <div className="footy-content">
        <h1 className="footy-title">The Beautiful Game</h1>
        
        <div className="footy-text">
          <p className="footy-paragraph">
            Football, soccer, futbol, fodbold (I like to think because I spent 4 months drinking and "studying" with Americans in Copenhagen, I am integrated into Danish culture). Whatever you choose to call it, the game where you indeed kick the ball with your foot has played a transformational role in shaping the person I am today.
          </p>
          <p className="footy-paragraph">
            Professor Scott Galloway says focus + talent = mastery, and while I never had all that much talent on a football pitch, I had a tremendous amount of focus. This lopsided combination allowed me to string along a nice little career that took me from the long grass at John WIthers Sports Complex to the illustrious Rolf Melby field on the campus of St. Olaf College where I was lucky enough to be apart of 6 MIAC Championships, a Final Four, and a NCAA DIII National Championship in 2023. Below are some videos and pictures to highlight this journy that recently came to an end.
          </p>
        </div>

        <div className="media-layout">
          <div className="videos-section">
            <h2 className="section-title">Highlight Videos</h2>
            <div className="videos-list">
              {videos.map((video, index) => (
                <div key={index} className="video-wrapper">
                  <iframe
                    src={video}
                    title={`Football Highlight Video ${index + 1}`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="video-iframe"
                  ></iframe>
                </div>
              ))}
            </div>
          </div>

          <div className="images-section">
            <h2 className="section-title">Journey Through Pictures</h2>
            <div className="images-grid">
              {images.map((image, index) => (
                <div 
                  key={index} 
                  className="image-wrapper"
                  onClick={() => handleImageClick(image)}
                >
                  <img
                    src={image}
                    alt={`Football journey ${index + 1}`}
                    className="footy-image"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {selectedImage && (
          <div className="image-modal" onClick={closeModal}>
            <div className="image-modal-content" onClick={(e) => e.stopPropagation()}>
              <button className="close-button" onClick={closeModal}>×</button>
              <img src={selectedImage} alt="Enlarged" className="enlarged-image" />
            </div>
          </div>
        )}
      </div>
    </main>
  )
}

export default Footy

