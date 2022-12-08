import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import NavigationLinks from '../components/navigation-links'
import './rercursos-de-matemticas.css'

const RercursosDeMatemticas = (props) => {
  return (
    <div className="rercursos-de-matemticas-container">
      <Helmet>
        <title>Rercursos-de-Matemticas - Hoarse Admirable Ant</title>
        <meta
          property="og:title"
          content="Rercursos-de-Matemticas - Hoarse Admirable Ant"
        />
      </Helmet>
      <div className="rercursos-de-matemticas-container1">
        <header
          data-role="Accordion"
          className="rercursos-de-matemticas-header"
        >
          <Link to="/" className="rercursos-de-matemticas-navlink">
            <img
              alt="logo"
              src="/playground_assets/mateeinfo.png"
              className="rercursos-de-matemticas-image"
            />
          </Link>
          <div className="rercursos-de-matemticas-separator"></div>
          <nav className="rercursos-de-matemticas-nav">
            <NavigationLinks rootClassName="rootClassName19"></NavigationLinks>
          </nav>
          <div
            data-role="AccordionHeader"
            className="rercursos-de-matemticas-accordion-header"
          >
            <svg
              viewBox="0 0 1024 1024"
              className="rercursos-de-matemticas-icon"
            >
              <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
            </svg>
          </div>
          <div
            data-role="AccordionContent"
            className="rercursos-de-matemticas-accordion-content"
          >
            <div className="rercursos-de-matemticas-nav1">
              <NavigationLinks rootClassName="rootClassName20"></NavigationLinks>
            </div>
          </div>
          <a
            href="https://www.uanl.mx/"
            target="_blank"
            rel="noreferrer noopener"
            className="rercursos-de-matemticas-link"
          >
            <img
              alt="image"
              src="/playground_assets/uanl%20logo-200h.png"
              className="rercursos-de-matemticas-image1"
            />
          </a>
          <a
            href="https://preparatoria9.uanl.mx/"
            target="_blank"
            rel="noreferrer noopener"
            className="rercursos-de-matemticas-link1"
          >
            <img
              alt="image"
              src="/playground_assets/prepa9logo-200h.jpg"
              className="rercursos-de-matemticas-image2"
            />
          </a>
        </header>
        <h1>Recursos útiles para Matemáticas</h1>
      </div>
    </div>
  )
}

export default RercursosDeMatemticas
