const projectConfig = {
  nftName: 'Vessels',

  nftSymbol: 'Vessels',

  maxSupply: 433,

  maxMintAmountPerTxn: 20,

  mintCost: process.env.NODE_ENV === 'production' ? 100 : 0.10,

  networkName:
    process.env.NODE_ENV === 'production'
      ? 'Ethereum Mainnet' // ''
      : 'Rinkeby Testnet', // ''

  chainName: 'MATIC', // 'ETH'

  chainId: process.env.NODE_ENV === 'production' ? 4 : 80001, // Ethereum (1), Rinkeby (4)

  siteDomain: 'www.thev01d.is',

  siteUrl:
    process.env.NODE_ENV === 'production'
      ? `https://www.thev01d.is`
      : 'http://localhost:3000',

  twitterUsername: '@peepoontweets',

  twitterUrl: 'https://twitter.com/peenpoontweets',

  discordUrl: 'https://discord.gg/xy4X5vyy',

  openseaCollectionUrl:
    process.env.NODE_ENV === 'production'
      ? 'https://opensea.io/collection/your_opensea_collection_name'
      : 'https://testnets.opensea.io/collection/vessels',

  contractAddress:
    process.env.NODE_ENV === 'production'
      ? 'your_mainnet_contract_address'
      : '0x665f989dab3a0E55C8162DEb589E45a03BD874cF ',

  scanUrl:
    process.env.NODE_ENV === 'production'
      ? 'https://polygonscan.com/address/your_polygon_contract_address'
      : 'https://rinkeby.etherscan.io/address/0x7a0f2633e6cd3c1aa3ba199ad21b6e6028b5cd75',
  // 'https://etherscan.io/address/your_ethereum_contract_address'
  // 'https://rinkeby.etherscan.io/address/your_rinkeby_contract_address'
};

export default projectConfig;
