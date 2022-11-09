import internal from '../internal/nft-internal';
import { ModuleConfig } from '../types/core';
import {
  BatchUserTradingStatistics,
  Collection,
  CollectionFloor,
  CollectionOwnerSpread,
  CollectionRanking,
  CollectionsOwned,
  Listing,
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
  GetUserTradingHistory,
  GetUserTradingStats
} from '../types/methods';

export class NFT {
  // eslint-disable-next-line no-unused-vars
  constructor(private readonly config?: ModuleConfig) {}

  /**
   *
   * Get info about a collection with a provided query
   *
   * @link See more https://module.readme.io/reference/retrieve-collection-info
   * @param {string=} [params.contractAddress] - Contract address to query.
   * @param {string=} [params.slug] - Collection slug to query.
   */
  public getCollectionInfo = async (params: GetCollectionInfo): Promise<Collection> => {
    return internal._getCollectionInfo(params, {
      apiKey: this.config?.apiKey
    });
  };
  /**
   * Get analytical data regarding an NFT collection
   *
   * @link See more https://module.readme.io/reference/retrieve-volume-history
   * @param {string=} [params.contractAddress] - Contract address to query.
   * @param {string=} [params.slug] - Collection slug to query.
   * @param {Marketplace=} [params.Marketplace] - Filter stats by marketplace.
   */
  public getCollectionStats = async (params: GetCollectionStats): Promise<Statistics> => {
    return internal._getCollectionStats(params, {
      apiKey: this.config?.apiKey
    });
  };

  /**
   *
   * Get's collections ordered by either volume, average price, or sale count.
   *
   * @link See more https://module.readme.io/reference/retrieve-nft-rankings
   * @param {OrderBy=} [params.orderBy] - Option to order results by.
   * @param {TimeRange=} [params.timeRange] - Time range for results to be ordered by
   * @param {number=} [params.count] - Number of items to retrieve. Max 100 at a time.
   * @param {number=} [params.offset] - Offset for pagination.
   * @param {Marketplace=} [params.marketplace] - Filter ranks by marketplace
   */
  public getCollectionRankings = async (
    params: GetCollectionRankings
  ): Promise<CollectionRanking[]> => {
    return internal._getCollectionRankings(params, {
      apiKey: this.config?.apiKey
    });
  };

  /**
   * Get NFT listings from marketplaces.
   *
   * @link See more https://module.readme.io/reference/retrieve-listings
   * @param {boolean=} [params.active] - Filter by active orders.
   * @param {number=} [params.count] - Number of items to retrieve. Max 100 at a time.
   * @param {number=} [params.offset] - Offset for pagination.
   * @param {Marketplace=} [params.marketplace] - Filter by marketplace
   * @param {SortDirection=} [params.sortDirection] - The direction to sort results.
   * @param {string=} [params.slug] - The collection slug to filter by.
   * @param {string=} [params.contractAddress] - The contract address to filter by.
   * @param {string=} [params.tokenId] - The NFT tokenId to filter by.
   * @param {boolean=} [params.withMetadata] - Include token metadata in each token object.
   */
  public getListings = async (params: GetListings): Promise<Listing[]> => {
    return internal._getListings(params, { apiKey: this.config?.apiKey });
  };

  /**
   * Get NFT sales from marketplaces.
   *
   * @link See more https://module.readme.io/reference/retrieve-sales
   * @param {GetSales=} params - Query parameters
   * @param {number=} [params.count] - Number of items to retrieve. Max 100 at a time.
   * @param {number=} [params.offset] - Offset for pagination.
   * @param {SortDirection=} [params.sortDirection] - The direction to sort results.
   * @param {OrderSource=} [params.orderSource] - The source of the marketplace to filter
   * @param {OrderSide=} [params.orderSide] - The order side the sale was fufilled on.
   * @param {Aggregator=} [params.aggregator] - The fufiller/aggregator of the order.
   * @param {string=} [params.contractAddress] - The NFT contract address to filter by.
   * @param {string=} [params.slug] - The NFT slug to filter by.
   * @param {string=} [params.tokenId] - The NFT token id to filter by.
   */
  public getSales = async (params: GetSales): Promise<Sale[]> => {
    return internal._getSales(params, {
      apiKey: this.config?.apiKey
    });
  };

  /**
   * Get the floor listing of a collection.
   *
   * @link See more https://module.readme.io/reference/retrieve-collection-floor
   * @param {string=} [params.contractAddress] - The NFT contract address to filter by.
   * @param {string=} [params.slug] - The NFT slug to filter by.
   */
  public getCollectionFloor = async (params: GetCollectionFloor): Promise<CollectionFloor> => {
    return internal._getCollectionFloor(params, {
      apiKey: this.config?.apiKey
    });
  };

  /**
   * Get a tokens owner.
   *
   * @link See more https://module.readme.io/reference/retrieve-token-info
   * @param {string=} [params.contractAddress] - Contract address of collection to query.
   * @param {string=} [params.slug] - Collection slug to query.
   * @param {string=} [params.slug] - Token ID.
   */
  public getTokenInfo = async (params: GetTokenInfo): Promise<TokenInfo> => {
    return internal._getTokenInfo(params, {
      apiKey: this.config?.apiKey
    });
  };

  /**
   * Get a tokens owner.
   *
   * @link See more https://module.readme.io/reference/retrieve-token-owner
   * @param {string=} [params.contractAddress] - Contract address of collection to query.
   * @param {string=} [params.slug] - Collection slug to query.
   * @param {string=} [params.slug] - Token ID.
   */
  public getTokenOwner = async (params: GetTokenOwner): Promise<TokenOwner> => {
    return internal._getTokenOwner(params, {
      apiKey: this.config?.apiKey
    });
  };

  /**
   * Get collections a user owns.
   *
   * @link See more https://module.readme.io/reference/retrieve-collections-owned
   * @param {string=} [params.address] - User to query owned tokens for.
   * @param {number=} [params.count] - Number of items to retrieve. Max 100 at a time.
   * @param {number=} [params.offset] - Offset for pagination.
   * @param {Type=} [params.type] - ERC schema type to filter by.
   * @param {boolean=} [params.withMetadata] - With token metadata flag.
   */
  public getCollectionsOwned = async (params: GetCollectionsOwned): Promise<CollectionsOwned[]> => {
    return internal._getCollectionsOwned(params, {
      apiKey: this.config?.apiKey
    });
  };

  /**
   * Get tokens a user owns.
   *
   * @link See more https://module.readme.io/reference/retrieve-tokens-owned
   * @param {string=} [params.address] - User to query owned tokens for.
   * @param {number=} [params.count] - Number of items to retrieve. Max 100 at a time.
   * @param {number=} [params.offset] - Offset for pagination.
   * @param {Type=} [params.type] - ERC schema type to filter by.
   * @param {boolean=} [params.withMetadata] - With token metadata flag.
   * @param {string=} [params.contractAddress] - Collection contract to filter by.
   */
  public getTokensOwned = async (params: GetTokensOwned): Promise<TokensOwned[]> => {
    return internal._getTokensOwned(params, {
      apiKey: this.config?.apiKey
    });
  };

  /**
   * Get the intersection of two collections.
   *
   * @link See more https://module.readme.io/reference/retrieve-collection-intersection
   * @note This method takes time to process.
   * @param {string=} [params.contractAddressOne] - Contract address one.
   * @param {string=} [params.contractAddressTwo] - Contract address two.
   */
  public getCollectionIntersection = async (
    params: GetCollectionIntersection
  ): Promise<string[]> => {
    return internal._getCollectionIntersection(params, {
      apiKey: this.config?.apiKey
    });
  };

  /**
   * Get trading history for a user.
   *
   * @link See more https://module.readme.io/reference/retrieve-user-trading-stats-beta
   * @param {string=} [params.address] - User address to query for trading statistics.
   * @param {string=} [params.contractAddress] - Collection contract to filter by.
   */
  public getUserTradingStats = async (
    params: GetUserTradingStats
  ): Promise<UserTradingStatistics> => {
    return internal._getUserTradingStats(params, {
      apiKey: this.config?.apiKey
    });
  };

  /**
   * Get trading history for a user.
   *
   * @link See more https://module.readme.io/reference/retrieve-user-trading-history-beta
   * @param {string=} [params.address] - User address to query for trading history.
   * @param {string=} [params.contractAddress] - Collection contract to filter by.
   * @param {number=} [params.count] - Number of items to retrieve. Max 100 at a time.
   * @param {number=} [params.offset] - Offset for pagination.
   * @param {boolean=} [params.withMetadata] - With token metadata flag.
   * @param {InType=} [params.in_type] - Filter by in type.
   * @param {OutType} [params.out_type] - Filter by out type.
   */
  public getUserTradingHistory = async (
    params: GetUserTradingHistory
  ): Promise<UserTradingHistory[]> => {
    return internal._getUserTradingHistory(params, {
      apiKey: this.config?.apiKey
    });
  };

  /**
   * Get the intersection of token owners of two different collections.
   *
   * @link See more https://module.readme.io/reference/retrieve-collection-owner-spread
   * @note This method takes time to process and calculate
   * @param {string=} [params.contractAddress] - Contract address to query
   */
  public getCollectionOwnerSpread = async (
    params: GetCollectionSpread
  ): Promise<CollectionOwnerSpread[]> => {
    return internal._getCollectionOwnerSpread(params, {
      apiKey: this.config?.apiKey
    });
  };

  /**
   * Get the total mint volume of an NFT collection.
   *
   * @link See more https://module.readme.io/reference/retrieve-collection-mint-volume
   * @param {string=} [params.contractAddress] - Contract address to query
   * @param {string=} [params.slug] - Slug to query
   */
  public getMintVolume = async (params: GetMintVolume) => {
    return internal._getMintVolume(params, {
      apiKey: this.config?.apiKey
    });
  };
}
