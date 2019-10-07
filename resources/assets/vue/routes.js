import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home'
import Portfolio from './views/portfolio/all'
import PortfolioOne from './views/portfolio/one'
import Error from './views/error/404'
import Framework from './views/components/framework'

Vue.use(Router)

export function createRouter () {
  return new Router({
    mode: 'history',
    routes: [
      { path: '/', name: 'home', component: Home },
      { path: '/framework', name: 'framework', component: Framework },
      { path: '/about-me', name: 'about-me', component: Portfolio },
      { path: '/contacts', name: 'contacts', component: Portfolio },
      { path: '/portfolio', name: 'portfolio', component: Portfolio },
      { path: '/portfolio/:id', name: 'portfolio.one', component: PortfolioOne },
      { path: '/pet-projects', name: 'pet-projects', component: Portfolio },
      { path: '/pet-projects/:id', component: PortfolioOne },
      { path: '/blog', name: 'blog', component: Portfolio },
      { path: '/blog/:id', component: PortfolioOne },
      { path: '*', name: 'error', component: Error }
    ]
  })
}
