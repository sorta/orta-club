import JSONAPIAdapter from '@ember-data/adapter/json-api';
import { inject as service } from '@ember/service';
import { computed } from '@ember/object';
import ENV from 'orta-club/config/environment';

export default class ApplicationAdapter extends JSONAPIAdapter {
  @service session;

  host = ENV.API.HOST;

  @computed("session.data.authenticated.token")
  get headers() {
    const headers = {};
    if (this.session.isAuthenticated) {
      headers.Authorization = `token ${this.session.data.authenticated.token}`;
    }

    return headers;
  }
}
