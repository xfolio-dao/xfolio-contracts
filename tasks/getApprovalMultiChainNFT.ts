import { task } from 'hardhat/config'

task("getApprovalMultiChainNFT", "gets approval from a MultiChainNFT")
    .addParam("src", "the address of the local MultiChainToken contract address")
    .addParam("acc", "the address of the account that should get checked")
    .addParam("id", "id of the NFT to send")

    .setAction(async (taskArgs) => {

        console.log(taskArgs);
        const id = hre.ethers.BigNumber.from(taskArgs.id);
        let MultiChainNFT = await hre.ethers.getContractFactory('MultiChainNFT');
        let multiChainNFT = await MultiChainNFT.attach(taskArgs.src);
        console.log(`multiChainNFT.address: ${multiChainNFT.address}`);

        // getApprove
        let getApproveTx = await multiChainNFT.getApproved(id)
        console.log(`approveTx.hash: ${getApproveTx.hash}`);

        console.log(getApproveTx);

    });