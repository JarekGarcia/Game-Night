import { AboutController } from "./controllers/AboutController.js";
import { GameNightPlayersController } from "./controllers/GameNightPlayersController.js";
import { HomeController } from "./controllers/HomeController.js";
import { ValuesController } from "./controllers/ValuesController.js";
import { AboutView } from "./views/AboutView.js";


export const router = [
  {
    path: '',
    controller: GameNightPlayersController,
    view: null

    /*html*/
  },
  {
    path: '#/about',
    controller: [AboutController, ValuesController],
    view: AboutView
  }
]