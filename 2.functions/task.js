// Задание 1
function getArrayParams(arr) {
  let min = Infinity; 
  let max = -Infinity;
  let sum = 0;
  let avg;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    } 
    if (arr[i] > max) {
      max = arr[i];
    }
    sum = sum + arr[i];
    avg = sum / arr.length;
  }
  
  return { min, max, avg: +avg.toFixed(2) };
}

// Задание 2
function worker(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }

  return sum;
}

function makeWork(arrOfArr, func) {
  let max = -Infinity;
  
  for (let i = 0; i < arrOfArr.length; i++) {
    const funcResult = func(arrOfArr[i]);
    if (funcResult > max) {
      max = funcResult;
    }
  }
  
  return max;
}


// Задание 3
function worker2(arr) {
  let min = Infinity;
  let max = -Infinity;
  

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return Math.abs(max - min);
}

console.log(makeWork([[-10, -20, -40], [10, 20, 30]], worker2));
console.log(makeWork([[0, 0, 0], [-1, -99]], worker2));