import Home from '../../views/Home'
import Work from '../../views/work/all'
import WorkOne from '../../views/work/one'

const routes = [
  {path: '/', name: 'home', component: Home},
  {path: '/work', name: 'work', component: Work},
  {path: '/work/:id', component: WorkOne},
  {path: '*', component: Home},
]

export default routes