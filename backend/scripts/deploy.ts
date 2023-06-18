import { ethers } from "hardhat";
require("dotenv").config({ path: ".env" });

async function main() {
  const Airdrop = await ethers.getContractFactory("Airdrop");
  const airdrop = await Airdrop.deploy();

  console.log("Airdrop deployed to:", airdrop.address);

   const Dao = await ethers.getContractFactory("BTRDAO");
   const dao = await Dao.deploy(
     airdrop.address,
     "0x4e2F3dF2865F0A865070617422BAfeDcBecac4d2",
     "0xE184142E56B8143555b529C21B68D4EA69b2955D"
   );

   console.log("Dao deployed to:", dao.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
