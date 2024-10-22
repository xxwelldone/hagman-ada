// let player = 'pedro' //window.prompt('Digite o seu nick')
// let score = 85 //window.prompt('Digite seu score')

const params = new URLSearchParams(window.location.search);

const player = params.get('nickname')
const score = params.get('score')

function setRank(){
    if(score > 0){
        localStorage.setItem(player,score)
    }
}

setRank()


function getScores(){
    const scores = []
    for(let i =0; i<localStorage.length;i++){
        const key = localStorage.key(i)
        const value = localStorage.getItem(key)

        scores.push({nickname: key, score: value})
    }
    return scores
}

const scores = getScores()

function getFiveScores(scores){
    scores = scores.sort((a,b)=> b.score - a.score)
    scores = scores.slice(0,5)

    return scores
}

let maioresRanks = getFiveScores(scores)

console.log(maioresRanks)