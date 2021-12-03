import { ethers } from 'hardhat'
import { Signer, Contract } from 'ethers'

describe("CounterMock.sol", () => {
    let deployer:Signer
    let ropstenCounter:Contract
    // let fujiCounter:Contract

    beforeEach(async () => {
        [deployer] = await ethers.getSigners()
        ropstenCounter = new Contract('0x65e1E31AcFB0aa3032046aC9bcfF976E36049ECA',[
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
        // fujiCounter = new Contract('0x21c513573d63e6e0C1B7c7cF4f00549F5865DeB7',[
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
    })

    it("Should log contract address", () => {
        console.log(ropstenCounter.address)
    })

    it("Should pass an Increment Counter transaction", async () => {
        const result = await ropstenCounter.incrementCounter(10006,'0x21c513573d63e6e0C1B7c7cF4f00549F5865DeB7', {value: 1000})  
        console.log(result)     
    })
})