import { ethers } from "hardhat";
import { Signer } from "ethers";
import { expect } from "chai";
import {XfolioToken, XfolioToken__factory, ERC20} from '../src/types/index'

describe("Xfolio Token ", function () {
    let accounts: Signer[];
    let XfolioToken: XfolioToken__factory;
    let xfolioToken: ERC20;
    const initialSupply = 100000000;

    beforeEach(async () => {
        accounts = await ethers.getSigners();
        XfolioToken = await ethers.getContractFactory("XfolioToken");
        xfolioToken = await XfolioToken.deploy(initialSupply);
    });

    it("Should transfer the supply to the sender", async () => {

        const totalSupply = await xfolioToken.totalSupply();
        const ownerAddress = await accounts[0].getAddress();
        const ownerBalance = await xfolioToken.balanceOf(ownerAddress);

        expect (ownerBalance.toNumber()).to.equal(totalSupply.toNumber());
    });
});