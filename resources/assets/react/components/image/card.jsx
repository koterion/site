import React from 'react'
import Icons from '../icons'
import PropTypes from 'prop-types'

export default function Card (props) {
  let cardClass = 'image-card'
  const { className, children } = props

  if(className) {
    cardClass += ` ${className}`
  }

  return (
    <div className={cardClass}>
      <Icons/>
      {children &&
        children
      }
    </div>
  )
}

Card.propTypes = {
  className: PropTypes.string,
  children: PropTypes.object.isRequired
}