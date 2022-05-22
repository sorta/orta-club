import AuthenticatedRoute from './authenticated';
import { inject as service } from '@ember/service';

export default class TimelineRoute extends AuthenticatedRoute {
  @service store;

  model() {
    return this.store.query('year', {
      include: {
        donnings: ['location', 'gay_apparel', 'member'],
      },
    });
  }
}
