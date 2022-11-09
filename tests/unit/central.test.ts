/* eslint-disable no-undef */
import { Module } from '../../src/index';

describe('Should test central methods', () => {
  jest.setTimeout(10000);
  jest.retryTimes(3);
  const client = new Module({
    apiKey: 'demo'
  });
  it('Should test resolveCollection for azuki', async () => {
    const data = await client.central.resolveCollection({
      term: 'azuki',
      count: 10,
      isVerified: true,
      match: true
    });
    expect(data.collections[0].name).toBe('azuki');
    expect(data.collections[0].address).toBe('0xed5af388653567af2f388e6224dc7c4b3241c544');
  });
  it('Should test resolveCollection for doodles-official', async () => {
    const data = await client.central.resolveCollection({
      term: 'doodles-official',
      count: 10,
      isVerified: true,
      match: true
    });
    expect(data.collections[0].name).toBe('doodles-official');
    expect(data.collections[0].address).toBe('0x8a90cab2b38dba80c64b7734e58ee1db38b8992e');
  });
});
