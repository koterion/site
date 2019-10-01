import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

class Btn extends Component {
  render () {
    let {route, link, text, className} = this.props
    return (
      route ? (
          <Link to={link} className={`btn ${className}`} data-text={text}>{text}<span className="text">{text}</span></Link>
        ) : (
          <a href={link} className={`btn ${className}`} target="_blank" rel="nofollow" data-text={text}>{text}<span className="text">{text}</span></a>
        )
    )
  }
}

Btn.defaultProps = {
  className: '',
  route: false
}

Btn.propTypes = {
  className: PropTypes.string,
  route: PropTypes.bool,
  link: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
}

export default Btn