import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import TallerDeMatemticas from './views/taller-de-matemticas'
import Home from './views/home'
import TallerDeInformatica from './views/taller-de-informatica'
import RecursosDeInformatica from './views/recursos-de-informatica'
import RercursosDeMatemticas from './views/rercursos-de-matemticas'

const App = () => {
  return (
    <Router>
      <div>
        <Route
          component={TallerDeMatemticas}
          exact
          path="/taller-de-matemticas"
        />
        <Route component={Home} exact path="/" />
        <Route
          component={TallerDeInformatica}
          exact
          path="/taller-de-informatica"
        />
        <Route
          component={RecursosDeInformatica}
          exact
          path="/recursos-de-informatica"
        />
        <Route
          component={RercursosDeMatemticas}
          exact
          path="/rercursos-de-matemticas"
        />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
