import { IRoute } from 'common/types';
import SimpleLayout from 'layouts/SimpleLayout';

import Player from './Player';

export const PlayerRoute: IRoute = {
  path: '/',
  component: Player,
  layout: SimpleLayout,
  exact: true,
};
