// SPDX-License-Identifier: GPL-3.0-only
pragma solidity ^0.7.6;

import "../interfaces/ILayerZeroReceiverLegacy.sol";
import "../interfaces/ILayerZeroEndpointLegacy.sol";
import "@openzeppelin/contracts-3/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts-3/token/ERC20/ERC20.sol";

// example token contract which can be deployed on multiple chains.
//
// sendTokens() function works like this:
//  1. burn local tokens (logic in sendTokens)
//  2. send a LayerZero message to the destination MultiChainToken address on another chain
//  3. mint tokens on destination (logic in lzReceive)
contract MultiChainToken is ERC20, ILayerZeroReceiverLegacy {

    ILayerZeroEndpointLegacy public endpoint;

    // constructor mints tokens to the deployer
    constructor(string memory name_, string memory symbol_, address _layerZeroEndpoint) ERC20(name_, symbol_){
        endpoint = ILayerZeroEndpointLegacy(_layerZeroEndpoint);
        _mint(msg.sender, 100 * 10**18); // mint the deployer 100 tokens.
    }

    // send tokens to another chain.
    // this function sends the tokens from your address to the same address on the destination.
    function sendTokens(
        uint16 _chainId,                            // send tokens to this chainId
        bytes calldata _dstMultiChainTokenAddr,     // destination address of MultiChainToken
        uint _qty                                   // how many tokens to send
    )
        public
        payable
    {
        // burn the tokens locally.
        // tokens will be minted on the destination.
        require(
            allowance(msg.sender, address(this)) >= _qty,
            "You need to approve the contract to send your tokens!"
        );

        // transferFrom the tokens to this contract and burn them
        _burn(msg.sender, _qty); // *poof*

        // abi.encode() the payload with the values to send
        bytes memory payload = abi.encode(msg.sender, _qty);

        // send LayerZero message
        endpoint.send{value:msg.value}(
            _chainId,                       // destination chainId
            _dstMultiChainTokenAddr,        // destination address of MultiChainToken
            payload,                        // abi.encode()'ed bytes
            msg.sender,                     // on destination send to the same address as the caller of this function
            address(0x0),                   // 'zroPaymentAddress' unused for this mock/example
            bytes("")                       // 'txParameters' unused for this mock/example
        );
    }

    // receive the bytes payload from the source chain via LayerZero
    // _fromAddress is the source MultiChainToken address
    function lzReceive(uint16 _srcChainId, bytes memory _fromAddress, uint64 _nonce, bytes memory _payload) override external{
        require(msg.sender == address(endpoint)); // boilerplate! lzReceive must be called by the endpoint for security

        // decode
        (address toAddr, uint qty) = abi.decode(_payload, (address, uint));

        // mint the tokens back into existence, to the toAddr from the message payload
        _mint(toAddr, qty);
    }

}