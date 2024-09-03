const { Web3 } = require("web3");
var web3Instance = new Web3(
  new Web3.providers.HttpProvider("https://polygon-rpc.com")
);

const BLOCK_NUMBER = 26444465;
const QUICKSWAP_HASH_ID =
  "0xd78ad95fa46c994b6551d0da85fc275fe613ce37657fb8d5e3d130840159d822";

// Get the block data
web3Instance.eth
  .getBlock(BLOCK_NUMBER, true)
  .then((block) => {
    // For each transaction in the block
    block.transactions.forEach((transaction) => {
      // Get the transaction receipt
      web3Instance.eth
        .getTransactionReceipt(transaction.hash)
        .then((receipt) => {
          // For each log in the receipt
          receipt.logs.forEach((log) => {
            // If the log represents a swap event
            if (log.topics[0] === QUICKSWAP_HASH_ID) {
              // Extract the swap data
              console.log("Swap data:", log.data);
            }
          });
        });
    });
  })
  .catch((error) => {
    console.error("An error occurred:", error);
  });
