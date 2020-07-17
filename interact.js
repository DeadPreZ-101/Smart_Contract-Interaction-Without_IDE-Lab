require("dotenv").config("./env");
const Web3 = require("web3");
const abi = require("./__Simple_sol_Lab4Contract.json");

//create web3 instance
const web3 = new Web3(new Web3.providers.HttpProvider(process.env.URI));

//adding account to wallet
web3.eth.accounts.wallet.add(`0x${process.env.PRIVATE_KEY}`);
//get contract instance
const Lab4Contract = new web3.eth.Contract(abi, process.env.CONTRACT_ADDRESS);

//read the number
Lab4Contract.methods
  .readString()
  .call()
  .then((result) => {
    console.log(`Initial value of string: ${result}`);
  });

// console.log(web3.eth.accounts.wallet[0].address);
// call the add method of SC
Lab4Contract.methods
  .write("testString")
  .estimateGas()
  .then((gas) => {
    console.log(gas);
    Lab4Contract.methods.write("testString").send({
      from: web3.eth.accounts.wallet[0].address,
      gas,
    });
  });
