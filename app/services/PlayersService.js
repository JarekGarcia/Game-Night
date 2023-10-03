import { AppState } from "../AppState.js";
import { Players } from "../models/Players.js";

class PlayersService {
    createPlayer(playerData) {
        const newPlayer = new Players(playerData.name, playerData.imgUrl)

    }
}