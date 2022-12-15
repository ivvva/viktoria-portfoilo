import React, { useState, useEffect } from 'react'
import './About.scss'
import rect from '../../assets/rect.png'
import gif from '../../assets/3d.gif'
import { motion, transform, useAnimation } from "framer-motion";


const About = () => {

  const [matches, setMatches] = useState(
    window.matchMedia("(min-width: 768px)").matches
  )

  useEffect(() => {
    window
      .matchMedia("(min-width: 768px)")
      .addEventListener('change', e => setMatches(e.matches));
  }, []);

  //if div width matches with x <= 600px show small h2, else show regular

  return (
    <motion.div id='about' className='container'
      initial={{ opacity: 0, x: -300 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{
        delay: 0.8
      }}>
      <div className='rect'>
        <img draggable='false' src={rect} />
      </div>
      <div className='about'>
        <h1>ABOUT</h1>
        {matches && (<h2>
          Viktoria Pohribna is a 21y.o. freelancer <br />
          from Ukraine. She`s studied the multimedia <br />
          design course at KSADA. Viktoria has <br />
          about a year of  experience in freelance  2D cell <br />
          animation projects. She is also working as a <br />
          freelance illustrator in raster and vector <br />
          graphics. Although that she`s<br />
          character designs in 2D and 3D.<br />
        </h2>)}

        {!matches && (
          <h2>
          Viktoria Pohribna is <br />
          a 21y.o. freelancer <br />
          from Ukraine. She`s <br />
          studied the multimedia <br />
          design course at KSADA.<br /> 
          Viktoria has <br />
          about a year of<br />  
          experience in freelance<br />  
          2D cell animation<br />
          projects. She is also<br />
          working as a <br />
          freelance illustrator in <br />
          raster and vector <br />
          graphics. Although that<br />
          she`s character designs<br />
          in 2D and 3D.
        </h2>
        )}

      </div>
      <div className='gif'>
        <img draggable='false' src={gif} />
      </div>

    </motion.div>
  )
}

export default About