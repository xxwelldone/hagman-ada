export class Score {
  static pts = 100;

  getPts() {
    return Score.pts;
  }
  decrementByTip() {
    if (Score.pts > 0 && Score.pts - 5 >= 0) {
      Score.pts -= 5;
    }
  }
  decrementByError() {
    if (Score.pts > 0 && Score.pts - 10 >= 0) {
      Score.pts -= 10;
    }
  }
}
