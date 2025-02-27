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
