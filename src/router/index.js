import Vue from 'vue'
import Router from 'vue-router'
import Meta from 'vue-meta'

Vue.use(Router)
Vue.use(Meta)

import Home from '~pages/Home.vue'
import About from '~pages/About.vue'
import Projects from '~pages/Projects.vue'
import Project from '~pages/Project.vue'
import Stories from '~pages/Stories.vue'
import Story from '~pages/Story.vue'

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
      component: About
    },
    {
      path: '/projects',
      component: Projects
    },
    {
      path: '/projects/:slug',
      component: Project
    },
    {
      path: '/stories',
      component: Stories
    },
    {
      path: '/stories/:slug',
      component: Story
    }
  ]
})
