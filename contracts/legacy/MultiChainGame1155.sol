// SPDX-License-Identifier: GPL-3.0-only
pragma solidity ^0.7.6;

import "../interfaces/ILayerZeroReceiverLegacy.sol";
import "../interfaces/ILayerZeroEndpointLegacy.sol";
import "@openzeppelin/contracts-3/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts-3/access/AccessControl.sol";
import "@openzeppelin/contracts-3/token/ERC1155/ERC1155Burnable.sol";

contract MultiChainGame1155 is ERC1155, AccessControl, ERC1155Burnable, ILayerZeroReceiverLegacy {
    modifier onlyRole(bytes32 role) {
        hasRole(role, _msgSender());
        _;
    }

    bytes32 public constant URI_SETTER_ROLE = keccak256("URI_SETTER_ROLE");
    bytes32 public constant MINTER_ROLE = keccak256("MINTER_ROLE");
    uint256 public constant SKELETON = 0;
    uint256 public constant BANDIT = 1;
    ILayerZeroEndpointLegacy public endpoint;

    constructor(address _layerZeroEndpoint) public ERC1155("https://gateway.pinata.cloud/ipfs/QmUupFMbki6Fpwym3TECDu2Y9LR9YcHFRPQ8yMiPMbWYw5/{id}.json") {
        endpoint = ILayerZeroEndpointLegacy(_layerZeroEndpoint);
        _setupRole(DEFAULT_ADMIN_ROLE, msg.sender);
        _setupRole(URI_SETTER_ROLE, msg.sender);
        _setupRole(MINTER_ROLE, msg.sender);
    }

    function safeBatchSend(
        address from,
        uint16 _chainId,                            // send tokens to this chainId
        bytes calldata _dstMultiChainGameAddr,        // destination address of MultiChainGame
        uint256[] memory ids,
        uint256[] memory amounts

    )
        public
        payable
    {
        require(ids.length == amounts.length, "ERC1155: ids and amounts length mismatch");
        require(
            from == _msgSender() || isApprovedForAll(from, _msgSender()),
            "ERC1155: transfer caller is not owner nor approved"
        );
        //Burn the tokens on the home chain
        burnBatch(from,ids,amounts);
        // abi.encode() the payload with the values to send
        bytes memory payload = abi.encode(msg.sender,ids,amounts);
        //Send the message to the dest chain, that contains tokens to mint in the payload
        endpoint.send{value:msg.value}(
            _chainId,                       // destination chainId
            _dstMultiChainGameAddr,          // destination address of MultiChainNFT
            payload,                        // abi.encode()'ed bytes
            msg.sender,                     // on destination send to the same address as the caller of this function
            address(0x0),                   // 'zroPaymentAddress' unused for this mock/example
            bytes("")                       // 'txParameters' unused for this mock/example
        );
    }

    function lzReceive(uint16 _srcChainId, bytes memory _fromAddress, uint64 _nonce, bytes memory _payload) override external{
        require(msg.sender == address(endpoint)); // boilerplate! lzReceive must be called by the endpoint for security

        // decode
        (address toAddr, uint256[] memory ids, uint256[] memory amounts) = abi.decode(_payload, (address, uint256[], uint256[]));

        // mint the NFT back into existence, to the toAddr from the message payload with the same uri
        mintBatch(toAddr, ids, amounts, bytes(""));
    }

    function mint(address account, uint256 id, uint256 amount, bytes memory data)
        public
        onlyRole(MINTER_ROLE)
    { 
        _mint(account, id, amount, data);
    }

    function mintBatch(address to, uint256[] memory ids, uint256[] memory amounts, bytes memory data)
        public
        onlyRole(MINTER_ROLE)
    {
        _mintBatch(to, ids, amounts, data);
    }

    function setURI(string memory newuri) public onlyRole(URI_SETTER_ROLE) {
        _setURI(newuri);
    }

}