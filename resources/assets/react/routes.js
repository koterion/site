import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import Header from './components/header'
import Home from './containers/home'
import About from './containers/about'
import Contact from './containers/contact'
import Error from './containers/error'
import Portfolios from './containers/portfolio/all'

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
        error: '*'
      },
      animation: false
    }
  }

  toggleTab() {
    const animation = this.state.animation

    if (!animation){
      this.setState({
        animation: !animation
      })

      setTimeout(() => {
        const animation = this.state.animation

        this.setState({
          animation: !animation
        })
      }, 1200)
    }

  }

  render () {
    return (
      <Router>
        <Header routes={this.state.routes}/>
        <Switch>
          <Route path={this.state.routes.home} exact>
            <Home/>
          </Route>
          <Route path={this.state.routes.about} exact>
            <About/>
          </Route>
          <Route path={this.state.routes.portfolio.all} exact>
            <Portfolios routes={this.state.routes} animation={this.state.animation}/>
          </Route>
          <Route path={this.state.routes.contacts} exact>
            <Contact/>
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
