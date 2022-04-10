import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | side-panel', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders the content inside SidePanel', async function (assert) {
    await render(hbs`<SidePanel />`);

    assert.dom('.side-panel').exists();
    assert.dom('.side-panel__clinician').hasText('Rob Gross, MFT');
    assert.dom('.side-panel__step').exists({ count: 3 });
  });
});
