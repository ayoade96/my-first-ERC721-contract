import { ethers } from "hardhat";

async function main() {
    const dambaznft = await ethers.deployContract("DambazNFT");
    await dambaznft.waitForDeployment() 
    //console.log(factory);
    console.log(`factory deployed to ${dambaznft.target}`)

    const _to = "0xA01a35008951beCaC133303Bff7C49968Da5b540"

     const _tokenId = 0

     const _uri = "ipfs://bafkreiff2egnhc3cqhle4glikxc4t4unwlyiqupnbuovzncvvwyjcq43x4"

    await dambaznft.mint(_to, _tokenId, _uri);

}
  




main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });