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
    return
  }

  var cityList: CityDropdown[] = [
    { value: '서울시', selected: false },
    { value: '인천시', selected: true },
    { value: '광주시', selected: false },
  ]

  const cityTag = createDropdown(cityList)
  console.log(cityTag);
})();
