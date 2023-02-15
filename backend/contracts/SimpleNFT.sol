// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

// Import the openzepplin contracts
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

// NFTee is  ERC721 signifies that the contract we are creating imports ERC721 and follows ERC721 contract from openzeppelin
contract NFT is ERC721 {
    uint currentTokenId;
    constructor() ERC721("NFTee", "ITM") {
        // mint an NFT to yourself
        _mint(msg.sender, currentTokenId);
        currentTokenId++;

    }

    function mint() external {
        _mint(msg.sender, currentTokenId);
        currentTokenId++;
    }
}