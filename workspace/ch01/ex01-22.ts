// ex01-21.ts 복사
(() => {
  const enum ClassName {
    JS = 'Javascript',
    TS = 'Typescript',
    REACT = 'React'
  }


  function getSchedule(subject: ClassName): string | undefined /* void */ {
    if (subject === ClassName.JS) {
      return `${ClassName.JS} 수업은 4일 교육 + 2일 프로젝트 입니다.`
    } else if (subject === ClassName.TS) {
      return `${ClassName.TS} 수업은 3일 교육 + 1일 프로젝트입니다.`
    }
  }

  const jsSchedule = getSchedule(ClassName.JS)
  const tsSchedule = getSchedule(ClassName.TS)
  const reactSchedule = getSchedule(ClassName.REACT)


  console.log(jsSchedule);
  console.log(tsSchedule);
})();