//const OpenDefiNFTFactory = artifacts.require("OpenDefiNFTFactory");
const OpenDefiNFT = artifacts.require("OpenDefiNFT");

module.exports = function(deployer) {
  //deployer.deploy(OpenDefiNFTFactory, "")
  deployer.deploy(OpenDefiNFT, "NFT Uri","NFT TOKEN ONE","NFTONE")
};
