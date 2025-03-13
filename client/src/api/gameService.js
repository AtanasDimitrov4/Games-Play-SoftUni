import requester from "../utils/requester";


const baseUrl = 'http://localhost:3030/jsonstore/games';

export default {
    getAll() {
        return requester.get(baseUrl)
    },
    create(gameData) {
       return requester.post(baseUrl, gameData);
    }
};
