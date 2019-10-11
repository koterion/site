import React, { useEffect } from 'react'
import Btn from '../../components/btn.jsx'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { getOnePortfolio } from '../../store/actions'

function Portfolio (props) {
  const header = {}
  const { portfolio, routes } = props

  useEffect(() => {
    props.dispatch(getOnePortfolio(props.match.params.id))
  }, [props.match.params.id])

  return (
    <div className="portfolio__one box-page">
      <div className="carousel">
        <div className="icons">
          <div className="square"/>
          <div className="triangle"/>
          <div className="circle"/>
        </div>

        <Preview portfolio={portfolio}/>
      </div>
      {portfolio.current.site &&
      (<div className="carousel__after">
        <Btn className="portfolio__one--btn" link={portfolio.current.site} text="Visit the website"/>
      </div>)
      }
      <div className="gui">
        <h1>{portfolio.current.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: portfolio.current.content }}/>
        <div className="clear"/>
      </div>
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

function Preview (props) {
  let { portfolio } = props

  return (
    portfolio.current.video ?
      (<video className="portfolio__one--video" src={`/storage/${portfolio.current.video[0].download_link}`}
              preload="auto" autoPlay loop muted/>
      ) : (
        <div className="glide">
          <div className="glide__track" data-glide-el="track">
            <div className="glide__slides">
              {portfolio.current.carousel &&
              portfolio.current.carousel.map((image, i) => {
                return (
                  <figure className="glide__slide carousel__image" key={i}>
                    <img src={`/storage/${image}`} alt={`${portfolio.current.title} slide #${i}`}/>
                  </figure>
                )
              })}
            </div>
          </div>
          <div className="glide__bullets" data-glide-el="controls[nav]">
            {portfolio.current.carousel &&
            portfolio.current.carousel.map((image, i) => {
              return (<button className="glide__bullet" data-glide-dir={`=${i}`}/>)
            })}
          </div>
        </div>
      )
  )
}

Portfolio.propTypes = {
  portfolio: PropTypes.shape({
    current: PropTypes.object
  }).isRequired
}

const mapStateToProps = state => ({
  portfolio: state.portfolios.one
})

export default withRouter(connect(mapStateToProps)(Portfolio))