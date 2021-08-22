// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./XfolioToken.sol";
import "@openzeppelin/contracts/access/AccessControl.sol";
import "hardhat/console.sol";

contract Xvault is AccessControl {
//    struct TimePeriod {
//        uint256 timestampBeginning;
//        uint256 timestampEnd;
//    }

    event XFLTransfer (
        address recipient,
        uint256 amount
    );

    XfolioToken public tokenContract;
//    uint256 public tokenPrice;
//    uint256 public tokensSold;

//    uint256 private constant _TIMELOCK = 5 years;

    bytes32 public constant MODERATOR = keccak256("MODERATOR");

    constructor (XfolioToken _tokenContract) {
        tokenContract = _tokenContract;
        _setupRole(DEFAULT_ADMIN_ROLE,msg.sender);
    }

    function transferXFL(address _recipient, uint256 _amount) public onlyRole(MODERATOR) {
        require(tokenContract.balanceOf(address(this)) >= _amount);
        tokenContract.transfer(_recipient,_amount);
        emit XFLTransfer(_recipient,_amount);
    }

}
