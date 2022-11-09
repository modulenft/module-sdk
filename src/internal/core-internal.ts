import axios, { AxiosInstance } from 'axios';

/* TODO */
// - Write wrapped axios instance using /lib/adapter

class Core {
  /**
   * Custom axios client
   */
  public client: AxiosInstance;
  constructor() {
    this.client = axios.create({
      baseURL: 'https://api.modulenft.xyz/api/v2/',
      timeout: 10000,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
  /**
   * Determines if an error is request (axios) based
   */
  public isAxiosError = axios.isAxiosError;
}
const core = new Core();

export default {
  client: core['client'],
  isAxiosError: core['isAxiosError']
};
