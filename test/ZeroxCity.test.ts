import { ethers } from "hardhat";
import { expect } from "chai";
import { Signer } from "ethers";
import { City } from '../src/types/City'
import { City__factory } from '../src/types/factories/City__factory'

describe("ZeroX City", () => {
    let accounts: Signer[];
    let CityFactory: City__factory;
    let city: City;

    beforeEach(async () => {
        accounts = await ethers.getSigners();
        const admin = accounts[0];
        CityFactory = await ethers.getContractFactory("City") as City__factory;
        city = await CityFactory.deploy();
    });
})