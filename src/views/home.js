import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import NavigationLinks from '../components/navigation-links'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Hoarse Admirable Ant</title>
        <meta property="og:title" content="Hoarse Admirable Ant" />
        <meta
          property="og:image"
          content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/c089c745-2c6f-4a84-bd33-661213234804/088998cf-1637-4d00-a104-530531a690b0?org_if_sml=1"
        />
      </Helmet>
      <header data-role="Accordion" className="home-header">
        <Link to="/" className="home-navlink">
          <img
            alt="logo"
            src="/playground_assets/mateeinfo.png"
            className="home-image"
          />
        </Link>
        <div className="home-separator"></div>
        <nav className="home-nav">
          <NavigationLinks rootClassName="rootClassName19"></NavigationLinks>
        </nav>
        <div data-role="AccordionHeader" className="home-accordion-header">
          <svg viewBox="0 0 1024 1024" className="home-icon">
            <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
          </svg>
        </div>
        <div data-role="AccordionContent" className="home-accordion-content">
          <div className="home-nav1">
            <NavigationLinks rootClassName="rootClassName20"></NavigationLinks>
          </div>
        </div>
      </header>
      <a
        href="https://www.uanl.mx/"
        target="_blank"
        rel="noreferrer noopener"
        className="home-link"
      >
        <img
          alt="image"
          src="/playground_assets/uanl%20logo-200h.png"
          className="home-image1"
        />
      </a>
      <img
        alt="image"
        src="/playground_assets/prepa9logo-200h.jpg"
        className="home-image2"
      />
      <a
        href="https://preparatoria9.uanl.mx/"
        target="_blank"
        rel="noreferrer noopener"
        className="home-link1"
      >
        <img
          alt="image"
          src="/playground_assets/prepa9logo-200h.jpg"
          className="home-image3"
        />
      </a>
    </div>
  )
}

export default Home
