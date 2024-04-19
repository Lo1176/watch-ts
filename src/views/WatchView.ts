import { WatchModel } from '../models/WatchModel';

export class WatchView {
  model: WatchModel;
  constructor(model: WatchModel) {
    this.model = model;
  }

  displayTime(time: Date): void {
    const hours: string = time.getHours().toString().padStart(2, '0');
    const minutes: string = time.getMinutes().toString().padStart(2, '0');
    const seconds: string = time.getSeconds().toString().padStart(2, '0');
    // const formatOptions: Intl.DateTimeFormatOptions = {
    //   hour12: this.model.getTimeFormat().includes('A'),
    // };
    // const formattedTime: string = time.toLocaleTimeString(
    //   undefined,
    //   formatOptions
    // );
    // console.log('🚀 ~ WatchView ~ displayTime ~ formattedTime:', formattedTime);

    const hoursAndMinutesDisplay: HTMLElement | null =
      document.getElementById('hours-and-minutes');
    const secondsDisplay: HTMLElement | null =
      document.getElementById('seconds');

    if (hoursAndMinutesDisplay && secondsDisplay) {
      hoursAndMinutesDisplay.innerText = `${hours}:${minutes} `;
      secondsDisplay.innerText = seconds;
    } else {
      throw new Error('Elements for displaying time not found.');
    }
  }

  displayLightStatus(lightOn: boolean): string {
    return lightOn ? 'Light on' : 'Light off';
  }
}
