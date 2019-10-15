import React from 'react'
import PropTypes from 'prop-types'

export default function Preview (props) {
  const { current } = props
  return (
    current.video ?
      (<video className="portfolio__one--video" src={`/storage/${current.video[0].download_link}`}
              preload="auto" autoPlay loop muted/>
      ) : (
        <div className="glide">
          <div className="glide__track" data-glide-el="track">
            <div className="glide__slides">
              {current.carousel &&
              current.carousel.map((image, i) => {
                return (
                  <figure className="glide__slide carousel__image" key={i}>
                    <img src={`/storage/${image}`} alt={`${current.title} slide #${i}`}/>
                  </figure>
                )
              })}
            </div>
          </div>
          <div className="glide__bullets" data-glide-el="controls[nav]">
            {current.carousel &&
            current.carousel.map((image, i) => {
              return (<button className="glide__bullet" data-glide-dir={`=${i}`}/>)
            })}
          </div>
        </div>
      )
  )
}

Preview.propTypes = {
  current: PropTypes.shape({
    title: PropTypes.string.isRequired,
  }).isRequired
}