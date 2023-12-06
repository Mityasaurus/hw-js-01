let input;
let numbers = [];
let total = 0.0;

while (true) {
  input = prompt("Введіть число");
  if (input === null) {
    break;
  }
  input = Number(input);
  if (isNaN(input)) {
    alert("Було введено не число, спробуйте ще раз");
  } else {
    numbers.push(input);
  }
}

for (const number of numbers) {
  total += number;
}

console.log(`Загальна сума чисел дорівнює ${total}`);
