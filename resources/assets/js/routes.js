import Home from '../../views/Home'
import Portfolio from '../../views/portfolio/all'
import PortfolioOne from '../../views/portfolio/one'

const routes = [
  {path: '/', name: 'home', component: Home},
  {path: '/about-me', name: 'about-me', component: Portfolio},
  {path: '/contacts', name: 'contacts', component: Portfolio},
  {path: '/portfolio', name: 'portfolio', component: Portfolio},
  {path: '/portfolio/:id', component: PortfolioOne},
  {path: '/pet-projects', name: 'pet-projects', component: Portfolio},
  {path: '/pet-projects/:id', component: PortfolioOne},
  {path: '/blog', name: 'blog', component: Portfolio},
  {path: '/blog/:id', component: PortfolioOne},
  {path: '*', component: Home},
]

export default routes