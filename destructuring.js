// // 배열 구조 분해전 //
// const arr = [1, 2, 3];
// const one = arr[0];
// const two = arr[1];
// const three = arr[2];

// console.log(one, two, three);

// // 배열 구조 분해 사용//
// const [deOne, deTwo, deThree] = arr;

// console.log(deOne, deTwo, deThree);

// 날짜 //
// const today = new Date();
// console.log(today);

// const formatDay = today.toISOString().substring(0, 10);
// console.log(formatDay);

// const [year, month, day] = formatDay.split('-');

// console.log(year, month, day);
// const year = formatDay.split('-')[0];

// 객체 구조 분해 할당 전 //
const obj = { firstName: '성범', lastName: '홍' };

// const firstName = obj.firstName;
// const lastName = obj.lastName;
// console.log(lastName, firstName);

const { firstName, lastName } = obj;

console.log(firstName, lastName);

const person = {
  name: 'Lee',
  address: {
    zipCode: '03068',
    city: 'Seoul',
  },
};
const {
  address: { zipCode, city },
} = person;

console.log(city, zipCode);
