import internal from '../internal/ethereum-internal';
import { ModuleConfig } from '../types/core';
import { GetBlock, GetFullTX, GetTransaction, GetTransactionReciept } from '../types/methods';
import { Block, FullTx, Transaction, TransactionReciept } from '../types/datasets';

export class Ethereum {
  // eslint-disable-next-line no-unused-vars
  constructor(private readonly config?: ModuleConfig) {}
  /**
   * Gets the transaction recipet and data (FullTX)
   *
   *@link See more https://module.readme.io/reference/get-transaction-receipts
   * @param {number=} [params.number] - Number of items to retrieve. Max 100 at a time.
   * @param {number=} [params.offset] - Offset for pagination.
   * @param {string=} [params.txHash] - Transaction hash to query for.
   * @param {string=} [params.contractAddress] - Contract address to query for.
   * @param {string=} [params.from] - Transaction from an address to query for.
   * @param {string=} [params.to] - Transactions to an address to query for.
   * @param {number=} [params.blockNumber] - Block number to query for.
   * @param {SortDirection=} [params.sortDirection] - The direction to sort results
   */
  public getFullTX = async (params: GetFullTX): Promise<FullTx[]> => {
    return internal._getFullTX(params, {
      apiKey: this.config?.apiKey
    });
  };

  /**
   * Get the transaction reciept of a specified query
   *
   *@link See more https://module.readme.io/reference/get-transaction-reciepts-from-block
   * @param {number=} [params.number] - Number of items to retrieve. Max 100 at a time.
   * @param {number=} [params.offset] - Offset for pagination.
   * @param {string=} [params.txHash] - Transaction hash to query for.
   * @param {string=} [params.from] - Transaction from an address to query for.
   * @param {string=} [params.to] - Transactions to an address to query for.
   * @param {number=} [params.blockNumber] - Block number to query for.
   * @param {SortDirection=} [params.sortDirection] - The direction to sort results
   */
  public getTransactionReciept = async (
    params: GetTransactionReciept
  ): Promise<TransactionReciept[]> => {
    return internal._getTransactionReciept(params, {
      apiKey: this.config?.apiKey
    });
  };

  /**
   * Get the transaction data of a specified query
   *
   *@link See more https://module.readme.io/reference/get-transaction
   * @param {number=} [params.number] - Number of items to retrieve. Max 100 at a time.
   * @param {number=} [params.offset] - Offset for pagination.
   * @param {string=} [params.txHash] - Transaction hash to query for.
   * @param {string=} [params.from] - Transaction from an address to query for.
   * @param {string=} [params.to] - Transactions to an address to query for.
   * @param {number=} [params.blockNumber] - Block number to query for.
   * @param {SortDirection=} [params.sortDirection] - The direction to sort results
   */
  public getTransaction = async (params: GetTransaction): Promise<Transaction[]> => {
    return internal._getTransaction(params, {
      apiKey: this.config?.apiKey
    });
  };
  /**
   * Get a block from the ETH blockchain.
   *
   * @link See more https://module.readme.io/reference/get-block
   * @param {number=} [params.blockNumber] - The block number to query for.
   * @param {count=} [params.count] - The number of items to retrieve (Max 100 at a time).
   * @param {offset=}[params.offset] - Offset for pagination.
   * @param {SortDirection=} [params.sortDirection] - The direction to sort results
   */
  public getBlock = async (params: GetBlock): Promise<Block[]> => {
    return internal._getBlock(params, {
      apiKey: this.config?.apiKey
    });
  };
}
