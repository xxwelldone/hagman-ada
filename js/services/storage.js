export class Storage {
  constructor() {
    this.rank = [];
  }

  getAll() {
    localStorageRank = localStorage.getItem("rank");
    this.rank = localStorage.getItem("ranks")
      ? JSON.parse(localStorageRank)
      : [];
    ranks.forEach((element) => {
      render(element);
    });
  }
  save(score, name) {
    const obj = { name: name, score: score };
    this.rank.push(obj);
    console.log(this.rank);
    localStorage.setItem("ranks", JSON.stringify(this.rank));
  }
}
