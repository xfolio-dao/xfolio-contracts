// SPDX-License-Identifier: GPL-3.0-only
pragma solidity ^0.7.6;

import "./interfaces/ILayerZeroReceiver.sol";
import "./interfaces/ILayerZeroEndpoint.sol";
import "@openzeppelin/contracts-3/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts-3/access/AccessControl.sol";
import "@openzeppelin/contracts-3/token/ERC1155/ERC1155Burnable.sol";

contract MultiChainGame1155 is ERC1155, AccessControl, ERC1155Burnable {
    modifier onlyRole(bytes32 role) {
        hasRole(role, _msgSender());
        _;
    }

    bytes32 public constant URI_SETTER_ROLE = keccak256("URI_SETTER_ROLE");
    bytes32 public constant MINTER_ROLE = keccak256("MINTER_ROLE");
    uint256 public constant SKELETON = 0;
    uint256 public constant BANDIT = 1;

    constructor() public ERC1155("https://gateway.pinata.cloud/ipfs/QmSPn47PQZdKaaFYB9wAHL7DmVDijozS5Ncg6rAnSw61RJ/{id}.json") {
        _mint(msg.sender, SKELETON, 10**18, "");
        _mint(msg.sender, BANDIT, 10**9, "");
        _setupRole(DEFAULT_ADMIN_ROLE, msg.sender);
        _setupRole(URI_SETTER_ROLE, msg.sender);
        _setupRole(MINTER_ROLE, msg.sender);
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