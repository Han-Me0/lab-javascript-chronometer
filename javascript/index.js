const chronometer = new Chronometer();

// get the buttons:
const btnLeftElement = document.getElementById('btnLeft');
const btnRightElement = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
const minDecElement = document.getElementById('minDec');
const minUniElement = document.getElementById('minUni');
const secDecElement = document.getElementById('secDec');
const secUniElement = document.getElementById('secUni');
const milDecElement = document.getElementById('milDec');
const milUniElement = document.getElementById('milUni');
const splitsElement = document.getElementById('splits');

function printTime() {
  // ... your code goes here
   let minutes = chronometer.computeTwoDigitNumber(chronometer.getMinutes());
   let seconds = chronometer.computeTwoDigitNumber(chronometer.getSeconds());

   minDecElement.innerHTML = minutes[0];
   minUniElement.innerHTML = minutes[1];
   secDecElement.innerHTML = seconds[0];
   secUniElement.innerHTML = seconds[1];

}

function printMinutes() {
  // ... your code goes here
}

function printSeconds() {
  // ... your code goes here
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  // ... your code goes here
}

function clearSplits() {
  // ... your code goes here
}

function setStopBtn() {
  // ... your code goes here
}

function setSplitBtn() {
  // ... your code goes here
}

function setStartBtn() {
  // ... your code goes here
}

function setResetBtn() {
  // ... your code goes here
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  // ... your code goes here
  if(btnLeftElement.classList.contains('start')){
    btnLeftElement.className = 'btn stop';
    btnLeftElement.innerText = 'STOP';
    chronometer.start(printTime);
    console.log('hello', chronometer.currentTime);
  } else if(btnLeftElement.classList.contains('stop')){
    btnLeftElement.className = 'btn start';
    btnLeftElement.innerText = 'START';
    chronometer.stop(printTime);
  }

});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  // ... your code goes here
  if(btnRightElement.classList.contains('reset')){
    btnRightElement.className = 'btn split';
    btnRightElement.innerText = 'SPLIT';
  } else if (btnRightElement.classList.contains('split')){
    btnRightElement.className = 'btn reset';
    btnRightElement.innerHTML = 'RESET';
  }
});
