import { task } from 'hardhat/config' 

task("sendMultiChainNFT", "sends a MultiChainNFT to destination chain")
    .addParam("src", "the address of the local MultiChainToken contract address")
    .addParam("cid", "the destination chainId")
    .addParam("dst", "the destination MultiChainToken contract address")
    .addParam("id", "id of the NFT to send")

    .setAction(async (taskArgs) => {

        console.log(taskArgs);
        const id = Number(taskArgs.id);
        let MultiChainNFT = await hre.ethers.getContractFactory('MultiChainNFT');
        let multiChainNFT = await MultiChainNFT.attach(taskArgs.src);
        console.log(`multiChainNFT.address: ${multiChainNFT.address}`);

        // approve
        // let approveTx = await multiChainNFT.approve(taskArgs.src, id);
        // console.log(`approveTx.hash: ${approveTx.hash}`);

        console.log(`id: ${id}`);
        // sendTokens
        let tx = await multiChainNFT.sendNFT(
            taskArgs.cid,
            taskArgs.dst,
            id,
            {value: 1000000000000000}
        );
        console.log(`tx.hash: ${tx.hash}`);

    });