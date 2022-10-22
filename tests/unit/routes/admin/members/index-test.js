import { module, test } from 'qunit';
import { setupTest } from 'orta-club/tests/helpers';

module('Unit | Route | admin/members/index', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:admin/members/index');
    assert.ok(route);
  });
});
