/* eslint-disable no-undef */
import {
  CollectionOwnerSpread,
  CollectionRanking,
  CollectionsOwned,
  Listing,
  Module,
  Sale,
  TokensOwned,
  UserTradingHistory
} from '../../src/index';

describe('Should test nft methods', () => {
  jest.setTimeout(10000);
  jest.retryTimes(3);
  const client = new Module({
    apiKey: 'demo'
  });
  it('Should test getCollectionInfo', async () => {
    const data = await client.nft.getCollectionInfo({
      contractAddress: '0xed5af388653567af2f388e6224dc7c4b3241c544'
    });
    expect(data.contractAddress).toBe('0xed5af388653567af2f388e6224dc7c4b3241c544');
    expect(data.name).toBe('Azuki');
  });
  it('Should test getCollectionStats', async () => {
    const data = await client.nft.getCollectionStats({
      contractAddress: '0xed5af388653567af2f388e6224dc7c4b3241c544',
      marketplace: 'Opensea'
    });
    expect(data.address).toBe('0xed5af388653567af2f388e6224dc7c4b3241c544');
    expect(data.totalSupply).toBe('10000');
  });
  it('Should test getCollectionRankings', async () => {
    const data = await client.nft.getCollectionRankings({
      count: 100
    });
    expect(data.length).toBe(100);
    data.forEach((collection: CollectionRanking) => {
      expect(collection.address).toBeTruthy();
      expect(collection.totalSupply).toBeTruthy();
    });
  });
  it('Should test getCollectionListings', async () => {
    const data = await client.nft.getListings({
      active: true,
      count: 5,
      contractAddress: '0xed5af388653567af2f388e6224dc7c4b3241c544',
      sortDirection: 'timeDesc',
      withMetadata: false
    });
    expect(data.length).toBe(5);
    data.forEach((listing: Listing) => {
      expect(listing.id).toBeTruthy();
    });
  });
  it('Should test getCollectionSales', async () => {
    const data = await client.nft.getSales({
      contractAddress: '0xed5af388653567af2f388e6224dc7c4b3241c544',
      count: 1,
      sortDirection: 'timeAsc'
    });
    expect(data.length).toBe(1);
    data.forEach((sale: Sale) => {
      expect(sale.id).toBeTruthy();
    });
  });
  it('Should test getCollectionFloor', async () => {
    const data = await client.nft.getCollectionFloor({
      contractAddress: '0xed5af388653567af2f388e6224dc7c4b3241c544'
    });
    expect(parseInt(data.price)).toBeGreaterThan(0);
    expect(data.floorListing.id).toBeTruthy();
  });
  it('Should test getTokenInfo', async () => {
    const data = await client.nft.getTokenInfo({
      contractAddress: '0xed5af388653567af2f388e6224dc7c4b3241c544',
      tokenId: '3505'
    });
    expect(data.collection?.contractAddress).toBe('0xed5af388653567af2f388e6224dc7c4b3241c544');
    expect(data.metadata?.name).toBe('Azuki #3505');
  });
  it('Should test getTokenOwner', async () => {
    const data = await client.nft.getTokenOwner({
      contractAddress: '0xed5af388653567af2f388e6224dc7c4b3241c544',
      tokenId: '3505'
    });
    expect(data.owner).toBeTruthy();
    expect(data.transferTxhash).toBeTruthy();
  });
  it('Should test getTokensOwned', async () => {
    const data = await client.nft.getTokensOwned({
      address: '0x0000c3Caa36E2d9A8CD5269C976eDe05018f0000',
      type: 'all',
      count: 1,
      withMetadata: false
    });
    expect(data.length).toBeGreaterThan(0);
    data.forEach((token: TokensOwned) => {
      expect(token.contractAddress).toBeTruthy();
      expect(token.tokenID).toBeTruthy();
    });
  });
  it('Should test getCollectionsOwned', async () => {
    const data = await client.nft.getCollectionsOwned({
      address: '0x0000c3Caa36E2d9A8CD5269C976eDe05018f0000',
      count: 1,
      type: 'all'
    });
    expect(data.length).toBeGreaterThan(0);
    data.forEach((collection: CollectionsOwned) => {
      expect(collection.collectionAddress).toBeTruthy();
    });
  });
  it('Should test getCollectionIntersection', async () => {
    const data = await client.nft.getCollectionIntersection({
      contractAddressOne: '0xed5af388653567af2f388e6224dc7c4b3241c544',
      contractAddressTwo: '0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d'
    });
    expect(data.length).toBeGreaterThan(0);
  });
  it('Should test getUserTradingStats', async () => {
    const data = await client.nft.getUserTradingStats({
      address: '0x0000c3Caa36E2d9A8CD5269C976eDe05018f0000'
    });
    expect(parseInt(data.total_erc721_recieved)).toBeGreaterThanOrEqual(160);
    expect(parseInt(data.total_erc721_sent)).toBeGreaterThanOrEqual(137);
  });
  it('Should test getUserTradingHistory', async () => {
    const data = await client.nft.getUserTradingHistory({
      address: '0x0000c3Caa36E2d9A8CD5269C976eDe05018f0000',
      count: 1
    });
    expect(data.length).toBe(1);
    data.forEach((trade: UserTradingHistory) => {
      expect(trade.in_tx).toBeTruthy();
    });
  });
  it('Should test getCollectionOwnerSpread', async () => {
    const data = await client.nft.getCollectionOwnerSpread({
      contractAddress: '0xed5af388653567af2f388e6224dc7c4b3241c544'
    });
    expect(data.length).toBeGreaterThan(0);
    data.forEach((spread: CollectionOwnerSpread) => {
      expect(spread.numOwners).toBeTruthy();
      expect(spread.numTokens).toBeTruthy();
    });
  });
  it('Should test getMintVolume', async () => {
    const data = await client.nft.getMintVolume({
      contractAddress: '0xed5af388653567af2f388e6224dc7c4b3241c544'
    });
    expect(data.totalMintVolume).toBeGreaterThanOrEqual(8504.5);
  });
});
