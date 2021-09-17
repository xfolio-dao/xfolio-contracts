/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  XvaultUpgradeable,
  XvaultUpgradeableInterface,
} from "../XvaultUpgradeable";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "previousAdminRole",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "newAdminRole",
        type: "bytes32",
      },
    ],
    name: "RoleAdminChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleGranted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleRevoked",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "XFLTransfer",
    type: "event",
  },
  {
    inputs: [],
    name: "DEFAULT_ADMIN_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "MODERATOR",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
    ],
    name: "getRoleAdmin",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "grantRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "hasRole",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract XfolioToken",
        name: "_tokenContract",
        type: "address",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "renounceRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "revokeRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "tokenContract",
    outputs: [
      {
        internalType: "contract XfolioToken",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "transferXFL",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506115b6806100206000396000f3fe608060405234801561001057600080fd5b50600436106100a95760003560e01c80633b28c126116100715780633b28c1261461016457806355a373d61461018057806391d148541461019e578063a217fddf146101ce578063c4d66de8146101ec578063d547741f14610208576100a9565b806301ffc9a7146100ae578063248a9ca3146100de5780632f2ff15d1461010e57806334b4e6251461012a57806336568abe14610148575b600080fd5b6100c860048036038101906100c39190610e85565b610224565b6040516100d591906110e2565b60405180910390f35b6100f860048036038101906100f39190610e20565b61029e565b60405161010591906110fd565b60405180910390f35b61012860048036038101906101239190610e49565b6102be565b005b6101326102e7565b60405161013f91906110fd565b60405180910390f35b610162600480360381019061015d9190610e49565b61030b565b005b61017e60048036038101906101799190610dbb565b61038e565b005b610188610565565b6040516101959190611118565b60405180910390f35b6101b860048036038101906101b39190610e49565b61058b565b6040516101c591906110e2565b60405180910390f35b6101d66105f6565b6040516101e391906110fd565b60405180910390f35b61020660048036038101906102019190610eae565b6105fd565b005b610222600480360381019061021d9190610e49565b610725565b005b60007f7965db0b000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916148061029757506102968261074e565b5b9050919050565b600060656000838152602001908152602001600020600101549050919050565b6102c78261029e565b6102d8816102d36107b8565b6107c0565b6102e2838361085d565b505050565b7f58c8e11deab7910e89bf18a1168c6e6ef28748f00fd3094549459f01cec5e0aa81565b6103136107b8565b73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614610380576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161037790611195565b60405180910390fd5b61038a828261093e565b5050565b7f58c8e11deab7910e89bf18a1168c6e6ef28748f00fd3094549459f01cec5e0aa6103c0816103bb6107b8565b6107c0565b81609760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b815260040161041c919061109e565b60206040518083038186803b15801561043457600080fd5b505afa158015610448573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061046c9190610ed7565b101561047757600080fd5b609760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a9059cbb84846040518363ffffffff1660e01b81526004016104d49291906110b9565b602060405180830381600087803b1580156104ee57600080fd5b505af1158015610502573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105269190610df7565b507f3cbb71cc61e1e25c0e911fd29c554ce7b553b2dc390c29fb590a38894131297c83836040516105589291906110b9565b60405180910390a1505050565b609760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60006065600084815260200190815260200160002060000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b6000801b81565b600060019054906101000a900460ff1680610623575060008054906101000a900460ff16155b610662576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161065990611175565b60405180910390fd5b60008060019054906101000a900460ff1615905080156106b2576001600060016101000a81548160ff02191690831515021790555060016000806101000a81548160ff0219169083151502179055505b81609760006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506107006000801b33610a20565b80156107215760008060016101000a81548160ff0219169083151502179055505b5050565b61072e8261029e565b61073f8161073a6107b8565b6107c0565b610749838361093e565b505050565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b600033905090565b6107ca828261058b565b610859576107ef8173ffffffffffffffffffffffffffffffffffffffff166014610a2e565b6107fd8360001c6020610a2e565b60405160200161080e929190611064565b6040516020818303038152906040526040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108509190611133565b60405180910390fd5b5050565b610867828261058b565b61093a5760016065600084815260200190815260200160002060000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055506108df6107b8565b73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45b5050565b610948828261058b565b15610a1c5760006065600084815260200190815260200160002060000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055506109c16107b8565b73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16837ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b60405160405180910390a45b5050565b610a2a828261085d565b5050565b606060006002836002610a419190611232565b610a4b91906111dc565b67ffffffffffffffff811115610a8a577f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6040519080825280601f01601f191660200182016040528015610abc5781602001600182028036833780820191505090505b5090507f300000000000000000000000000000000000000000000000000000000000000081600081518110610b1a577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a9053507f780000000000000000000000000000000000000000000000000000000000000081600181518110610ba4577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a90535060006001846002610be49190611232565b610bee91906111dc565b90505b6001811115610cda577f3031323334353637383961626364656600000000000000000000000000000000600f861660108110610c56577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b1a60f81b828281518110610c93577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350600485901c945080610cd390611373565b9050610bf1565b5060008414610d1e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d1590611155565b60405180910390fd5b8091505092915050565b600081359050610d37816114f6565b92915050565b600081519050610d4c8161150d565b92915050565b600081359050610d6181611524565b92915050565b600081359050610d768161153b565b92915050565b600081359050610d8b81611552565b92915050565b600081359050610da081611569565b92915050565b600081519050610db581611569565b92915050565b60008060408385031215610dce57600080fd5b6000610ddc85828601610d28565b9250506020610ded85828601610d91565b9150509250929050565b600060208284031215610e0957600080fd5b6000610e1784828501610d3d565b91505092915050565b600060208284031215610e3257600080fd5b6000610e4084828501610d52565b91505092915050565b60008060408385031215610e5c57600080fd5b6000610e6a85828601610d52565b9250506020610e7b85828601610d28565b9150509250929050565b600060208284031215610e9757600080fd5b6000610ea584828501610d67565b91505092915050565b600060208284031215610ec057600080fd5b6000610ece84828501610d7c565b91505092915050565b600060208284031215610ee957600080fd5b6000610ef784828501610da6565b91505092915050565b610f098161128c565b82525050565b610f188161129e565b82525050565b610f27816112aa565b82525050565b610f368161131c565b82525050565b6000610f47826111b5565b610f5181856111c0565b9350610f61818560208601611340565b610f6a816113cc565b840191505092915050565b6000610f80826111b5565b610f8a81856111d1565b9350610f9a818560208601611340565b80840191505092915050565b6000610fb36020836111c0565b9150610fbe826113dd565b602082019050919050565b6000610fd6602e836111c0565b9150610fe182611406565b604082019050919050565b6000610ff96017836111d1565b915061100482611455565b601782019050919050565b600061101c6011836111d1565b91506110278261147e565b601182019050919050565b600061103f602f836111c0565b915061104a826114a7565b604082019050919050565b61105e81611312565b82525050565b600061106f82610fec565b915061107b8285610f75565b91506110868261100f565b91506110928284610f75565b91508190509392505050565b60006020820190506110b36000830184610f00565b92915050565b60006040820190506110ce6000830185610f00565b6110db6020830184611055565b9392505050565b60006020820190506110f76000830184610f0f565b92915050565b60006020820190506111126000830184610f1e565b92915050565b600060208201905061112d6000830184610f2d565b92915050565b6000602082019050818103600083015261114d8184610f3c565b905092915050565b6000602082019050818103600083015261116e81610fa6565b9050919050565b6000602082019050818103600083015261118e81610fc9565b9050919050565b600060208201905081810360008301526111ae81611032565b9050919050565b600081519050919050565b600082825260208201905092915050565b600081905092915050565b60006111e782611312565b91506111f283611312565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff038211156112275761122661139d565b5b828201905092915050565b600061123d82611312565b915061124883611312565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff04831182151516156112815761128061139d565b5b828202905092915050565b6000611297826112f2565b9050919050565b60008115159050919050565b6000819050919050565b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b60006112eb8261128c565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b60006113278261132e565b9050919050565b6000611339826112f2565b9050919050565b60005b8381101561135e578082015181840152602081019050611343565b8381111561136d576000848401525b50505050565b600061137e82611312565b915060008214156113925761139161139d565b5b600182039050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000601f19601f8301169050919050565b7f537472696e67733a20686578206c656e67746820696e73756666696369656e74600082015250565b7f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160008201527f647920696e697469616c697a6564000000000000000000000000000000000000602082015250565b7f416363657373436f6e74726f6c3a206163636f756e7420000000000000000000600082015250565b7f206973206d697373696e6720726f6c6520000000000000000000000000000000600082015250565b7f416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636560008201527f20726f6c657320666f722073656c660000000000000000000000000000000000602082015250565b6114ff8161128c565b811461150a57600080fd5b50565b6115168161129e565b811461152157600080fd5b50565b61152d816112aa565b811461153857600080fd5b50565b611544816112b4565b811461154f57600080fd5b50565b61155b816112e0565b811461156657600080fd5b50565b61157281611312565b811461157d57600080fd5b5056fea2646970667358221220e8365228ef5e70d9188731865d43353bc92c2ceb5fc8f899e543094f7fd8e2f164736f6c63430008040033";

export class XvaultUpgradeable__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<XvaultUpgradeable> {
    return super.deploy(overrides || {}) as Promise<XvaultUpgradeable>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): XvaultUpgradeable {
    return super.attach(address) as XvaultUpgradeable;
  }
  connect(signer: Signer): XvaultUpgradeable__factory {
    return super.connect(signer) as XvaultUpgradeable__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): XvaultUpgradeableInterface {
    return new utils.Interface(_abi) as XvaultUpgradeableInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): XvaultUpgradeable {
    return new Contract(address, _abi, signerOrProvider) as XvaultUpgradeable;
  }
}
