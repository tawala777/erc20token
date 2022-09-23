// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

async function main_old() {

  const OceanToken = await hre.ethers.getContractFactory("OceanToken");
  const oceanToken = await OceanToken.deploy(100000000,50);

  await oceanToken.deployed();

  console.log(
    `oceanToken deployed to ${oceanToken.address}`
  );
}

async function main() {

  const AamToken = await hre.ethers.getContractFactory("AamToken");
  const aamToken = await AamToken.deploy(100000000,50);

  await aamToken.deployed();

  console.log(
    `aamToken deployed to ${aamToken.address}`
  );
}
// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
