(() => {
  var div = document.querySelector('div')
  // div!.innerHTML = 'hello'

  console.log(div);
  if (div !== null) { //타입 가드
    div.innerHTML = 'hello'
  }

})();