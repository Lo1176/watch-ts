import { WatchModel } from '../models/WatchModel';
import { WatchView } from '../views/WatchView';

export class WatchController {
  private model: WatchModel;
  private view: WatchView;

  constructor(model: WatchModel, view: WatchView) {
    this.model = model;
    this.view = view;
  }

  handleModeToggle(): void {
    this.model.toggleMode();
  }

  handleIncreaseTime(): void {
    const mode: string = this.model.getMode();
    if (mode === 'hour' || mode === 'minute') {
      this.model.increaseTime();
      this.updateView();
    }
  }

  handleLightToggle(): void {
    this.model.toggleLight();
  }

  handleResetTime(): void {
    this.model.resetTime();
    this.updateView();
  }

  updateView(): void {
    const currentTime: string = this.model.getCurrentTime();
    const lightOn: boolean = this.model.isLightOn();
    this.view.displayTime(currentTime);
    this.view.displayLightStatus(lightOn);
  }

  handleToggleFormat(): void {
    this.model.toggleTimeFormat();
    this.updateView();
  }
}
