import Internal from '../internal/metadata-internal';
import { ModuleConfig } from '../types/core';
import { NFTMetadata, ContractABI } from '../types/datasets';
import { GetContractABI, GetNFTMetadata } from '../types/methods';

export class Metadata {
  // eslint-disable-next-line no-unused-vars
  constructor(private readonly config?: ModuleConfig) {}

  /**
   *
   * Gets the metadata associated with the provided query and token.
   *
   * @link See more https://api.modulenft.xyz/api/v2/eth/metadata/getMetadata
   * @param {string=} [params.contractAddress] - Contract address to query.
   * @param {number=} [params.tokenId] - Token id to query.
   */
  public getNftMetadata = async (params: GetNFTMetadata): Promise<NFTMetadata> => {
    return Internal._getNFTMetadata(params, {
      apiKey: this.config?.apiKey
    });
  };

  /**
   *
   * Retrieve the ABI of a contract (ALPHA)
   *
   * @alpha Contracts ABI's are still under the indexing process.
   * @link See more https://module.readme.io/reference/get-contract-abi-alpha
   * @param {string=} [params.contractAddress] - Contract address to query.
   */
  public getContractABI = async (params: GetContractABI): Promise<ContractABI> => {
    return Internal._getContractABI(params, {
      apiKey: this.config?.apiKey
    });
  };
}
