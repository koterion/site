import React, { Component } from 'react'
import Btn from '../../components/btn'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getPortfolio } from '../../store/reducers/portfolios'
import { withRouter } from 'react-router'
import { getOnePortfolio } from '../../store/actions'

class Portfolio extends Component {
  constructor (props) {
    super(props)
    this.state = {
      header: {}
    }

    props.history.listen(() => {
      this.props.dispatch(getOnePortfolio(this.props.match.params.id))
    })

    this.props.dispatch(getOnePortfolio(this.props.match.params.id))
  }

  render () {
    let { portfolio, routes } = this.props

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
}

class Preview extends Component {
  render () {
    let preview
    let { portfolio } = this.props

    if (portfolio.current.video) {
      preview = (
        <video className="portfolio__one--video" src={`/storage/${portfolio.current.video[0].download_link}`}
               preload="auto" autoPlay loop muted/>)
    } else {
      preview = (
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
    }

    return preview
  }
}

Portfolio.propTypes = {
  portfolio: PropTypes.shape({
    current: PropTypes.object
  }).isRequired
}

const mapStateToProps = state => ({
  portfolio: getPortfolio(state.portfolios)
})

export default withRouter(connect(mapStateToProps)(Portfolio))