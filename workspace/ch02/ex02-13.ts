(() => {
  function echo<T extends string | number | object /* Date */>(msg: T) {
    return msg
  }

  console.log(echo('hello'));
  console.log(echo(200));
  console.log(echo(new Date()));
  console.log(echo(new XMLHttpRequest()));
})();
