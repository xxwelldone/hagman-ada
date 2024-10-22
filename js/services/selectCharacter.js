export function selectCharacter(listofCharacters, api) {
  let randomIndex = Math.random();
  let character;

  switch (api) {

    case "naruto":
      randomIndex = parseInt(randomIndex * listofCharacters.characters.length);
      character = listofCharacters.characters[randomIndex];
      const randomJutsuIndex = parseInt(Math.random() * character.jutsu.length)

      return {
        name: character.name,
        tips: [character.personal.sex, character.jutsu[randomJutsuIndex], character.images[0]]
      };

    case "avatar":
      randomIndex = parseInt(randomIndex * listofCharacters.length);
      character = listofCharacters[randomIndex];

      return {
        name: character.name,
        tips: [character.allies[0], character.enemies[0], character.photoUrl]
      };

    case "dragonBall":
      randomIndex = parseInt(randomIndex * listofCharacters.items.length);

      character = listofCharacters.items[randomIndex];
      return {
        name: character.name,
        tips: [character.ki, character.race, character.image]
      };

    default: return console.error("Opção invádlida, escolha um tema válido!");

  }


  //TODO Logica de selecionar 1 personagem e lista de dicas, retonrar como obj
  //TODO Criar uma função de renderizar no html a palavra e a dica (podendo ter varias chamadas para dicas diferentes)
  //Todo logica de apagar letras usadas;
  //TODO Logica de pontuação e Logica de guardar dado no localstorage
}
