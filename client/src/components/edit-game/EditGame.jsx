import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import gameService from "../../api/gameService";

export default function EditGame() {
    const navigate = useNavigate();
    const { gameId } = useParams();
    const [game, setGame] = useState({});

    useEffect(() => {
       gameService.getOne(gameId)
       .then(setGame)
    },[gameId]);

    return(
        <section id="edit-page" className="auth">
        <form id="edit">
            <div className="container">

                <h1>Edit Game</h1>
                <label htlmFor="leg-title">Legendary title:</label>
                <input type="text" id="title" name="title" defaultValue={game.title} />

                <label htlmFor="category">Category:</label>
                <input type="text" id="category" name="category" defaultValue={game.category} />

                <label htlmFor="levels">MaxLevel:</label>
                <input type="number" id="maxLevel" name="maxLevel" min="1" defaultValue={game.maxLevel} />

                <label htlmFor="game-img">Image:</label>
                <input type="text" id="imageUrl" name="imageUrl" defaultValue={game.imageUrl} />

                <label htlmFor="summary">Summary:</label>
                <textarea name="summary" id="summary" defaultValue={game.summary}></textarea>
                <input className="btn submit" type="submit" value="Edit Game" />

            </div>
        </form>
    </section>

    );
}