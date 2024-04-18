export class WatchModel {
  private time: Date;
  private mode: string;

  constructor() {
    this.time = new Date();
    this.mode = 'none';
  }

  getCurrentTime(): Date {
    return this.time;
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

  increaseTime(): void {
    if (this.mode === 'hour') {
      this.time.setHours(this.time.getHours() + 1);
    } else if (this.mode === 'minute') {
      this.time.setMinutes(this.time.getMinutes() + 1);
    }
  }

  resetTime(): void {
    this.time = new Date();
  }
}
