const arr = [1, 2, 3, 4, 5, 6, 7];

console.log(arr);
console.log(...arr);

const obj = {
  name: '홍성범',
  status: '졸림',
};

console.log(obj);
console.log({ ...obj });

const sbData = {
  name: '홍성범',
  age: '32',
};

const sbInfo = {
  nickName: 'sb',
  status: '졸림',
};

const sb = {
  ...sbData,
  ...sbInfo,
};

console.log(sb);

const arr1 = [1, 2, 3];
const arr2 = ['4', '5', '6'];

const merge = [...arr1, ...arr2];
console.log(merge);

const sb2 = {
  name: '홍성범',
  gender: 'M',
  nickName: 'sb',
  email: 'mkonji2020@naver.com',
};

const { name, ...restInfo } = sb2;
console.log(name, restInfo);

const arr3 = [1, 2, 3, 4, 5, 6, 7];

const [first, ...rest] = arr3;
console.log(first, rest);

function spread(first, second, ...rest) {
  console.log(first);
  console.log(second);
  console.log(rest);
}

spread(1, 2, 3, 4, 5, 6, 7, 8);
