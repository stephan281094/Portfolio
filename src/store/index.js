import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    stories: [
      {
        slug: 'my-fifth-post',
        title: 'My fifth post',
        description: 'Nesciunt illum, doloribus adipisci, sequi unde hic expedita, aliquam.',
        publishedAt: '2017-01-03 08:45:00'
      },
      {
        slug: 'my-fourth-post',
        title: 'My fourth post',
        description: 'Nesciunt illum, doloribus adipisci, sequi unde hic expedita, aliquam.',
        publishedAt: '2017-01-03 08:45:00'
      },
      {
        slug: 'my-third-post',
        title: 'My third post',
        description: 'Nesciunt illum, doloribus adipisci, sequi unde hic expedita, aliquam.',
        publishedAt: '2017-01-03 08:45:00'
      },
      {
        slug: 'my-second-post',
        title: 'My second post',
        description: 'Nesciunt illum, doloribus adipisci, sequi unde hic expedita, aliquam.',
        publishedAt: '2017-01-03 08:45:00'
      },
      {
        slug: 'my-first-post',
        title: 'My first post which has a really long title',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae, quidem!',
        publishedAt: '2017-01-03 08:45:00'
      }
    ],
    projects: [
      {
        slug: 'my-fifth-project',
        title: 'My fifth project',
        description: 'Nesciunt illum, doloribus adipisci, sequi unde hic expedita, aliquam.',
        publishedAt: '2017-01-03 08:45:00'
      },
      {
        slug: 'my-fourth-project',
        title: 'My fourth project',
        description: 'Nesciunt illum, doloribus adipisci, sequi unde hic expedita, aliquam.',
        publishedAt: '2017-01-03 08:45:00'
      },
      {
        slug: 'my-third-project',
        title: 'My third project',
        description: 'Nesciunt illum, doloribus adipisci, sequi unde hic expedita, aliquam.',
        publishedAt: '2017-01-03 08:45:00'
      },
      {
        slug: 'my-second-project',
        title: 'My second project',
        description: 'Nesciunt illum, doloribus adipisci, sequi unde hic expedita, aliquam.',
        publishedAt: '2017-01-03 08:45:00'
      },
      {
        slug: 'my-first-project',
        title: 'My first project which has a really long title',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae, quidem!',
        publishedAt: '2017-01-03 08:45:00'
      }
    ]
  },
  actions: {},
  mutations: {
    setBreadcrumbs (state, breadcrumbs) {
      state.breadcrumbs = breadcrumbs
    }
  },
  getters: {}
})

export default store
