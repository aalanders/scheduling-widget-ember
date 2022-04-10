import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | scheduler/service', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:scheduler/service');
    assert.ok(route);
  });
});
