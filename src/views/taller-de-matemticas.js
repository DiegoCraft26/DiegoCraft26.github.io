import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import NavigationLinks from '../components/navigation-links'
import './taller-de-matemticas.css'

const TallerDeMatemticas = (props) => {
  return (
    <div className="taller-de-matemticas-container">
      <Helmet>
        <title>Taller-de-Matemticas - Hoarse Admirable Ant</title>
        <meta
          property="og:title"
          content="Taller-de-Matemticas - Hoarse Admirable Ant"
        />
      </Helmet>
      <header data-role="Accordion" className="taller-de-matemticas-header">
        <Link to="/" className="taller-de-matemticas-navlink">
          <img
            alt="logo"
            src="/playground_assets/mateeinfo.png"
            className="taller-de-matemticas-image"
          />
        </Link>
        <div className="taller-de-matemticas-separator"></div>
        <nav className="taller-de-matemticas-nav">
          <NavigationLinks rootClassName="rootClassName19"></NavigationLinks>
        </nav>
        <div
          data-role="AccordionHeader"
          className="taller-de-matemticas-accordion-header"
        >
          <svg viewBox="0 0 1024 1024" className="taller-de-matemticas-icon">
            <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
          </svg>
        </div>
        <div
          data-role="AccordionContent"
          className="taller-de-matemticas-accordion-content"
        >
          <div className="taller-de-matemticas-nav1">
            <NavigationLinks rootClassName="rootClassName20"></NavigationLinks>
          </div>
        </div>
        <a
          href="https://preparatoria9.uanl.mx/"
          target="_blank"
          rel="noreferrer noopener"
          className="taller-de-matemticas-link"
        >
          <img
            alt="image"
            src="/playground_assets/prepa9logo-200h.jpg"
            className="taller-de-matemticas-image1"
          />
        </a>
        <a
          href="https://www.uanl.mx/"
          target="_blank"
          rel="noreferrer noopener"
          className="taller-de-matemticas-link1"
        >
          <img
            alt="image"
            src="/playground_assets/uanl%20logo-200h.png"
            className="taller-de-matemticas-image2"
          />
        </a>
      </header>
      <h1 className="taller-de-matemticas-text">Club de Matemáticas</h1>
      <div className="taller-de-matemticas-container1">
        <span className="taller-de-matemticas-text1">
          Eres nuevo en el club?
        </span>
        <Link
          to="/rercursos-de-matemticas"
          className="taller-de-matemticas-navlink1 button"
        >
          <span>
            <span>Recursos para nuevos</span>
            <br></br>
          </span>
        </Link>
      </div>
    </div>
  )
}

export default TallerDeMatemticas
