import React from 'react'
import './PinkAnimations.scss'

const PinkAnimations = () => {
  return (
    <div className='container4'>
      <div className='video-container'>
        <video
          controls='' muted autoPlay loop
          src='/videos/gurl.mp4'
          type='video/mp4'
          style={{ width: '65%' }} />
        <video
          controls='' muted autoPlay loop
          src='/videos/dude.mp4'
          type='video/mp4'
          style={{ width: '65%' }} />
        <video
          controls='' muted autoPlay loop
          src='/videos/valentine dogs.mp4'
          type='video/mp4'
          style={{ width: '65%' }} />
      </div>
    </div>
  )
}

export default PinkAnimations