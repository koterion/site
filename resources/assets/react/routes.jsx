import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from './components/header.jsx'
import Home from './containers/home.jsx'
import About from './containers/about.jsx'
import Contact from './containers/contact.jsx'
import Error from './containers/error.jsx'
import Portfolios from './containers/portfolio/all.jsx'
import Transfer from './components/transfer.jsx'
import Portfolio from './containers/portfolio/one.jsx'
import Footer from './components/footer.jsx'
import Loader from './components/loader.jsx'

function App (props){
  const routes = {
    home: '/',
    about: '/about-me',
    contacts: '/contacts',
    portfolio: {
      all: '/portfolio',
      one: '/portfolio/:id'
    },
    error: '/'
  }

  return (
    <Router>
      <Loader />
      <Header routes={routes}/>
      <Transfer/>
      <Switch>
        <Route path={routes.home} exact>
          <Home/>
        </Route>
        <Route path={routes.about} exact>
          <About/>
          <Footer/>
        </Route>
        <Route path={routes.portfolio.all} exact>
          <Portfolios routes={routes}/>
          <Footer/>
        </Route>
        <Route path={routes.portfolio.one} exact>
          <Portfolio routes={routes}/>
          <Footer/>
        </Route>
        <Route path={routes.contacts} exact>
          <Contact/>
          <Footer/>
        </Route>
        <Route path={routes.error}>
          <Error/>
        </Route>
      </Switch>
    </Router>
  )
}

export default App
