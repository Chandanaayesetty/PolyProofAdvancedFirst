const hre = require("hardhat");
const tokenContractJSON = require("../artifacts/contracts/chandanaSri.sol/chandanaSri.json");

const tokenAddress = "0xA67B0eDfe061d9BE1207FF78FD259351d9fec1f5"; // place your erc20 contract address here
const tokenABI = tokenContractJSON.abi;
const walletAddress = "0x4AfB1D1721388BF39684E9a0F7f677A12E3c7C11"; // place your public address for your wallet here

async function main() {

    const token = await hre.ethers.getContractAt(tokenABI, tokenAddress);

    console.log("You now have: " + await token.balanceOf(walletAddress) + " tokens");
  }
  
  // We recommend this pattern to be able to use async/await everywhere
  // and properly handle errors.
  main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
