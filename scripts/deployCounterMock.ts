import { ethers } from "hardhat"

async function main() {
    const [deployer] = await ethers.getSigners()

    const ropstenEndpoint = '0xfeBE4c839EFA9f506C092a32fD0BB546B76A1d38'
    const fujiEndpoint = '0x489fd72653924E25De141e9B1d1c2591A1150602'

    console.log("Deploying contracts with the account:", deployer.address)

    console.log("Account balance:", (await deployer.getBalance()).toString())

    const CounterMock = await ethers.getContractFactory("CounterMock")
    const counterMock = await CounterMock.deploy(fujiEndpoint)
    console.log("CounterMock address:", counterMock.address)
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    })