import React from 'react'
import instagramIcon from '../../assets/images/instagram.png'
import gmailIcon from '../../assets/images/gmail.png'
import './footer.scss'
import { Link } from 'gatsby';


const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer__icons'>
        <a href="https://www.instagram.com/gastroverdict/" target="blank">
          <img src={instagramIcon} alt="instagram" />
        </a>
        <a href="mailto: gastroverdict@gmail.com" target="blank">
          <img src={gmailIcon} alt="gmail" />
        </a>
      </div>
      <Link className="footer__blog" to='/'>© {new Date().getFullYear()} Gastroverdict</Link>
    </div>
  )
}

export default Footer
