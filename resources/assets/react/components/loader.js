import React, { Component } from 'react'
import Logo from './logo'
import { getAllPortfolios } from '../store/actions'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'

class Loader extends Component{
  constructor (props) {
    super(props)
    this.state = {
      loading: true
    }

    this.startPage()
  }

  async startPage() {
    await this.props.dispatch(getAllPortfolios())

    const classList = document.body.classList
    const loading = this.state.loading

    classList.add('start')
    setTimeout(() => {
      classList.add('ready')
      setTimeout(() => {
        classList.remove('start')
        this.setState({
          loading: !loading
        })
      }, 600)
    }, 500)
  }

  render () {
    return (
      this.state.loading &&
      <div className="loader">
        <div className="loader__block">
          <Logo/>
        </div>
      </div>
    )
  }
}

export default connect()(withRouter(Loader))