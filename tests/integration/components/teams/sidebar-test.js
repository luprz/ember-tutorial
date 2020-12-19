import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | teams/sidebar', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });
    this.set('team', {
      name: 'LinkedIn',
      channels: [
        {
          id: '1',
          name: 'general'
        }, {
          id: '2',
          name: 'channel-2'
        }
      ]
    });

    await render(hbs`<Teams::Sidebar @team={{this.team}}/>`);

    assert.deepEqual(
      this.element.textContent
        .trim()
        .replace(/\s*\n+\s*/g, '\n')
        .split('\n'),
        [
          'LinkedIn',
          'Mike North',
          'Channels',
          '#',
          'general',
          '#',
          'channel-2',
          'Logout'
        ]
    );
  });
});
