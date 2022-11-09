import { ModuleConfig } from '../types/core';
import { NFTMetadata, ContractABI } from '../types/datasets';
import { GetContractABI, GetNFTMetadata } from '../types/methods';
import { buildQuery } from '../util/utils';
import core from './core-internal';

const _getNFTMetadata = async (parameters: GetNFTMetadata, config: ModuleConfig) => {
  try {
    const response = await core.client(`/eth/metadata/getMetadata?${buildQuery(parameters)}`, {
      method: 'GET',
      headers: {
        'X-API-KEY': config.apiKey || ''
      }
    });
    if (response.status !== 200) throw response;
    return response.data.data as NFTMetadata;
  } catch (err) {
    if (core.isAxiosError(err)) {
      const response = err.response;
      throw new Error(`Module API Error: ${response?.data?.error?.message || 'Unkown error'}`);
    }
    throw err;
  }
};

const _getContractABI = async (parameters: GetContractABI, config: ModuleConfig) => {
  try {
    const response = await core.client(`/eth/metadata/getABI?${buildQuery(parameters)}`, {
      method: 'GET',
      headers: {
        'X-API-KEY': config.apiKey || ''
      }
    });
    if (response.status !== 200) throw response;
    return response.data.data as ContractABI;
  } catch (err) {
    console.log(err);

    if (core.isAxiosError(err)) {
      const response = err.response;
      throw new Error(`Module API Error: ${response?.data?.error?.message || 'Unkown error'}`);
    }
    throw err;
  }
};

export default {
  _getContractABI,
  _getNFTMetadata
};
