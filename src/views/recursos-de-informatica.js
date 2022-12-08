import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import NavigationLinks from '../components/navigation-links'
import './recursos-de-informatica.css'

const RecursosDeInformatica = (props) => {
  return (
    <div className="recursos-de-informatica-container">
      <Helmet>
        <title>Recursos-de-Informatica - Hoarse Admirable Ant</title>
        <meta
          property="og:title"
          content="Recursos-de-Informatica - Hoarse Admirable Ant"
        />
      </Helmet>
      <header data-role="Accordion" className="recursos-de-informatica-header">
        <Link to="/" className="recursos-de-informatica-navlink">
          <img
            alt="logo"
            src="/playground_assets/mateeinfo.png"
            className="recursos-de-informatica-image"
          />
        </Link>
        <div className="recursos-de-informatica-separator"></div>
        <nav className="recursos-de-informatica-nav">
          <NavigationLinks rootClassName="rootClassName19"></NavigationLinks>
        </nav>
        <div
          data-role="AccordionHeader"
          className="recursos-de-informatica-accordion-header"
        >
          <svg viewBox="0 0 1024 1024" className="recursos-de-informatica-icon">
            <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
          </svg>
        </div>
        <div
          data-role="AccordionContent"
          className="recursos-de-informatica-accordion-content"
        >
          <div className="recursos-de-informatica-nav1">
            <NavigationLinks rootClassName="rootClassName20"></NavigationLinks>
          </div>
        </div>
        <a
          href="https://www.uanl.mx/"
          target="_blank"
          rel="noreferrer noopener"
          className="recursos-de-informatica-link"
        >
          <img
            alt="image"
            src="/playground_assets/uanl%20logo-200h.png"
            className="recursos-de-informatica-image1"
          />
        </a>
        <a
          href="https://preparatoria9.uanl.mx/"
          target="_blank"
          rel="noreferrer noopener"
          className="recursos-de-informatica-link1"
        >
          <img
            alt="image"
            src="/playground_assets/prepa9logo-200h.jpg"
            className="recursos-de-informatica-image2"
          />
        </a>
      </header>
      <h1>Recursos útiles para Informática</h1>
    </div>
  )
}

export default RecursosDeInformatica
