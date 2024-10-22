import { menuMobile } from "./menu-mobile.js";
import { selectCharacter } from "./services/selectCharacter.js";
import { ApiClient } from "./services/apiClient.js";

import { Tip } from "./services/tip.js";
import { WordHandler } from "./services/wordHandler.js";

const naruto = "https://dattebayo-api.onrender.com/characters?limit=150";
const avatar =
  "https://last-airbender-api.fly.dev/api/v1/characters?perPage=150&page=1";
const dragonBall = "https://dragonball-api.com/api/characters?limit=58";

menuMobile();

const params = new URLSearchParams(window.location.search);
const nickname = params.get("name");
const theme = params.get("theme");

let retorno, character;

console.log;
switch (theme) {
  case "naruto":
    retorno = await ApiClient(naruto);
    character = selectCharacter(retorno, "naruto");
    //console.log('naruto')
    break;

  case "avatar":
    retorno = await ApiClient(avatar);
    character = selectCharacter(retorno, "avatar");
    //console.log('avatar')
    break;

  case "dragonBall":
    retorno = await ApiClient(dragonBall);
    character = selectCharacter(retorno, "dragonBall");
    //console.log('dragonBall')
    break;
}

const wordHandler = new WordHandler(character.name);
wordHandler.hideWord();
wordHandler.validateCharacter();

const tip = new Tip(character.tips);
tip.tipHandler();
