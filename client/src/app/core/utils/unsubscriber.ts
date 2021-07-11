import {Subscription} from 'rxjs';

export function unsubscribe(subscriptions: Subscription[]): void {
  subscriptions.forEach(subscription => subscription.unsubscribe());
}
