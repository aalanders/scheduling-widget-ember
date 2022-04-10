import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | nav-bar', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders the content inside NavBar', async function (assert) {
    await render(hbs`<NavBar />`);

    assert.dom('.nav-bar').exists();
    assert.dom('.nav-bar h1').hasText('Request an Appointment');
    assert.dom('.nav-bar h2').hasText('The Therapy Center');
  });
});
