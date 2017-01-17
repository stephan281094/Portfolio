import Lokka  from 'lokka'
import Transport  from 'lokka-transport-http'

const BASE_URL = 'http://localhost:3000' // Fetch from config
const client = new Lokka({
  transport: new Transport(`${BASE_URL}/graphql`)
})

export const getStories = () => {
  return client.query(`
    query {
      stories {
        slug
        title
        description
        publishedAt
      }
    }
  `).then(res => res.stories)
}

export const getProjects = () => {
  return client.query(`
    query {
      projects {
        slug
        title
        description
        publishedAt
      }
    }
  `).then(res => res.projects)
}

export default {
  getStories,
  getProjects
}
