import React from 'react'
import { Link } from 'gatsby'
import './header.scss'
import Logo from '../../assets/images/logo.png'

const Header = React.forwardRef(({ siteTitle }, ref) => {
    return (
        <header 
            id='header'
            ref={ref}
        >
            <div className='nav wrapper'>
                <div className="nav--center">
                    <Link to="/"
                        className="nav-item"
                        activeClassName="selected"
                    >
                        <img src={Logo}></img>
                    </Link>
                </div>
                <div className="nav--right">
                    <Link to="/tags"
                        className="nav-item"
                        activeClassName="selected"
                    >
                        Tags
                    </Link>
                    <Link to="/about"
                        className="nav-item"
                        activeClassName="selected"
                    >
                        About
                    </Link>
                    <Link to="/contact"
                        className="nav-item"
                        activeClassName="selected"
                    >
                        Contact
                    </Link>
                </div>
            </div>
        </header>
    )
})

export default Header