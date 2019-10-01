import React, { Component } from 'react'

class Contact extends Component {
  constructor (props) {
    super(props)
    this.state = {
      header: {}
    }
  }
  render () {
    return(
      <div className='contact'>Contact</div>
    )
  }
}

export default Contact