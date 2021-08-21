import {SafeInterface} from '../dashboard/safes/interfaces/safe.interface';

export interface AppState {
  safesList: Readonly<SafeInterface[]>
}
