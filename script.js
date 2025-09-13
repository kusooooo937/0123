const exprEl = document.getElementById("expr");
const valueEl = document.getElementById("value");

let current = "0";
let expression = "";

function updateDisplay() {
  exprEl.textContent = expression;
  valueEl.textContent = current;
}

function clearAll() {
  current = "0";
  expression = "";
  updateDisplay();
}

function backspace() {
  if (current.length > 1) {
    current = current.slice(0, -1);
  } else {
    current = "0";
  }
  updateDisplay();
}

function appendNumber(num) {
  if (current === "0" && num !== ".") {
    current = num;
  } else {
    current += num;
  }
  updateDisplay();
}

function appendOperator(op) {
  expression += current + " " + op + " ";
  current = "0";
  updateDisplay();
}

function calculate() {
  try {
    expression += current;
    const result = eval(expression);
    current = String(result);
    expression = "";
  } catch {
    current = "Error";
    expression = "";
  }
  updateDisplay();
}

function percent() {
  current = String(parseFloat(current) / 100);
  updateDisplay();
}

// ボタンイベント
document.querySelectorAll("[data-num]").forEach(btn =>
  btn.addEventListener("click", () => appendNumber(btn.dataset.num))
);

document.querySelectorAll("[data-op]").forEach(btn =>
  btn.addEventListener("click", () => appendOperator(btn.dataset.op))
);

document.getElementById("clear").addEventListener("click", clearAll);
document.getElementById("back").addEventListener("click", backspace);
document.getElementById("equals").addEventListener("click", calculate);
document.getElementById("percent").addEventListener("click", percent);

// キーボード入力対応
document.addEventListener("keydown", (e) => {
  if (!isNaN(e.key) || e.key === ".") {
    appendNumber(e.key);
  } else if (["+", "-", "*", "/"].includes(e.key)) {
    appendOperator(e.key);
  } else if (e.key === "Enter" || e.key === "=") {
    calculate();
  } else if (e.key === "Backspace") {
    backspace();
  } else if (e.key.toLowerCase() === "c" || e.key === "Escape") {
    clearAll();
  } else if (e.key === "%") {
    percent();
  }
});

// 初期表示
updateDisplay();
