(() => {
  interface Dropdown<T> {
    value: T;
    selected: boolean;
  }

  function createDropdown<T>(list: Dropdown<T>[]): string {
    let result = '<select>'

    list.forEach(item => {
      result += `<option ${item.selected ? 'selected' : ''}>${item.value}</option>`
    })

    return result
  }

  var cityList: Dropdown<string>[] = [
    { value: '서울시', selected: false },
    { value: '인천시', selected: true },
    { value: '광주시', selected: false },
  ]

  const cityTag = createDropdown(cityList)
  console.log(cityTag);

  var zipcodeList: Dropdown<number>[] = [
    { value: 123456, selected: false },
    { value: 456789, selected: true },
    { value: 789123, selected: false },
  ]

  const zipcodeTag = createDropdown(zipcodeList)
  console.log(zipcodeTag);
})();
