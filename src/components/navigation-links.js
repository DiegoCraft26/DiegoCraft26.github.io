import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './navigation-links.css'

const NavigationLinks = (props) => {
  return (
    <nav className={`navigation-links-nav ${props.rootClassName} `}>
      <Link to="/taller-de-informatica" className="navigation-links-navlink">
        {props.text2}
      </Link>
      <Link to="/taller-de-matemticas" className="navigation-links-navlink1">
        {props.text3}
      </Link>
    </nav>
  )
}

NavigationLinks.defaultProps = {
  rootClassName: '',
  text2: 'Informática',
  text3: 'Matemáticas',
}

NavigationLinks.propTypes = {
  rootClassName: PropTypes.string,
  text2: PropTypes.string,
  text3: PropTypes.string,
}

export default NavigationLinks
