import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class SchedulerServiceRoute extends Route {
  @service store;

  setupController(controller, model) {
    super.setupController(controller, model);
    const schedulerController = this.controllerFor('scheduler');
    schedulerController.activeTab = 'SERVICE';
  }
}
