import React from 'react'
import './Skills.scss'
import Marquee from 'react-double-marquee';


const Skills = () => {
  return (
    <div className='container'>
      <div className='rectangle scrolling-limit'
      style={{width: '100%'}}>
        <Marquee 
        className='marquee' direction='right'>
         <h2> WORKS WORKS WORKS WORKS WORKS WORKS WORKS</h2>
        </Marquee>
        <h2>
        </h2>
      </div>
    </div>
  )
}

export default Skills