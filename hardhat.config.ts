import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "@openzeppelin/hardhat-upgrades";
require("dotenv").config();

const config: HardhatUserConfig = {
  solidity: "0.8.20",
  networks: {
    sepolia: {
      url: "https://eth-sepolia.g.alchemy.com/v2/s-hdjLqITCIC-0yx948QMzzi7v-43Sss",
      accounts: [process.env.WALLET_PRIV_KEY ?? ""],
    },
    bsc: {
      url: "https://bsc-dataseed.bnbchain.org",
      accounts: [process.env.WALLET_MAIN_PRIV_KEY ?? ""],
    },
    mainnet: {
      url: "https://eth-mainnet.g.alchemy.com/v2/EZeIyzkcnVq-TTdMMl6d0n-38JSynLwc",
      accounts: [process.env.WALLET_MAIN_PRIV_KEY ?? ""],
    },
  },
  etherscan: {
    apiKey: {
      sepolia: process.env.SEPOLIA_API_KEY ?? "",
      bscTestnet: process.env.BSC_TESTNET_API_KEY ?? "",
      bsc: process.env.BSC_TESTNET_API_KEY ?? "",
      mainnet: process.env.SEPOLIA_API_KEY ?? "",
    },
  },
};

export default config;
