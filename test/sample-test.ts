import { ethers } from "hardhat";
import { Signer } from "ethers";
import { expect } from "chai";

describe("Token", function () {
  let accounts: Signer[];

  beforeEach(async () => {
    accounts = await ethers.getSigners();
  });

  it("should do something right", async () => {
    // Do something with the accounts
  });
});

describe("Greeter", function () {
  it("Should return the new greeting once it's changed", async () => {
    const Greeter = await ethers.getContractFactory("Greeter");
    const greeter = await Greeter.deploy("Hello, world!");
    await greeter.deployed();

    expect(await greeter.greet()).to.equal("Hello, world!");

    const setGreetingTx = await greeter.setGreeting("Hola, mundo!");

    // wait until the transaction is mined
    await setGreetingTx.wait();

    expect(await greeter.greet()).to.equal("Hola, mundo!");
  });
});