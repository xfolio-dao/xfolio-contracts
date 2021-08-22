// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./XfolioToken.sol";
import "hardhat/console.sol";

contract Xpresale {
    XfolioToken public tokenContract;
    uint256 public rate;
    uint256 public weiRaised;
    address payable private admin;

    event Purchase(address _buyer, uint256 _amount);

    constructor (XfolioToken _tokenContract, uint256 _rate) {
        require(_rate > 0);

        admin = payable(msg.sender);
        tokenContract = _tokenContract;
        rate = _rate;
    }

    receive () external payable {
        buyTokens(msg.sender);
    }

    function buyTokens(address _beneficiary) public payable {
        require(_beneficiary != address(0));
        require(msg.value != 0);
        uint256 etherValue = msg.value/(1 ether);
//        uint256 tokens = msg.value * rate;
        uint256 tokens = etherValue * rate;
        weiRaised = weiRaised + msg.value;

        tokenContract.transfer(_beneficiary, tokens);
        admin.transfer(msg.value);
    }

}
