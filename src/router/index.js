import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import(/* webpackChunkName: "contact" */ '../views/Contact.vue')
  },
  {
    path: '/blog/',
    name: 'Blog',
    component: () => import(/* webpackChunkName: "blog" */ '../views/Blog.vue')
  },
  {
    path: '/blog/:post',
    name: 'Blog Post',
    component: () => import(/* webpackChunkName: "blogPost" */ '../views/BlogPost.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  linkActiveClass: 'active',
  routes
})

export default router
