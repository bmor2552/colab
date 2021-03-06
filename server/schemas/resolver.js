const { User } = require("../models");
const { AuthenticationError } = require("apollo-server-express");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id }).select(
          "-__v, -password"
        );
        return userData;
      }
      throw new AuthenticationError("You must be logged in to do that!");
    },
    users: async () => {
      return User.find().select("-__v, -password");
    },
    //get user by username
    user: async (parent, { username }) => {
      return User.findOne({ username }).select("-__v, -password");
    },
  },

  Mutation: {
    //add new user
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    //login user
    login: async (parent, { username, password }) => {
      const user = await User.findOne({ username });
      if (!user) {
        throw new AuthenticationError("Invalid username or password");
      }

      const correctPw = await user.isCorrectPassword(password);
      if (!correctPw) {
        throw new AuthenticationError("Invalid username or password");
      }

      const token = signToken(user);
      return { token, user };
    },
  },
};

module.exports = resolvers;
