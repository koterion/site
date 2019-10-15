import React from 'react'
import PropTypes from 'prop-types'
import Btn from '../btn'
import Card from '../image/card'

export default function PortfolioItem(props) {
  const {id, title, description, site, image, routes} = props

  return (
    <div
      className="portfolio__item"
    >
      <div className="portfolio__item--block">
        <h3 className="portfolio__item--title">{title}</h3>
        <p className="portfolio__item--text">{description}</p>
        <div className="portfolio__item--footer">
          {site && <Btn className="portfolio__item--btn" link={site} text="Site"/>}
          <Btn className="portfolio__item--btn" link={`${routes.portfolio.all}/${id}`} text="More" route={true}/>
        </div>
      </div>
      <Card className="portfolio__item--image">
        <figure className="image">
          <img src={`/storage/${image}`} alt={title}/>
        </figure>
      </Card>
    </div>
  )
}

PortfolioItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  site: PropTypes.string,
  image: PropTypes.string.isRequired,
  routes: PropTypes.object.isRequired
}