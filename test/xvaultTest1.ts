import { ethers } from "hardhat";
import { expect } from "chai";
import {Contract, ContractFactory, Signer} from "ethers";
// import {XVault, XVault__factory} from "../src/types";
import {it} from "mocha";
import exp from "constants";

describe("Xvault", () => {
    let accounts: Signer[];
    let XfolioToken, Xvault: ContractFactory;
    let xfolioToken: Contract, xvault: Contract;
    let adminAddress: string;

    const initialSupply = 21000000;

    beforeEach(async () => {
        accounts = await ethers.getSigners();
        const admin = accounts[0];
        console.log(adminAddress);
        XfolioToken = await ethers.getContractFactory("XfolioToken");
        Xvault = await ethers.getContractFactory("Xvault");
        xfolioToken = await XfolioToken.deploy(initialSupply);
        xvault = await Xvault.deploy(xfolioToken.address);
    });

    it("Receives $XFL tokens", async () => {

        await xfolioToken.transfer(xvault.address,initialSupply/2);

        const xvaultBalance = await xfolioToken.balanceOf(xvault.address);
        expect(xvaultBalance.toNumber()).to.equal(initialSupply/2);

    })

    it("Grants Moderator role and executes transfer", async () => {
        // Transfer half of the initial supply to xvault
        await xfolioToken.transfer(xvault.address,initialSupply/2);
        //Set moderator and winner addresses and moderator role
        const moderatorAddress = await accounts[1].getAddress();
        const winnerAddress = await accounts[2].getAddress();
        const moderatorRole = ethers.utils.id("MODERATOR");
        //Grant moderatorAddress moderatorRole
        await xvault.grantRole(moderatorRole,moderatorAddress);
        const hasModerator = await xvault.hasRole(moderatorRole,moderatorAddress);
        expect(hasModerator).to.equal(true);
        //Moderator is calling Xvault to transfer funds to the winner
        await xvault.connect(accounts[1]).transferXFL(winnerAddress,1000);
        const winnerBalance = await xfolioToken.balanceOf(winnerAddress);
        expect(winnerBalance.toNumber()).to.equal(1000);
    })
})