export function createClock(container) {
  const clockContainer = document.createElement('div');
  clockContainer.classList.add('clock-container');

  const clockDisplay = document.createElement('div');
  clockDisplay.id = 'clock';
  clockDisplay.classList.add('light');

  const hoursMinutesDisplay = document.createElement('p');
  hoursMinutesDisplay.id = 'hours-minutes';

  const secondsDisplay = document.createElement('p');
  secondsDisplay.id = 'seconds';

  const amPmDisplay = document.createElement('p');
  amPmDisplay.id = 'am-pm';

  clockDisplay.appendChild(hoursMinutesDisplay);
  clockDisplay.appendChild(secondsDisplay);
  clockDisplay.appendChild(amPmDisplay);

  const buttonsContainer = document.createElement('div');
  buttonsContainer.classList.add('buttons');

  const modeToggleBtn = document.createElement('button');
  modeToggleBtn.id = 'mode-toggle';
  modeToggleBtn.textContent = 'Mode (off)';

  const increaseTimeBtn = document.createElement('button');
  increaseTimeBtn.id = 'increase-time';
  increaseTimeBtn.textContent = '+ 1';

  const resetBtn = document.createElement('button');
  resetBtn.id = 'reset';
  resetBtn.textContent = 'reset';

  const toggleFormatBtn = document.createElement('button');
  toggleFormatBtn.id = 'toggle-format';
  toggleFormatBtn.textContent = 'Toggle Format';

  const toggleLightBtn = document.createElement('button');
  toggleLightBtn.id = 'toggle-light';
  toggleLightBtn.textContent = 'Light off';

  buttonsContainer.appendChild(modeToggleBtn);
  buttonsContainer.appendChild(increaseTimeBtn);
  buttonsContainer.appendChild(resetBtn);
  buttonsContainer.appendChild(toggleFormatBtn);
  buttonsContainer.appendChild(toggleLightBtn);

  clockContainer.appendChild(clockDisplay);
  clockContainer.appendChild(buttonsContainer);

  container.appendChild(clockContainer);
}
