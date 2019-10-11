import React, { useRef, useEffect } from 'react'
import { withRouter } from 'react-router'

function Transfer (props){
  const transfer = useRef(null)

  useEffect(() => {
    activeTransfer()

    props.history.listen(() => {
      document.body.scrollTop = 0
      document.documentElement.scrollTop = 0
      activeTransfer()

      setTimeout(() => {
        transfer.current.classList.remove('active')
      }, 1000)
    })
  },[transfer])

  function activeTransfer () {
    const unblock = props.history.block(targetLocation => {
      transfer.current.classList.add('active')

      setTimeout(() => {
        unblock()
        props.history.push(targetLocation.pathname)
      }, 450)
      return false
    })
  }

  return (
    <div className="transfer" ref={transfer}>
      <div className="transfer__block"/>
    </div>
  )
}

export default withRouter(Transfer)