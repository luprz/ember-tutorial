import Component from '@glimmer/component';
import { inject as service } from '@ember/service';

export default class TeamsSidebarComponent extends Component {
  @service auth;
}
