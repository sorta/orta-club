import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | forms/login', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {

    await render(hbs`<Forms::Login />`);

    assert.ok(this.element.textContent.includes('Login'), 'Include Login');
  });
});
