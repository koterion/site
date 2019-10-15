import React, { useState, useRef } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { clickYearTab } from '../../store/actions'
import Years from '../../components/portfolio/years'
import PortfolioItem from '../../components/portfolio/item'

function Portfolios (props) {
  const [toggle, setToggle] = useState(true)
  const list = useRef(null)
  const { portfolios, currentYear, tab, animation, routes } = props

  function changeYear (year) {
    if (toggle) {
      setToggle(false)

      const listBlock = list.current
      listBlock.classList.add('v-leave-active')

      setTimeout(async () => {
        await props.dispatch(clickYearTab(year))

        setTimeout(() => {
          listBlock.classList.add('v-enter-to')

          setTimeout(() => {
            listBlock.classList.remove('v-leave-active')
            listBlock.classList.remove('v-enter-to')

            setToggle(true)
          }, 400)
        }, 250)
      }, 300)
    }
  }

  return (
    <div className="portfolio box-sm">
      <Years years={portfolios.years} currentYear={currentYear} changeYear={changeYear}/>
      <div className="portfolio__block">
        <div className={`portfolio__list ${tab} ${animation ? 'active' : ''}`} ref={list}>
          {Object.keys(portfolios.group).length > 0 && currentYear &&
          portfolios.group[currentYear].map((item, i) => (
            <PortfolioItem
              id={item.id}
              title={item.title}
              description={item.description}
              site={item.site}
              image={item.image}
              routes={routes}
              key={i}
            />
          ))
          }
        </div>
      </div>
    </div>
  )
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
  animation: PropTypes.bool.isRequired,
  routes: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  portfolios: state.portfolios.all,
  currentYear: state.portfolios.year,
  tab: state.portfolios.tab,
  animation: state.portfolios.animation
})

export default connect(mapStateToProps)(Portfolios)