import { ModuleConfig } from '../types/core';
import { Resolved } from '../types/datasets';
import { ResolveCollection } from '../types/methods';
import { buildQuery } from '../util/utils';
import core from './core-internal';

const _resolveCollection = async (
  parameters: ResolveCollection,
  config: ModuleConfig
): Promise<Resolved> => {
  try {
    const response = await core.client(`/central/utilities/search?${buildQuery(parameters)}`, {
      method: 'GET',
      headers: {
        'X-API-KEY': config.apiKey || ''
      }
    });
    if (response.status !== 200) throw response;
    const data = response.data;
    return {
      search: data.search,
      count: data.count,
      collections: data.collections
    } as Resolved;
  } catch (err) {
    if (core.isAxiosError(err)) {
      const response = err.response;
      throw new Error(`Module API Error: ${response?.data?.error?.message || 'Unkown error'}`);
    }
    throw err;
  }
};

export default {
  _resolveCollection
};
