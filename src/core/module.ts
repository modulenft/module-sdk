import { ModuleConfig } from '../types/core';
import { Central } from './central-core';
import { Ethereum } from './ethereum-core';
import { Metadata } from './metadata-core';
import { NFT } from './nft-core';

export class Module {
  /**
   * Module SDK eth functionality class.
   * @access public
   */
  readonly eth: Ethereum;

  /**
   * Module SDK metadata functionality class.
   * @access public
   */
  readonly metadata: Metadata;

  /**
   * Module SDK nft functionality class.
   * @access public
   */
  readonly nft: NFT;

  /**
   * Module SDK central functionality class.
   * @access public
   */
  readonly central: Central;

  /*
   * # ModuleSDK
   * ### Module SDK is a TypeScript library that exposes all of Modules APIs along with their respective types.
   * #### Version: 1.0.0
   * @link https://discord.gg/module - Discord
   * @link https://modulenft.readme.io - Documentation
   * @link https://dash.modulenft.xyz - Developer Dashboard
   * @param {string} [config.apiKey] - Module API key.
   * @param {boolean} [config.bypassCache] - Global cache bypass. Requires an API key
   */
  constructor(config?: ModuleConfig) {
    this.eth = new Ethereum(config);
    this.metadata = new Metadata(config);
    this.nft = new NFT(config);
    this.central = new Central(config);
  }
}
