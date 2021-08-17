// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./XfolioToken.sol";

contract Xpresale {
    XfolioToken public tokenContract;
    uint256 public tokenPrice;
    uint256 public tokensSold;
    address private admin;

    event Purchase(address _buyer, uint256 _amount);

    constructor (XfolioToken _tokenContract, uint256 _tokenPrice) {
        admin = msg.sender;
        tokenContract = _tokenContract;
        tokenPrice = _tokenPrice;
    }


}
