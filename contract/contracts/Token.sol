pragma solidity ^0.8.24;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "./IToken.sol";

contract Token is ERC20, Ownable, IToken {
    constructor (string memory name, string memory symbol, uint256 amount) ERC20 (name, symbol) Ownable(msg.sender) {
        mint(msg.sender, amount);
    }

    function mint(address to, uint256 amount) public onlyOwner virtual returns(bool) {
        _mint(to, amount* 10 ** 18);
        emit mintEvent(to, amount* 10 ** 18);
        return true;
    }

    function Approve(address _owner, address _spender, uint _amount) public virtual returns(bool) {
        _approve(_owner, _spender, _amount);
        emit ApproveEvent(_owner, _spender, _amount);
        return true;
    }

    function TokenTransferFrom(address from, address to, uint amount) public virtual returns(bool) {
        transferFrom(from, to, amount);
        emit TokenTransferEvent(from, to, amount);
        return true;
    }

    function TokenTransfer(address to, uint amount) public virtual returns(bool) {
        transfer(to, amount);
        emit TokenTransferEvent(msg.sender, to, amount);
        return true;
    }
}