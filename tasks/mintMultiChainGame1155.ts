import { task } from 'hardhat/config' 

task("mintMultiChainGame1155", "mint a batch of items in MultiChainGame1155")
    .addParam("src", "the address of the local MultiChainNFT contract")
    .addParam("acc", "the address of the account that should get the items")
    .setAction(async (taskArgs) => {
        let MultiChainGame1155 = await hre.ethers.getContractFactory('MultiChainGame1155');
        let multiChainGame1155 = await MultiChainGame1155.attach(taskArgs.src);
        console.log(`multiChainGame1155.address: ${multiChainGame1155.address}`);
        //Plug in the amounts and ids of items that you want to mint
        const result = await multiChainGame1155.mintBatch(taskArgs.acc,[0,1],[10000,100],0x0);
        console.log(result)
    });