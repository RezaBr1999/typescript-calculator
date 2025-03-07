"use strict";
const operationArray = Array.from(document.querySelectorAll(".btn.operation"));
const numberArray = Array.from(document.querySelectorAll(".btn.number"));
let currentOperation = document.getElementById("current-operation");
let result = document.getElementById("result");
let operationResult = 0;
let num1 = document.getElementById("num1");
let num2 = document.getElementById("num2");
let operator = document.getElementById("operator");
