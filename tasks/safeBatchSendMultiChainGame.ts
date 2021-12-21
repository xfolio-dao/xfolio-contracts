import { task } from 'hardhat/config'


task("safeBatchSendMultiChainGame", "sends an array of items in batch to destination chain.")
    .addParam("src", "the address of the local MultiChainGame contract address")
    .addParam("cid", "the destination chainId")
    .addParam("dst", "the destination MultiChainGame contract address")
    .addParam("acc", "the address of the account that should get the items")
    .setAction(async (taskArgs) => {
        let MultiChainGame1155 = await hre.ethers.getContractFactory('MultiChainGame1155');
        let multiChainGame1155 = await MultiChainGame1155.attach(taskArgs.src);
        console.log(`multiChainGame1155.address: ${multiChainGame1155.address}`);
        //Plug in the amounts and ids of the items that you want to send to the dst chain
        const result = await multiChainGame1155.safeBatchSend(taskArgs.acc,taskArgs.cid,taskArgs.dst,[0,1],[3000,30]);
        console.log(result)
    });