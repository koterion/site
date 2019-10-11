import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

function Btn (props) {
  let { route, link, text, className } = props
  return (
    <Link
      to={link}
      className={`btn ${className}`}
      data-text={text}
      target={!route ? '_blank' : ''}
      rel={!route ? 'nofollow' : ''}
    >
      {text}
      <span className="text">{text}</span>
    </Link>
  )
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