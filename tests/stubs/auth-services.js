import Service from '@ember/service';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class MockAuthService extends Service {
  @service router;
  currentUserId = null;

  loginWithUserId(userId) {
    this.currentUserId = userId;
    this.router.transitionTo('teams');
  }

  @action
  logout() {
    this.currentUserId = null;
    this.router.transitionTo('login');
  }
}