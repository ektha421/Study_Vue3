import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/databinding',
    name: 'DataBinding',
    component: () => import(/* webpackChunkName: "about" */ '../views/DataBinding.vue')
  },
  {
    path: '/serverdata',
    name: 'ServerData',
    component: () => import(/* webpackChunkName: "about" */ '../views/ServerData.vue')
  },
  {
    path: '/ref-test',
    name: 'RefTest',
    component: () => import(/* webpackChunkName: "about" */ '../views/RefTest.vue')
  },
  {
    path: '/emit-test',
    name: 'EmitTest',
    component: () => import(/* webpackChunkName: "about" */ '../views/EmitTest.vue')
  },
  {
    path: '/slot-modal',
    name: 'SlotUseModalLayout',
    component: () => import(/* webpackChunkName: "about" */ '../views/SlotUseModalLayout.vue')
  },
  {
    path: '/mixin',
    name: 'MixInTest',
    component: () => import(/* webpackChunkName: "about" */ '../views/MixInTest.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
