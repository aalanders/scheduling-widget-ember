import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import setupMirage from 'ember-cli-mirage/test-support/setup-mirage';

module('Integration | Component | service card', function (hooks) {
  setupRenderingTest(hooks);
  setupMirage(hooks);

  test('it renders the content inside ServiceCard', async function (assert) {
    const cptCode = {
      description: 'Psychiatric Diagnostic Evaluation',
      duration: 50,
      rate: '100.0',
      callToBook: 'false',
      durationDisplay: '50 minutes',
    };

    this.set('cptCode', cptCode);

    await render(hbs`<ServiceCard @cptCode={{this.cptCode}} @index={{0}}/>`);

    assert.dom('.service-card-0').exists();
    assert
      .dom('.service-card-0 h4')
      .hasText('Psychiatric Diagnostic Evaluation');
    assert.dom('.service-card-0 p').hasText('50 minutes');
  });
});
