import { urlConstants } from 'common/utils/constants';

import { bitCoinApi } from '../api/Axios';

export const getBitcoinPrice = () =>
  bitCoinApi.get(urlConstants.getBitcoinPrice);
