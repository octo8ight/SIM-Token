const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("SwapModule", (m) => {

  const lock = m.contract("Swap", ["0x43303B06474Ef2f01F7676939aE4D0a40B675B59", "0x513503411420bD39C7c571801c46BacF5A79A98D", "0x8113A4C19a772518a8d8a51e161258dDEeD5933b"]);

  return { lock };
});
