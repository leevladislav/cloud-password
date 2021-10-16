import {SafeInterface} from '../dashboard/safes/interfaces/safe.interface';
import {safesListKey} from '../dashboard/safes/store/safes.keys';

export interface AppState {
  [safesListKey]: Readonly<SafeInterface[]>
}
