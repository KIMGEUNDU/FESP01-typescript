// ex02-01.js 복사
(() => {
  class HighSchool {
    #kor = 0;
    #eng = 0;

    constructor(kor, eng) {
      this.#kor = kor;
      this.#eng = eng;
    }

    #sum() {
      return this.#kor + this.#eng;
    }

    avg() {
      // 평균은 소수 첫째 자리에서 반올림
      return Math.round(this.#sum() / 2);
    }
  }

  var s1 = new HighSchool(100, 91);
  console.log('평균', s1.avg());
  // console.log('합계', s1.sum());
})();
