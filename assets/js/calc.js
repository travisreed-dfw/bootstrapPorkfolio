// Display
// getElementById('display-math');
// Top Row
// getElementById('btn-clear');
// getElementById('btn-positive-negative');
// getElementById('btn-percent');
// getElementById('btn-division');
// Second Row
// getElementById('btn-7');
// getElementById('btn-8');
// getElementById('btn-9');
// getElementById('btn-multiplication');
// Third Row
// getElementById('btn-4');
// getElementById('btn-5');
// getElementById('btn-6');
// getElementById('btn-subtraction');
// Fourth Row
// getElementById('btn-1');
// getElementById('btn-2');
// getElementById('btn-3');
// getElementById('btn-addition');
// Bottom Row
// getElementById('btn-0');
// getElementById('btn-decimal');
// getElementById('btn-equals');

let numberString = '';
let parsedNumberOne = '';
let parsedNumberTwo = '';
let mathOperator = '';
let varOperator = '';
let results = '';
let operators = {
  addition: function(parsedNumberOne, parsedNumberTwo) {
    return (result = parsedNumberOne + parsedNumberTwo);
  },
  subtraction: function(parsedNumberOne, parsedNumberTwo) {
    return (result = parsedNumberOne - parsedNumberTwo);
  },
  multiplication: function(parsedNumberOne, parsedNumberTwo) {
    return (result = parsedNumberOne * parsedNumberTwo);
  },
  division: function(parsedNumberOne, parsedNumberTwo) {
    return (result = parsedNumberOne / parsedNumberTwo);
  }
};

function setVarOperator() {
  if (mathOperator === 'addition') {
    varOperator = '+';
  } else if (mathOperator === 'subtraction') {
    varOperator = '-';
  } else if (mathOperator === 'multiplication') {
    varOperator = 'X';
  } else if (mathOperator === 'division') {
    varOperator = '/';
  }
}

function displayMath() {
  document.getElementById('display-math').innerText =
    parsedNumberOne +
    ' ' +
    varOperator +
    ' ' +
    numberString +
    // parsedNumberTwo +
    ' = ' +
    results;
}

function clearNumberString() {
  numberString = '';
}

function btnClear() {
  numberString = '';
  parsedNumberOne = '';
  parsedNumberTwo = '';
  results = '';
  result = '';
  varOperator = '';
  document.getElementById('display-math').innerText =
    '__ + __ = __ or whatever';
  console.log(numberString);
}

// function btnPositiveNegative() {}

// function btnPercent() {}

function btnDivision() {
  mathOperator = 'division';
  parsedNumberOne = parseFloat(numberString);
  setVarOperator();
  clearNumberString();
  console.log(parsedNumberOne);
}

function btnMultiplication() {
  mathOperator = 'multiplication';
  parsedNumberOne = parseFloat(numberString);
  setVarOperator();
  clearNumberString();
  console.log(parsedNumberOne);
}

function btnSubtraction() {
  mathOperator = 'subtraction';
  parsedNumberOne = parseFloat(numberString);
  setVarOperator();
  clearNumberString();
  console.log(parsedNumberOne);
}

function btnAddition() {
  mathOperator = 'addition';
  parsedNumberOne = parseFloat(numberString);
  setVarOperator();
  clearNumberString();
  console.log(parsedNumberOne);
}

function btnEquals() {
  parsedNumberTwo = parseFloat(numberString);
  // operators[mathOperator](parsedNumberOne, parsedNumberTwo);
  results = operators[mathOperator](parsedNumberOne, parsedNumberTwo);
  // console.log(operators[mathOperator](parsedNumberOne, parsedNumberTwo));
  // console.log(results);
  // console.log(varOperator);
  displayMath();
}

// function btnDecimal() {}

function btn0() {
  numberString += '0';
  displayMath();
  console.log(numberString);
}

function btn1() {
  numberString += '1';
  displayMath();
  console.log(numberString);
}

function btn2() {
  numberString += '2';
  displayMath();
  console.log(numberString);
}

function btn3() {
  numberString += '3';
  displayMath();
  console.log(numberString);
}

function btn4() {
  numberString += '4';
  displayMath();
  console.log(numberString);
}

function btn5() {
  numberString += '5';
  displayMath();
  console.log(numberString);
}

function btn6() {
  numberString += '6';
  displayMath();
  console.log(numberString);
}

function btn7() {
  numberString += '7';
  displayMath();
  console.log(numberString);
}

function btn8() {
  numberString += '8';
  displayMath();
  console.log(numberString);
}

function btn9() {
  numberString += '9';
  displayMath();
  console.log(numberString);
}
