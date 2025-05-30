import requester from "../utils/requester";

const baseUrl = 'http://localhost:3030/jsonstore/comments';

export default {
    async getAll(gameId) {
       const comments = await requester.get(baseUrl);

       const gameCommments = Object.values(comments).filter(comment => comment.gameId === gameId);

       return gameCommments;
    },
    create(email, gameId, comment) {
        return requester.post(baseUrl, { email, gameId, comment });
    }
};