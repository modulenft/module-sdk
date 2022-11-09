/* eslint-disable no-undef */
import { Module } from '../../src/index';

describe('Should test metadata methods', () => {
  jest.setTimeout(10000);
  jest.retryTimes(3);
  const client = new Module({
    apiKey: 'demo'
  });
  it('Should test getNFTMetadata for azuki', async () => {
    const data = await client.metadata.getNftMetadata({
      contractAddress: '0xed5af388653567af2f388e6224dc7c4b3241c544',
      tokenId: '4454'
    });
    expect(data.contract_address).toBe('0xed5af388653567af2f388e6224dc7c4b3241c544');
    expect(data.token_id).toBe('4454');
  });
  it('Should test getContractABI', async () => {
    const data = await client.metadata.getContractABI({
      contractAddress: '0xed5af388653567af2f388e6224dc7c4b3241c544'
    });
    expect(data.contractAddress).toBe('0xed5af388653567af2f388e6224dc7c4b3241c544');
    expect(data.abi.length).toBeGreaterThan(0);
  });
});
