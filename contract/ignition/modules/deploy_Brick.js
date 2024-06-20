const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("BrickModule", (m) => {

  const lock = m.contract("Token", ["Brick", "BRICK", 50000000]);

  return { lock };
});
