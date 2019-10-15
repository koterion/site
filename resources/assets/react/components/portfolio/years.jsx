import React from 'react'
import PropTypes from 'prop-types'

export default function Years (props) {
  const { years, currentYear } = props

  return (
    <nav className="portfolio__time">
      {Object.keys(years).length > 0 &&
      years.map((year, i) => (
        <button
          className={`portfolio__time--item ${currentYear === year ? 'active' : ''}`}
          onClick={() => props.changeYear(year)}
          key={i}
        >
          {year !== years[years.length - 1] ? (
            <span>{year}</span>
          ) : (
            <span>Now</span>
          )}
          <span className="dop">portfolio</span>
        </button>
      ))
      }
    </nav>
  )
}

Years.propTypes = {
  years: PropTypes.array.isRequired,
  currentYear: PropTypes.number.isRequired,
  changeYear: PropTypes.func.isRequired
}