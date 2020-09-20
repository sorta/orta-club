import JSONAPIAdapter from '@ember-data/adapter/json-api';
import ENV from 'orta-club/config/environment';

export default class ApplicationAdapter extends JSONAPIAdapter {
  host = ENV.API.HOST;
}
