import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class SchedulerRoute extends Route {
  @service router;
  @service store;

  afterModel() {
    this.router.transitionTo('scheduler.service');
  }

  async model() {
    return this.store.findAll('cpt-code');
  }
}
