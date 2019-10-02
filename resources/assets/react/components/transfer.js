import React, { Component } from 'react'
import { withRouter } from 'react-router'

class Transfer extends Component{
  constructor (props) {
    super(props)
    this.transfer = React.createRef()

    this.activeTransfer()

    props.history.listen(() => {
      document.body.scrollTop = 0
      document.documentElement.scrollTop = 0
      this.activeTransfer()

      setTimeout(() => {
        this.transfer.current.classList.remove('active')
      }, 1000)
    })
  }

  activeTransfer () {
    this.unblock  = this.props.history.block(targetLocation => {
      this.transfer.current.classList.add('active')

      setTimeout(() => {
        this.unblock()
        this.props.history.push(targetLocation.pathname)
      }, 350)
      return false
    })
  }

  render () {
    return (
      <div className="transfer" ref={this.transfer}>
        <div className="transfer__block"/>
      </div>
    )
  }
}

export default withRouter(Transfer)