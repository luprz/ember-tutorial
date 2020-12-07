import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Helper | format-timestap', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders with format mm/dd/yyyy', async function(assert) {
    this.set('myDate', '12/06/2020');

    await render(hbs`{{format-timestap myDate}}`);

    assert.equal(this.element.textContent.trim(), 'Dec 6, 2020 00:00.00 AM');
  });

  test('it renders with format yyyy-mm-dd', async function(assert) {
    this.set('myDate', '2020-12-07');

    await render(hbs`{{format-timestap myDate}}`);

    assert.equal(this.element.textContent.trim(), 'Dec 6, 2020 07:00.00 PM');
  });

  test('it renders with myDate null', async function(assert) {
    this.set('myDate', null);

    await render(hbs`{{format-timestap myDate}}`);

    assert.equal(this.element.textContent.trim(), "");
  });
});
