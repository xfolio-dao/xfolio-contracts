import { task } from 'hardhat/config'

task("getMultiChainTokenBalance", "sends MultiChainTokens to destination chain")
    .addParam("src", "the address of the local MultiChainToken contract address")
    .addParam("acc", "the address of the account that should get checked")
    .setAction(async (taskArgs) => {

        console.log(taskArgs);
        let MultiChainToken = await hre.ethers.getContractFactory('MultiChainToken');
        let multiChainToken = await MultiChainToken.attach(taskArgs.src);
        console.log(`multiChainToken.address: ${multiChainToken.address}`);

        // get Balance
        let tokenBalance = await multiChainToken.balanceOf(taskArgs.acc)
        console.log(tokenBalance.toString())

    });