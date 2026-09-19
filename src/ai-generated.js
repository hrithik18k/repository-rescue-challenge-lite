const DEFAULT_API_URL = "http://localhost:8080";

function addNumbers(firstNumber, secondNumber) {
  return firstNumber + secondNumber;
}

function doubleNumber(value) {
  return value * 2;
}

function createRequestConfig(environment = process.env) {
  return {
    url: environment.API_URL || DEFAULT_API_URL,
    apiKey: environment.API_KEY || null,
  };
}

module.exports = { addNumbers, doubleNumber, createRequestConfig };
