pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract XfolioToken is ERC20 {

    constructor(uint256 initialSupply) ERC20("Xfolio","XFL") {
        _mint(msg.sender, initialSupply);
    }
}