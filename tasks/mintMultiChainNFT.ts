import { task } from 'hardhat/config'

task("mintMultiChainNFT", "mints a MultiChainNFT")
    .addParam("src", "the address of the local MultiChainNFT contract")
    .addParam("acc", "the address of the account that should get the NFT")
    .addParam("uri", "the uri of the new NFT")
    .setAction(async (taskArgs) => {

        console.log(taskArgs);
        let MultiChainNFT = await hre.ethers.getContractFactory('MultiChainNFT');
        let multiChainNFT = await MultiChainNFT.attach(taskArgs.src);
        console.log(`multiChainToken.address: ${multiChainNFT.address}`);

        // mint the token
        const result = await multiChainNFT.safeMint(taskArgs.acc,taskArgs.uri)
        console.log(result)

    });