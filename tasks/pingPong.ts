import { task } from 'hardhat/config' 
import { fujiEndpoint, ropstenEndpoint, rinkebyEndpoint } from '../constants'

task("pingPong", "deploys an instance of PingPong.sol")
    .addParam("src", "the address of the local PingPong contract address")
    .addParam("cid", "the destination chainId")
    .addParam("dst", "the destination PingPong contract address")
    .addParam("pings", "number of pings to start with")
    .setAction(async (taskArgs) => {
        let PingPong = await hre.ethers.getContractFactory('PingPong');
        let pingPong = await PingPong.attach(taskArgs.src);
        console.log(`pingPong.address: ${pingPong.address}`);
        const result = await pingPong.ping(taskArgs.cid,taskArgs.dst,taskArgs.pings);
    })