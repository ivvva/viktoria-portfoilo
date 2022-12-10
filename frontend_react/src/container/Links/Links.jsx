import React from 'react'
import './Links.scss'
import Marquee from 'react-double-marquee';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { AiOutlineTwitter, AiFillInstagram, AiOutlineBehance } from 'react-icons/ai'
import { FaPatreon } from 'react-icons/fa'

const Links = () => {
  return (
    <div className='container5'>
      <div className='rectangle3 scrolling-limit'
        style={{ width: '100%' }}>
        <Marquee
          className='marquee' direction='left'>
          <h2> LINKS LINKS LINKS LINKS LINKS LINKS LINKS</h2>
        </Marquee>
      </div>
      <div className='icon-container'>
        {/* <link href='https://twitter.com/cyucya'> TWI</link> */}
        <a href='https://twitter.com/cyucya'> <AiOutlineTwitter size={60} href='https://twitter.com/cyucya' /></a>
        <a href='https://www.instagram.com/krovosyusya/'> <AiFillInstagram size={60} /></a>
        <a href='https://www.behance.net/tyrypyry4u22d6'> <AiOutlineBehance size={60} /></a>
        <a href='patreon.com/user?u=84069362' > <FaPatreon size={50} /></a>
      </div>
    </div>
  )
}

export default Links