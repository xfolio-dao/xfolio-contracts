/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener } from "./common";

interface XpresaleUSDCInterface extends ethers.utils.Interface {
  functions: {
    "buyTokensOnAllowance()": FunctionFragment;
    "rate()": FunctionFragment;
    "stablecoinContract()": FunctionFragment;
    "tokenContract()": FunctionFragment;
    "usdcRaised()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "buyTokensOnAllowance",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "rate", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "stablecoinContract",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "tokenContract",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "usdcRaised",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "buyTokensOnAllowance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "rate", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "stablecoinContract",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "tokenContract",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "usdcRaised", data: BytesLike): Result;

  events: {
    "Purchase(address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Purchase"): EventFragment;
}

export type PurchaseEvent = TypedEvent<
  [string, BigNumber] & { _buyer: string; _amount: BigNumber }
>;

export class XpresaleUSDC extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: XpresaleUSDCInterface;

  functions: {
    buyTokensOnAllowance(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    rate(overrides?: CallOverrides): Promise<[BigNumber]>;

    stablecoinContract(overrides?: CallOverrides): Promise<[string]>;

    tokenContract(overrides?: CallOverrides): Promise<[string]>;

    usdcRaised(overrides?: CallOverrides): Promise<[BigNumber]>;
  };

  buyTokensOnAllowance(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  rate(overrides?: CallOverrides): Promise<BigNumber>;

  stablecoinContract(overrides?: CallOverrides): Promise<string>;

  tokenContract(overrides?: CallOverrides): Promise<string>;

  usdcRaised(overrides?: CallOverrides): Promise<BigNumber>;

  callStatic: {
    buyTokensOnAllowance(overrides?: CallOverrides): Promise<void>;

    rate(overrides?: CallOverrides): Promise<BigNumber>;

    stablecoinContract(overrides?: CallOverrides): Promise<string>;

    tokenContract(overrides?: CallOverrides): Promise<string>;

    usdcRaised(overrides?: CallOverrides): Promise<BigNumber>;
  };

  filters: {
    "Purchase(address,uint256)"(
      _buyer?: null,
      _amount?: null
    ): TypedEventFilter<
      [string, BigNumber],
      { _buyer: string; _amount: BigNumber }
    >;

    Purchase(
      _buyer?: null,
      _amount?: null
    ): TypedEventFilter<
      [string, BigNumber],
      { _buyer: string; _amount: BigNumber }
    >;
  };

  estimateGas: {
    buyTokensOnAllowance(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    rate(overrides?: CallOverrides): Promise<BigNumber>;

    stablecoinContract(overrides?: CallOverrides): Promise<BigNumber>;

    tokenContract(overrides?: CallOverrides): Promise<BigNumber>;

    usdcRaised(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    buyTokensOnAllowance(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    rate(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    stablecoinContract(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    tokenContract(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    usdcRaised(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
