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

let count = 0;

samefood.forEach((x) => {
  food.splice(x - count, 1);
  count++;
});
