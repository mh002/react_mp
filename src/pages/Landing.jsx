import React from 'react'
import { Link } from 'react-router-dom'

function Landing() {
  return (
    <>
      <div className='w-100 d-flex justify-content-center align-items-center' style={{ height: '80vh' }}>
        <div className='row p-5'>
          <div className='col d-flex flex-column justify-content-center'>
            <h1>Media Player 2024</h1>
            <p>Explore Media Player for youtube video upload and management, you can add and manage videos, categorize and even check</p>
            <div>
              <Link to={'/dash'} className='btn btn-dark rounded-pill'>Explore</Link>
            </div>
          </div>
          <div className='col'>
            <img src="https://png.pngtree.com/background/20230611/original/pngtree-stereo-with-several-media-devices-and-a-record-player-picture-image_3155353.jpg" className='img-fluid' alt="" />
          </div>
        </div>
      </div>
      <div className='mt-2 p-5'>
        <h1 className='text-center mb-5'>Features</h1>
        <div className='d-flex mt-2 flex-row justify-content-between'>

          <div className="card" style={{ width: "18rem" }}>
            <img className="card-img-top" src="https://cdn.dribbble.com/users/652746/screenshots/1844317/upload_animation.gif" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Upload Videos</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>
          <div className="card" style={{ width: "18rem" }}>
            <img className="card-img-top" src="https://cdn.dribbble.com/users/34556/screenshots/1680799/play.gif" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Watch Videos</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>
          <div className="card" style={{ width: "18rem" }}>
            <img className="card-img-top" src="https://blog.sciencemuseum.org.uk/wp-content/uploads/2017/10/Space-Invaders.gif" alt="..." />
            <div className="card-body">
              <h5 className="card-title">View History</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>
        </div>
        <div className='mt-5 row'>
          <div className='col d-flex flex-column justify-content-center'>
            <h1>Simple, Fast & Secured</h1>
            <p style={{textAlign:'justify'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
              magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>
          <div className='col'>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/id848Ww1YLo?si=LNFug31_CcPM8RZU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
        </div>
      </div>
    </>
  )
}

export default Landing