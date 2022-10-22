import { module, test } from 'qunit';
import { setupRenderingTest } from 'orta-club/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | admin/resource-list', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<Admin::ResourceList />`);

    assert.dom(this.element).hasText('');

    // Template block usage:
    await render(hbs`
      <Admin::ResourceList>
        template block text
      </Admin::ResourceList>
    `);

    assert.dom(this.element).hasText('template block text');
  });
});
