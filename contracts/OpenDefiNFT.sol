// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/security/Pausable.sol";

contract OpenDefiNFT is ERC1155, Ownable, Pausable {

    string private _name;
    string private _symbol;

    event Transfer(
        address from,
        address to, 
        uint256 id, 
        uint256 amount
    );

    constructor(string memory _uri, string memory name_, string memory symbol_) ERC1155(_uri) {
        _name = name_;
        _symbol = symbol_;
    }

    function pause() external onlyOwner returns(bool){
       _pause();
       return true;
     }

    function unpause() external onlyOwner returns(bool){
        _unpause();
        return true;
     }

    function mint(uint256 _id, uint256 supply) external onlyOwner() {
        _mint(msg.sender, _id, supply, "");
    }

    function mintAll(uint256[] memory _id, uint256[] memory supply) external onlyOwner() {
        _mintBatch(msg.sender, _id, supply, "");
    }

    function burn(uint256 id, uint256 number) external {
        _burn(msg.sender, id, number);
    }

    function burnAll(uint256[] memory tokenId, uint256[] memory supply) external {
        _burnBatch(msg.sender, tokenId, supply);
    }

    function updateBaseURI(string memory baseURI) external onlyOwner() {
        _setURI(baseURI);
    }

    function transfer(address _to, uint256 _id, uint256 amount) external whenNotPaused {
        _transfer(msg.sender, _to, _id, amount, "");
    }

    function transferFrom(address[] memory _to, uint256[] memory _id, uint256[] memory amount) external whenNotPaused {
        for (uint256 i = 0; i < _to.length; ++i) {
            _transfer(msg.sender, _to[i], _id[i], amount[i], "");
        }
    }

    function _transfer(
        address from,
        address to,
        uint256 id,
        uint256 amount,
        bytes memory data
    ) internal virtual {
        _safeTransferFrom(from, to, id, amount, data);
        emit Transfer(from, to, id, amount);
    }
}   