import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, fillIn, find } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | login/form', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<Login::Form />`);

    assert.deepEqual(
      this.element.textContent
        .trim()
        .replace(/\s*\n+\s*/g, '\n')
        .split('\n'),
        [
          "Login",
          "Select a user",
          "Testy Testerson",
          "Sample McData"
        ]
    );

    let button = find('input[type="submit"]');
    // @ts-ignore
    assert.equal(button.disabled, true);

    await fillIn('select', '1');

    assert.deepEqual(
      this.element.textContent
        .trim()
        .replace(/\s*\n+\s*/g, '\n')
        .split('\n'),
        [
          "Login",
          "Select a user",
          "Testy Testerson",
          "Sample McData",
          "Logging in as userId: 1"
        ]
    );

    // @ts-ignore
    assert.equal(button.disabled, false);

    await fillIn('select', '2');

    assert.deepEqual(
      this.element.textContent
        .trim()
        .replace(/\s*\n+\s*/g, '\n')
        .split('\n'),
        [
          "Login",
          "Select a user",
          "Testy Testerson",
          "Sample McData",
          "Logging in as userId: 2"
        ]
    );

    // @ts-ignore
    assert.equal(button.disabled, false);
  });
});
