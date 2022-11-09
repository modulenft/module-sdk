import { ModuleConfig } from '../types/core';
import { FullTx, Block, Transaction, TransactionReciept } from '../types/datasets';
import { GetBlock, GetFullTX, GetTransaction, GetTransactionReciept } from '../types/methods';
import { buildQuery } from '../util/utils';
import core from './core-internal';

const _getFullTX = async (parameters: GetFullTX, config: ModuleConfig) => {
  try {
    const response = await core.client(`/eth/fulltx?${buildQuery(parameters)}`, {
      method: 'GET',
      headers: {
        'X-API-KEY': config.apiKey || ''
      }
    });
    if (response.status !== 200) throw response;
    return response.data.data as FullTx[];
  } catch (err) {
    if (core.isAxiosError(err)) {
      const response = err.response;
      throw new Error(`Module API Error: ${response?.data?.error?.message || 'Unkown error'}`);
    }
    throw err;
  }
};
const _getBlock = async (parameters: GetBlock, config: ModuleConfig) => {
  try {
    const response = await core.client(`/eth/blocks?${buildQuery(parameters)}`, {
      method: 'GET',
      headers: {
        'X-API-KEY': config.apiKey || ''
      }
    });
    if (response.status !== 200) throw response;
    return response.data.data as Block[];
  } catch (err) {
    if (core.isAxiosError(err)) {
      const response = err.response;
      throw new Error(`Module API Error: ${response?.data?.error?.message || 'Unkown error'}`);
    }
    throw err;
  }
};
const _getTransaction = async (parameters: GetTransaction, config: ModuleConfig) => {
  try {
    const response = await core.client(`/eth/tx?${buildQuery(parameters)}`, {
      method: 'GET',
      headers: {
        'X-API-KEY': config.apiKey || ''
      }
    });
    if (response.status !== 200) throw response;
    return response.data.data as Transaction[];
  } catch (err) {
    if (core.isAxiosError(err)) {
      const response = err.response;
      throw new Error(`Module API Error: ${response?.data?.error?.message || 'Unkown error'}`);
    }
    throw err;
  }
};
const _getTransactionReciept = async (parameters: GetTransactionReciept, config: ModuleConfig) => {
  try {
    const response = await core.client(`/eth/txReceipt?${buildQuery(parameters)}`, {
      method: 'GET',
      headers: {
        'X-API-KEY': config.apiKey || ''
      }
    });
    if (response.status !== 200) throw response;
    return response.data.data as TransactionReciept[];
  } catch (err) {
    if (core.isAxiosError(err)) {
      const response = err.response;
      throw new Error(`Module API Error: ${response?.data?.error?.message || 'Unkown error'}`);
    }
    throw err;
  }
};

export default {
  _getFullTX,
  _getBlock,
  _getTransaction,
  _getTransactionReciept
};
