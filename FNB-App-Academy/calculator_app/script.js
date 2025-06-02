const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');

let currentInput = '';

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.dataset.value;
    const action = button.dataset.action;

    if (value) {
      if (display.innerText === '0') {
        currentInput = value;
      } else {
        currentInput += value;
      }
      display.innerText = currentInput;
    }

    if (action === 'clear') {
      currentInput = '';
      display.innerText = '0';
    }

    if (action === 'delete') {
      currentInput = currentInput.slice(0, -1);
      display.innerText = currentInput || '0';
    }

    if (action === 'equals') {
      try {
        currentInput = eval(currentInput).toString();
        display.innerText = currentInput;
      } catch {
        display.innerText = 'Error';
        currentInput = '';
      }
    }
  });
});
