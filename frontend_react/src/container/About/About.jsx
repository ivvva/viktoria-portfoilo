import React from 'react'
import './About.scss'
import rect from '../../assets/rect.png'
import gif from '../../assets/3d.gif'

const About = () => {
  return (
    <div className='container'>
      <div className='rect'>
        <img draggable='false' src={rect} />
      </div>
      <div className='about'>
        <h2>
          Viktoria Pohribna is a 21y.o. <br /> freelancer from Ukraine. She`s <br /> studied the multimedia <br /> design course at KSADA. <br />Viktoria has about a year of <br />experience in freelance 2D cell <br /> animation projects. She is also <br /> working as a freelance <br />illustrator in raster and vector <br /> graphics. Although that she`s <br /> making character designs in <br /> 2D and 3D.
        </h2>
      </div>
      <div className='gif'>
        <img draggable='false' src={gif} />
      </div>

    </div>
  )
}

export default About