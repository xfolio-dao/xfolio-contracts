import { ethers } from "hardhat";
import { Signer, ContractFactory, Contract } from "ethers";
import { expect } from "chai";
import { XfolioToken } from '../src/types'
import { XfolioToken__factory} from "../src/types";

describe("Xfolio Token", function () {
    let accounts: Signer[];
    let XfolioToken: ContractFactory;
    let xfolioToken: Contract;
    const initialSupply = 21000000;

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

    it("Burns 1000 tokens on demand", async () => {
        const totalSupply = await xfolioToken.totalSupply();
        const ownerAddress = await accounts[0].getAddress();
        await xfolioToken.burn(1000);
        const ownerBalance = await xfolioToken.balanceOf(ownerAddress);
        expect (ownerBalance.toNumber()).to.equal(totalSupply.toNumber() - 1000);
    })

    it("Delegates the votes", async () => {
        const ownerAddress = await accounts[0].getAddress();
        const repAddress = await accounts[1].getAddress();
        await xfolioToken.delegate(repAddress);
        const repVotes = await xfolioToken.getVotes(repAddress);
        const delAddress = await xfolioToken.delegates(ownerAddress)
        expect(delAddress).to.equal(repAddress);
        // console.log(repVotes.toNumber());
        expect (repVotes.toNumber()).to.greaterThan(1);
        expect (repVotes.toNumber()).to.equal(21000000);
    })
});