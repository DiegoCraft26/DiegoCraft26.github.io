import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import NavigationLinks from '../components/navigation-links'
import './taller-de-informatica.css'

const TallerDeInformatica = (props) => {
  return (
    <div className="taller-de-informatica-container">
      <Helmet>
        <title>Taller-de-Informatica - Hoarse Admirable Ant</title>
        <meta
          property="og:title"
          content="Taller-de-Informatica - Hoarse Admirable Ant"
        />
      </Helmet>
      <header data-role="Accordion" className="taller-de-informatica-header">
        <Link to="/" className="taller-de-informatica-navlink">
          <img
            alt="logo"
            src="/playground_assets/mateeinfo.png"
            className="taller-de-informatica-image"
          />
        </Link>
        <div className="taller-de-informatica-separator"></div>
        <div className="taller-de-informatica-container1">
          <nav className="taller-de-informatica-nav"></nav>
          <NavigationLinks rootClassName="rootClassName19"></NavigationLinks>
        </div>
        <div
          data-role="AccordionHeader"
          className="taller-de-informatica-accordion-header"
        >
          <svg viewBox="0 0 1024 1024" className="taller-de-informatica-icon">
            <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
          </svg>
        </div>
        <div
          data-role="AccordionContent"
          className="taller-de-informatica-accordion-content"
        >
          <div className="taller-de-informatica-nav1">
            <NavigationLinks rootClassName="rootClassName20"></NavigationLinks>
          </div>
        </div>
        <a
          href="https://preparatoria9.uanl.mx/"
          target="_blank"
          rel="noreferrer noopener"
          className="taller-de-informatica-link"
        >
          <img
            alt="image"
            src="/playground_assets/prepa9logo-200h.jpg"
            className="taller-de-informatica-image1"
          />
        </a>
        <a
          href="https://www.uanl.mx/"
          target="_blank"
          rel="noreferrer noopener"
          className="taller-de-informatica-link1"
        >
          <img
            alt="image"
            src="/playground_assets/uanl%20logo-200h.png"
            className="taller-de-informatica-image2"
          />
        </a>
      </header>
      <h1 className="taller-de-informatica-text">Club de Informática</h1>
      <div className="taller-de-informatica-container2">
        <span className="taller-de-informatica-text1">
          Eres nuevo en el club?
        </span>
        <Link
          to="/recursos-de-informatica"
          className="taller-de-informatica-navlink1 button"
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

export default TallerDeInformatica
