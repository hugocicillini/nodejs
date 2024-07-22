import { createPromptModule } from "inquirer"

class Mario {
  name = "Mario";
  speed = 5;
  skill = 5;
  power = 5;
}

class Luigi {
  name = "Luigi";
  speed = 2;
  skill = 2;
  power = 2;
}

class Peach {
  name = "Peach";
  speed = 3;
  skill = 3;
  power = 3;
}

class Bowser {
  name = "Bowser";
  speed = 4;
  skill = 4;
  power = 4;
}

class DonkeyKong {
  name = "Donkey Kong";
  speed = 1;
  skill = 1;
  power = 1;
}

class Yoshi {
  name = "Yoshi";
  speed = 6;
  skill = 6;
  power = 6;
}

class Character {
  constructor(character) {
    this.name = character.name;
    this.speed = character.speed;
    this.skill = character.skill;
    this.power = character.power;
    this.points = 0;
  }
}

async function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}

async function getRandomBlock() {
  let random = Math.random();
  let result;

  switch (true) {
    case random < 0.33:
      result = "RETA";
      break;
    case random < 0.66:
      result = "CURVA";
      break;
    default:
      result = "CONFRONTO";
      break;
  }

  return result;
}

async function logRollResult(characterName, diceResult, attribute) {
  console.log(`${characterName} rolou um dado de ${diceResult} e obteve ${attribute + diceResult} pontos!`);
}

async function playRaceEngine(character1, character2) {
  for (let round = 1; round <= 5; round++) {
    console.log(`RODADA ${round}: ${character1.name} ${character1.points} x ${character2.points} ${character2.name}`);

    let block = await getRandomBlock();
    console.log(`Desafio: ${block} \n`);

    let diceResult1 = await rollDice();
    let diceResult2 = await rollDice();

    let testSkill1 = 0;
    let testSkill2 = 0;

    switch (block) {
      case "RETA":
        testSkill1 = character1.speed + diceResult1;
        testSkill2 = character2.speed + diceResult2;
        await logRollResult(character1.name, diceResult1, character1.speed);
        await logRollResult(character2.name, diceResult2, character2.speed);
        console.log("-----------------------------------------------------");
        break;
      case "CURVA":
        testSkill1 = character1.skill + diceResult1;
        testSkill2 = character2.skill + diceResult2;
        await logRollResult(character1.name, diceResult1, character1.skill);
        await logRollResult(character2.name, diceResult2, character2.skill);
        console.log("-----------------------------------------------------");
        break;
      case "CONFRONTO":
        testSkill1 = character1.power + diceResult1;
        testSkill2 = character2.power + diceResult2;
        await logRollResult(character1.name, diceResult1, character1.power);
        await logRollResult(character2.name, diceResult2, character2.power);
        console.log("-----------------------------------------------------");
        break;
    }

    if (testSkill1 > testSkill2) {
      character1.points++;
    } else if (testSkill1 < testSkill2) {
      character2.points++;
    }
  }
  console.log(`RESULTADO: ${character1.name} ${character1.points} x ${character2.points} ${character2.name} \n`);
}

async function showWinner(character1, character2) {
  if (character1.points > character2.points) {
    console.log(`${character1.name} venceu! 🏆`);
  } else if (character1.points < character2.points) {
    console.log(`${character2.name} venceu! 🏆`);
  } else {
    console.log("Empate! 😐");
  }
}

async function main() {
  const characters = [
    { name: 'Mario', instance: new Mario() },
    { name: 'Luigi', instance: new Luigi() },
    { name: 'Peach', instance: new Peach() },
    { name: 'Bowser', instance: new Bowser() },
    { name: 'Donkey Kong', instance: new DonkeyKong() },
    { name: 'Yoshi', instance: new Yoshi() },
  ];

  const characterNames = characters.map(c => c.name);

  const prompt = createPromptModule();

  const answers = await prompt([
    {
      type: 'list',
      name: 'player1',
      message: 'Player 1, escolha seu personagem:',
      choices: characterNames,
    },
    {
      type: 'list',
      name: 'player2',
      message: 'Player 2, escolha seu personagem:',
      choices: characterNames,
    },
  ]);

  const player1 = new Character(characters.find(c => c.name === answers.player1).instance);
  const player2 = new Character(characters.find(c => c.name === answers.player2).instance);

  console.log(`Corrida entre: ${player1.name} e ${player2.name} 🏎️ 🏎️ 🏎️\nComeçando! \n `);

  await playRaceEngine(player1, player2);

  await showWinner(player1, player2);
}

main();