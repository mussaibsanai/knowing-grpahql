import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import {typeDefs} from './schema.js';

// Server setup

import _db from './_db.js';


const resolvers = {
    Query : {
        
        reviews(){
            return _db.reviews;
        },
        review(_, args, context){
            return _db.reviews.find(review => review.id === args.id);
        },
        games(){
            return _db.games;
        },
        game(_, args, context){
            return _db.games.find(game => game.id === args.id);
        },
        authors(){
            return _db.authors;
        },
        author(_, args, context){
            return _db.authors.find(author => author.id === args.id);
        }
    },

    Game: {
        reviews(parent){
            return _db.reviews.filter(review => review.gameId === parent.id);
        }
    },
    Author : {
        reviews(parent){
            return _db.reviews.filter(review => review.authorId === parent.id);
        }
    },
    Review : {
        author(parent) {
            return _db.authors.find(author => author.id === parent.authorId);
        },
        game(parent) {
            return _db.games.find(game => game.id === parent.gameId);
        }
    },
    Mutation : {
        deleteGame(_, args){
            _db.games = _db.games.filter(game => game.id !== args.id);
            return _db.games;
        },
        addGame(_, args){
            const newGame = {
                id: String(_db.games.length + 1),
                ...args.game
            }
            _db.games.push(newGame);
            return newGame;
        },
        updateGame(_, args){
           _db.games = _db.games.map(game => {
                if(game.id === args.id){
                     return {
                          ...game,
                          ...args.edits
                     }
                }
                return game;
           });
        return _db.games.find(game => game.id === args.id);
        },
    }
    
}

const server = new ApolloServer({
    typeDefs,
    resolvers
});


const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 }
});


console.log(`Server ready at ${url}`);