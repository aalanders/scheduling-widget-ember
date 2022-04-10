import JSONAPIAdapter from '@ember-data/adapter/json-api';
import { service } from '@ember/service';

export default class OfficeAdapter extends JSONAPIAdapter {
  @service currentUser;

  clinicianId = this.currentUser.clinicianId;
  clientPortalBaseUrl = this.currentUser.clientPortalBaseUrl;
  namespace = 'client-portal-api';

  headers = {
    'Api-Version': '2020-01-01',
    Accept: 'application/vnd.api+json',
    'Application-Build-Version': '0.0.1',
    'Application-Platform': 'web',
  };

  buildURL(modelName, id, snapshot, requestType, query) {
    const { cptCodeId } = query;
    return `${this.clientPortalBaseUrl}/${this.namespace}/offices?filter[clinicianId]=${this.clinicianId}&filter[cptCodeId]=${cptCodeId}`;
  }
}
