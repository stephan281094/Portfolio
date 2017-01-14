const { buildSchema } = require('graphql')

const schema = buildSchema(`
  type Story {
    slug: String!
    title: String!
    description: String
    publishedAt: String
  }

  type Project {
    slug: String!
    title: String!
    description: String
    publishedAt: String
  }

  type Query {
    stories: [Story]
    projects: [Project]
    story(slug: String!): Story
    project(slug: String!): Project
  }
`)

module.exports = schema
