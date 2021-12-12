import 'dotenv/config'
import '@nomiclabs/hardhat-waffle'
import '@typechain/hardhat'
import '@nomiclabs/hardhat-ethers'
import { HardhatUserConfig } from 'hardhat/config'
import './tasks/deployMultiChainToken'
import './tasks/sendMultiChainTokens'
import './tasks/getMultiChainTokenBalance'
import './tasks/deployMultiChainNFT'
import './tasks/mintMultiChainNFT'
import './tasks/sendMultiChainNFT'
import './tasks/getApprovalMultiChainNFT'
import './tasks/deployPingPong'
import './tasks/pingPong'
import './tasks/deployMultiChainGame1155'
import './tasks/mintMultiChainGame1155'
import './tasks/getMultiChainGameBalance'

const PRIVATE_KEY = process.env.PRIVATE_KEY || 'your private key'
const ROPSTEN_API_KEY = process.env.ROPSTEN_API_KEY || 'your ropsten api key'
const RINKEBY_API_KEY = process.env.RINKEBY_API_KEY || 'your rinkeby api key'

const config: HardhatUserConfig = {
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
    rinkeby: {
        url: RINKEBY_API_KEY,
        accounts: [PRIVATE_KEY],
        gas: 2100000,
        gasPrice: 25000000001
    },
    fuji : {
        url: "https://api.avax-test.network/ext/bc/C/rpc",
        accounts: [PRIVATE_KEY],
        gas: 2100000,
        gasPrice: 25000000001
    }
  }
}

export default config