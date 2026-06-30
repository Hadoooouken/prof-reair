export const calculator = () => {
  const calc = document.querySelector('#calc');

  if (!calc) {
    return;
  }
  const calcTotal = calc.querySelector('#calc-total');
  const calcWindowType = calc.querySelector('#calc-type-material');
  const calcSquare = calc.querySelector('#calc-input');
  const calcType = calc.querySelector('#calc-type');

  // площадь * value типа балкона * value типа материала

  const calcSum = () => {
    const calcSquareValue = +calcSquare.value;
    const calcTypeValue = +calcType.value;
    const calcWindowTypeValue = +calcWindowType.value;
    if (!calcSquareValue || !calcTypeValue || !calcWindowTypeValue) {
      calcTotal.value = '';
      return;
    }
    const res = calcSquareValue * calcTypeValue * calcWindowTypeValue;
    calcTotal.value = res.toFixed(2);
    return res;
  };

  calc.addEventListener('input', (e) => {
    if (e.target === calcSquare || e.target === calcType || e.target === calcWindowType) {
      calcSum();
    }
  });
};
