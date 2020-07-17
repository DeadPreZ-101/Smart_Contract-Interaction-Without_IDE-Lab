require("dotenv").config("./env");
const Web3 = require("web3");
const abi = require("./__Simple_sol_Lab4Contract.json");
//create web3 instance
const web3 = new Web3(
  new Web3.providers.WebsocketProvider(process.env.WEBSOCKET_URI)
);

web3.eth.accounts.wallet.add(`0x${process.env.PRIVATE_KEY}`);
//get contract instance
const Lab4Contract = new web3.eth.Contract(abi, process.env.CONTRACT_ADDRESS);

Lab4Contract.events
  .makeLonger((error, event) => {
    console.log(error);
  })
  .on("data", function (event) {
    console.log(event);
  })
  .on("changed", function (event) {})
  .on("error", console.error);
