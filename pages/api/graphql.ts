import { ApolloServer, gql } from "apollo-server-micro";
import {PrismaClient } from "@prisma/client"

const prisma = new PrismaClient();
const typeDefs = gql`
  type MenuItem {
    id: Int!
    name: String!
    category: String!
    price: Int!
    link: String!
  }
  type Category {
    id: Int!
    category: String!
    description: String!
  }
  type Blog {
    id: Int!
    title: String!
    content: String!
    date: String!
    writer: String!
    link: String!
  }
  type Query {
    getMenuItems: [MenuItem]
    getMenuItem(id: String!): MenuItem
    getCategorys: [Category]
    getBlogs: [Blog]
    getBlog(id: String!): Blog
  }


`;
const resolvers = {
  //get
  Query: {
    getMenuItems:async () => {
      return prisma.menuItem.findMany({
      });
    },
    getMenuItem: async (parent,args,context) => {
      return prisma.menuItem.findUnique({
        where: {
          id: Number(args.id),
        }
      })
    },
    getCategorys:async () => {
      return prisma.category.findMany({
        take: 6
      });
    },
    getBlogs:async () => {
      return prisma.blog.findMany({
      });
    },
    getBlog: async (parent,args,context) => {
      return prisma.blog.findUnique({
        where: {
          id: Number(args.id),
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

