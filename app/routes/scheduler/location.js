import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class SchedulerLocationRoute extends Route {
  @service store;

  async model({ cpt_code_id }) {
    return this.store.query('office', { cptCodeId: cpt_code_id });
  }

  setupController(controller, model) {
    super.setupController(controller, model);
    const schedulerController = this.controllerFor('scheduler');
    schedulerController.activeTab = 'LOCATION';
  }
}
