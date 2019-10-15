import React from 'react'
import PropTypes from 'prop-types'

export default function Gui (props) {
  const { title, content } = props
  return (
    <div className="gui">
      <h1>{title}</h1>
      <div dangerouslySetInnerHTML={{ __html: content }}/>
      <div className="clear"/>
    </div>
  )
}

Gui.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
}