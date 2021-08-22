import { ethers } from "hardhat";

async function main() {
    const initialSupply = 21000000;
    const [deployer] = await ethers.getSigners();

    console.log("Deploying contracts with the account:", deployer.address);

    console.log("Account balance:", (await deployer.getBalance()).toString());

    const XfolioToken = await ethers.getContractFactory("XfolioToken");
    const xfolioToken = await XfolioToken.deploy(initialSupply);

    console.log("Token address:", xfolioToken.address);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });