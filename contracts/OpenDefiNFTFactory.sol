// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./OpenDefiNFT.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract OpenDefiNFTFactory is Ownable {
  string public baseMetadataURI;

  event Create1155Collection(
    address nftAddress
    );

  constructor(string memory _baseeMetadataURI) {
    baseMetadataURI = _baseeMetadataURI;
  }

  function updateBaseMetaDataURI(string memory _newURI) external onlyOwner() returns(bool) {
    baseMetadataURI = _newURI;
    return true;
  }

  function createCollection(string memory _collectionName, string memory _collectionSymbol) external onlyOwner() {
      address nftAddress = address(new OpenDefiNFT(baseMetadataURI, _collectionName, _collectionSymbol));
      emit Create1155Collection( nftAddress);
  }
}
