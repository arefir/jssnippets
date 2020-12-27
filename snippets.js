//Delete Same Elements From An Array
let food = [
  "bread",
  "pie",
  "pie",
  "pie",
  "pizza",
  "pasta",
  "hotdog",
  "pizza",
  "hotdog",
];

let samefood = [];

food.map((x, y) => {
  if (food.indexOf(x) !== y) {
    samefood.push(y);
  }
});

// console.log(samefood);

let count = 0;

samefood.forEach((x) => {
  // console.log("foreach " + x);
  food.splice(x - count, 1);
  // samefood = samefood.map((x) => {
  //   console.log("map " + x);
  //   const y = x - 1;
  //   return y;
  // });
  // console.log("samefood after tolak" + samefood);
  count++;
});
