const graphqlHTTP = require('express-graphql')
const { buildSchema } = require('graphql')

const resolvers = require('./resolvers')
const schema = require('./schema')

const graphql = graphqlHTTP({
  schema: schema,
  rootValue: resolvers,
  graphiql: true
})

module.exports = graphql
