import { task } from 'hardhat/config' 

task("sendMultiChainTokens", "sends MultiChainTokens to destination chain")
    .addParam("src", "the address of the local MultiChainToken contract address")
    .addParam("chainId", "the destination chainId")
    .addParam("dst", "the destination MultiChainToken contract address")
    .addParam("qty", "the quantity of tokens to send to the destination chain")

    .setAction(async (taskArgs) => {

        console.log(taskArgs);
        let MultiChainToken = await hre.ethers.getContractFactory('MultiChainToken');
        let multiChainToken = await MultiChainToken.attach(taskArgs.src);
        console.log(`multiChainToken.address: ${multiChainToken.address}`);

        // approve
        let approveTx = await multiChainToken.approve(taskArgs.src, taskArgs.qty);
        console.log(`approveTx.hash: ${approveTx.hash}`);

        let qty = hre.ethers.BigNumber.from(taskArgs.qty);
        console.log(`qty: ${qty}`);
        // sendTokens
        let tx = await multiChainToken.sendTokens(
            taskArgs.chainId,
            taskArgs.dst,
            qty,
            {value: 10000000}
        );
        console.log(`tx.hash: ${tx.hash}`);

    });