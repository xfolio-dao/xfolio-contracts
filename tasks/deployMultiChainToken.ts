import { task } from 'hardhat/config' 
import { fujiEndpoint, ropstenEndpoint } from '../constants'

task("deployMultiChainToken", "deploys a MultiChainToken")
    .addParam("name", "the string name of the token")
    .addParam("symbol", "the string symbol of the token")
    .setAction(async (taskArgs) => {
        let MultiChainToken = await hre.ethers.getContractFactory('MultiChainToken');
        let multiChainToken = await MultiChainToken.deploy(taskArgs.name, taskArgs.symbol, ropstenEndpoint);
        console.log(`multiChainToken.address: ${multiChainToken.address}`);
    });