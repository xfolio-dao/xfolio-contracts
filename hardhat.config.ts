import 'dotenv/config'
import { task, HardhatUserConfig } from 'hardhat/config'
import '@nomiclabs/hardhat-waffle'
import '@typechain/hardhat'
import '@nomiclabs/hardhat-ethers'

task("accounts", "Prints the list of accounts", async (args, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    const accountBalance = await account.getBalance();
    console.log(account.address, hre.ethers.utils.formatEther(accountBalance));
  }
})

const PRIVATE_KEY = process.env.PRIVATE_KEY || 'your private key'
const ROPSTEN_API_KEY = process.env.ROPSTEN_API_KEY || 'your rospten api key'
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
        url: ROPSTEN_API_KEY,
        accounts: [PRIVATE_KEY]
    },
    fuji : {
        url: "https://api.avax-test.network/ext/bc/C/rpc",
        accounts: [PRIVATE_KEY]
    }
  }
}

export default config