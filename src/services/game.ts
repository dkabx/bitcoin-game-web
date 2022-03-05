import { urlConstants } from 'common/utils/constants';

import { secureApi } from '../api/Axios';

export const getScore = (req: Record<string, unknown>) =>
  secureApi.post(urlConstants.getScore, req);

export const updateScore = (req: Record<string, unknown>) =>
  secureApi.post(urlConstants.updateScore, req);
