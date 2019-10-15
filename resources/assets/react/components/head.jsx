import React from 'react'
import { Helmet } from 'react-helmet'
import PropTypes from 'prop-types'

export default function Head (props) {
  const pages = {
    default: {
      title: 'Koterion',
      description: 'Koterion Site',
      robots: 'index,follow'
    },
    home: {
      description: 'Koterion home page'
    },
    portfolios: {
      title: 'Koterion | Portfolio',
      description: 'Koterion Portfolio Page'
    },
    portfolio: {
      robots: 'noindex,nofollow'
    },
    error: {
      title: 'Koterion | 404',
      description: 'Not Found - 404',
      robots: 'noindex'
    }
  }

  const { name, head } = props
  let current = {}

  if (name && head) {
    current = { ...pages[name], ...head }
  } else if (head) {
    current = { ...pages.default, ...head }
  } else if (name) {
    current = pages[name]
  } else {
    current = pages.default
  }

  return (
    <Helmet>
      <title>{current.title}</title>
      <meta property="og:title" content={current.title}/>
      <meta name="twitter:title" content={current.title}/>
      <meta name="description" content={current.description}/>
      <meta itemProp="description" content={current.description}/>
      <meta property="og:description" content={current.description}/>
      <meta name="twitter:description" content={current.description}/>
      <meta name="robots" content={current.robots}/>
    </Helmet>
  )
}

Head.propTypes = {
  name: PropTypes.string,
  head: PropTypes.object
}