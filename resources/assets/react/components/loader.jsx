import React, { useState, useEffect } from 'react'
import Logo from './logo.jsx'
import { getAllPortfolios } from '../store/actions'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'

function Loader (props){
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    startPage()
  }, [])

  async function startPage() {
    await props.dispatch(getAllPortfolios())

    const classList = document.body.classList

    classList.add('start')
    setTimeout(() => {
      classList.add('ready')
      setTimeout(() => {
        classList.remove('start')
        setLoading(!loading)
      }, 600)
    }, 500)
  }

  return (
    loading &&
    <div className="loader">
      <div className="loader__block">
        <Logo/>
      </div>
    </div>
  )
}

export default connect()(withRouter(Loader))