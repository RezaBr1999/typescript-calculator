"use strict";
const operationArray = Array.from(document.querySelectorAll(".btn.operation"));
const numberArray = Array.from(document.querySelectorAll(".btn.number"));
let currentOperation = document.getElementById("current-operation");
if (currentOperation) {
    currentOperation.innerText = "0";
}
let result = document.getElementById("result");
let operationResult = 0;
