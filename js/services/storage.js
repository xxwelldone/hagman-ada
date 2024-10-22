export class Storage {
  constructor() {
    this.username = '';
    this.score = 0;
  }

  // getAll() {
  //   localStorageRank = localStorage.getItem(this.username, this.score);
  // }
  getScores() {
    const scores = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      const value = localStorage.getItem(key);
  
      scores.push({ nickname: key, score: value });
    }
    return scores;
  }

  getFiveScores(scores) {
    scores = scores.sort((a, b) => b.score - a.score);
    scores = scores.slice(0, 5);
  
    return scores;
  }

  save(score, username) {
    localStorage.setItem(username, score);
  }
}
