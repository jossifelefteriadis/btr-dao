// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/access/Ownable.sol";


contract Airdrop is ERC1155, Ownable {
    error TIER_ONE_ALREADY_SENT();
    error TIER_TWO_ALREADY_SENT();
    bool tierOneSent;
    bool tierTwoSent;
    address[] tierOneList = [0x4e2F3dF2865F0A865070617422BAfeDcBecac4d2];
    address[] tierTwoList = [0xA38C00185dE730CEFd0480EFFc967C8565922457];

    constructor() ERC1155("") {}
     

    function sendTierOneDAONFT() external onlyOwner {
       if(tierOneSent) revert TIER_ONE_ALREADY_SENT();
       for(uint i = 0; i<tierOneList.length; i++) {
          _mint(tierOneList[i], 1, 1, "");
       }
       tierOneSent = true;
    }
    
    function sendTierTwoDAONFT() external onlyOwner {
       if(tierTwoSent) revert TIER_ONE_ALREADY_SENT();
       for(uint i = 0; i<tierTwoList.length; i++) {
          _mint(tierTwoList[i], 2, 1, "");
       }
       tierTwoSent = true;
    }
}