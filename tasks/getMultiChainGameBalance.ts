import { task } from 'hardhat/config'

task("getMultiChainGameBalance", "checks the balances of the given account")
    .addParam("src", "the address of the local MultiChainGame contract address")
    .addParam("acc", "the address of the account that should get checked")
    .setAction(async (taskArgs) => {

        console.log(taskArgs);
        let MultiChainGame1155 = await hre.ethers.getContractFactory('MultiChainGame1155');
        let multiChainToken1155 = await MultiChainGame1155.attach(taskArgs.src);
        console.log(`multiChainToken.address: ${multiChainToken1155.address}`);

        // get Balance
        const result = await multiChainToken1155.balanceOfBatch([taskArgs.acc],[0,1]);
        console.log(result);
    });