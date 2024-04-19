import { WatchModel } from '../models/WatchModel';

export class WatchView {
  model: WatchModel;
  constructor(model: WatchModel) {
    this.model = model;
  }

  displayTime(time: string): void {
    const currentTime: string = time;

    const timeDisplay: HTMLElement | null =
      document.getElementById('time-display');

    if (timeDisplay) {
      timeDisplay.innerText = currentTime;
    } else {
      throw new Error('Elements for displaying time not found.');
    }
  }

  displayLightStatus(lightOn: boolean): string {
    return lightOn ? 'Light on' : 'Light off';
  }
}
