import { module, test } from 'qunit';
import { setupTest } from 'orta-club/tests/helpers';

module('Unit | Controller | admin/members/edit', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    let controller = this.owner.lookup('controller:admin/members/edit');
    assert.ok(controller);
  });
});
