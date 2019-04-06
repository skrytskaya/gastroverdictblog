import React from 'react'
import './about.scss'

import Datetime from '../assets/images/datetime.png'
import Port from '../assets/images/port.jpg'

import Layout from '../components/layout'


const AboutPage = ({ location }) => {
  
  return (
    <Layout location={location}>
      {/* <div className='about'>
        <h1>About Page Title</h1>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
      </div> */}
      <div className="container wrapper">
        <div className="container__right">
          <div className="container__right-img">
            <img src={Port} /> 
            <span className="cover1"></span>
            <span className="cover2"></span>
            <span className="cover3"></span>
            <span className="cover4"></span>
            <span className="cover5"></span>
            {/* <a href="#" style={style}> </a>  */}
          </div>
        </div>
        <div className="container__left">
          <div className="container__left-child container__left-select">
            <select>
              <option>Name</option>
            </select>
          </div>
          <div className="container__left-child container__left-date">
            Date and Time
            <img src={Datetime}/>
          </div>
          <div className="container__left-child container__left-select">
            <select>
              <option>Weekly</option>
            </select>
          </div>
          <div className="container__left-child container__left-text">
            Terminal A - C - N
          </div>
        </div>
      </div>

      <div>
        <div className="container__left-child container__left-select">
          <select>
            <option>Electricity</option>
          </select>
        </div>
        <div className="container__left-child container__left-select">
          <select>
            <option>Water</option>
          </select>
        </div>
        <div className="container__left-child container__left-select">
          <select>
            <option>Waste</option>
          </select>
        </div>
      </div>
    </Layout>
  )
}

export default AboutPage
