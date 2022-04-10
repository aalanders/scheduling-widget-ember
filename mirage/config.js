import { discoverEmberDataModels } from 'ember-cli-mirage';
import { createServer } from 'miragejs';

export default function (config) {
  let finalConfig = {
    ...config,
    models: { ...discoverEmberDataModels(), ...config.models },
    routes,
  };

  return createServer(finalConfig);
}

function routes() {
  this.namespace = 'client-portal-api';
  this.urlPrefix = 'https://johnny-appleseed.clientsecure.me/';

  this.get('/cpt-codes', () => {
    return {
      data: [
        {
          id: '3866',
          type: 'cptCodes',
          links: {
            self: 'https://johnny-appleseed.clientsecure.me/client-portal-api/cpt-codes/3866',
          },
          attributes: {
            description: 'Psychiatric Diagnostic Evaluation',
            duration: 50,
            rate: '100.0',
            callToBook: 'false',
          },
        },
        {
          id: '31822614',
          type: 'cptCodes',
          links: {
            self: 'https://johnny-appleseed.clientsecure.me/client-portal-api/cpt-codes/31822614',
          },
          attributes: {
            description: 'Intro Call',
            duration: 15,
            rate: '0.0',
            callToBook: 'false',
          },
        },
      ],
      links: {
        first:
          'https://johnny-appleseed.clientsecure.me/client-portal-api/cpt-codes?page%5Bnumber%5D=1&page%5Bsize%5D=10',
        last: 'https://johnny-appleseed.clientsecure.me/client-portal-api/cpt-codes?page%5Bnumber%5D=1&page%5Bsize%5D=10',
      },
    };
  });

  this.get('/offices', () => {
    return {
      data: [
        {
          id: '8377723',
          type: 'offices',
          links: {
            self: 'https://johnny-appleseed.clientsecure.me/client-portal-api/offices/8377723',
          },
          attributes: {
            name: 'Video Office',
            phone: '(626) 298-1956',
            isVideo: true,
            geolocation: {
              lat: '0.0',
              lng: '0.0',
            },
            isPublic: false,
          },
        },
      ],
      links: {
        first:
          'https://johnny-appleseed.clientsecure.me/client-portal-api/offices?filter%5BcptCodeId%5D=3866&page%5Bnumber%5D=1&page%5Bsize%5D=10',
        last: 'https://johnny-appleseed.clientsecure.me/client-portal-api/offices?filter%5BcptCodeId%5D=3866&page%5Bnumber%5D=1&page%5Bsize%5D=10',
      },
    };
  });

  this.passthrough();
}
