export const typeDefs = `#graphql
    type Game {
        id: ID!
        title: String!
        platform: [String!]!
        reviews: [Review!]
    }
    type Review {
        id: ID!
        rating: Int!
        content: String! 
        game: Game!
        author: Author!  
    }
    type Author {
        id: ID!
        name: String!
        email: String!
        verified: Boolean!
        reviews: [Review!]
        
    }
    type Query {
        reviews:[Review]
        review(id: ID!): Review
        games: [Game]
        game(id: ID!): Game
        authors: [Author]
        author(id: ID!): Author
    }

    type Mutation {
        deleteGame(id: ID!): [Game]
        # addReview(rating: Int!, content: String!, gameId: ID!, authorId: ID!): Review
        addGame(game: AddGameInput!): Game
        updateGame(id: ID!, edits: UpdateGameInput!): Game
        # addAuthor(name: String!, email: String!, verified: Boolean!): Author
    
    }
    input AddGameInput {
       title: String!,
       platform: [String!]!
    }
    input UpdateGameInput {
       title: String!,
       platform: [String!]!
    }
`;

// int, float and string, boolean, ID are the only supported types
