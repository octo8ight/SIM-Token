const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("WoodModule", (m) => {

  const lock = m.contract("Token", ["Wood", "WOOD", 50000000]);

  return { lock };
});
