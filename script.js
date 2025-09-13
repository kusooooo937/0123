(function(){ const exprEl = document.getElementById('expr'); const valueEl = document.getElementById('value'); let expr = ''; let lastInput = '';

function updateDisplay(){ exprEl.textContent = expr; valueEl.textContent = expr === '' ? '0' : expr; }

function appendToken(token){ const operators = ['+','-','','/','%']; const last = expr.slice(-1); if(operators.includes(token)){ if(expr === '' && token !== '-') return; // can't start with operator except - if(operators.includes(last)){ expr = expr.slice(0,-1) + token; } else { expr += token; } } else { if(token === '.'){ let i = Math.max(expr.lastIndexOf('+'), expr.lastIndexOf('-'), expr.lastIndexOf(''), expr.lastIndexOf('/'), expr.lastIndexOf('%')); const cur = expr.slice(i+1); if(cur.includes('.')) return; if(cur === '') expr += '0'; } expr += token; } lastInput = token; updateDisplay(); }

function clearAll(){ expr = ''; updateDisplay(); } function backspace(){ expr = expr.slice(0,-1); updateDisplay(); }

function evaluateExpression(){ if(expr === '') return; if(!/^[-+*/%.0-9()\s]+$/.test(expr)){ valueEl.textContent = 'エラー'; return; } try{ const safe = expr.replace(/(\d+(?:.\d+)?)%/g, '($1/100)'); const result = Function('return '+ safe)(); expr = (Number.isFinite(result) ? String(result) : 'エラー'); updateDisplay(); }catch(e){ valueEl.textContent = 'エラー'; } }

document.querySelectorAll('[data-num]').forEach(b=>b.addEventListener('click',()=>appendToken(b.getAttribute('data-num')))); document.querySelectorAll('[data-op]').forEach(b=>b.addEventListener('click',()=>appendToken(b.getAttribute('data-op')))); document.getElementById('clear').addEventListener('click',clearAll); document.getElementById('back').addEventListener('click',backspace); document.getElementById('percent').addEventListener('click',()=>appendToken('%')); document.getElementById('equals').addEventListener('click',evaluateExpression);

window.addEventListener('keydown', (e)=>{ if(e.key >= '0' && e.key <= '9') appendToken(e.key); else if(e.key === '.') appendToken('.'); else if(e.key === '+' || e.key === '-' || e.key === '*' || e.key === '/') appendToken(e.key); else if(e.key === 'Enter' || e.key === '=') { e.preventDefault(); evaluateExpression(); } else if(e.key === 'Backspace') backspace(); else if(e.key === 'Escape') clearAll(); else if(e.key === '%') appendToken('%'); });

window.addEventListener('paste', (e)=>{ const text = (e.clipboardData || window.clipboardData).getData('text'); if(/[^0-9+-*/%.()\s]/.test(text)){ e.preventDefault(); } else { e.preventDefault(); expr += text.replace(/\s+/g,''); updateDisplay(); } });

updateDisplay(); })();


