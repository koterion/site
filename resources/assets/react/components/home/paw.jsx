import React from 'react'

export default function Paw (props) {
  const switcher = []
  for (let i = 1; i < 5; i++) {
    switcher.push(
      <img className="home__switcher--img" data-glitch={i} src="/img/cat-paw-stroke.svg" alt={`cat pow ${i}`} key={i}/>
    )
  }
  return (
    <figure className="home__switcher" onClick={props.onClick} data-testid="map">
      {switcher}
    </figure>
  )
}