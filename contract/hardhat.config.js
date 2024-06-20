require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.24",
  defaultNetwork: "sepolia",
  networks: {
    sepolia: {
      url: process.env.API_URL,
      accounts: [process.env.ACCOUNT_PRIVATE_KEY]
    }
  },
  etherscan: {
    apiKey: "KBJB6EM7K4YK1HZ9MXTUB3T6XADADC8FGX"
  }
};
