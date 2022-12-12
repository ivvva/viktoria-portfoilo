import React from 'react'
import './Header.scss'
import star from '../../assets/star.png'
import smallStar from '../../assets/small-star.png'

const Header = () => {
  return (
    <>
      <div className='head'>
        <h1>VIKTORIIA <br /> POHRIBNA</h1>
        <img className='decoration' src={star} />
      </div>
      <div className='nav'>
        <a href='#about'> <img className='rotate' src={smallStar} /> 3D</a>
        <a href='#works'> <img src={smallStar} /> ILLUSTRATIONS</a>
        <a href='#works'> <img src={smallStar} /> ANIMATIONS</a>
        <a href='#links'> <img src={smallStar} /> LINKS</a>
      </div>
    </>
  )
}

export default Header