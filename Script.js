<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>シンプル電卓</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <main class="calculator" role="application" aria-label="電卓">
    <section class="display">
      <div id="expr" class="expr" aria-hidden="true"></div>
      <div id="value" class="value" aria-live="polite">0</div>
    </section>

    <section class="pad" role="group" aria-label="電卓ボタン">
      <button id="clear" class="small">C</button>
      <button id="back" class="small">⌫</button>
      <button id="percent" class="small">%</button>
      <button data-op="/" class="operator">÷</button>

      <button data-num="7">7</button>
      <button data-num="8">8</button>
      <button data-num="9">9</button>
      <button data-op="*" class="operator">×</button>

      <button data-num="4">4</button>
      <button data-num="5">5</button>
      <button data-num="6">6</button>
      <button data-op="-" class="operator">−</button>

      <button data-num="1">1</button>
      <button data-num="2">2</button>
      <button data-num="3">3</button>
      <button data-op="+" class="operator">+</button>

      <button data-num="0" class="double">0</button>
      <button data-num="." class="small">.</button>
      <button id="equals" class="operator">=</button>
    </section>

    <div class="footer">キーボード対応：数字 / + - * / / / Enter = / Backspace / Esc(C)</div>
  </main>

  <script src="script.js"></script>
</body>
</html>
