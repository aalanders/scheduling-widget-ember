import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

export default class SidePanelComponent extends Component {
  @tracked activeTab;
  @tracked selectedService;

  get isServiceStep() {
    return this.args.activeTab === 'SERVICE';
  }

  get isLocationStep() {
    return this.args.activeTab === 'LOCATION';
  }

  get displayTextServiceStep() {
    return this.isServiceStep ? 'Select a service' : 'Service';
  }
}
