import { ethers } from "hardhat";
import { expect } from "chai";
import {BigNumber, ContractFactory, Signer} from "ethers";
import { it } from "mocha";
import { XfolioToken, XpresaleUSDC, SampleUSDC } from "../src/types";

describe("Xpresale USDC", () => {
    let accounts: Signer[];
    let XfolioToken, XpresaleUSDC, SampleUSDC: ContractFactory;
    let xfolioToken: XfolioToken, xpresaleUSDC: XpresaleUSDC, sampleUSDC: SampleUSDC;

    const initialSupply = 21000000;
    const initialUSDCSupply = 10000000;

    beforeEach(async () => {
        accounts = await ethers.getSigners();
        XfolioToken = await ethers.getContractFactory("XfolioToken");
        SampleUSDC = await ethers.getContractFactory("SampleUSDC");
        XpresaleUSDC = await ethers.getContractFactory("XpresaleUSDC");
        // Acccounts[0] is the admin
        xfolioToken = await XfolioToken.deploy(initialSupply) as XfolioToken;
        // Accounts[1] is the buyer
        sampleUSDC = await SampleUSDC.connect(accounts[1]).deploy(initialUSDCSupply) as SampleUSDC;
        xpresaleUSDC = await XpresaleUSDC.deploy(xfolioToken.address, sampleUSDC.address, 7) as XpresaleUSDC;
    });

    it("Increases USDC allowance and trades tokens", async () => {
        const buyerAddress = await accounts[1].getAddress();
        await xfolioToken.transfer(xpresaleUSDC.address,4200000);
        const allowance = BigNumber.from(1000);
        await sampleUSDC.connect(accounts[1]).increaseAllowance(xpresaleUSDC.address,allowance);
        await xpresaleUSDC.connect(accounts[1]).buyTokensOnAllowance();
        const buyerXFLBalance = await xfolioToken.balanceOf(buyerAddress);
        expect(buyerXFLBalance.toNumber()).to.equal(7000);
    })

})