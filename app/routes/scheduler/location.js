import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class SchedulerLocationRoute extends Route {
  @service store;

  model({ cpt_code_id }) {
    return this.store.query('office', { cptCodeId: cpt_code_id });
  }

  setupController(controller, model) {
    super.setupController(controller, model);
    const schedulerController = this.controllerFor('scheduler');

    // While this works, my use of peekRecord doesn't seem ideal. I thought the router would have a way to pass
    // the cpt-code model (to get description and durationDisplay for the SidePanel) but the only
    // other way I could think of was using a query parameter (which didn't feel correct)
    // My next thought was to use a service (to set the selectedService) but that didn't seem the best
    // either. I would love feedback on the best way to pass the data to the SidePanel for the selectedService!
    const { cptCodeId } = model.query || {};
    const { description, durationDisplay } = this.store.peekRecord(
      'cpt-code',
      cptCodeId
    );

    schedulerController.activeTab = 'LOCATION';
    schedulerController.selectedService = {
      description,
      durationDisplay,
    };
  }
}
