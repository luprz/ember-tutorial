import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';
import fetch from 'fetch';

export default class ChatContainerComponent extends Component {
  @tracked
  messages = [];

  @service auth;

  @action
  async loadMessages() {
    const {
      channel: { id, teamId }
    } = this.args;

    const response = await fetch(`/api/teams/${teamId}/channels/${id}/messages`);
    this.messages = await response.json();
  }

  @action
  async deleteMessage(messageId) {
    const response = await fetch(`/api/messages/${messageId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const messageIds = this.messages.map(m => m.id);
    const idxToDelete = messageIds.indexOf(messageId);
    this.messages.splice(idxToDelete, 1);
    this.messages = this.messages;
  }

  @action
  async createMessage(body) {
    const {
      channel: { id: channelId, teamId }
    } = this.args;
    const userId = this.auth.currentUserId;
    const response = await fetch(`/api/messages`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        teamId,
        channelId,
        userId,
        body
      })
    });
    if(!response.ok) throw Error('Could not save chat message');
    const messageData = await response.json();
    const user = await(await fetch(`/api/users/${userId}`)).json();
    this.messages = [
      ...this.messages,
      {...messageData, user}
    ]
  }
}
