import React, { useEffect } from 'react'

function Error (props){
  const header = {
    title: 'Koterion | 404',
    description: 'Not Found - 404',
    robots: 'noindex'
  }

  useEffect(() => {
    moveEyes()
    return () => {
      destroyEyes()
    }
  }, [])

  function moveEyes () {
    document.addEventListener('mousemove', mathEyes)
  }

  function destroyEyes () {
    document.removeEventListener('mousemove', mathEyes)
  }

  function mathEyes (event) {
    const cat = document.querySelector('.lighter__cat')
    const eyeLeft = cat.querySelector('.eye__left .eye__pupil')
    const eyeRight = cat.querySelector('.eye__right .eye__pupil')
    const eyeRightLight = cat.querySelector('.eye__right .eye__light')
    const eyeLeftLight = cat.querySelector('.eye__left .eye__light')
    const catParams = {
      height: cat.offsetHeight,
      width: cat.offsetWidth,
      top: cat.getBoundingClientRect().top,
      left: cat.getBoundingClientRect().left,
      eyes: {
        top: 54,
        width: 20,
        height: 10,
        left: 29,
        right: 70
      }
    }
    const position = {
      x: event.x,
      y: event.y
    }
    const current = {
      hor: position.x - catParams.left - catParams.eyes.left,
      vert: catParams.top + catParams.eyes.top - position.y
    }

    const coef = {
      y: (catParams.top + catParams.eyes.top) / (catParams.eyes.height / 2),
      x: {
        left: (catParams.left + catParams.eyes.left) / (catParams.eyes.width / 2),
        right: (catParams.left + catParams.eyes.right) / (catParams.eyes.width / 2)
      }
    }

    const a = catParams.eyes.width / 2
    const b = catParams.eyes.height / 2
    const xl = Math.abs(current.hor / coef.x.left) < 8.38 ? current.hor / coef.x.left : Math.sign(current.hor / coef.x.left) * 8.38
    const xr = Math.abs(current.hor / coef.x.right) < 8.38 ? current.hor / coef.x.right : Math.sign(current.hor / coef.x.right) * 8.38

    const y = current.vert / coef.y

    let yl = (-11 * xl * b * b - 2.23607 * a * b * Math.sqrt(5 * a * a + 11 * b * b - 11 * xl * xl)) / (5 * a * a + 11 * b * b)
    let yr = (11 * xl * b * b - 2.23607 * a * b * Math.sqrt(5 * a * a + 11 * b * b - 11 * xl * xl)) / (5 * a * a + 11 * b * b)

    if (y >= 0) {
      yl = (2.23607 * a * b * Math.sqrt(5 * a * a + 11 * b * b - 11 * xl * xl) - 11 * xl * b * b) / (5 * a * a + 11 * b * b)
      yr = (2.23607 * a * b * Math.sqrt(5 * a * a + 11 * b * b - 11 * xl * xl) + 11 * xl * b * b) / (5 * a * a + 11 * b * b)
    }

    let hor = {
      left: (y > 0 ? (y > yl ? yl < 0 ? 0 : -yl : -y) : (yl > y ? -yl < 0 ? 0 : -yl : -y)) + catParams.eyes.top,
      right: (y > 0 ? (y > yr ? yr < 0 ? 0 : -yr : -y) : (yr > y ? -yr < 0 ? 0 : -yr : -y)) + catParams.eyes.top
    }

    let vert = {
      left: xl + catParams.eyes.left,
      right: xr + catParams.eyes.right
    }

    eyeLeft.style.left = vert.left.toFixed() + 'px'
    eyeLeft.style.top = hor.left.toFixed() + 'px'

    eyeLeftLight.style.left = vert.left.toFixed() + 'px'
    eyeLeftLight.style.top = hor.left.toFixed() + 'px'

    eyeRight.style.left = vert.right.toFixed() + 'px'
    eyeRight.style.top = hor.right.toFixed() + 'px'

    eyeRightLight.style.left = vert.right.toFixed() + 'px'
    eyeRightLight.style.top = hor.right.toFixed() + 'px'
  }

  return(
    <div className="error">
      <div className="error__block">
        <p className="error__block--num" data-content="4">4 <span className="text">4</span></p>
        <div className="lighter__cat">
          <img src="/img/cat.svg" alt="Cat head"/>
          <div className="eye__left">
            <div className="eye__pupil"/>
            <div className="eye__light"/>
          </div>
          <div className="eye__right">
            <div className="eye__pupil"/>
            <div className="eye__light"/>
          </div>
        </div>
        <p className="error__block--num" data-content="4">4 <span className="text">4</span></p>
      </div>
    </div>
  )
}

export default Error