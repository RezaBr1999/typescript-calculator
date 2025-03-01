const operationArray: HTMLButtonElement[] = Array.from(
  document.querySelectorAll(".btn.operation")
);

const numberArray = Array.from(document.querySelectorAll(".btn.number"));

let currentOperation = document.getElementById(
  "current-operation"
) as HTMLDivElement | null;

if (currentOperation) {
  currentOperation.innerText = "0";
}

let result = document.getElementById("result") as HTMLDivElement | null;
let operationResult: number = 0;

let num1: HTMLElement | null = document.getElementById("num1");
let num2: HTMLElement | null = document.getElementById("num2");
let operator: HTMLElement | null = document.getElementById("operator");

function updateDisplay(
  element: HTMLElement | null,
  text: string,
  replace: boolean = false
) {
  if (element) {
    if (replace) {
      element.innerHTML = text;
    } else {
      element.innerHTML += text;
    }
  }
}
