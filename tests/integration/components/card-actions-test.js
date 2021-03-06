import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration: CardActions', function (hooks) {
  setupRenderingTest(hooks);

  test('it yields the provided block', async function (assert) {
    this.message = 'The system only dreams in total darkness';

    await render(hbs`<CardActions>{{this.message}}</CardActions>`);

    assert.dom('.card-actions').hasText(this.message);
  });

  test('it assigns the given HTML attributes', async function (assert) {
    await render(hbs`<CardActions data-test-id aria-label="Sweet">Awesome</CardActions>`);

    assert.dom('.card-actions[data-test-id]').exists();
    assert.dom('.card-actions').hasAttribute('aria-label', 'Sweet');
  });
});
