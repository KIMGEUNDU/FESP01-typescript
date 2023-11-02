(() => {
  interface CityDropdown {
    value: string;
    selected: boolean;
  }

  interface ZipcodeDropdown {
    value: number;
    selected: boolean;
  }

  function createDropdown(list: CityDropdown[]): string {
    // const select = document.createElement('select')

    // for (let i = 0; i < list.length; i++) {
    //   const option = document.createElement('option')
    //   option.setAttribute('selected', `${list[i].selected}`)
    //   select.append(option)
    //   option.append(document.createTextNode(list[i].value))
    // }


    // return select.outerHTML
    let result = '<select>'

    list.forEach(item => {
      result += `<option ${item.selected ? 'selected' : ''}>${item.value}</option>`
    })

    return result
  }

  function createDropdown2(list: ZipcodeDropdown[]): string {
    let result = '<select>'

    list.forEach(item => {
      result += `<option ${item.selected ? 'selected' : ''}>${item.value}</option>`
    })

    return result
  }

  var cityList: CityDropdown[] = [
    { value: '서울시', selected: false },
    { value: '인천시', selected: true },
    { value: '광주시', selected: false },
  ]

  const cityTag = createDropdown(cityList)
  console.log(cityTag);

  var zipcodeList: ZipcodeDropdown[] = [
    { value: 123456, selected: false },
    { value: 456789, selected: true },
    { value: 789123, selected: false },
  ]

  const zipcodeTag = createDropdown2(zipcodeList)
  console.log(zipcodeTag);
})();
