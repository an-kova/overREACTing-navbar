import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import './App.css'
import Menu from '../src/components/Menu'
import HomePage from '../src/components/HomePage'
import DriftPage from '../src/components/DriftPage'
import TimeAttackPage from '../src/components/TimeAttackPage'
import ForzaPage from '../src/components/ForzaPage'

function App() {
  return (
    <Router>
      <div>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Race Taxi</title>
        </Helmet>
        <Menu />
        <div className="page">
          <Route path="/" exact component={HomePage} />
          <Route path="/drift" component={DriftPage} />
          <Route path="/timeattack" component={TimeAttackPage} />
          <Route path="/forza" component={ForzaPage} />
        </div>
      </div>
    </Router>
  )
}

export default App
