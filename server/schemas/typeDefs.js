//gql tagged template function
const { gql } = require("apollo-server-express");

//typeDefs tagged template function
const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    email: String!
    password: String!
  }

  type Query {
    me: User
    users: [User]
    user(username: String!): User
  }

  type Mutation {
    login(username: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
  }

  type Auth {
    token: ID!
    user: User!
  }
`;

module.exports = typeDefs;
