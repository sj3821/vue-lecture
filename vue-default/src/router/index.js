import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
// import ContactView from '../views/ContactView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting 라우트 레벨에ㅓ 코드를 스플릿할 수 있다.
    // this generates a separate chunk (about.[hash].js) for this route   분리된 정크파일을 만들어준다
    // which is lazy-loaded when the route is visited.    페이지에 방문하는 순간에 로드시킨다(lazy-loaded)
    // prefetch : main에 처음 들어왔을때 페이지들을 미리 로드하는 것 (기능을 끄고 켤 수 있음)
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path : '/contact',
    name : 'ContactView',
    component: () => import(/* webpackChunkName: "contact", webpackPrefetch:true */ '../views/ContactView.vue')
  },  
  {
    path: '/basic',
    name: 'BasicView',
    component: () => import(/* webpackChunkName: "basic" */ '../views/BasicView.vue')
  },
  {
    path: '/databinding',
    name: 'DataBindingView',
    component: () => import(/* webpackChunkName: "databinding" */ '../views/DataBindingView.vue')
  },
  {
    path: '/databindinghtml',
    name: 'DataBindingHtml',
    component: () => import(/* webpackChunkName: "databindinghtml" */ '../views/DataBindingHtml.vue')
  },
  {
    path: '/databindingInputTxt',
    name: 'DatabindingInputTxt',
    component: () => import(/* webpackChunkName: "DatabindingInputTxt" */ '../views/DatabindingInputTxt.vue')
  },
  {
    path: '/databindingAttribute',
    name: 'DatabindingAttribute',
    component: () => import(/* webpackChunkName: "DatabindingInputTxt" */ '../views/DatabindingAttribute.vue')
  },
  {
    path: '/databindingClassAndStyle',
    name: 'DatabindingClassAndStyle',
    component: () => import('../views/DatabindingClassAndStyle.vue')
  },
  {
    path: '/listRendering',
    name: 'ListRendering',
    component: () => import('../views/ListRendering.vue')
  },
  {
    path: '/renderingGrammar',
    name: 'RenderingGrammar',
    component: () => import('../views/RenderingGrammar.vue')
  },
  {
    path: '/eventHandling',
    name: 'EventHandling',
    component: () => import('../views/EventHandling.vue')
  },
  {
    path: '/computedExam',
    name: 'ComputedExam',
    component: () => import('../views/ComputedExam.vue')
  },
  {
    path: '/watchExam',
    name: 'WatchExam',
    component: () => import('../views/WatchExam.vue')
  },
  {
    path: '/searchAndSaveView',
    name: 'SearchAndSaveView',
    component: () => import('../views/SearchAndSaveView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
