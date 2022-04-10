import JSONAPIAdapter from '@ember-data/adapter/json-api';
import { service } from '@ember/service';

export default class CptCodeAdapter extends JSONAPIAdapter {
  @service currentUser;

  clinicianId = this.currentUser.clinicianId;
  clientPortalBaseUrl = this.currentUser.clientPortalBaseUrl;
  namespace = 'client-portal-api';

  headers = {
    Accept: 'application/vnd.api+json',
    'Api-Version': '2020-01-01',
    'Application-Build-Version': '0.0.1',
    'Application-Platform': 'web',
  };

  buildURL() {
    return `${this.clientPortalBaseUrl}/${this.namespace}/cpt-codes?filter[clinicianId]=${this.clinicianId}`;
  }
}
