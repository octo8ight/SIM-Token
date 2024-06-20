pragma solidity ^0.8.24;

interface IToken {
    event mintEvent(address to, uint256 amount);

    event ApproveEvent(address _owner, address _spender, uint _amount);

    event TokenTransferEvent(address from, address to, uint amount);

    function mint(address to, uint256 amount) external returns(bool);

    function Approve(address _owner, address _spender, uint _amount) external returns(bool);

    function TokenTransferFrom(address from, address to, uint amount) external returns (bool);

    function TokenTransfer(address to, uint amount) external returns (bool);
}