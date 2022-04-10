import { module, test } from 'qunit';
import { visit, currentURL, click } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import setupMirage from 'ember-cli-mirage/test-support/setup-mirage';

module('Acceptance | Scheduling Ember Widget', function (hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);

  test('visiting /scheduler', async function (assert) {
    await visit('/scheduler');
    // Assert redirect occurred
    assert.strictEqual(currentURL(), '/scheduler/service');
    assert.dom('.nav-bar').exists();
  });

  test('visiting /scheduler/service', async function (assert) {
    await visit('/scheduler/service');
    assert.strictEqual(currentURL(), '/scheduler/service');

    assert.dom('.nav-bar').exists();
    assert.dom('.side-panel').exists();

    await click('.service-card-0 .button');

    assert.strictEqual(currentURL(), '/scheduler/location/3866');

    assert.dom('.location-card-0 h3').hasText('Video Office');
    assert.dom('.location-card-0 p').hasText('(626) 298-1956');
  });
});
