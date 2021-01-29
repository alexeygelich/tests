//First task
const myParseInt = (str) => Number(str);
console.log(myParseInt("123") + 2);

//Second task

const matrixFn = (arr) => {
  let str = "";
  let newArr = [];
  let sc = 0;
  let ec = arr[0].length - 1;
  let sr = 0;
  let er = arr.length - 1;

  const fn = () => {
    if (sc > ec + 1) {
      str = str = newArr.join(" ");
      console.log("qwe");
      return str;
    }

    newArr = [...newArr, ...arr[sc].slice(sc, ec + 1)];

    for (let i = sr + 1; i <= er; i++) {
      newArr = [...newArr, arr[i][ec]];
    }

    if (sr === er) {
      str = str = newArr.join(" ");
      return str;
    }

    newArr = [...newArr, ...arr[er].reverse().slice(sc + 1, ec + 1)];

    if (sc === ec) {
      str = str = newArr.join(" ");
      return str;
    }

    for (let i = er - 1; i > sr; i--) {
      newArr = [...newArr, arr[i][sc]];
    }

    sc++;
    sr++;
    ec--;
    er--;
    fn();
  };

  fn();

  return str;
};

console.log(
  matrixFn([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);
