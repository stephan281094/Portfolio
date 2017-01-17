import Vue from 'vue'
import Vuex from 'vuex'
import api from './api'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    stories: [],
    projects: []
  },
  actions: {
    'stories.fetchAll' (context) {
      return api.getStories().then((stories) => {
        context.commit('stories.set', stories)
      })
    },
    'projects.fetchAll' (context) {
      return api.getProjects().then((projects) => {
        context.commit('projects.set', projects)
      })
    }
  },
  mutations: {
    'stories.set' (state, stories) {
      state.stories = stories
    },
    'projects.set' (state, projects) {
      state.projects = projects
    }
  },
  getters: {}
})

export default store
