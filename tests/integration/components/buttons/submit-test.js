import { module, skip } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | buttons/submit', function (hooks) {
  setupRenderingTest(hooks);

  skip('it renders', async function (assert) {
    // Need to fix this sometime. Breaks because no @onClick is passed

    await render(hbs`<Buttons::Submit />`);

    assert.dom(this.element).hasText('');

    // Template block usage:
    await render(hbs`
      <Buttons::Submit>
        template block text
      </Buttons::Submit>
    `);

    assert.dom(this.element).hasText('template block text');
  });
});
