let player = 'pedro' //window.prompt('Digite o seu nick')

let score = 85 //window.prompt('Digite seu score')

function setRank(){
    localStorage.setItem(player,score)
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