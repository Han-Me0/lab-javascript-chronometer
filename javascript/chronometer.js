class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(callback) {
    // ... your code goes here
    this.intervalId = setInterval(() => {
      if(callback){
        callback();
      }
      this.currentTime++;
    }, 1000);
    
  }

  getMinutes() {
    // ... your code goes here
    return Math.floor(this.currentTime / 60);
    
  }

  getSeconds() {
    // ... your code goes here
    let seconds = this.currentTime % 60;
  
    return seconds;
  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
    return String(value).padStart(2, '0');

    }
    
  

  stop() {
    // ... your code goes here
    clearInterval(this.intervalId);
  }

  reset() {
    // ... your code goes here
    this.currentTime = 0;
  }

  split() {
    // ... your code goes here
    let mins = this.computeTwoDigitNumber(this.getMinutes());
    let secs =this.computeTwoDigitNumber(this.getSeconds());
    return `${mins}:${secs}`;
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
