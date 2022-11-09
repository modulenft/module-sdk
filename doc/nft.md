## NFT Methods

Usage
```js
import { Module } from 'module-sdk';
const client = new Module({apiKey:''});

// See below for all methods
client.nft
```

- `getCollectionInfo()`: Get collection information. Images, contract address, verification status.
- `getCollectionStats()`: Get collection statistics. Sales volume, listings volume.
- `getCollectionRankings()`: Get collection rankings. Rankings based on sales volume, listings volume.
- `getListings()`: Get NFT listings. Listings from OpenSea, Blur, X2Y2,LooksRare.
- `getSales()`: Get NFT sales. Listings from OpenSea, Blur, X2Y2, LooksRare.
- `getCollectionFloor()`: Get collection floor listing. Floor listing from X2Y2, OpenSea, Blur, LooksRare.
- `getTokenInfo()`: Get info about a specific NFT. Token id, image, name, metadata
- `getTokenOwner()`: Get info about a token owner of a specific NFT. Token id, image, name, metadata, transaction info.
- `getCollectionsOwned()`: Get collections owned by a user. Collections images, metadata, name, slug.
- `getTokensOwned()`: Get tokens owned be a a user. Token metadata, token name, token images.
- `getCollectionIntersection()`: Get intersection of two collections. Intersection contract array.
- `getUserTradingStats()`: Get trading statistics of a user. Mint volume, mint history, total spent, total recieved. 
- `getUserTradingHistory()`: Get trading history of a user. Mint history, tx history, total sent.
- `getCollectionOwnerSpread()`: Get the owner spread of a collection. 
- `getMintVolume()`: Get mint volume of an NFT collection.

