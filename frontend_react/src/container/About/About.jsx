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
        <h1>ABOUT</h1>
        <h2>
          Viktoria Pohribna is a 21y.o. freelancer <br />
          from Ukraine. She`s studied the multimedia <br />
          design course at KSADA. Viktoria has <br />
          about a year of  experience in freelance  2D cell <br />
          animation projects. She is also working as a <br />
          freelance illustrator in raster and vector <br />
          graphics. Although that she`s<br />
          character designs in 2D and 3D.<br />
        </h2>
      </div>
      <div className='gif'>
        <img draggable='false' src={gif} />
      </div>

    </div>
  )
}

export default About