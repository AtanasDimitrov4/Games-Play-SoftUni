import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router";
import gameService from "../../api/gameService";
import DisplayComments from "../comment-displey/DisplayComments";
import AddComments from "../add-comments/AddComments";

export default function DetailsGame({
    email,
}) {
    const navigate = useNavigate();
    const [game, setGame] = useState([]);
    const { gameId } = useParams();

    useEffect(() => {
            gameService.getOne(gameId)
            .then(setGame)
        }, [gameId]);
    
    const gameDeleteHandler = async () => {
        const hasConfirm = confirm(`But ${game.title} is my favorite game. Are you sure about that?`);

        if(!hasConfirm) {
            return;
        }

        await gameService.delete(gameId);

        navigate('/games');
    };
        
    return(
        <section id="game-details">
            <h1>Game Details</h1>
            <div className="info-section">

                <div className="game-header">
                    <img className="game-img" src={game.imageUrl} />
                    <h1>{game.title}</h1> 
                    <span className="levels">MaxLevel: {game.maxLevel}</span>
                    <p className="type">{game.category}</p>
                </div>

                <p className="text">{game.summary}</p>

                
              <DisplayComments />

                
                <div className="buttons">
                    <Link to={`/games/${gameId}/edit`} className="button">Edit</Link>
                    <button onClick={gameDeleteHandler} 
                    className="button"
                    >Delete
                    </button>
                </div>
            </div>

            
            <AddComments email={email} gameId={gameId} />
           

        </section>
    );
}