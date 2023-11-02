// ex02-05/math.js 복사
export interface Data {
  a: number;
  b: number;
}

export function sum(data: Data): number {
  return data.a + data.b; //타입추론에 의해서 number만 가지고 계산하는거는 return값도 number타입이 되기 때문에 안써줘도 된다.
}

export function substract(data: Data): number {
  return data.a - data.b;
}

function divide(data: Data): number {
  return data.a / data.b;
}

export default { sum, substract, divide };
