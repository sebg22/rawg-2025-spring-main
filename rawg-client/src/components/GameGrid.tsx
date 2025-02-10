import { useEffect, useState } from "react";
import apiClient from "../services/api-client";

interface Game {
    id: number;
    name: string;
}

interface GameResponse {
    count: number;
    results: Game[];
}


const GameGrid = () => {
    const [games, setGames] = useState<Game[]>([]);
    const [error, setError] = useState<string>("");

    useEffect(() => {
        apiClient.get<GameResponse>("/games").then((response) => setGames(response.data.results)).catch((err) => setError(err.message));
    }, []);

    return (
        <div>
            {error && <div>{error}</div>}
            <ul>
                {games.map((game) => (
                    <li key={game.id}>{game.name}</li>
                ))}
            </ul>
        </div>
    );
}
export default GameGrid;