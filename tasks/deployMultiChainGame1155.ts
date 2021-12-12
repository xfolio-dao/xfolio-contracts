import { task } from 'hardhat/config' 
import { ropstenEndpoint, rinkebyEndpoint } from '../constants'

task("deployMultiChainGame1155", "deploys an instance of MultiChainGame1155")
    .setAction(async (taskArgs) => {
        let MultiChainGame1155 = await hre.ethers.getContractFactory('MultiChainGame1155');
        let multiChainGame1155 = await MultiChainGame1155.deploy(rinkebyEndpoint);
        console.log(`multiChainGame1155.address: ${multiChainGame1155.address}`);
    });