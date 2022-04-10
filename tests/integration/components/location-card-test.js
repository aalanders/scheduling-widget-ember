import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, settled } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import setupMirage from 'ember-cli-mirage/test-support/setup-mirage';

module('Integration | Component | location card', function (hooks) {
  setupRenderingTest(hooks);
  setupMirage(hooks);

  test('it renders the content inside LocationCard', async function (assert) {
    const office = {
      name: 'Video Office',
      phone: '(626) 298-1956',
      isVideo: true,
      geolocation: {
        lat: '0.0',
        lng: '0.0',
      },
      isPublic: false,
    };

    this.set('office', office);

    await render(hbs`<LocationCard @office={{this.office}} @index={{0}}/>`);

    assert.dom('.location-card-0').exists();
    assert.dom('.location-card-0 h3').hasText('Video Office');
    assert.dom('.location-card-0 p').hasText('(626) 298-1956');
  });
});
