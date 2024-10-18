import menuMobile from "./menu-mobile.js";
import { ApiClient } from "./services/apiClient.js";

const dragonBall = "https://dragonball-api.com/api/characters";
const avatar = "https://last-airbender-api.fly.dev/api/v1/characters";
const naruto = "https://dattebayo-api.onrender.com/characters";
menuMobile();

const retorno = await ApiClient(naruto);
console.log(retorno);
