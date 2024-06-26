import { WatchController } from './controllers/WatchController';
import './index.css';
import { WatchModel } from './models/WatchModel';
// import { createClock } from './utils';
import { WatchView } from './views/WatchView';

const model = new WatchModel();
const view = new WatchView(model);
const controller = new WatchController(model, view);

controller.updateView();

setInterval(() => {
  controller.updateView();
}, 1000);

const modeToggleBtn: HTMLElement | null =
  document.getElementById('mode-toggle');

modeToggleBtn &&
  modeToggleBtn.addEventListener('click', () => {
    controller.handleModeToggle();
    updateButtonLabel();
  });

function updateButtonLabel() {
  if (modeToggleBtn) {
    const currentMode: string = model.getMode();
    modeToggleBtn.textContent = getNextMode(currentMode);
  }
}

function getNextMode(currentMode: string): string {
  switch (currentMode) {
    case 'none':
      return 'Mode (off)';
    case 'hour':
      return 'Mode (hour)';
    case 'minute':
      return 'Mode (minute)';
    default:
      return 'Mode (off)';
  }
}

const increaseTime: HTMLElement | null =
  document.getElementById('increase-time');

increaseTime &&
  increaseTime.addEventListener('click', () => controller.handleIncreaseTime());

const resetBtn: HTMLElement | null = document.getElementById('reset');

resetBtn &&
  resetBtn.addEventListener('click', () => {
    controller.handleResetTime();
  });

const toggleFormatBtn: HTMLElement | null =
  document.getElementById('toggle-format');

toggleFormatBtn &&
  toggleFormatBtn.addEventListener('click', () => {
    controller.handleToggleFormat();
  });

const clock: HTMLElement | null = document.getElementById('clock');
const toggleLight: HTMLElement | null = document.getElementById('toggle-light');

toggleLight &&
  toggleLight.addEventListener('click', () => {
    controller.handleLightToggle();
    toggleLight.innerText = view.displayLightStatus(model.isLightOn());
    clock && clock.classList.toggle('active');
  });

// const clocksContainer = document.getElementById('clocks-container');
// const addClockBtn = document.getElementById('add-clock');
// addClockBtn &&
//   addClockBtn.addEventListener('click', () => {
//     createClock(clocksContainer);
//   });
