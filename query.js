// Load environment variables
require("dotenv").config();

// Load NEAR Javascript API components
const near = require("near-api-js");

// Setup default client options
const options = {
  networkId:   process.env.NEAR_NETWORK,
  nodeUrl:     process.env.NEAR_NODE_URL,
  walletUrl:   `https://wallet.${process.env.NEAR_NETWORK}.near.org`,
  helperUrl:   `https://helper.${process.env.NEAR_NETWORK}.near.org`,
  explorerUrl: `https://explorer.${process.env.NEAR_NETWORK}.near.org`,
  accountId:   process.env.NEAR_ACCOUNT, 
  keyStore:    {}
}

async function main() {
  // Configure the client with options and our local key store
  const client = await near.connect(options);
  const provider = client.connection.provider;

  // Make queries to the blockchain here:
  // 1) get status
  const status = await provider.status();
  console.log("network status:", status);

  // 2) get latest block
  let block = await provider.block({ finality: "final" });
  console.log("current block:", block);

  // 3) get block by number
  // 4) get current validators
  // 5) get account details
  // 6) get gas price
}

main()