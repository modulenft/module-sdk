// ETHEREUM //
export interface Transaction {
  /**
   * Transaction hash
   */
  hash: string;
  /**
   * Transaction access list
   */
  accessList: string[];
  /**
   * Transaction block hash
   */
  blockHash: string;
  /**
   * Block number of the transaction on chain
   */
  blockNumber: number;
  /**
   * Chain ID associated with the transaction
   */
  chainId: string;
  /**
   * Transctions sender address
   */
  fromAddress: string;
  /**
   * Transactions total gas measure
   */
  gas: number;
  /**
   * Transactions total gas price
   */
  gasPrice: number;
  /**
   * Transaction input data
   */
  input: string;
  /**
   * Transactions max fee per gas
   */
  maxFeePerGas: number;
  /**
   * Transactions  max priority fee per gas
   */
  maxPriorityFeePerGas: number;
  /**
   * Transaction one timed nonce
   */
  nonce: number;
  /**
   * Transaction ECDSA generator
   */
  r: string;
  /**
   * Transaction ECDSA generator
   */
  s: string;
  /**
   * Transaction reciever address
   */
  toAddress: string;
  /**
   * Transactions index on chain
   */
  transactionIndex: number;
  /**
   * Transactions TX type
   */
  txType: number;
  v: number;
  /**
   * Transaction ECDSA
   */
  /**
   * Transaction value
   */
  value: number;
}
export interface Log {
  /**
   * Address associated with the transaction
   */
  address: string;
  /**
   * Transaction block hash
   */
  blockHash: string;
  /**
   * Transaction block number
   */
  blockNumber: number;
  /**
   * Log data
   */
  data: string;
  /**
   * Logs index
   */
  logIndex: number;
  /**
   * Log removed flag
   */
  removed: boolean;
  /**
   * Transaction topic records
   */
  topics: string[];
  /**
   * Transactions hash
   */
  transactionHash: string;
  /**
   * Index of the transaction
   */
  transactionIndex: number;
}
export interface TransactionReciept {
  /**
   * Transactions hash on the blockchain
   */
  transactionHash: string;
  /**
   * Transaction block hash
   */
  blockHash: string;
  /**
   * Block number that contained the transaction
   */
  blockNumber: number;
  /**
   * Contract address associated with the transaction
   */
  contractAddress: string;
  /**
   * Measurable amount of gas used in this single transaction
   */
  cumulativeGasUsed: number;
  /**
   * Sender address associated with the transaction
   */
  fromAddress: string;
  /**
   * Measurable amount of gas used in this single transaction
   */
  gasUsed: number;
  /**
   * Transaction logs
   */
  logs: Log[];
  /**
   * Transaction log blooms
   */
  logsBloom: string;
  /**
   * Transaction reciept status
   */
  status: string;
  /**
   * Reciever address associated with the transaction
   */
  toAddress: string;
  /**
   * Index of the transaction on the block
   */
  transactionIndex: number;
  /**
   * TX type associated with the transaction
   */
  txType: number;
}
export interface Block {
  /**
   * Blocks hash
   */
  hash: string;
  /**
   * Blocks base fee per gas
   */
  baseFeePerGas: string;
  /**
   * Blocks overall difficulty
   */
  difficulty: number;
  /**
   * Blocks extra data
   */
  extraData: string;
  /**
   * Blocks marked gas limit
   */
  gasLimit: number;
  /**
   * Blocks total gas used
   */
  gasUsed: number;
  /**
   * Bloom of blocks logs
   */
  logsBloom: string;
  /**
   * Miners address associated with the block
   */
  miner: string;
  /**
   * Block mix hash
   */
  mixHash: string;
  /**
   * Blocks one time nonce
   */
  nonce: string;
  /**
   * Blocks "Block number"
   */
  number: number;
  /**
   * Parent hash of the block
   */
  parentHash: string;
  /**
   * Root of the blocks reciepts
   */
  recieptsRoot: string;
  /**
   * Combined hash of all block uncles
   */
  sha3Uncles: string;
  /**
   * Block size
   */
  size: number;
  /**
   * Block state root
   */
  stateRoot: string;
  /**
   * Blocks creation timestamp
   */
  timestamp: number;
  /**
   * Blocks total mining difficulty
   */
  totalDifficulty: number;
  /**
   * Blocks transacrion root
   */
  transactionRoot: string;
  /**
   * Blocks uncles
   */
  uncles: string[];
}
export interface FullTx {
  /**
   * Transactions unique hash
   */
  transactionHash: string;
  /**
   * Block hash associated with the transaction
   */
  blockHash: string;
  /**
   * Block number associated with the transaction
   */
  blockNumber: number;
  /**
   * Contract address associated with the transaction
   */
  contractAddress: string;
  /**
   * Cumulative gas used in this single transaction
   */
  cumulativeGasUsed: number;
  /**
   * Sender address associated with the transaction
   */
  fromAddress: string;
  /**
   * Gas used in this single transaction
   */
  gasUsed: number;
  /**
   * Transaction event logs
   */
  logs: Log[];
  /**
   * Transacition event logs bloom
   */
  logsBloom: string;
  /**
   * Transaction status
   */
  status: string;
  /**
   * Reciever address associated with the transaction
   */
  toAddress: string;
  /**
   * Transaction index on the associated block
   */
  transactionIndex: number;
  /**
   * Tx type of the transaction
   */
  txType: number;
  /**
   * Transaction hash
   */
  hash: string;
  /**
   * Transaction access list
   */
  accessList: string[];
  /**
   * Chain Id associated with the transaction
   */
  chainId: number;
  /**
   * Total gas used in the transaction
   */
  gas: number;
  /**
   * Price of gas relative to the transaction
   */
  gasPrice: number;
  /**
   * Input data of the transaction
   */
  input: string;
  /**
   * Max price per gas relative to the transactions
   */
  maxFeePerGas: number;
  /**
   * Max priority price per gas relative to the transaction
   */
  maxPriorityFeePerGas: number;
  /**
   * Transaction nonce
   */
  nonce: number;
  /**
   * Transaction ECDSA generator
   */
  r: string;
  /**
   * Transaction ECDSA generator
   */
  s: string;
  /**
   * Transaction ECDSA value
   */
  v: number;
  /**
   * Value of the transaction
   */
  value: number;
}
// NFT //
export interface CollectionFloor {
  price: string;
  floorListing: FloorListing;
}
export interface Socials {
  /**
   * Collections Telegram invite url
   */
  telegram_url: string;
  /**
   * Collections Discord invite url
   */
  discord_url: string;
  /**
   * Collections Twitter username
   */
  twitter_username: string;
  /**
   * Collections Telegram invite url
   */
  medium_username: string;
  /**
   * Collections Telegram invite url
   */
  wiki_url: string;
}
export interface Images {
  /**
   * Collections primary image url
   **/
  image_url: string;
  /**
   * Collections large image url
   **/
  large_image_url: string;
  /**
   * Collections banner image url
   **/
  banner_image_url: string;
  /**
   * Collections featured image url
   **/
  featured_image_url: string;
}
export interface Fees {
  /**
   * Sellers fee address
   **/
  sellerFeeAddress: string;
  /**
   * Sellers listing fee
   **/
  sellerFee: number;
  /**
   * OpenSeas' listing fee
   **/
  openseaFee: number;
  /**
   * OpenSeas' fee address
   **/
  openseaFeeAddress: string;
}
export interface Collection {
  /**
   * Collection name
   **/
  name: string;
  /**
   * Collection symbol
   **/
  symbol: string;
  /**
   * Collection description
   **/
  description: string;
  /**
   * Collection contract address
   **/
  contractAddress: string;
  /**
   * Collection NSFW flag
   **/
  is_nswf: boolean;
  /**
   * Collections verified flag (OpenSea ONLY)
   **/
  verified: boolean;
  /**
   * Collections ERC token standard
   **/
  ercType: string;
  /**
   * Collections ISO creation date
   **/
  createdDate: string;
  /**
   * Contract socials
   * @type {Socials}
   **/
  socials: Socials;
  /**
   * Collection images
   * @type {Images}
   **/
  images: Images;
  /**
   * Collection fees
   * @type {Fees}
   **/
  fees: Fees;
}
export interface Consideration {
  /**
   * Token address
   **/
  token: string;
  /**
   * Consideration item type
   **/
  itemType: number;
  /**
   * Consideration end amount
   **/
  endAmount: string;
  /**
   * Consideration receiver address
   **/
  recipient: string;
  /**
   * Consideration start amount
   **/
  startAmount: string;
  /**
   * Consideration type
   **/
  identifierOrCriteria: string;
}
export interface Offer {
  /**
   * Offers token address
   **/
  token: string;
  /**
   * Offers item type
   **/
  itemType: number;
  /**
   * Offers end amount
   **/
  endAmount: string;
  /**
   * Offers start amount
   **/
  startAmount: string;
  /**
   * Offers type
   **/
  identifierOrCriteria: string;
}
export interface ProtocolData {
  /**
   * Protocol salt
   **/
  salt: string;
  /**
   * Protocol zone
   **/
  zone: string;
  /**
   * Protocol offers(s)
   * @type {Offer[]}
   **/
  offer: Offer[];
  /**
   * Protocol ISO end time
   **/
  endTime: string;
  /**
   * Protocol counter
   **/
  counter: number;
  /**
   * Protocol zone hash
   **/
  zoneHash: string;
  /**
   * Protocol order type
   **/
  orderType: number;
  /**
   * Protocol ISO start time
   **/
  startTime: string;
  /**
   * Protocol conduit key
   **/
  conduitKey: string;
  /**
   * Protocol consideration(s)
   * @type {Consideration[]}
   **/
  consideration: Consideration[];
  /**
   * Protocols number of considerable items
   **/
  totalOriginalConsiderationItems: number;
}
export interface OrderData {
  /**
   * Orders unique hash
   **/
  orderHash: string;
  /**
   * Orders protocol data
   * @type {ProtocolData};
   **/
  protocolData: ProtocolData;
  /**
   * Orders protocol address
   **/
  protocolAddress: string;
}
export interface FloorListing {
  /**
   * Listing identifier
   **/
  id: string;
  /**
   * Listing offerer address
   **/
  offerer: string;
  /**
   * Listed tokens address
   **/
  tokenAddress: string;
  /**
   * listed tokens identifier
   **/
  tokenId: string;
  /**
   * Listings price
   **/
  priceAmount: string;
  /**
   * Listings price currency
   **/
  priceCurrency: string;
  /**
   * Listings serving marketplace
   **/
  marketplace: string;
  /**
   * Listings ISO start time
   **/
  startTime: string;
  /**
   * Listings ISO endtime
   **/
  endTime: string;
  /**
   * Listings OrderData
   * @type {OrderData}
   **/
  orderData: OrderData;
  /**
   * Listings active status (listed/delisted)
   **/
  active: boolean;
}
export interface FloorPrice {
  /**
   * Collection floor price in WEI
   **/
  priceInWei: string;
  /**
   * Collection floor price
   **/
  price: string;
  /**
   * Collections price currency type
   **/
  priceCurrency: string;
  /**
   * Collections floor listingfs
   **/
  floorListing: FloorListing;
}
export interface Statistics {
  /**
   * Collection address
   **/
  address: string;
  /**
   * Collections all time activity volume
   **/
  allTimeVolume: string;
  /**
   * Collections daily activity volume
   **/
  dailyVolume: string;
  /**
   * Collections weekly activity volume
   **/
  weeklyVolume: string;
  /**
   * Collections all times sales count
   **/
  allTimeSalesCount: string;
  /**
   * Collections weekly sale count
   **/
  weeklySalesCount: string;
  /**
   * Collections monthly sales count
   **/
  monthlySalesCount: string;
  /**
   * Collections all time avg price in ETH
   **/
  allTimeAveragePrice: string;
  /**
   * Collections daily average price in ETH
   **/
  dailyAveragePrice: string;
  /**
   * Collections weekly average price in ETH
   **/
  weeklyAveragePrice: string;
  /**
   * Collections monthly average price in ETH
   **/
  monthlyAverageprice: string;
  /**
   * Collections floor price listings
   * @type {FloorListing[]}
   **/
  floorPrice: FloorPrice;
  /**
   * Collections current listed token count
   **/
  tokenListedCount: string;
  /**
   * Collections total token supply count
   **/
  totalSupply: string;
  /**
   * Total token holders
   */
  holders: string;
}
export interface Rankings {
  /**
   * Collection name
   **/
  name: string;
  /**
   * Collections slug
   **/
  slug: string;
  /**
   * Collection owner identifier
   **/
  owner: number;
  /**
   * Collection visibility flag (OpenSea/LooksRare)
   **/
  hidden: boolean;
  /**
   * Collection symbol
   **/
  symbol: string;
  /**
   * Collection contract address
   **/
  address: string;
  /**
   * Collection NSWF flag (OpenSea/LooksRare)
   **/
  is_nsfw: boolean;
  /**
   * Collection chat url
   **/
  chat_url: string;
  /**
   * Collection featured token url
   **/
  featured: string;
  /**
   * Collection wiki url
   **/
  wiki_url: string;
  /**
   * Collection image url
   **/
  image_url: string;
  /**
   * Collections seller fee in ETH
   **/
  sellerFee: number;
  /**
   * OpenSea collection fee in ETH
   **/
  openseaFee: number;
  /**
   * Collection description
   **/
  description: string;
  /**
   * Collection discord invite url
   **/
  discord_url: string;
  /**
   * Collections NFT versiont type
   **/
  nft_version: string;
  /**
   * Collection schema name
   **/
  schema_name: string;
  /**
   * Collection ISO creation date
   **/
  created_date: string;
  /**
   * Collections external website url
   **/
  external_url: string;
  /**
   * Collections telergram invite url
   **/
  telegram_url: string;
  /**
   * Collections secondary external website url
   **/
  external_link: string;
  /**
   * Collections require email flag (OpenSea/LooksRare)
   **/
  require_email: boolean;
  /**
   * Collections payout address
   **/
  payout_address: string;
  /**
   * Collections default to fiat flag (OpenSea/LooksRare)
   **/
  default_to_fiat: boolean;
  /**
   * Collections large image url
   **/
  large_image_url: string;
  /**
   * Collection medium article username
   **/
  medium_username: string;
  /**
   * Collections OpenSea creation version
   **/
  opensea_version: string;
  /**
   * Collection baner image url
   **/
  banner_image_url: string;
  /**
   * Collection seller fee address
   **/
  sellerFeeAddress: string;
  /**
   * Collection twitter username
   **/
  twitter_username: string;
  /**
   * Collection rarity flag (OpenSea/LooksRare)
   **/
  is_rarity_enabled: boolean;
  /**
   * OpenSea collection fee address
   **/
  openseaFeeAddress: string;
  /**
   * Collection short description
   **/
  short_description: string;
  /**
   * Collection featured image url
   **/
  featured_image_url: string;
  /**
   * Collection instagram username
   **/
  instagram_username: string;
  /**
   * Collection token contract type
   **/
  asset_contract_type: string;
  /**
   * Collection only proxied transfers flag (OpenSea/LooksRare)
   **/
  only_proxied_transfers: boolean;
  /**
   * Collection is subject to whitelist flag (OpenSea)
   **/
  is_subject_to_whitelist: boolean;
  /**
   * Collection is safelist request status
   **/
  safelist_request_status: string;
  /**
   * Collection buyer fee points
   **/
  opensea_buyer_fee_basis_points: string;
  /**
   * Collection seller fee points
   **/
  opensea_seller_fee_basis_points: string;
}
export interface CollectionRanking {
  /**
   * Collection address
   **/
  address: string;
  /**
   * Collection all time activity volume
   **/
  allTimeVolume: string;
  /**
   * Collection daily activity volume
   **/
  dailyVolume: string;
  /**
   * Collection weekly activity volume
   **/
  weeklyVolume: string;
  /**
   * Collection all time sales count
   **/
  allTimeSalesCount: string;
  /**
   * Collection daily sales count
   **/
  dailySalesCount: string;
  /**
   * Collection weekly sales count
   **/
  weeklySalesCount: string;
  /**
   * Collection monthly sales count
   **/
  monthlySalesCount: string;
  /**
   * Collection total supply
   **/
  totalSupply: number;
  /**
   * Collections all time average price
   **/
  allTimeAveragePrice: string;
  /**
   * Collections daily price
   **/
  dailyAveragePrice: string;
  /**
   * Collections weekly average price
   **/
  weeklyAveragePrice: string;
  /**
   * Collections monthly average price
   **/
  monthlyAveragePrice: string;
  /**
   * Collections contract address
   **/
  contractAddress: string;
  // /**
  //  * Collection rankings
  //  * @type {Rankings[]}
  //  **/
  // data: Rankings;
}
export interface Attributes {
  /**
   * Tokens attribute type
   **/
  value: string;
  /**
   * Tokens attribute value
   **/
  trait_type: string;
}
export interface Metadata {
  /**
   * Token name
   **/
  name: string;
  /**
   * Token image url
   **/
  image: string;
  /**
   * Token attributes
   * @type {Attributes[]}
   **/
  attributes: Attributes[];
}
export interface ListingsProtocolData {
  /**
   * Protocol signature.
   */
  signature: string;
  /**
   * Protocol parameter data.
   */
  parameters: ProtocolData;
}
export interface ListingsOrderData {
  /**
   * Listing order hash.
   */
  orderHash: string;
  /**
   * Listings protocol data.
   */
  protocolData: ListingsProtocolData;
  /**
   * Listings protocol address.
   */
  protocolAddress: string;
}
export interface Listing {
  /**
   * Listing identifier
   */
  id: string;
  /**
   * Listing offerer address.
   */
  offerer: string;
  /**
   * Listings token address.
   */
  tokenAddress: string;
  /**
   * Listings token id.
   */
  tokenId: string;
  /**
   * Listings price amount.
   */
  priceAmount: string;
  /**
   * List currency type.
   */
  priceCurrency: string;
  /**
   * Marketplace the listing is active on.
   */
  marketplace: string;
  /**
   * Start time of the listing.
   */
  startTime: string;
  /**
   * End time of the listing.
   */
  endTime: string;
  /**
   * Listing order data.
   */
  orderData: OrderData;
  /**
   * Listing active flag
   */
  active: boolean;
  /**
   * Token metadata.
   */
  metadata: Metadata;
}
export interface Sale {
  /**
   * Sale identifier.
   */
  id: string;
  /**
   * Collection address.
   */
  contract: string;
  /**
   * Tokens identifier.
   */
  token_id: string;
  /**
   * Source of the orderer
   */
  order_source: string;
  /**
   * Source of the filler.
   */
  fill_source: string;
  /**
   * Source order side.
   */
  order_side: string;
  /**
   * Filler order address.
   */
  from_address: string;
  /**
   * Reciver order address.
   */
  to_address: string;
  /**
   * sale price amount in ETH
   */
  amount: number;
  /**
   * Sale transaction hash
   */
  txHash: string;
  /**
   * Sale timestamp.
   */
  timestamp: string;
  /**
   * Sale price in ETH.
   */
  sale_price_in_eth: string;
  /**
   * Sale amount in ETH.
   */
  sale_amount: string;
  /**
   * Sale assest type
   */
  sale_assest: string;
  /**
   * Bundle flag
   */
  bundle: boolean;
  /**
   * Sale transaction block number.
   */
  block_number: number;
  /**
   * ERC Schema type
   */
  erc: string;
  /**
   * Token metadata.
   */
  metadata: Metadata;
}
export interface Floor {
  /**
   * Listing price in WEI
   */
  priceInWei: string;
  /**
   * Listing price in ETH
   */
  price: string;
  /**
   * Listing currency type
   */
  priceCurrency: string;
  /**
   * Floor listings for collection
   */
  floorListing: FloorListing[];
}
export interface UserTradingStatistics {
  /**
   * Users total mint volume
   */
  total_mint_volume: string;
  /**
   * Users total buy volume
   */
  total_buy_volume: string;
  /**
   * Users total buy quantity
   */
  total_buy_qty: string;
  /**
   * Users total sell volume
   */
  total_sell_volume: string;
  /**
   * Users total sell quantity
   */
  total_sell_qty: string;
  /**
   * Users total mint gas costs
   */
  total_mint_gas_eth: string;
  /**
   * Users total sale gas costs
   */
  total_sale_gas_eth: string;
  /**
   * Users total mint count
   */
  mint_count: string;
  /**
   * Users average mint gas usage
   */
  average_mint_gas_eth: string;
  /**
   * Users average mint gwei cost
   */
  average_mint_gwei: string;
  /**
   * Users average max priority fee cost
   */
  average_mint_max_prio_fee: string;
  /**
   * Total amount of ETH the user has sent
   */
  total_eth_sent: string;
  /**
   * Total amount of ETH the user has recieved
   */
  total_eth_recieved: string;
  /**
   * Total amount of transaction the user has sent
   */
  total_tx_sent_count: string;
  /**
   * Total amount of transactions the user has recieved
   */
  total_tx_received_count: string;
  /**
   * Total amount of ERC721 tokens the user has recieved
   */
  total_erc721_recieved: string;
  /**
   * Total amount of ERC721 tokens the user has sent
   */
  total_erc721_sent: string;
}
export interface BatchUserTradingStatistics {
  /**
   * Users address identifier.
   */
  originalRequest: string;
  /**
   * Users trading statistics.
   */
  data: UserTradingStatistics;
}
interface Token {
  /**
   * Token contract address
   */
  contract: string;
  /**
   * Token id
   */
  token_id: string;
}
export interface UserTradingHistory {
  /**
   * Type of in event
   */
  in_type: string;
  /**
   * In source of trade
   */
  in_source: string;
  /**
   * ETH price of transaction in
   */
  in_price_eth: number;
  /**
   * USD price of transaction in
   */
  in_price_usd: number;
  /**
   * In date of transaction
   */
  in_date: string;
  /**
   * In transaction hash
   */
  in_tx: string;
  /**
   * In transaction sender
   */
  in_from: string;
  /**
   *
   */
  in_to: string;
  /**
   * Token traded
   */
  token: Token;
  /**
   * Type of trade
   */
  out_type: string;
  /**
   * Source of the trade
   */
  out_source: string;
  /**
   * Trade amount in ETH
   */
  out_price_eth: number;
  /**
   * Trade amount in USD
   */
  out_price_usd: number;
  /**
   * Trade transaction
   */
  out_tx: string;
  /**
   * Date of trade
   */
  out_date: string;
  /**
   * Sender address
   */
  out_from: string;
  /**
   * Reciepent address
   */
  out_to: string;
}
export interface CollectionIntersection {
  /**
   * Contract address that intersect
   */
  contracts: string[];
}
export interface OwnedMetadata {
  /**
   * Collection name
   **/
  name: string;
  /**
   * Collection symbol
   **/
  symbol: string;
  /**
   * Collection description
   **/
  description: string;
  /**
   * Collection contract address
   **/
  contractAddress: string;
  /**
   * Collection NSFW flag
   **/
  is_nswf: boolean;
  /**
   * Collections verified flag (OpenSea ONLY)
   **/
  verified: boolean;
  /**
   * Collections ERC token standard
   **/
  ercType: string;
  /**
   * Collections ISO creation date
   **/
  createdDate: string;
  /**
   * Contract socials
   * @type {Socials}
   **/
  socials: Socials;
  /**
   * Collection images
   * @type {Images}
   **/
  images: Images;
  /**
   * Collection fees
   * @type {Fees}
   **/
  fees: Fees;
  /**
   * Collection statistics
   * @type {Statistics}
   */
  stats: Statistics;
}
export interface CollectionsOwned {
  /**
   * Collections contract address
   */
  collectionAddress: string;
  /**
   * Amount of tokens owned
   */
  tokensOwned: number;
  /**
   * Token metadata
   */
  metadata: Metadata;
}
export interface TransfersIn {
  /**
   * Transaction hash
   */
  txHash: string;
}
export interface TokensOwnedMetadata {
  /**
   * Token nane
   */
  name: string;
  /**
   * Token image
   */
  image: string;
  /**
   * Token attribute
   */
  attributes: Attributes[];
  /**
   * Token description
   */
  description: string;
}
export interface TokensOwned {
  /**
   * Token id
   */
  tokenID: string;
  /**
   * Token contract address
   */
  contractAddress: string;
  /**
   * Token ERC type
   */
  type: string;
  /**
   * Token transfers
   */
  transfersIn: TransfersIn[];
  /**
   * Metadata of the token
   */
  metadata: TokensOwnedMetadata;
}
export interface TokenOwner {
  /**
   * Token owner address
   */
  owner: string;
  /**
   * The transaction hash of the relative token
   */
  transferTxhash: string;
}
export interface Spread {
  /**
   * Number of tokens.
   */
  numTokens: number;
  /**
   * Number of owners.
   */
  numOwners: number;
}
export interface CollectionOwnerSpread {
  /**
   * Number of tokens.
   */
  numTokens: number;
  /**
   * Number of owners.
   */
  numOwners: number;
}
export interface MintVolume {
  totalMintVolume: number;
}
export interface TokenInfo {
  collection?: Collection;
  metadata?: Metadata;
  listing: Listing[];
  lastSale?: Sale;
  owner?: TokenOwner;
}
// METADATA //
export interface Input {
  /**
   * Event name
   */
  name: string;
  /**
   * Event type
   */
  type: string;
  /**
   * Event internal type
   */
  internalType: string;
}
export interface ABI {
  /**
   * Function name
   */
  name: string;
  /**
   * Function type
   */
  type: string;
  /**
   * Array of parameters
   */
  inputs: Input[];
  /**
   * Functions state mutability state (read OR pure)
   */
  stateMutability: string;
  /**
   * Functions anonymous field as declared in the contract
   */
  anonymous: string;
}
export interface ContractABI {
  /**
   * Contract address associated with the ABI
   */
  contractAddress: string;
  /**
   * Contracts ABI
   */
  abi: ABI[];
}
export interface NFTMetadata {
  /**
   * Token unique address identifier
   */
  id: string;
  /**
   * Tokens contract address
   */
  contract_address: string;
  /**
   * Tokens unique id
   */
  token_id: string;
  /**
   * Token metadata
   */
  metadata: Metadata;
}
// CENTRAL //
export interface Resolved {
  /**
   * Collections
   */
  collections: CollectionResolved[];
}

export interface CollectionResolved {
  address: string;
  name: string;
  data: Rankings;
}
