<div>
  <p align="center">
    <a href="https://modulenft.xyz" target="_blank" rel="nofollow">
      <img src="https://files.readme.io/98678b9-PFP.png" width="200" />
    </a>
  </p>
  <div align="center" class="badge-container">
    <a href="https://discord.gg/module"
      ><img
        src="https://img.shields.io/discord/948346835423068250?color=5865F2&logo=discord&logoColor=white"
        alt="Discord server"
    /></a>
    <a href="https://www.npmjs.com/package/module-sdk"
      ><img
        src="https://img.shields.io/npm/v/module-sdk.svg?maxAge=3600"
        alt="NPM version"
    /></a>
    <a href="https://www.npmjs.com/package/module-sdk"
      ><img
        src="https://img.shields.io/npm/dt/module-sdk.svg?maxAge=3600"
        alt="NPM downloads"
    /></a>
    <a href="https://github.com/modulenft/module-sdk/actions"</a>
  </div>
  <h1 align="center">
    <b>Module TypeScript SDK</b>
  </h1>
  <p align="center">
The Module SDK is a TypeScript library that exposes powerful methods to quickly and easily get all your Web3 data. Powered by Modules APIs, Module SDK exposes methods for each and every endpoint that Module provides.
</br></br>
Quickly access information about NFT collections, token holders, collection statistics and much much more!
</div>

**Information 📖**
</br>
Some methods have names that differ from their api counterparts on the documentation as a result of consistency for the SDK.

**Features ✨**
</br>
Have a specific feature that you want added? Open a ticket in our discord and we can discuss building it for you!

**Feedback/Issues 🤝**
</br>
We welcome feedback and pull requests! Either open a ticket in our discord or open an issue on the repo and we can look into it!


# Getting Started
**yarn**
```zsh
yarn add module-sdk
```
**npm** 
```zsh
npm i module-sdk
```
After installing the SDK, import it using the following code
```js
import { Module, ModuleConfig } from "module-sdk";

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
import { Module } from "module-sdk";

const client = new Module();

client.eth; // Ethereum Methods

client.nft; // NFT Methods

client.central; // Central Methods

client.metadata; // Metadata Methods

```

All methods return promises that either resolve or reject depending on the server response. Handle errors accordingly.
```js
try {
await client.eth.getTransaction({} as GetTransaction);
} catch(err) {
console.log(err);
}
```

# Method Documentation
Refer below for information on each classes methods.

- [NFT Methods](./doc/nft.md)
- [ETH Methods](./doc/eth.md)
- [Central Methods](./doc/central.md)
- [Metadata Methods](./doc/metadata.md)


# Examples
Getting azuki collection info
```js
import { Module } from 'module-sdk';

const client = new Module({apiKey: ''});

const collectionInfo = await client.nft.getCollectionInfo({slug: 'azuki'});
```
Getting azuki contract abi
```js
import { Module } from 'module-sdk';

const client = new Module({apiKey: ''});

const abi = await client.metadata.getContractABI({contractAddress: '0xed5af388653567af2f388e6224dc7c4b3241c544'});
```
