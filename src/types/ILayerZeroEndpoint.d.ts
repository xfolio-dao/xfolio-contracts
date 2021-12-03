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
  PayableOverrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener } from "./common";

interface ILayerZeroEndpointInterface extends ethers.utils.Interface {
  functions: {
    "estimateNativeFees(uint16,address,bytes,bool,bytes)": FunctionFragment;
    "send(uint16,bytes,bytes,address,address,bytes)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "estimateNativeFees",
    values: [BigNumberish, string, BytesLike, boolean, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "send",
    values: [BigNumberish, BytesLike, BytesLike, string, string, BytesLike]
  ): string;

  decodeFunctionResult(
    functionFragment: "estimateNativeFees",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "send", data: BytesLike): Result;

  events: {};
}

export class ILayerZeroEndpoint extends BaseContract {
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

  interface: ILayerZeroEndpointInterface;

  functions: {
    estimateNativeFees(
      chainId: BigNumberish,
      userApplication: string,
      payload: BytesLike,
      payInZRO: boolean,
      txParameters: BytesLike,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { totalFee: BigNumber }>;

    send(
      _chainId: BigNumberish,
      _destination: BytesLike,
      _payload: BytesLike,
      refundAddress: string,
      _zroPaymentAddress: string,
      txParameters: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  estimateNativeFees(
    chainId: BigNumberish,
    userApplication: string,
    payload: BytesLike,
    payInZRO: boolean,
    txParameters: BytesLike,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  send(
    _chainId: BigNumberish,
    _destination: BytesLike,
    _payload: BytesLike,
    refundAddress: string,
    _zroPaymentAddress: string,
    txParameters: BytesLike,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    estimateNativeFees(
      chainId: BigNumberish,
      userApplication: string,
      payload: BytesLike,
      payInZRO: boolean,
      txParameters: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    send(
      _chainId: BigNumberish,
      _destination: BytesLike,
      _payload: BytesLike,
      refundAddress: string,
      _zroPaymentAddress: string,
      txParameters: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    estimateNativeFees(
      chainId: BigNumberish,
      userApplication: string,
      payload: BytesLike,
      payInZRO: boolean,
      txParameters: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    send(
      _chainId: BigNumberish,
      _destination: BytesLike,
      _payload: BytesLike,
      refundAddress: string,
      _zroPaymentAddress: string,
      txParameters: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    estimateNativeFees(
      chainId: BigNumberish,
      userApplication: string,
      payload: BytesLike,
      payInZRO: boolean,
      txParameters: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    send(
      _chainId: BigNumberish,
      _destination: BytesLike,
      _payload: BytesLike,
      refundAddress: string,
      _zroPaymentAddress: string,
      txParameters: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}