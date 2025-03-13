import { useEffect, useState } from "react";
import gameService from "../../api/gameService";
import CatalogGameItem from "./catalog-game-item/CatlogGameItem";

export default function CatalogGame() {
    const [games, setGames] = useState([]);

    useEffect(() => {
        gameService.getAll()
         .then(setGames)
    }, []);
    
    console.log(games);

    return (
        <section id="catalog-page">
        <h1>All Games</h1>
        {games.map(game =>  <CatalogGameItem key={game._id} {...game} />)}
       

        {/*<!-- Display paragraph: If there is no games  -->*/}
        <h3 className="no-articles">No articles yet</h3>
    </section>
    );
}