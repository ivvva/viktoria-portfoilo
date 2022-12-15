import React from 'react'
import './Links.scss'
import Marquee from 'react-double-marquee';
import { AiOutlineTwitter, AiFillInstagram, AiOutlineBehance } from 'react-icons/ai'
import { FaPatreon } from 'react-icons/fa'
import { motion } from "framer-motion";
import smile from '../../assets/smile.png'


const Links = () => {

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delay: 0.5,
        staggerChildren: 0.7
      }
    }
  }
  const item = {
    hidden: { opacity: 0, scale: 0.5 },
    show: { opacity: 1, scale: 1 }
  }

  return (
    <div className='container5' id='links'>
      <div className='rectangle3 scrolling-limit'
        style={{ width: '100%' }}>
        <Marquee
          className='marquee' direction='left'>
          <h2> LINKS LINKS LINKS LINKS LINKS LINKS LINKS</h2>
        </Marquee>
      </div>
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        className='icon-container'>
        {/* <link href='https://twitter.com/cyucya'> TWI</link> */}
        <motion.a variants={item} href='https://www.instagram.com/krovosyusya/'> <AiFillInstagram size={60} /></motion.a>
        <motion.a variants={item} href='https://www.behance.net/tyrypyry4u22d6'> <AiOutlineBehance size={60} /></motion.a>
        <motion.a variants={item} href='patreon.com/user?u=84069362' > <FaPatreon size={50} /></motion.a>
        <motion.a variants={item} href='https://twitter.com/cyucya'> <AiOutlineTwitter size={60} href='https://twitter.com/cyucya' /></motion.a>
      </motion.div>
      <img className='decoration-2' src={smile} />
    </div>
  )
}

export default Links