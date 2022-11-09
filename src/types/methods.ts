// GENERAL //
export interface SortDirection {
  priceAsc: 'priceAsc';
  priceDesc: 'priceDesc';
  timeAsc: 'timeAsc';
  timeDesc: 'timeDesc';
}
export interface Marketplace {
  all: 'all';
  Opensea: 'Opensea';
  LooksRare: 'LooksRare';
  X2Y2: 'X2Y2';
}
export interface OrderBy {
  volume: 'volume';
  saleCount: 'saleCount';
  price: 'price';
}
export interface TimeRange {
  all: 'all';
  day: 'day';
  week: 'week';
  month: 'month';
}
export interface OrderSource {
  'Opensea: Wyvern': 'Opensea: Wyvern';
  'Opensea: Wyvern V1': 'Opensea: Wyvern V1';
  'Opensea: Seaport': 'Opensea: Seaport';
  LooksRare: 'LooksRare';
  X2Y2: 'X2Y2';
}
export interface OrderSide {
  ask: 'ask';
  bid: 'bid';
}
export interface Aggregator {
  'Gem.XYZ': 'Gem.XYZ';
  Genie: 'Genie';
}
export interface Type {
  all: 'all';
  ERC721: 'ERC721';
  ERC720: 'ERC720';
}
export type InType = 'all' | 'transfer' | 'mint' | 'buy';
export type OutType = 'all' | 'transfer' | 'sale';
// ETHEREUM //
export interface GetFullTX {
  count?: number;
  offset?: number;
  txHash?: string;
  contractAddress?: string;
  from?: string;
  to?: string;
  blockNumber?: number;
  sortDirection?: keyof SortDirection;
}
export interface GetBlock {
  blockNumber?: number;
  count?: number;
  offset?: number;
  blockHash?: string;
  sortDirection?: keyof SortDirection;
}
export interface GetTransactionReciept {
  count?: number;
  offset?: number;
  txHash?: string;
  from?: string;
  to?: string;
  blockNumber?: string;
  sortDirection?: SortDirection;
}
export interface GetTransaction {
  count?: number;
  offset?: number;
  txHash?: string;
  from?: string;
  to?: string;
  blockNumber?: string;
  sortDirection?: SortDirection;
}
// NFT //
export interface GetCollectionInfo {
  contractAddress?: string;
  slug?: string;
}
export interface GetCollectionStats {
  contractAddress?: string;
  slug?: string;
  marketplace: keyof Marketplace;
}
export interface GetCollectionRankings {
  orderBy?: keyof OrderBy;
  timeRange?: keyof TimeRange;
  count?: number;
  offset?: number;
  marketplace?: keyof Marketplace;
}
export interface GetListings {
  active?: boolean;
  count?: number;
  offset?: number;
  sortDirection?: keyof SortDirection;
  marketplace?: keyof Marketplace;
  slug?: string;
  contractAddress?: string;
  tokenId?: string;
  withMetadata?: boolean;
}
export interface GetSales {
  count?: number;
  offset?: number;
  sortDirection?: keyof SortDirection;
  orderSource?: keyof OrderSource;
  orderSide?: keyof OrderSide;
  aggregator?: keyof Aggregator;
  contractAddress?: string;
  slug?: string;
  tokenId?: string;
  from?: string;
  to?: string;
  minPrice?: string;
  maxPrice?: string;
  withMetadata?: boolean;
}
export interface GetCollectionFloor {
  contractAddress?: string;
  slug?: string;
}
export interface GetTokenInfo {
  contractAddress?: string;
  slug?: string;
  tokenId?: string;
}
export interface Token {
  tokenId?: string;
  contractAddress?: string;
}
export interface GetBatchTokenInfo {
  tokens?: Token[];
}
export interface GetTokenOwner {
  contractAddress?: string;
  slug?: string;
  tokenId?: string;
}
export interface GetTokensOwned {
  address?: string;
  count?: number;
  offset?: number;
  type?: keyof Type;
  withMetadata?: boolean;
  contractAddress?: string;
}
export interface GetCollectionsOwned {
  address?: string;
  count?: number;
  offset?: number;
  type: keyof Type;
  withMetadata?: boolean;
}
export interface GetCollectionIntersection {
  contractAddressOne?: string;
  contractAddressTwo?: string;
}
export interface GetUserTradingStats {
  address?: string;
  contractAddress?: string;
}
export interface GetUserTradingHistory {
  address?: string;
  contractAddress?: string;
  count?: number;
  offset?: number;
  withMetadata?: boolean;
  in_type?: InType;
  out_type?: OutType;
}
export interface GetBatchUserTradingStats {
  addresses?: string[];
}
export interface GetCollectionSpread {
  contractAddress?: string;
}
export interface GetMintVolume {
  contractAddress?: string;
  slug?: string;
}
// METADATA //
export interface GetNFTMetadata {
  contractAddress?: string;
  tokenId?: string;
}
export interface GetContractABI {
  contractAddress?: string;
}
export interface GetNFTMetadataSpread {
  contractAddress?: string;
}
// CORE //
export interface ResolveCollection {
  term?: string;
  count?: number;
  match?: boolean;
  isVerified?: boolean;
}
export interface ResolvedCollection {
  address?: string;
  name?: string;
  imageUrl?: string;
  isVerified?: boolean;
  totalSupply?: number;
}
