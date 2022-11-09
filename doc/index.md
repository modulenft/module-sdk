<div>
  <p align="center">
    <a href="https://discordx.js.org" target="_blank" rel="nofollow">
      <img src="https://files.readme.io/98678b9-PFP.png" width="200" />
    </a>
  </p>
  <div align="center" class="badge-container">
    <a href="https://discordx.js.org/discord"
      ><img
        src="https://img.shields.io/discord/948346835423068250?color=5865F2&logo=discord&logoColor=white"
        alt="Discord server"
    /></a>
    <a href="https://www.npmjs.com/package/module-js-sdk"
      ><img
        src="https://img.shields.io/npm/v/discordx.svg?maxAge=3600"
        alt="NPM version"
    /></a>
    <a href="https://www.npmjs.com/package/discordx"
      ><img
        src="https://img.shields.io/npm/dt/discordx.svg?maxAge=3600"
        alt="NPM downloads"
    /></a>
    <a href="https://github.com/discordx-ts/discordx/actions"
      ><img
        src="https://github.com/discordx-ts/discordx/workflows/Build/badge.svg"
        alt="Build status"
    /></a>
  </div>
  <h1 align="center">
    <b>Module JavaScript SDK</b>
  </h1>
  <p align="center">
The Module SDK is a TypeScript library that exposes powerful methods to quickly and easily get all your Web3 data. Powered by Modules APIs, Module SDK exposes methods for each and every endpoint that Module provides. 
  <br/>
    <a href="https://module.readme.io/reference/about"> Complete Documentation<a/>
  </p>
</div>

# Getting Started
**yarn**
```zsh
yarn add module-sdk-js
```
**npm** 
```zsh
npm i module-sdk-js
```
After installing the SDK, import it using the following code
```js
import { Module, ModuleConfig } from "module-sdk-js";

// Configuration object for the Module SDK. 
const config: ModuleConfig = {
  apiKey: "", // Module API Key. Not required, however rate limits will apply.
};

// Create a new instance of the SDK
const client = new Module(config);
```

# SDK Usage

All methods are exposed through their own classes. 

There are four usable classes as shown below
```js
import { Module } from "module-sdk-js";

const client = new Module();

client.eth; // Ethereum Methods

client.nft; // NFT Methods

client.central; // Central Methods

client.metadata; // Metadata Methods

```
All method option types and method response types are exposed via the global export.
Methods are all asynchronous and return/throw either resolved or rejected depending on the server response. 
```js
import {
  GetContractABI, // Metdata Type
  GetTokenInfo, // NFT Type
  GetTransaction, // ETH Type
  ResolveCollection, // Central Type
  Module, // SDK Class
} from "module-sdk-js";

const client = new Module();

// ETH
await client.eth.getTransaction({} as GetTransaction);

// Metadata
await client.metadata.getContractABI({} as GetContractABI);

// NFT
await client.nft.getTokenInfo({} as GetTokenInfo);

// Central
await client.central.resolveCollection({} as ResolveCollection);
```
Methods return promises that are either resolved or rejected depending on the server response.
Handle errors accordingly
```js
// Promises
try {
await client.eth.getTransaction({} as GetTransaction);
} catch(err) {
console.log(err);
}
```

## NFT Methods
```js
import { Module } from "module-sdk-js";

const client = new Module();

client.nft.getBatchTokenInfo({});

client.nft.getBatchUserTradingStats({});

client.nft.getCollectionFloor({});

client.nft.getCollectionInfo({});

client.nft.getCollectionIntersection({});

client.nft.getCollectionOwnerSpread({});

client.nft.getCollectionRankings({});

client.nft.getCollectionStats({});

client.nft.getCollectionsOwned({});

client.nft.getListings({});

client.nft.getSales({});

client.nft.getTokenInfo({});

client.nft.getTokenOwner({});

client.nft.getTokensOwned({});

client.nft.getUserTradingStats({});

client.nft.getUserTradingHistory({});
```

## ETH Methods
```js
```

## Metadata Methods
```js
```

## Central Methods
```js
```
