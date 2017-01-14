const { projects, stories } = require('./data')

const resolvers = {
  projects () {
    return projects
  },
  stories () {
    return stories
  },
  story ({ slug }) {
    return stories.find((story) => {
      return story.slug === slug
    })
  },
  project ({ slug }) {
    return projects.find((project) => {
      return project.slug === slug
    })
  }
}

module.exports = resolvers
