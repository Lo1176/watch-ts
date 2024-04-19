export class WatchModel {
  private time: Date;
  private increase: { hour: number; minute: number } = { hour: 0, minute: 0 };
  private mode: string;
  private lightOn: boolean;
  private is24HourFormat: boolean = true;

  constructor() {
    this.time = new Date();
    this.mode = 'none';
    this.lightOn = false;
  }

  getCurrentTime(): string {
    this.time = new Date();
    this.time.setHours(this.time.getHours() + this.increase.hour);
    this.time.setMinutes(this.time.getMinutes() + this.increase.minute);
    return this.formatTime(this.time);
  }

  setTime(newTime: Date): void {
    this.time = newTime;
  }

  getMode(): string {
    return this.mode;
  }

  toggleMode(): void {
    if (this.mode === 'none') {
      this.mode = 'hour';
    } else if (this.mode === 'hour') {
      this.mode = 'minute';
    } else {
      this.mode = 'none';
    }
  }

  increaseTime(): Object {
    if (this.mode === 'hour') {
      this.increase.hour += 1;
    } else if (this.mode === 'minute') {
      this.increase.minute += 1;
    }
    return this.increase;
  }

  isLightOn(): boolean {
    return this.lightOn;
  }

  toggleLight(): void {
    this.lightOn = !this.lightOn;
  }

  resetTime(): void {
    this.increase = { hour: 0, minute: 0 };
  }

  toggleTimeFormat(): void {
    this.is24HourFormat = !this.is24HourFormat;
  }

  getTimeFormat(): string {
    return this.is24HourFormat ? 'HH:mm:ss' : 'hh:mm:ss A';
  }

  private formatTime(time: Date): string {
    return time.toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
      hour12: !this.is24HourFormat,
    });
  }
}
