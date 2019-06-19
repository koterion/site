import Home from '../../views/Home'
import Work from '../../views/work/all'
import WorkOne from '../../views/work/one'

const routes = [
  {path: '/', name: 'home', component: Home},
  {path: '/about-me', name: 'about-me', component: Work},
  {path: '/contacts', name: 'contacts', component: Work},
  {path: '/portfolio', name: 'portfolio', component: Work},
  {path: '/portfolio/:id', component: WorkOne},
  {path: '/pet-projects', name: 'pet-projects', component: Work},
  {path: '/pet-projects/:id', component: WorkOne},
  {path: '/blog', name: 'blog', component: Work},
  {path: '/blog/:id', component: WorkOne},
  {path: '*', component: Home},
]

export default routes