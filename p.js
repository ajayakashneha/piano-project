function matchHouses(steps) {
    if (steps <= 0) {
      return 0;
    }

    let matchsticks = 6;

    for (let i = 2; i <= steps; i++) {
      matchsticks += 5;
    }

    return matchsticks;
  }


//   console.log(matchHouses(1));
//   console.log(matchHouses(2));
//   console.log(matchHouses(4));

function matchHouses(steps) {
    let matchsticks = (steps * 5) + 1;
    return matchsticks;
  }

  console.log(matchHouses(1));
  console.log(matchHouses(2));
  console.log(matchHouses(4));

//   2. Design a function minMax which takes an array of numbers and returns both the minimum and
// maximum numbers in the array.
// Example tests:
// minMax([1,2,3,4,5]) -> [1,5]
// minMax([8,9,4,16,7]) -> [4,16]

function minMax(numbers) {
    numbers.sort(function(a, b) {
      return a - b;
    });

    const min = numbers[0];
    const max = numbers[numbers.length - 1];

    return [min, max];
  }

  console.log(minMax([1,3,7,8,2]))
