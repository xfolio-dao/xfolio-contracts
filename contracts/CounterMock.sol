// SPDX-License-Identifier: GPL-3.0-only
pragma solidity ^0.7.6;
import "./interfaces/ILayerZeroReceiver.sol";
import "./interfaces/ILayerZeroEndpoint.sol";
contract CounterMock is ILayerZeroReceiver {
    event MessageReceived(uint _messageCounter);
    // keep track of how ma ny messages have been received from other chains
    uint messageCounter; 
    // required: the LayerZero endpoint which is passed in the constructor
    ILayerZeroEndpoint public endpoint;    
    // required: the LayerZero endpoint
    constructor(address _endpoint)  {
        endpoint = ILayerZeroEndpoint(_endpoint);
    }
    // overrides lzReceive function in ILayerZeroReceiver.
    // automatically invoked on the receiving chain after the source chain calls endpoint.send(...)
    function lzReceive(uint16 , bytes memory _fromAddress, uint64 _nonce, bytes memory _payload) override external {
        require(msg.sender == address(endpoint));
        messageCounter += 1;
        emit MessageReceived(messageCounter);
    }
    // custom function that wraps endpoint.send(...) which will 
    // cause lzReceive() to be called on the destination chain!
    function incrementCounter(uint16 _dstChainId, bytes calldata _dstCounterMockAddress) public payable {
        endpoint.send{value:msg.value}(_dstChainId, _dstCounterMockAddress, bytes(""), msg.sender, address(0x0), bytes(""));
    }
}