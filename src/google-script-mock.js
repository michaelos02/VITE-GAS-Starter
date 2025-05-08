// src/google-script-mock.js

window.google = window.google || {};
google.script = google.script || {};

// Internal handlers
let successHandler = () => {};
let failureHandler = () => {};

google.script.run = {
  withSuccessHandler(callback) {
    successHandler = callback;
    return this;
  },
  withFailureHandler(callback) {
    failureHandler = callback;
    return this;
  },

  // Simulated server-side functions
  getData() {
    console.log('Mock: Calling getData...');
    setTimeout(() => {
      const mockData = [
        ['Name', 'Age', 'City'],
        ['Alice', 30, 'NYC'],
        ['Bob', 25, 'LA'],
        ['Carol', 28, 'Chicago']
      ];
      successHandler(mockData);
    }, 500);
  },

  getConversion(input) {
    console.log('Mock: Calling getConversion with input:', input);
    setTimeout(() => {
      if (typeof input !== 'number') {
        failureHandler('Invalid input. Expected a number.');
      } else {
        successHandler(input * 10);
      }
    }, 500);
  }
};
