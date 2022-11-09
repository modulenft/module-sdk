import { ModuleConfig } from '../types/core';
import {
  BatchUserTradingStatistics,
  Collection,
  CollectionFloor,
  CollectionOwnerSpread,
  CollectionRanking,
  CollectionsOwned,
  Listing,
  MintVolume,
  Sale,
  Statistics,
  TokenInfo,
  TokenOwner,
  TokensOwned,
  UserTradingHistory,
  UserTradingStatistics
} from '../types/datasets';
import {
  GetBatchUserTradingStats,
  GetCollectionFloor,
  GetCollectionInfo,
  GetCollectionIntersection,
  GetCollectionRankings,
  GetCollectionsOwned,
  GetCollectionSpread,
  GetCollectionStats,
  GetListings,
  GetMintVolume,
  GetSales,
  GetTokenInfo,
  GetTokenOwner,
  GetTokensOwned,
  GetUserTradingHistory
} from '../types/methods';
import { buildQuery } from '../util/utils';
import core from './core-internal';

const _getCollectionInfo = async (
  params: GetCollectionInfo,
  config: ModuleConfig
): Promise<Collection> => {
  try {
    const response = await core.client(`eth/nft/collection?${buildQuery(params)}`, {
      method: 'GET',
      headers: {
        'X-API-KEY': config.apiKey || ''
      }
    });
    if (response.status !== 200) throw response;
    return response.data.data as Collection;
  } catch (err) {
    if (core.isAxiosError(err)) {
      const response = err.response;
      throw new Error(`Module API Error: ${response?.data?.error?.message || 'Unkown error'}`);
    }
    throw err;
  }
};

const _getCollectionStats = async (
  params: GetCollectionStats,
  config: ModuleConfig
): Promise<Statistics> => {
  try {
    const response = await core.client(`eth/nft/stats?${buildQuery(params)}`, {
      method: 'GET',
      headers: {
        'X-API-KEY': config.apiKey || ''
      }
    });
    if (response.status !== 200) throw response;
    return response.data.data as Statistics;
  } catch (err) {
    if (core.isAxiosError(err)) {
      const response = err.response;
      throw new Error(`Module API Error: ${response?.data?.error?.message || 'Unkown error'}`);
    }
    throw err;
  }
};

const _getCollectionRankings = async (
  params: GetCollectionRankings,
  config: ModuleConfig
): Promise<CollectionRanking[]> => {
  try {
    const response = await core.client(`eth/nft/ranks?${buildQuery(params)}`, {
      method: 'GET',
      headers: {
        'X-API-KEY': config.apiKey || ''
      }
    });
    if (response.status !== 200) throw response;
    return response.data.data as CollectionRanking[];
  } catch (err) {
    if (core.isAxiosError(err)) {
      const response = err.response;
      throw new Error(`Module API Error: ${response?.data?.error?.message || 'Unkown error'}`);
    }
    throw err;
  }
};

const _getListings = async (params: GetListings, config: ModuleConfig): Promise<Listing[]> => {
  try {
    const response = await core.client(`eth/nft/listings?${buildQuery(params)}`, {
      method: 'GET',
      headers: {
        'X-API-KEY': config.apiKey || ''
      }
    });
    if (response.status !== 200) throw response;
    return response.data.data as Listing[];
  } catch (err) {
    if (core.isAxiosError(err)) {
      const response = err.response;
      throw new Error(`Module API Error: ${response?.data?.error?.message || 'Unkown error'}`);
    }
    throw err;
  }
};

const _getSales = async (params: GetSales, config: ModuleConfig): Promise<Sale[]> => {
  try {
    const response = await core.client(`eth/nft/sales?${buildQuery(params)}`, {
      method: 'GET',
      headers: {
        'X-API-KEY': config.apiKey || ''
      }
    });
    if (response.status !== 200) throw response;
    return response.data.data as Sale[];
  } catch (err) {
    if (core.isAxiosError(err)) {
      const response = err.response;
      throw new Error(`Module API Error: ${response?.data?.error?.message || 'Unkown error'}`);
    }
    throw err;
  }
};
const _getCollectionFloor = async (
  params: GetCollectionFloor,
  config: ModuleConfig
): Promise<CollectionFloor> => {
  try {
    const response = await core.client(`eth/nft/floor?${buildQuery(params)}`, {
      method: 'GET',
      headers: {
        'X-API-KEY': config.apiKey || ''
      }
    });
    if (response.status !== 200) throw response;
    return response.data.data as CollectionFloor;
  } catch (err) {
    if (core.isAxiosError(err)) {
      const response = err.response;
      throw new Error(`Module API Error: ${response?.data?.error?.message || 'Unkown error'}`);
    }
    throw err;
  }
};

const _getTokenInfo = async (params: GetTokenInfo, config: ModuleConfig): Promise<TokenInfo> => {
  try {
    const response = await core.client(`eth/nft/token?${buildQuery(params)}`, {
      method: 'GET',
      headers: {
        'X-API-KEY': config.apiKey || ''
      }
    });
    if (response.status !== 200) throw response;
    return response.data.data as TokenInfo;
  } catch (err) {
    if (core.isAxiosError(err)) {
      const response = err.response;
      throw new Error(`Module API Error: ${response?.data?.error?.message || 'Unkown error'}`);
    }
    throw err;
  }
};

const _getTokenOwner = async (params: GetTokenOwner, config: ModuleConfig): Promise<TokenOwner> => {
  try {
    const response = await core.client(`eth/nft/owner?${buildQuery(params)}`, {
      method: 'GET',
      headers: {
        'X-API-KEY': config.apiKey || ''
      }
    });
    if (response.status !== 200) throw response;
    return response.data.data as TokenOwner;
  } catch (err) {
    if (core.isAxiosError(err)) {
      const response = err.response;
      throw new Error(`Module API Error: ${response?.data?.error?.message || 'Unkown error'}`);
    }
    throw err;
  }
};

const _getTokensOwned = async (
  params: GetTokensOwned,
  config: ModuleConfig
): Promise<TokensOwned[]> => {
  try {
    const response = await core.client(`eth/nft/owned?${buildQuery(params)}`, {
      method: 'GET',
      headers: {
        'X-API-KEY': config.apiKey || ''
      }
    });
    if (response.status !== 200) throw response;
    return response.data.data as TokensOwned[];
  } catch (err) {
    if (core.isAxiosError(err)) {
      const response = err.response;
      throw new Error(`Module API Error: ${response?.data?.error?.message || 'Unkown error'}`);
    }
    throw err;
  }
};

const _getCollectionsOwned = async (
  params: GetCollectionsOwned,
  config: ModuleConfig
): Promise<CollectionsOwned[]> => {
  try {
    const response = await core.client(`eth/nft/collectionsOwned?${buildQuery(params)}`, {
      method: 'GET',
      headers: {
        'X-API-KEY': config.apiKey || ''
      }
    });
    if (response.status !== 200) throw response;
    return response.data.data as CollectionsOwned[];
  } catch (err) {
    if (core.isAxiosError(err)) {
      const response = err.response;
      throw new Error(`Module API Error: ${response?.data?.error?.message || 'Unkown error'}`);
    }
    throw err;
  }
};

const _getCollectionIntersection = async (
  params: GetCollectionIntersection,
  config: ModuleConfig
): Promise<string[]> => {
  try {
    const response = await core.client(`eth/nft/intersection?${buildQuery(params)}`, {
      method: 'GET',
      headers: {
        'X-API-KEY': config.apiKey || ''
      }
    });
    if (response.status !== 200) throw response;
    return response.data.data as string[];
  } catch (err) {
    if (core.isAxiosError(err)) {
      const response = err.response;
      throw new Error(`Module API Error: ${response?.data?.error?.message || 'Unkown error'}`);
    }
    throw err;
  }
};

const _getUserTradingStats = async (
  params: GetUserTradingHistory,
  config: ModuleConfig
): Promise<UserTradingStatistics> => {
  try {
    const response = await core.client(`eth/nft/userStats?${buildQuery(params)}`, {
      method: 'GET',
      headers: {
        'X-API-KEY': config.apiKey || ''
      }
    });
    if (response.status !== 200) throw response;
    return response.data.data as UserTradingStatistics;
  } catch (err) {
    if (core.isAxiosError(err)) {
      const response = err.response;
      throw new Error(`Module API Error: ${response?.data?.error?.message || 'Unkown error'}`);
    }
    throw err;
  }
};

const _getUserTradingHistory = async (
  params: GetUserTradingHistory,
  config: ModuleConfig
): Promise<UserTradingHistory[]> => {
  try {
    const response = await core.client(`eth/nft/userHistory?${buildQuery(params)}`, {
      method: 'GET',
      headers: {
        'X-API-KEY': config.apiKey || ''
      }
    });
    if (response.status !== 200) throw response;
    return response.data.data as UserTradingHistory[];
  } catch (err) {
    if (core.isAxiosError(err)) {
      const response = err.response;
      throw new Error(`Module API Error: ${response?.data?.error?.message || 'Unkown error'}`);
    }
    throw err;
  }
};

const _getBatchUserTradingStats = async (
  params: GetBatchUserTradingStats,
  config: ModuleConfig
): Promise<BatchUserTradingStatistics[]> => {
  try {
    const response = await core.client(`eth/nft/batchGetUserStats?${buildQuery(params)}`, {
      method: 'GET',
      headers: {
        'X-API-KEY': config.apiKey || ''
      }
    });
    if (response.status !== 200) throw response;
    return response.data.data as BatchUserTradingStatistics[];
  } catch (err) {
    if (core.isAxiosError(err)) {
      const response = err.response;
      throw new Error(`Module API Error: ${response?.data?.error?.message || 'Unkown error'}`);
    }
    throw err;
  }
};

const _getCollectionOwnerSpread = async (
  params: GetCollectionSpread,
  config: ModuleConfig
): Promise<CollectionOwnerSpread[]> => {
  try {
    const response = await core.client(`eth/nft/ownerDistribution?${buildQuery(params)}`, {
      method: 'GET',
      headers: {
        'X-API-KEY': config.apiKey || ''
      }
    });
    if (response.status !== 200) throw response;
    return response.data.data as CollectionOwnerSpread[];
  } catch (err) {
    if (core.isAxiosError(err)) {
      const response = err.response;
      throw new Error(`Module API Error: ${response?.data?.error?.message || 'Unkown error'}`);
    }
    throw err;
  }
};
const _getMintVolume = async (params: GetMintVolume, config: ModuleConfig): Promise<MintVolume> => {
  try {
    const response = await core.client(`eth/nft/totalMintVolume?${buildQuery(params)}`, {
      method: 'GET',
      headers: {
        'X-API-KEY': config.apiKey || ''
      }
    });
    if (response.status !== 200) throw response;
    return response.data.data as MintVolume;
  } catch (err) {
    if (core.isAxiosError(err)) {
      const response = err.response;
      throw new Error(`Module API Error: ${response?.data?.error?.message || 'Unkown error'}`);
    }
    throw err;
  }
};
export default {
  _getCollectionOwnerSpread,
  _getCollectionsOwned,
  _getBatchUserTradingStats,
  _getUserTradingStats,
  _getUserTradingHistory,
  _getCollectionIntersection,
  _getTokensOwned,
  _getTokenOwner,
  _getTokenInfo,
  _getCollectionFloor,
  _getSales,
  _getListings,
  _getCollectionRankings,
  _getCollectionInfo,
  _getCollectionStats,
  _getMintVolume
};
