'use strict';

function solveEquation(a, b, c) {
  let arr = [];
  const d = b ** 2 - (4 * a * c);

  if (d === 0) {
    const x = -b / (2 * a);
    arr = [x];
  } else if (d > 0) {
    const x1 = (-b + Math.sqrt(d)) / (2 * a);
    const x2 = (-b - Math.sqrt(d)) / (2 * a);
    arr = [x1, x2];
  }

  return arr; 
}

function monthDiff(d1, d2) {
  let months;
  months = (d2.getFullYear() - d1.getFullYear()) * 12;
  months -= d1.getMonth();
  months += d2.getMonth();

  return months <= 0 ? 0 : months;
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;

  if (isNaN(+percent)) {
    return `Параметр "Процентная ставка" содержит неправильное значение "${percent}"`;
  } else if (isNaN(+contribution)) {
    return `Параметр "Начальный взнос" содержит неправильное значение "${contribution}"`;
  } else if (isNaN(+amount)) {
    return `Параметр "Общая стоимость" содержит неправильное значение "${amount}"`;
  }

  const s = +amount - +contribution;
  const n = monthDiff(new Date(), new Date(date));
  const p = (+percent / 100) / 12;
  const monthlyPayment = s * (p + (p / (((1 + p) ** n) - 1)));

  totalAmount = monthlyPayment * n;

  return +totalAmount.toFixed(2);
}