import React, { useEffect } from 'react'
import Btn from '../../components/btn.jsx'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { getOnePortfolio } from '../../store/actions'
import Gui from '../../components/gui'
import Card from '../../components/image/card'
import Preview from '../../components/portfolio/preview'

function Portfolio (props) {
  const header = {}
  const { portfolio, routes } = props

  useEffect(() => {
    props.dispatch(getOnePortfolio(props.match.params.id))
  }, [props.match.params.id])

  return (
    <div className="portfolio__one box-page">
      <Card className="carousel">
        <Preview current={portfolio.current}/>
      </Card>
      {portfolio.current.site &&
      (<div className="carousel__after">
        <Btn className="portfolio__one--btn" link={portfolio.current.site} text="Visit the website"/>
      </div>)
      }
      <Gui title={portfolio.current.title} content={portfolio.current.content}/>
      <div className="portfolio__one--footer">
        {portfolio.prev ?
          (<Btn link={`${routes.portfolio.all}/${portfolio.prev}`}
                text="Visit the website" route={true}/>
          ) : (
            <div className="disabled btn" data-text="previous project">previous <span>project</span></div>
          )
        }
        {portfolio.next ?
          (<Btn link={`${routes.portfolio.all}/${portfolio.next}`}
                text="Visit the website" route={true}/>
          ) : (
            <div className="disabled btn" data-text="next project">next <span>project</span></div>
          )
        }
      </div>
    </div>
  )
}

Portfolio.propTypes = {
  portfolio: PropTypes.shape({
    current: PropTypes.shape({
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired
    }).isRequired,
    prev: PropTypes.number,
    next: PropTypes.number
  }).isRequired,
  routes: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  portfolio: state.portfolios.one
})

export default withRouter(connect(mapStateToProps)(Portfolio))