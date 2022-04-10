import Service from '@ember/service';
import { service } from '@ember/service';

export default class CurrentUserService extends Service {
  @service embedded;

  clinicianId = '2';
  clientPortalBaseUrl = 'https://johnny-appleseed.clientsecure.me';

  // If embedded on webpage page embed is passing attributes:
  // enable-clientBaseUrl, clientBaseUrl enable-clincicianId, clinicianId
  // Then uncomment out below code to set clincianId and clientPortalBaseUrl from embed attributes
  // see READ.me for more information

  // get clientPortalBaseUrl() {
  //   return this.embedded.args.hasOwnProperty('enable-clientBaseUrl')
  //     ? this.embedded.args.clientBaseUrl
  //     : null;
  // }

  // get clinicianId() {
  //   return this.embedded.args.hasOwnProperty('enable-clinicianId')
  //     ? this.embedded.args.clinicianId
  //     : null;
  // }
}
