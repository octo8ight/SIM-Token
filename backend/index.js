const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const ethers = require('ethers');
const app = express();
const assets = require('./Token.json');

const PORT = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors());

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})

const provider = new ethers.JsonRpcProvider('https://eth-sepolia.g.alchemy.com/v2/RXh1mkGpx8p359wbOrm2vhVtjih2mPWY');

const SimAddress = '0x43303B06474Ef2f01F7676939aE4D0a40B675B59';
const WoodAddress = '0x513503411420bD39C7c571801c46BacF5A79A98D';
const BrickAddress = '0x8113A4C19a772518a8d8a51e161258dDEeD5933b';
const contractAbi = assets.abi;

const simContract = new ethers.Contract(SimAddress, contractAbi, provider);
const woodContract = new ethers.Contract(WoodAddress, contractAbi, provider);
const brickContract = new ethers.Contract(BrickAddress, contractAbi, provider);

// contract.on()

simContract.on('ApproveEvent', (owner, spender, amount) => {
    console.log(`SIM Token Approved. owner: ${owner}, spender: ${spender}, amount: ${amount}`);
})

woodContract.on('ApproveEvent', (owner, spender, amount) => {
    console.log(`WOOD Token Approved. owner: ${owner}, spender: ${spender}, amount: ${amount}`);
})

brickContract.on('ApproveEvent', (owner, spender, amount) => {
    console.log(`BRICK Token Approved. owner: ${owner}, spender: ${spender}, amount: ${amount}`);
})

simContract.on('TokenTransferEvent', (from, to, amount) => {
    console.log(`SIM Token Approved. from: ${from}, to: ${to}, amount: ${amount}`);
})

woodContract.on('TokenTransferEvent', (from, to, amount) => {
    console.log(`WOOD Token Approved. from: ${from}, to: ${to}, amount: ${amount}`);
})

brickContract.on('TokenTransferEvent', (from, to, amount) => {
    console.log(`BRICK Token Approved. from: ${from}, to: ${to}, amount: ${amount}`);
})

simContract.on('mintEvent', (to, amount) => {
    console.log(`SIM Token Approved. to: ${to}, amount: ${amount}`);
})

woodContract.on('mintEvent', (to, amount) => {
    console.log(`WOOD Token Approved. to: ${to}, amount: ${amount}`);
})

brickContract.on('mintEvent', (to, amount) => {
    console.log(`BRICK Token Approved. to: ${to}, amount: ${amount}`);
})