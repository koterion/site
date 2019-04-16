import Home from '../../views/Home'

const routes = [
  {path: '*', name: 'home', component: Home},
  {path: '/app', name: 'app', component: Home},
]

export default routes