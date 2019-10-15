import React from 'react'
import PropTypes from 'prop-types'

export default function Cat (props) {
  const { icon } = props
  return (
    <div className="lighter__cat">
      <img src={icon ? icon : '/img/icon.svg'} alt="Cat head"/>
      <div className="eye__left">
        <div className="eye__pupil"/>
        <div className="eye__light"/>
      </div>
      <div className="eye__right">
        <div className="eye__pupil"/>
        <div className="eye__light"/>
      </div>
    </div>
  )
}

Cat.propTypes = {
  icon: PropTypes.string
}