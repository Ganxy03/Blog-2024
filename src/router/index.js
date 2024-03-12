import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/article/:title',
    name: 'article',
    component: () => import('../views/ArticleView.vue')
  },
  {
    path: '/editor',
    name: 'editor',
    component: () => import('../views/Module/Article/EditorModule.vue')
  },
  {
    path: '/sort',
    name: 'sort',
    component: () => import('../views/Module/Sort/SortContainer.vue')
  },
  {
    path: '/sport',
    name: 'sport',
    component: () => import('../views/Module/List/DoSport.vue')
  },
  {
    path: '/ai',
    name: 'ai',
    component: () => import('../views/Module/List/AIModule.vue')
  },
  {
    path: '/chat',
    name: 'chat',
    component: () => import('../views/Module/List/ChatRoom.vue')
  },
  {
    path: '/music',
    name: 'music',
    component: () => import('../views/Module/List/MusicModule.vue')
  },
  {
    path: '/drama',
    name: 'drama',
    component: () => import('../views/Module/List/DramaSeries.vue')
  },
  {
    path: '/comment',
    name: 'comment',
    component: () => import('../views/CommentBox.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/LoginView.vue')
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Module/About/AboutIndex.vue')
  },
  {
    path: '/statistic',
    name: 'statistic',
    component: () => import( '../views/Module/About/StatisticsModule.vue')
  },
  {
    path: '/test',
    name: 'test',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Test/GetGithub.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: '',
  routes
})

export default router
