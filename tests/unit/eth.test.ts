/* eslint-disable no-undef */
import { Block, FullTx, Transaction, Module, TransactionReciept } from '../../src/index';

describe('Should test eth methods', () => {
  jest.setTimeout(10000);
  jest.retryTimes(3);
  const client = new Module({
    apiKey: 'demo'
  });
  it('Should test getFullTX', async () => {
    const data = await client.eth.getFullTX({
      count: 10
    });
    expect(data.length).toBe(10);
    data.forEach((tx: FullTx) => {
      expect(tx.blockHash).toBeTruthy();
      expect(tx.blockNumber).toBeGreaterThan(0);
    });
  });
  it('Should test getBlock', async () => {
    const data = await client.eth.getBlock({
      blockNumber: 15209031
    });
    expect(data.length).toBeGreaterThan(0);
    data.forEach((block: Block) => {
      expect(block.hash).toBeTruthy();
      expect(block.parentHash).toBeTruthy();
    });
  });
  it('Should test getTransactionReciepts', async () => {
    const data = await client.eth.getTransactionReciept({
      count: 10
    });
    expect(data.length).toBe(10);
    data.forEach((tx: TransactionReciept) => {
      expect(tx.blockNumber).toBeTruthy();
    });
  });
  it('Should test getTransaction', async () => {
    const data = await client.eth.getTransaction({
      count: 10
    });
    expect(data.length).toBe(10);
    data.forEach((tx: Transaction) => {
      expect(tx.hash).toBeTruthy();
    });
  });
});
