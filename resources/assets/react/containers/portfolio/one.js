import React, { Component } from 'react'
import Btn from '../../components/btn'

class Portfolio extends Component {
  constructor (props) {
    super(props)
    this.state = {
      header: {},
      portfolio: {
        current: {
          title: "",
          description: "",
          content: "",
          site: "",
          video: "",
          carousel: {
            0: '0',
            1: '1',
            2: '2',
          }
        }
      }
    }
  }
  render () {
    return(
      <div className="portfolio__one box-page">
        <div className="carousel">
          <div className="icons">
            <div className="square"/>
            <div className="triangle"/>
            <div className="circle"/>
          </div>

          <Preview/>
          {this.state.site ? <div className="carousel__after">
            <Btn class="portfolio__one--btn" link={this.state.portfolio.current.site} text="Visit the website"/>
          </div> : ''}
        </div>
        <div className="gui">
          <h1>{ this.state.portfolio.current.title }</h1>
          {this.state.portfolio.current.content}
          <div className="clear"/>
        </div>
        <div className="portfolio__one--footer">

        </div>
      </div>
    )
  }
}

function Preview () {
  let preview

  if(this.state.portfolio.current.video) {
    preview = (
      <video className="portfolio__one--video" src={`/storage/${this.state.portfolio.current.video[0].download_link}`}
             preload="auto" autoPlay loop muted/>)
  } else {
    preview = (
      <div v-else className="glide">
        <div className="glide__track" data-glide-el="track">
          <div className="glide__slides">
            {this.state.portfolio.current.carousel.map((image, i) => {
              return (
                <figure className="glide__slide carousel__image" key={i}>
                  <img src={`/storage/${image}`} alt={`${this.state.portfolio.current.title} slide #${i}`}/>
                </figure>
              )
            })}
          </div>
        </div>
        <div className="glide__bullets" data-glide-el="controls[nav]">
          {this.state.portfolio.current.carousel.map((image, i) => {
            return (<button className="glide__bullet" data-glide-dir={`=${i}`}/>)
          })}
      </div>
      </div>
    )
  }

  return preview
}

export default Portfolio