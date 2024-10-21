// import { menuMobile } from "./menu-mobile.js";
import { selectCharacter } from "./services/selectCharacter.js";
import { ApiClient } from "./services/apiClient.js";
import { inicialHandler, wordHandler } from "./services/Handler.js";
import { tipHandler } from "./services/tipHandler.js";
// import { usedLettersHandler } from "./services/usedLettersHandler.js";

const naruto = "https://dattebayo-api.onrender.com/characters?limit=150";
const avatar =
  "https://last-airbender-api.fly.dev/api/v1/characters?perPage=150&page=1";
const dragonBall = "https://dragonball-api.com/api/characters?limit=58";

// menuMobile();

const retornoNaruto = await ApiClient(naruto);
const retornoAvatar = await ApiClient(avatar);
const retornoDragonBall = await ApiClient(dragonBall);

const characterNaruto = selectCharacter(retornoNaruto, "naruto");
const characterAvatar = selectCharacter(retornoAvatar, "avatar");
const characterDragonBall = selectCharacter(retornoDragonBall, "DragonBall");

console.log("RETORNO MAIN", characterDragonBall);

// console.log(retorno);
const retorno = await ApiClient(naruto);
let name = retorno.characters[0].name;

inicialHandler(name);

wordHandler(name);
tipHandler();
