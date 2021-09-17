import { ethers } from "hardhat";
import { expect } from "chai";
import { BigNumber, ContractFactory, Signer } from "ethers";
import { XfolioToken, TimeLock } from '../src/types'

describe("Xfolio Timelock", async () => {
    let accounts: Signer[];
    let XfolioToken: ContractFactory, TimeLock: ContractFactory;
    let xfolioToken: XfolioToken, timeLock: TimeLock;
    let admAddress: string;
    let benAddress: string;

    const initialSupply = 21000000;

    beforeEach(async () => {
        accounts = await ethers.getSigners();
        admAddress = await accounts[0].getAddress();
        benAddress = await accounts[1].getAddress();
        XfolioToken = await ethers.getContractFactory("XfolioToken");
        TimeLock = await ethers.getContractFactory("TimeLock");
        // Acccounts[0] is the admin
        xfolioToken = await XfolioToken.deploy(initialSupply) as XfolioToken;
        timeLock = await TimeLock.deploy(xfolioToken.address) as TimeLock;
    })

    it("Deposits XFL to a LockBox", async () => {
        const amount = BigNumber.from(1000);
        const period = BigNumber.from(1632000696); //24hr from now
        await xfolioToken.increaseAllowance(timeLock.address,amount);
        await expect(timeLock.deposit(benAddress,amount,period))
            .to.emit(timeLock,"LogLockBoxDeposit")
            .withArgs(admAddress,benAddress,1000,1632000696,0);
    })

    it ("Reverts the withdraw if the timestamp is not met", async () => {
        const amount = BigNumber.from(1000);
        const period = BigNumber.from(1632000696); //24hr from now
        await xfolioToken.increaseAllowance(timeLock.address,amount);
        await timeLock.deposit(benAddress,amount,period);
        await expect(timeLock.connect(accounts[1]).withdraw(0)).to.be.reverted;
    })
})