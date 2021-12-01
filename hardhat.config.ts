import { task, HardhatUserConfig } from "hardhat/config";
import "@nomiclabs/hardhat-waffle";
import '@typechain/hardhat'
import '@nomiclabs/hardhat-ethers'

task("accounts", "Prints the list of accounts", async (args, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    const accountBalance = await account.getBalance();
    console.log(account.address, hre.ethers.utils.formatEther(accountBalance));
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
const config: HardhatUserConfig = {
  // solidity: "0.8.4",
  typechain: {
    outDir: 'src/types',
    target: 'ethers-v5',
    alwaysGenerateOverloads: false, // should overloads with full signatures like deposit(uint256) be generated always, even if there are no overloads?
    externalArtifacts: ['externalArtifacts/*.json'], // optional array of glob patterns with external artifacts to process (for example external libs from node_modules)
  },
  solidity: {
    compilers: [
      {
        version: "0.8.4"
      },
      {
        version: "0.7.6"
      },
      {
        version: "0.6.6",
        settings: {},
      },
    ]
  },
  networks: {
    ropsten: {
        url: "https://eth-ropsten.alchemyapi.io/v2/6o4Rgl6ZryTuFcg_kD0Q52YSqgBqXFmK",
        accounts: ["593a9a1ede799199b2c3f387965585a0089603b26999de5d19ab7f271d5f16d2"]
    },
    fuji : {
        url: "https://api.avax-test.network/ext/bc/C/rpc",
        accounts: ["593a9a1ede799199b2c3f387965585a0089603b26999de5d19ab7f271d5f16d2"]
    }
  }
}

export default config