import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from './components/header'
import Home from './containers/home'
import About from './containers/about'
import Contact from './containers/contact'
import Error from './containers/error'
import Portfolios from './containers/portfolio/all'
import Transfer from './components/transfer'
import Portfolio from './containers/portfolio/one'
import Footer from './components/footer'
import Loader from './components/loader'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      routes: {
        home: '/',
        about: '/about-me',
        contacts: '/contacts',
        portfolio: {
          all: '/portfolio',
          one: '/portfolio/:id'
        },
        error: '/'
      }
    }
  }

  render () {
    return (
      <Router>
        <Loader/>
        <Header routes={this.state.routes}/>
        <Transfer/>
        <Switch>
          <Route path={this.state.routes.home} exact>
            <Home/>
          </Route>
          <Route path={this.state.routes.about} exact>
            <About/>
            <Footer/>
          </Route>
          <Route path={this.state.routes.portfolio.all} exact>
            <Portfolios routes={this.state.routes}/>
            <Footer/>
          </Route>
          <Route path={this.state.routes.portfolio.one} exact>
            <Portfolio routes={this.state.routes}/>
            <Footer/>
          </Route>
          <Route path={this.state.routes.contacts} exact>
            <Contact/>
            <Footer/>
          </Route>
          <Route path={this.state.routes.error}>
            <Error/>
          </Route>
        </Switch>
      </Router>
    )
  }
}

export default App
