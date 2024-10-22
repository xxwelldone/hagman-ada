// let player = 'pedro' //window.prompt('Digite o seu nick')
// let score = 85 //window.prompt('Digite seu score')

const params = new URLSearchParams(window.location.search);

const player = params.get("nickname");
const score = params.get("score");

function setRank() {
  if (score > 0) {
    localStorage.setItem(player, score);
  }
}

setRank();

function getScores() {
  const scores = [];
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    const value = localStorage.getItem(key);

    scores.push({ nickname: key, score: value });
  }
  return scores;
}

const scores = getScores();

function getFiveScores(scores) {
  scores = scores.sort((a, b) => b.score - a.score);
  scores = scores.slice(0, 5);

  return scores;
}

let maioresRanks = getFiveScores(scores);

const rankList = document.querySelector(".rank-list");
console.log(rankList)

const ranks = getScores();

ranks.forEach((i, index) => {
  let div = document.createElement("div");
  div.setAttribute("class", "rank-item --green-bg");

  let span1 = document.createElement("span");
  span1.innerText = index + 1 + "º";
  span1.setAttribute("class", "rank-position");

  let span2 = document.createElement("span");
  span2.innerText = i.nickname;
  span2.setAttribute("class", "rank-position");
  div.append(span1, span2);
  rankList.append(div);
});

console.log(maioresRanks);
