import { ethers, upgrades } from "hardhat";

async function main() {
  const Token = await ethers.getContractFactory("EventsxToken");
  const token = await upgrades.deployProxy(Token, []);

  console.info("Deploying Token...");
  await token.waitForDeployment();
  console.info("Token deployed to:", await token.getAddress());
}

main();
