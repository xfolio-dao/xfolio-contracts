/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  Signer,
  utils,
  BigNumberish,
  Contract,
  ContractFactory,
  Overrides,
} from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { XpresaleUSDC, XpresaleUSDCInterface } from "../XpresaleUSDC";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract XfolioToken",
        name: "_tokenContract",
        type: "address",
      },
      {
        internalType: "contract SampleUSDC",
        name: "_stablecoinContract",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_rate",
        type: "uint256",
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
        name: "_buyer",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "Purchase",
    type: "event",
  },
  {
    inputs: [],
    name: "buyTokensOnAllowance",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "rate",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "stablecoinContract",
    outputs: [
      {
        internalType: "contract SampleUSDC",
        name: "",
        type: "address",
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
    inputs: [],
    name: "usdcRaised",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506040516109a03803806109a08339818101604052810190610032919061014f565b6000811161003f57600080fd5b33600460006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550826000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555081600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555080600281905550505050610243565b60008151905061011f816101fe565b92915050565b60008151905061013481610215565b92915050565b6000815190506101498161022c565b92915050565b60008060006060848603121561016457600080fd5b600061017286828701610125565b935050602061018386828701610110565b92505060406101948682870161013a565b9150509250925092565b60006101a9826101d4565b9050919050565b60006101bb8261019e565b9050919050565b60006101cd8261019e565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b610207816101b0565b811461021257600080fd5b50565b61021e816101c2565b811461022957600080fd5b50565b610235816101f4565b811461024057600080fd5b50565b61074e806102526000396000f3fe608060405234801561001057600080fd5b50600436106100575760003560e01c806308ccf4031461005c5780632c4e722e1461007a57806355a373d6146100985780638e3ebe60146100b657806392d6b6f3146100c0575b600080fd5b6100646100de565b60405161007191906104f4565b60405180910390f35b610082610104565b60405161008f919061052a565b60405180910390f35b6100a061010a565b6040516100ad919061050f565b60405180910390f35b6100be61012e565b005b6100c861039e565b6040516100d5919061052a565b60405180910390f35b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60025481565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60003390506000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663dd62ed3e83306040518363ffffffff1660e01b815260040161019292919061046b565b60206040518083038186803b1580156101aa57600080fd5b505afa1580156101be573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101e291906103f7565b9050600081116101f157600080fd5b600060025482610201919061059b565b9050600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166323b872dd84600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16856040518463ffffffff1660e01b815260040161028493929190610494565b602060405180830381600087803b15801561029e57600080fd5b505af11580156102b2573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102d691906103ce565b5060008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a9059cbb84836040518363ffffffff1660e01b81526004016103329291906104cb565b602060405180830381600087803b15801561034c57600080fd5b505af1158015610360573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061038491906103ce565b50816003546103939190610545565b600381905550505050565b60035481565b6000815190506103b3816106ea565b92915050565b6000815190506103c881610701565b92915050565b6000602082840312156103e057600080fd5b60006103ee848285016103a4565b91505092915050565b60006020828403121561040957600080fd5b6000610417848285016103b9565b91505092915050565b6104298161063d565b82525050565b610438816105f5565b82525050565b6104478161064f565b82525050565b61045681610673565b82525050565b61046581610633565b82525050565b6000604082019050610480600083018561042f565b61048d602083018461042f565b9392505050565b60006060820190506104a9600083018661042f565b6104b66020830185610420565b6104c3604083018461045c565b949350505050565b60006040820190506104e0600083018561042f565b6104ed602083018461045c565b9392505050565b6000602082019050610509600083018461043e565b92915050565b6000602082019050610524600083018461044d565b92915050565b600060208201905061053f600083018461045c565b92915050565b600061055082610633565b915061055b83610633565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff038211156105905761058f6106bb565b5b828201905092915050565b60006105a682610633565b91506105b183610633565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff04831182151516156105ea576105e96106bb565b5b828202905092915050565b600061060082610613565b9050919050565b60008115159050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600061064882610697565b9050919050565b600061065a82610661565b9050919050565b600061066c82610613565b9050919050565b600061067e82610685565b9050919050565b600061069082610613565b9050919050565b60006106a2826106a9565b9050919050565b60006106b482610613565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6106f381610607565b81146106fe57600080fd5b50565b61070a81610633565b811461071557600080fd5b5056fea2646970667358221220321c5aa4e09e141766c45392a79cf397188ebe8923804380cdce4f7c6bfac6fd64736f6c63430008040033";

export class XpresaleUSDC__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _tokenContract: string,
    _stablecoinContract: string,
    _rate: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<XpresaleUSDC> {
    return super.deploy(
      _tokenContract,
      _stablecoinContract,
      _rate,
      overrides || {}
    ) as Promise<XpresaleUSDC>;
  }
  getDeployTransaction(
    _tokenContract: string,
    _stablecoinContract: string,
    _rate: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _tokenContract,
      _stablecoinContract,
      _rate,
      overrides || {}
    );
  }
  attach(address: string): XpresaleUSDC {
    return super.attach(address) as XpresaleUSDC;
  }
  connect(signer: Signer): XpresaleUSDC__factory {
    return super.connect(signer) as XpresaleUSDC__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): XpresaleUSDCInterface {
    return new utils.Interface(_abi) as XpresaleUSDCInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): XpresaleUSDC {
    return new Contract(address, _abi, signerOrProvider) as XpresaleUSDC;
  }
}
