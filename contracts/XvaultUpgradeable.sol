// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./XfolioToken.sol";
import "@openzeppelin/contracts-upgradeable/access/AccessControlUpgradeable.sol";

contract XvaultUpgradeable is AccessControlUpgradeable {

    event XFLTransfer (
        address recipient,
        uint256 amount
    );

    XfolioToken public tokenContract;

    bytes32 public constant MODERATOR = keccak256("MODERATOR");

//    constructor (XfolioToken _tokenContract) {
//        tokenContract = _tokenContract;
//        _setupRole(DEFAULT_ADMIN_ROLE,msg.sender);
//    }
    function initialize(XfolioToken _tokenContract) initializer public {
        tokenContract = _tokenContract;
        _setupRole(DEFAULT_ADMIN_ROLE,msg.sender);
    }

    function transferXFL(address _recipient, uint256 _amount) public onlyRole(MODERATOR) {
        require(tokenContract.balanceOf(address(this)) >= _amount);
        tokenContract.transfer(_recipient,_amount);
        emit XFLTransfer(_recipient,_amount);
    }

}