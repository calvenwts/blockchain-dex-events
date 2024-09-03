const { Web3 } = require("web3");
var web3Instance = new Web3(
  new Web3.providers.HttpProvider("https://polygon-rpc.com")
);

const totalSupplyABI = {
  constant: true,
  inputs: [],
  name: "totalSupply",
  outputs: [{ name: "", type: "uint256" }],
  payable: false,
  stateMutability: "view",
  type: "function",
};

const ManaTokenContractAddress = "0xA1c57f48F0Deb89f569dFbE6E2B7f46D33606fD4";

const contract = new web3Instance.eth.Contract(
  [totalSupplyABI],
  ManaTokenContractAddress
);

contract.methods
  .totalSupply()
  .call()
  .then((totalSupply) => console.log("MANA Token total supply", totalSupply));
