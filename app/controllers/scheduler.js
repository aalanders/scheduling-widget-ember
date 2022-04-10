import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';

export default class SchedulerController extends Controller {
  @tracked activeTab;
}
