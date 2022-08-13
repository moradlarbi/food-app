import { ApolloServer, gql } from "apollo-server-micro";
import {PrismaClient } from "@prisma/client"

const prisma = new PrismaClient();
const typeDefs = gql`
  type Card {
    id: Int!
    email: String!
    name: String!
  }
  input CardInput {
    email: String!
    name: String!
  }

  type Query {
    getCards: [Card]
    getCard(id: String!): Card
  }

  type Mutation {
    addCard(input: CardInput!): Card
    deleteCard(id: String!): Card
  }


`;
const resolvers = {
  //get
  Query: {
    getCards:async () => {
      return prisma.card.findMany({
        take: 10,
      });
    },
    getCard: async (parent,args,context) => {
      console.log(args)
      return prisma.card.findUnique({
        where: {
          id: Number(args.id),
        }
      })
    }
  },
  Mutation: {
    //post
    addCard: async(parent,args) => {
      return prisma.card.create({
        data: args.input
      })
    },
    //delete
    deleteCard: async(parent,args) => {
      return prisma.card.delete({
        where: {
          id: Number(args.id)
        }
      })
    }
  }
};
export const config = {
  api: {
    bodyParser: false,
  },
};
const apolloServer = new ApolloServer({ typeDefs, resolvers });
const startServer = apolloServer.start();

export default async function handler(req, res) {
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader(
        "Access-Control-Allow-Origin",
        "https://studio.apollographql.com"
    );
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Methods, Access-Control-Allow-Origin, Access-Control-Allow-Credentials, Access-Control-Allow-Headers"
    );
    res.setHeader(
        "Access-Control-Allow-Methods",
        "POST, GET, PUT, PATCH, DELETE, OPTIONS, HEAD"
    );
    if (req.method === "OPTIONS") {
        res.end();
        return false;
    }

    await startServer;
    await apolloServer.createHandler({
        path: "/api/graphql",
    })(req, res);
}

