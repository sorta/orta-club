import EmberRouter from '@ember/routing/router';
import config from 'orta-club/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('register');
  this.route('login');
  this.route('account');
  this.route('admin', function () {
    this.route('members', function () {
      this.route('edit', { path: '/:member_id' });
    });

    this.route('years', function () {
      this.route('edit', { path: '/:year_id' });
    });
  });
  this.route('timeline', { path: '/' });
});
