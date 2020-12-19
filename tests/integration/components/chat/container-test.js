import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | chat/container', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    this.set('channel', [
      {
        id: 1,
        user: {
          name: 'Luprz',
          iconUrl: ''
        },
        body: 'Hello world',
        createdAt: '2020-12-06'
      }
    ]);

    await render(hbs`
      <Chat::Container @channel={{this.channel}}></Chat::Container>
    `);

    assert.equal(this.element.textContent.trim(), '');

    // Template block usage:
    await render(hbs`
      <Chat::Container @channel={{this.channel}} as |message|>
        {{#each messages as |message|}}
          <Channels::Message @message={{message}}/>
        {{/each}}
      </Chat::Container>
    `);

    assert.equal(this.element.textContent.trim(), '');
  });
});
