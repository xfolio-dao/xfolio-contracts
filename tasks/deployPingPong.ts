import { task } from 'hardhat/config' 
import { fujiEndpoint, ropstenEndpoint, rinkebyEndpoint } from '../constants'

task("deployPingPong", "deploys an instance of PingPong.sol")
    .setAction(async (taskArgs) => {
        let PingPong = await hre.ethers.getContractFactory('PingPong');
        let pingPong = await PingPong.deploy(fujiEndpoint);
        console.log(`pingPong.address: ${pingPong.address}`);
    });