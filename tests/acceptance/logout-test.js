import { module, test } from 'qunit';
import { visit, currentURL, click } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import MockAuthService from '../stubs/auth-services';

module('Acceptance | logging out', function(hooks) {
  setupApplicationTest(hooks);

  hooks.beforeEach(function() {
    this.owner.register('service:auth', MockAuthService);
  });

  test('visiting /teams and clicking logout', async function(assert) {
    this.owner.lookup('service:auth').currentUserId = '1';
    await visit('/teams/linkedin');

    assert.equal(currentURL(), '/teams/linkedin/recruiting');

    await click('.team-sidebar__logout-button');

    assert.equal(currentURL(), '/login');
  });
});
