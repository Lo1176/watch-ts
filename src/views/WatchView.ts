import { WatchModel } from '../models/WatchModel';

export class WatchView {
  model: WatchModel;
  constructor(model: WatchModel) {
    this.model = model;
  }

  displayTime(time: string): void {
    const [timeString, h12] = time.split(' ');
    const [hours, minutes, seconds] = timeString.split(':');

    const hoursMinutesDisplay: HTMLElement | null =
      document.getElementById('hours-minutes');
    const secondsDisplay: HTMLElement | null =
      document.getElementById('seconds');
    const amPmDisplay: HTMLElement | null = document.getElementById('am-pm');

    if (hoursMinutesDisplay && secondsDisplay && amPmDisplay) {
      hoursMinutesDisplay.innerText = `${hours}:${minutes} `;
      secondsDisplay.innerText = seconds;
      h12 !== undefined
        ? (amPmDisplay.innerText = h12)
        : (amPmDisplay.innerText = '');
    } else {
      throw new Error('Elements for displaying time not found.');
    }
  }

  displayLightStatus(lightOn: boolean): string {
    return lightOn ? 'Light on' : 'Light off';
  }
}
