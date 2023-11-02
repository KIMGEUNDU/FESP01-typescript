// ex01-19.ts 복사
(() => {
  enum ClassName {
    JS = 200,
    TS,
    REACT
  }


  function getSchedule(subject: ClassName): string | undefined /* void */ {
    if (subject === ClassName.JS) {
      return `Javascript 수업은 4일 교육 + 2일 프로젝트 입니다.`
    } else if (subject === ClassName.TS) {
      return `Typescript 수업은 3일 교육 + 1일 프로젝트입니다.`
    }
  }

  const jsSchedule = getSchedule(ClassName.JS)
  const tsSchedule = getSchedule(ClassName.TS)


  console.log(jsSchedule);
  console.log(tsSchedule);

  console.log(ClassName);
})();