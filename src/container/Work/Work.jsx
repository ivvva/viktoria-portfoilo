import React from 'react'
import './Work.scss'
import Isolation from '../../components/Isolation/Isolation'
import PinkAnimations from '../../components/Pink Animations/PinkAnimations'

const Work = () => {
  return (
    <div className='container2' id='works' style={{backgroundColor: '#010101'}}>
      <div className='rectangle2'></div>
      <div className='section-container'>
      <Isolation />
      <PinkAnimations />
      </div>
    </div>
  )
}

export default Work