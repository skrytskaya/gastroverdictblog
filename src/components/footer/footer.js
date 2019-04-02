import React from 'react'
import instagramIcon from '../../assets/images/instagram.png'
import './footer.scss'


const Footer = () => {
  return (
    <div className='footer'>
      <a href="https://www.instagram.com/gastroverdict/" target="blank">
        <img src={instagramIcon} alt="instagram" />
      </a>
      © {new Date().getFullYear()} Gastroverdict
    </div>
  )
}

export default Footer
