import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import Header from './containers/header'

function App () {
  return (
    <Router>
      <Header />
    </Router>
  )
}

export default App
