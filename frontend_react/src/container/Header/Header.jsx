import React from 'react'
import './Header.scss'
import star from '../../assets/star.png'
import smallStar from '../../assets/small-star.png'
import { motion, transform, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const Header = () => {

  // const opacityVariant = {
  //   visible: { opacity: 1, scale: 1 },
  //   hidden: { opacity: 1, scale: 0 }
  // }

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delay: 0.7,
        staggerChildren: 0.7
      }
    }
  }
  const item = {
    hidden: { opacity: 0, scale: 0.5 },
    show: { opacity: 1, scale: 1 }
  }
  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01]
        }}
        className='head'>
        <h1>VIKTORIIA <br /> POHRIBNA</h1>
        <img className='decoration' src={star} />
      </motion.div>
      <motion.div className='nav'
        variants={container}
        initial="hidden"
        animate="show">
        <motion.a variants={item} href='#about'> <img className='rotate' src={smallStar} /> 3D</motion.a>
        <motion.a variants={item} href='#works'> <img src={smallStar} /> ILLUSTRATIONS</motion.a>
        <motion.a variants={item} href='#works'> <img src={smallStar} /> ANIMATIONS</motion.a>
        <motion.a variants={item} href='#links'> <img src={smallStar} /> LINKS</motion.a>
      </motion.div>
    </>
  )
}

export default Header