import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Paw from '../components/home/paw'
import Cat from '../components/cat'
import Head from '../components/head'

function Home (props) {
  const [light, setLight] = useState(false)

  useEffect(() => {
    return () => {
      destroyEyes()
    }
  }, [])

  function moveEyes () {
    document.addEventListener('mousemove', mathEyes)
    setLight(!light)
  }

  function destroyEyes () {
    document.removeEventListener('mousemove', mathEyes)
    setLight(!light)
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

  return (
    <div className='home box-sm'>
      <Head name='home'/>
      <div className="home__text">
        <h1 className="home__h1">I am</h1>
        <p className="home__p">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim, culpa dolorem deleniti
                               aspernatur itaque! Eos corporis quidem aspernatur quibusdam expedita at dolorem omnis,
                               voluptatem quos labore dolores, saepe voluptatibus debitis!</p>
        <Paw onClick={() => !light ? moveEyes() : destroyEyes()}/>
      </div>
      <div className="lighter">
        <figure className={`lighter__on ${light ? 'active' : ''}`}>
          <img className="lighter__img" src="/img/lighter_on.png" alt="Lighter"/>
          <Cat/>
          <Link to={props.routes.portfolio} className="lighter__arrow">
            <img className="lighter__arrow--img" src="/img/arrow-portfolio.svg" alt="Portfolio arrow"/>
          </Link>
        </figure>
        <figure className={`lighter__off ${!light ? 'active' : ''}`}>
          <img className="lighter__img" src="/img/lighter_off.png" alt="Lighter"/>
        </figure>
      </div>
    </div>
  )
}

export default Home