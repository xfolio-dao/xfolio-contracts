// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./XfolioToken.sol";
import "./SampleUSDC.sol";
import "hardhat/console.sol";

contract XpresaleUSDC {
    XfolioToken public tokenContract;
    SampleUSDC public stablecoinContract;
    uint256 public rate;
    uint256 public usdcRaised;
    address payable private admin;

    event Purchase(address _buyer, uint256 _amount);

    constructor (XfolioToken _tokenContract, SampleUSDC _stablecoinContract, uint256 _rate) {
        require(_rate > 0);
        admin = payable(msg.sender);
        tokenContract = _tokenContract;
        stablecoinContract = _stablecoinContract;
        rate = _rate;
    }

    function buyTokensOnAllowance() external {
        address from = msg.sender;
        uint256 allowedTokens = stablecoinContract.allowance(from,address(this));
        require(allowedTokens > 0);
        uint256 tokens = allowedTokens * rate;
        stablecoinContract.transferFrom(from,admin,allowedTokens);
        tokenContract.transfer(from,tokens);
        usdcRaised = usdcRaised + allowedTokens;
    }

}
