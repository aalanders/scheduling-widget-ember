import EmberRouter from '@ember/routing/router';
import config from 'scheduling-widget-ember/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('scheduler', function () {
    this.route('service');
    this.route('location', { path: 'location/:cpt_code_id' });
  });
});
