import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import Logo from './logo'

class Header extends Component {
  constructor (props) {
    super(props)
    this.state = {
      menu: false
    }
  }

  toggleMenu () {
    const menu = this.state.menu
    this.setState({
      menu: !menu
    })
  }

  render () {
    let btn
    if (location.pathname.search('portfolio/') === 1) {
      btn = (
        <NavLink className="header__back" to='/portfolio'>
          <div className="header__back--item"></div>
        </NavLink>
      )
    } else {
      btn = (
        <div className={`header__burger ${this.state.menu ? 'active' : ''}`} onClick={i => this.toggleMenu(i)}>
          <div className="header__burger--item"></div>
        </div>
      )
    }

    return (
      <header className={`header ${this.state.menu ? 'active' : ''}`}>
        <Logo class="header__logo"/>
        {btn}
        <section className="header__info">
          <nav className="header__menu">
            <NavLink className="header__menu--a" to="/about-me" activeClassName="router-link-active" onClick={i => this.toggleMenu(i)}>About Me</NavLink>
            <NavLink className="header__menu--a" to="/portfolio" activeClassName="router-link-active"
                     exact onClick={i => this.toggleMenu(i)}>Portfolio</NavLink>
            <NavLink className="header__menu--a" to="/contacts" activeClassName="router-link-active" onClick={i => this.toggleMenu(i)}>Contacts</NavLink>
          </nav>
          <nav className="header__social">
            <a className="header__social--a" href="https://github.com" target="_blank">
              <svg viewBox="0 0 16 16" version="1.1" aria-hidden="true">
                <path
                  d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
              </svg>
            </a>
            <a className="header__social--a" href="https://linkedin.com" target="_blank">
              <svg version="1.1" x="0px" y="0px" viewBox="0 0 438.536 438.535">
                <g>
                  <g>
                    <rect x="5.424" y="145.895" width="94.216" height="282.932"/>
                    <path
                      d="M408.842,171.739c-19.791-21.604-45.967-32.408-78.512-32.408c-11.991,0-22.891,1.475-32.695,4.427    c-9.801,2.95-18.079,7.089-24.838,12.419c-6.755,5.33-12.135,10.278-16.129,14.844c-3.798,4.337-7.512,9.389-11.136,15.104    v-40.232h-93.935l0.288,13.706c0.193,9.139,0.288,37.307,0.288,84.508c0,47.205-0.19,108.777-0.572,184.722h93.931V270.942    c0-9.705,1.041-17.412,3.139-23.127c4-9.712,10.037-17.843,18.131-24.407c8.093-6.572,18.13-9.855,30.125-9.855    c16.364,0,28.407,5.662,36.117,16.987c7.707,11.324,11.561,26.98,11.561,46.966V428.82h93.931V266.664    C438.529,224.976,428.639,193.336,408.842,171.739z"/>
                    <path
                      d="M53.103,9.708c-15.796,0-28.595,4.619-38.4,13.848C4.899,32.787,0,44.441,0,58.529c0,13.891,4.758,25.505,14.275,34.829    c9.514,9.325,22.078,13.99,37.685,13.99h0.571c15.99,0,28.887-4.661,38.688-13.99c9.801-9.324,14.606-20.934,14.417-34.829    c-0.19-14.087-5.047-25.742-14.561-34.973C81.562,14.323,68.9,9.708,53.103,9.708z"/>
                  </g>
                </g>
              </svg>
            </a>
          </nav>
        </section>
      </header>
    )
  }
}

export default Header