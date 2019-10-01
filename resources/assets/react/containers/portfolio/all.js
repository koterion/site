import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getPortfolios, getYear, getPortfolioTab, getPortfolioAnimation } from '../../store/reducers/portfolios'
import { clickYearTab } from '../../store/actions'
import Btn from '../../components/btn'

class Portfolios extends Component {
  constructor (props) {
    super(props)
    this.state = {
      animation: false
    }
  }

  changeYear (year) {
    this.props.dispatch(clickYearTab(year))
  }

  render () {
    let { portfolios, currentYear, tab, animation, routes } = this.props

    return (
      <div className="portfolio box-sm">
        <nav className="portfolio__time">
          {Object.keys(portfolios.years).length > 0 &&
          portfolios.years.map((year, i) => (
            <button
              className={`portfolio__time--item ${currentYear === year ? 'active' : ''}`}
              onClick={() => this.changeYear(year)}
              key={i}
            >
              {year !== portfolios.years[portfolios.years.length - 1] ? (
                <span>{year}</span>
              ) : (
                <span>Now</span>
              )}
              <span className="dop">portfolio</span>
            </button>
          ))
          }
        </nav>
        <div className="portfolio__block">
          <div className={`portfolio__list ${tab} ${animation ? 'active' : ''}`}>
            {Object.keys(portfolios.group).length > 0 && currentYear &&
            portfolios.group[currentYear].map((item, i) => (
              <div
                className="portfolio__item"
                key={i}
              >
                <div className="portfolio__item--block">
                  <h3 className="portfolio__item--title">{item.title}</h3>
                  <p className="portfolio__item--text">{item.description}</p>
                  <div className="portfolio__item--footer">
                    <Btn className="portfolio__item--btn" link={item.site} text="Site"/>
                    <Btn className="portfolio__item--btn" link={`${routes.portfolio.all}/${item.id}`} text="More" route={true}/>
                  </div>
                </div>
                <div className="portfolio__item--image">
                  <div className="icons">
                    <div className="square"/>
                    <div className="triangle"/>
                    <div className="circle"/>
                  </div>
                  <figure className="image">
                    <img src={`/storage/${item.image}`} alt={item.title}/>
                  </figure>
                </div>
              </div>
            ))
            }
          </div>
        </div>
      </div>
    )
  }
}

Portfolios.propTypes = {
  portfolios: PropTypes.shape({
    collection: PropTypes.objectOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      site: PropTypes.string,
      image: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired
    })),
    years: PropTypes.array.isRequired,
    group: PropTypes.object.isRequired
  }).isRequired,
  currentYear: PropTypes.number.isRequired,
  tab: PropTypes.string.isRequired,
  animation: PropTypes.bool.isRequired
}

const mapStateToProps = state => ({
  portfolios: getPortfolios(state.portfolios),
  currentYear: getYear(state.portfolios),
  tab: getPortfolioTab(state.portfolios),
  animation: getPortfolioAnimation(state.portfolios)
})

export default connect(mapStateToProps)(Portfolios)