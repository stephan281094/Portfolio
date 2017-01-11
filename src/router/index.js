import Vue from 'vue'
import Router from 'vue-router'
import Meta from 'vue-meta'

Vue.use(Router)
Vue.use(Meta)

import Home from '~pages/Home.vue'
import About from '~pages/About.vue'
import ProjectOverview from '~pages/ProjectOverview.vue'
import ProjectDetail from '~pages/ProjectDetail.vue'
import Blog from '~pages/Blog.vue'
import Post from '~pages/Post.vue'

export default new Router({
  mode: 'history',
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/about',
      component: About,
    },
    {
      path: '/projects',
      component: ProjectOverview,
    },
    {
      path: '/projects/:slug',
      component: ProjectDetail,
    },
    {
      path: '/blog',
      component: Blog,
      name: 'blog'
    },
    {
      path: '/blog/:slug',
      component: Post
    }
  ]
})
