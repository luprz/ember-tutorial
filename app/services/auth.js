import Service from '@ember/service';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
// import cookies from 'ember-cookies/services/cookies';

const AUTH_KEY = 'shlack-userid';

export default class AuthService extends Service {
  @service router;

  @service cookies;

  get currentUserId() {
    return this.cookies.read(AUTH_KEY);
  }

  loginWithUserId(userId) {
    this.cookies.write(AUTH_KEY, userId);
    this.router.transitionTo('teams');
  }

  @action
  logout() {
    this.cookies.read(AUTH_KEY, null);
    this.router.transitionTo('login');
  }
}
