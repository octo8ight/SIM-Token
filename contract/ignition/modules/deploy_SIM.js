const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("SimModule", (m) => {

  const lock = m.contract("Token", ["SIM", "SIM", 50000000]);

  return { lock };
});
