/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { TimeLock, TimeLockInterface } from "../TimeLock";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "tokenContract",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "beneficiary",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "releaseTime",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "boxNumber",
        type: "uint256",
      },
    ],
    name: "LogLockBoxDeposit",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "receiver",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "boxNumber",
        type: "uint256",
      },
    ],
    name: "LogLockBoxWithdrawal",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "beneficiary",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "releaseTime",
        type: "uint256",
      },
    ],
    name: "deposit",
    outputs: [
      {
        internalType: "bool",
        name: "success",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "lockBoxStructs",
    outputs: [
      {
        internalType: "address",
        name: "beneficiary",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "balance",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "releaseTime",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "token",
    outputs: [
      {
        internalType: "contract IERC20",
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
        internalType: "uint256",
        name: "lockBoxNumber",
        type: "uint256",
      },
    ],
    name: "withdraw",
    outputs: [
      {
        internalType: "bool",
        name: "success",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50604051610adf380380610adf8339818101604052810190610032919061008d565b806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550506100ff565b600081519050610087816100e8565b92915050565b60006020828403121561009f57600080fd5b60006100ad84828501610078565b91505092915050565b60006100c1826100c8565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6100f1816100b6565b81146100fc57600080fd5b50565b6109d18061010e6000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c80630efe6a8b146100515780632e1a7d4d146100815780633d8cf56f146100b1578063fc0c546a146100e3575b600080fd5b61006b600480360381019061006691906105e7565b610101565b60405161007891906107d1565b60405180910390f35b61009b6004803603810190610096919061065f565b6102f4565b6040516100a891906107d1565b60405180910390f35b6100cb60048036038101906100c6919061065f565b6104f3565b6040516100da9392919061079a565b60405180910390f35b6100eb61054d565b6040516100f891906107ec565b60405180910390f35b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166323b872dd3330866040518463ffffffff1660e01b8152600401610161939291906106e7565b602060405180830381600087803b15801561017b57600080fd5b505af115801561018f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101b39190610636565b6101bc57600080fd5b6101c4610571565b84816000019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff16815250508381602001818152505082816040018181525050600181908060018154018082558091505060019003906000526020600020906003020160009091909190915060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550602082015181600101556040820151816002015550507f385d959df1f3aa94692f1433b742f8280a346147f2a575ea1b1b9a426e73fc4d33868686600180805490506102cf9190610838565b6040516102e095949392919061071e565b60405180910390a160019150509392505050565b60008060018381548110610331577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b906000526020600020906003020190503373ffffffffffffffffffffffffffffffffffffffff168160000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161461039d57600080fd5b42816002015411156103e4576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103db90610807565b60405180910390fd5b600081600101549050600082600101819055507f32163c309eac19998a89fe05848d751cb26c4c3f537555b2fe2f6e85e988998433828660405161042a9392919061079a565b60405180910390a160008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a9059cbb33836040518363ffffffff1660e01b815260040161048d929190610771565b602060405180830381600087803b1580156104a757600080fd5b505af11580156104bb573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104df9190610636565b6104e857600080fd5b600192505050919050565b6001818154811061050357600080fd5b90600052602060002090600302016000915090508060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060010154908060020154905083565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6040518060600160405280600073ffffffffffffffffffffffffffffffffffffffff16815260200160008152602001600081525090565b6000813590506105b781610956565b92915050565b6000815190506105cc8161096d565b92915050565b6000813590506105e181610984565b92915050565b6000806000606084860312156105fc57600080fd5b600061060a868287016105a8565b935050602061061b868287016105d2565b925050604061062c868287016105d2565b9150509250925092565b60006020828403121561064857600080fd5b6000610656848285016105bd565b91505092915050565b60006020828403121561067157600080fd5b600061067f848285016105d2565b91505092915050565b6106918161086c565b82525050565b6106a08161087e565b82525050565b6106af816108b4565b82525050565b60006106c2602a83610827565b91506106cd82610907565b604082019050919050565b6106e1816108aa565b82525050565b60006060820190506106fc6000830186610688565b6107096020830185610688565b61071660408301846106d8565b949350505050565b600060a0820190506107336000830188610688565b6107406020830187610688565b61074d60408301866106d8565b61075a60608301856106d8565b61076760808301846106d8565b9695505050505050565b60006040820190506107866000830185610688565b61079360208301846106d8565b9392505050565b60006060820190506107af6000830186610688565b6107bc60208301856106d8565b6107c960408301846106d8565b949350505050565b60006020820190506107e66000830184610697565b92915050565b600060208201905061080160008301846106a6565b92915050565b60006020820190508181036000830152610820816106b5565b9050919050565b600082825260208201905092915050565b6000610843826108aa565b915061084e836108aa565b925082821015610861576108606108d8565b5b828203905092915050565b60006108778261088a565b9050919050565b60008115159050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b60006108bf826108c6565b9050919050565b60006108d18261088a565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f5468697320626f78206973207374696c6c206c6f636b65642c20636f6d65206260008201527f61636b206c617465722100000000000000000000000000000000000000000000602082015250565b61095f8161086c565b811461096a57600080fd5b50565b6109768161087e565b811461098157600080fd5b50565b61098d816108aa565b811461099857600080fd5b5056fea2646970667358221220ab91183f898df74e1c2dfa046e4b8648e4d33bf13597f78a86cbceb68a66d72264736f6c63430008040033";

export class TimeLock__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    tokenContract: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<TimeLock> {
    return super.deploy(tokenContract, overrides || {}) as Promise<TimeLock>;
  }
  getDeployTransaction(
    tokenContract: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(tokenContract, overrides || {});
  }
  attach(address: string): TimeLock {
    return super.attach(address) as TimeLock;
  }
  connect(signer: Signer): TimeLock__factory {
    return super.connect(signer) as TimeLock__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TimeLockInterface {
    return new utils.Interface(_abi) as TimeLockInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TimeLock {
    return new Contract(address, _abi, signerOrProvider) as TimeLock;
  }
}
