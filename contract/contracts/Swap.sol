pragma solidity ^0.8.24;

import "./IToken.sol";

contract Swap {
    IToken Sim;
    IToken Wood;
    IToken Brick;

    constructor(address sim, address wood, address brick) {
        Sim = IToken(sim);
        Wood = IToken(wood);
        Brick = IToken(brick);
    }

    function SimToWood(uint amount) public {
        require(amount > 0);
        Sim.Approve(msg.sender, address(this), amount);
        Sim.TokenTransferFrom(msg.sender, address(this), amount);
        Wood.TokenTransfer(msg.sender, amount * 2);
    }

    function SimToBrick(uint amount) public {
        require(amount > 0);
        Sim.Approve(msg.sender, address(this), amount);
        Sim.TokenTransferFrom(msg.sender, address(this), amount);
        Brick.TokenTransfer(msg.sender, amount * 3);
    }

    function BrickToSim(uint amount) public {
        require(amount > 0);
        Brick.Approve(msg.sender, address(this), amount);
        Brick.TokenTransferFrom(msg.sender, address(this), amount);
        Sim.TokenTransfer(msg.sender, amount / 3);
    }

    function WoodToSim(uint amount) public {
        require(amount > 0);
        Wood.Approve(msg.sender, address(this), amount);
        Wood.TokenTransferFrom(msg.sender, address(this), amount);
        Sim.TokenTransfer(msg.sender, amount / 3);
    }
}