const games = [
    { id: '1', title: 'Zelda, Tears of Kingdom', platform: ['PC', 'PS5'] },
    { id: '2', title: 'FA 2023', platform: ['Xbox Series X', 'PS5'] },
    { id: '3', title: 'God of War', platform: ['PS5'] },
    { id: '4', title: 'Hogwarts', platform: ['Xbox Series X', 'PS5', "PC"] },
];
const authors = [
    { id: '1', name: 'John Doe', email: 'john@example.com', verified: true },
    { id: '2', name: 'Jane Smith', email: 'jane@example.com', verified: true },
    { id: '3', name: 'Daryl Jon', email: 'daryl@example.com', verified: false },
    { id: '4', name: 'Alex Joe', email: 'alex@example.com', verified: true },
];
const reviews = [
    { id: '1', rating: 4, content: 'Great game!', gameId: '1', authorId: '1' },
    { id: '2', rating: 5, content: 'Amazing graphics!', gameId: '2', authorId: '2' },
    { id: '3', rating: 5, content: 'Amazing graphics!', gameId: '3', authorId: '3' },
    { id: '4', rating: 2, content: 'Low graphics!', gameId: '4', authorId: '3' },
    { id: '5', rating: 5, content: 'Amazing graphics and Experience!', gameId: '4', authorId: '2' },
    { id: '6', rating: 5, content: 'Amazing Experience!', gameId: '3', authorId: '1' },
];
export default { games, authors, reviews };
