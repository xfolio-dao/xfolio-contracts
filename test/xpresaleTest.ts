import { ethers } from "hardhat";
import { expect } from "chai";
import {Contract, ContractFactory, Signer} from "ethers";
import {it} from "mocha";
import {XfolioToken, Xpresale} from "../src/types";

describe("Xpresale", () => {
    let accounts: Signer[];
    let XfolioToken, Xpresale: ContractFactory;
    let xfolioToken: XfolioToken, xpresale: Xpresale;

    const initialSupply = 21000000;

    beforeEach(async () => {
        accounts = await ethers.getSigners();
        const admin = accounts[0];
        const adminAddress = await accounts[0].getAddress();
        XfolioToken = await ethers.getContractFactory("XfolioToken");
        Xpresale = await ethers.getContractFactory("Xpresale");
        xfolioToken = await XfolioToken.deploy(initialSupply) as XfolioToken;
        xpresale = await Xpresale.deploy(xfolioToken.address, 14000) as Xpresale;
    });

    it("Sells XFL for ETH and transfers it to admin", async () => {
        // Transfer 20% of the initial supply to xpresale
        const buyerAddress = await accounts[1].getAddress();
        await xfolioToken.transfer(xpresale.address,4200000);
        const xpresaleInitialBalance = await xfolioToken.balanceOf(xpresale.address);
        expect(xpresaleInitialBalance.toNumber()).to.equal(4200000);
        //Transfer 10 ETH from accounts[1] to xpresale
        // const tx1 = await accounts[1].sendTransaction({
        //     to: xpresale.address,
        //     value: 10 ** 18
        // });
        await xpresale.connect(accounts[1]).buyTokens(buyerAddress,{value: ethers.utils.parseEther("1.0")})
        const buyerXFLBalance = await xfolioToken.balanceOf(buyerAddress);
        const adminBalance = await accounts[0].getBalance();
        console.log(adminBalance.toString())
        expect(buyerXFLBalance.toNumber()).to.equal(14000)
        // expect(ethers.utils.formatEther(adminBalance)).to.equal("10")
    })

})