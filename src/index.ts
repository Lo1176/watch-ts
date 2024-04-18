import { WatchController } from './controllers/WatchController';
import './index.css';
import { WatchModel } from './models/WatchModel';
import { WatchView } from './views/WatchView';

const model = new WatchModel();
const view = new WatchView();
const controller = new WatchController(model, view);

controller.updateView();

setInterval(() => {
  controller.updateView();
}, 1000);
