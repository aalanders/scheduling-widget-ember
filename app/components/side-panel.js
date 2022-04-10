import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

export default class SidePanelComponent extends Component {
  @tracked activeTab;

  get isServiceStep() {
    return this.args.activeTab === 'SERVICE';
  }

  get isLocationStep() {
    return this.args.activeTab === 'LOCATION';
  }
}
