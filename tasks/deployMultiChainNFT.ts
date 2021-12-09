import { task } from 'hardhat/config' 
import { fujiEndpoint, ropstenEndpoint, rinkebyEndpoint } from '../constants'

task("deployMultiChainNFT", "deploys a MultiChainNFT")
    .addParam("name", "the string name of the NFT")
    .addParam("symbol", "the string symbol of the NFT")
    .setAction(async (taskArgs) => {
        let MultiChainNFT = await hre.ethers.getContractFactory('MultiChainNFT');
        let multiChainNFT = await MultiChainNFT.deploy(taskArgs.name, taskArgs.symbol, fujiEndpoint);
        console.log(`multiChainNFT.address: ${multiChainNFT.address}`);
    });