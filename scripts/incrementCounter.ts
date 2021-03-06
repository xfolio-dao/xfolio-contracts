import { ethers } from 'hardhat'
import { Contract } from 'ethers'

async function main() {
    const [deployer] = await ethers.getSigners();

    console.log("Calling the counter with the account :", deployer.address);

    console.log("Account balance:", (await deployer.getBalance()).toString());
    // const ropstenCounter = new Contract('0xfbffF96E07EfC85Cc1D98C295C7f27A3A62181d1',[
    //     {
    //         "inputs": [
    //             {
    //                 "internalType": "address",
    //                 "name": "_endpoint",
    //                 "type": "address"
    //             }
    //         ],
    //         "stateMutability": "nonpayable",
    //         "type": "constructor"
    //     },
    //     {
    //         "anonymous": false,
    //         "inputs": [
    //             {
    //                 "indexed": false,
    //                 "internalType": "uint256",
    //                 "name": "_messageCounter",
    //                 "type": "uint256"
    //             }
    //         ],
    //         "name": "MessageReceived",
    //         "type": "event"
    //     },
    //     {
    //         "inputs": [],
    //         "name": "endpoint",
    //         "outputs": [
    //             {
    //                 "internalType": "contract ILayerZeroEndpoint",
    //                 "name": "",
    //                 "type": "address"
    //             }
    //         ],
    //         "stateMutability": "view",
    //         "type": "function"
    //     },
    //     {
    //         "inputs": [
    //             {
    //                 "internalType": "uint16",
    //                 "name": "_dstChainId",
    //                 "type": "uint16"
    //             },
    //             {
    //                 "internalType": "bytes",
    //                 "name": "_dstCounterMockAddress",
    //                 "type": "bytes"
    //             }
    //         ],
    //         "name": "incrementCounter",
    //         "outputs": [],
    //         "stateMutability": "payable",
    //         "type": "function"
    //     },
    //     {
    //         "inputs": [
    //             {
    //                 "internalType": "uint16",
    //                 "name": "",
    //                 "type": "uint16"
    //             },
    //             {
    //                 "internalType": "bytes",
    //                 "name": "_fromAddress",
    //                 "type": "bytes"
    //             },
    //             {
    //                 "internalType": "uint64",
    //                 "name": "_nonce",
    //                 "type": "uint64"
    //             },
    //             {
    //                 "internalType": "bytes",
    //                 "name": "_payload",
    //                 "type": "bytes"
    //             }
    //         ],
    //         "name": "lzReceive",
    //         "outputs": [],
    //         "stateMutability": "nonpayable",
    //         "type": "function"
    //     }
    // ],deployer)
    const fujiCounter = new Contract('0x65e1E31AcFB0aa3032046aC9bcfF976E36049ECA',[
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_endpoint",
                    "type": "address"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "constructor"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "_messageCounter",
                    "type": "uint256"
                }
            ],
            "name": "MessageReceived",
            "type": "event"
        },
        {
            "inputs": [],
            "name": "endpoint",
            "outputs": [
                {
                    "internalType": "contract ILayerZeroEndpoint",
                    "name": "",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint16",
                    "name": "_dstChainId",
                    "type": "uint16"
                },
                {
                    "internalType": "bytes",
                    "name": "_dstCounterMockAddress",
                    "type": "bytes"
                }
            ],
            "name": "incrementCounter",
            "outputs": [],
            "stateMutability": "payable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint16",
                    "name": "",
                    "type": "uint16"
                },
                {
                    "internalType": "bytes",
                    "name": "_fromAddress",
                    "type": "bytes"
                },
                {
                    "internalType": "uint64",
                    "name": "_nonce",
                    "type": "uint64"
                },
                {
                    "internalType": "bytes",
                    "name": "_payload",
                    "type": "bytes"
                }
            ],
            "name": "lzReceive",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        }
    ],deployer)
    const result = await fujiCounter.incrementCounter(10004,'0xfbffF96E07EfC85Cc1D98C295C7f27A3A62181d1', {value: 1000000000000000})
    console.log(result)
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });