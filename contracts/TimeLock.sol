// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract TimeLock {

    struct LockBoxStruct {
//        address beneficiary;
        uint balance;
        uint releaseTime;
    }

    IERC20 public token;
    mapping(address => LockBoxStruct[]) public lockBoxDictionary;

    event LogLockBoxDeposit(address sender, address beneficiary, uint amount, uint releaseTime, uint boxNumber);
    event LogLockBoxWithdrawal(address receiver, uint amount, uint boxNumber);

    constructor(address tokenContract) {
        token = IERC20(tokenContract);
    }

    function deposit(address beneficiary, uint amount, uint releaseTime) public returns(bool success) {
        require(token.transferFrom(msg.sender, address(this), amount));
        LockBoxStruct memory l;
//        l.beneficiary = beneficiary;
        l.balance = amount;
        l.releaseTime = releaseTime;
        lockBoxDictionary[beneficiary].push(l);
        emit LogLockBoxDeposit(msg.sender, beneficiary, amount, releaseTime, lockBoxDictionary[beneficiary].length - 1);
        return true;
    }

    function withdraw(uint lockBoxNumber) public returns(bool success) {
        LockBoxStruct storage l = lockBoxDictionary[msg.sender][lockBoxNumber];
//        require(l, "You do not have any boxes to your name.");
        require(l.releaseTime <= block.timestamp, "This box is still locked, come back later!");
        uint amount = l.balance;
        l.balance = 0;
        emit LogLockBoxWithdrawal(msg.sender, amount, lockBoxNumber);
        require(token.transfer(msg.sender, amount));
        return true;
    }

}
