// SPDX-License-Identifier: MIT
pragma solidity ^0.8.2;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract SampleUSDC is ERC20 {
    constructor(uint256 initialSupply) ERC20("Sample USDC", "USDC") {
        _mint(msg.sender, initialSupply);
    }
}
