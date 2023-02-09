//SPDX-License-Identifier: Unlicense
import "@openzeppelin/contracts/token/ERC721/IERC721.sol";

//Whitelisted Addresses can mint NFTs for free
//There will be a public mint later on down the line

//Voting Power, How Many Times can someone create a proposal

pragma solidity ^0.8.18;

contract BTRDAO {
    error NFT_BALANCE_EMPTY();
    error CANT_MAKE_PROPOSAL_YET();
    error PROPOSAL_HASNT_BEEN_ACCEPTED();
    error PROPOSAL_DOESNT_EXIST();
    error NOT_AN_OWNER();
    error PROPOSAL_ALREADY_VALIDATED();
    error ALREADY_VOTED();
    error MINIMUM_OF_15_VOTES();
    error NOT_ENOUGH_YES_VOTES();
    error HASNT_BEEN_30_DAYS();

    enum Vote {
    YES, 
    No 
  }

    address public BTRNFTAddress;
    address public owner;
    address public secondOwner;
    uint public currentIndex;

    constructor(address _btrNFTAddress, address _owner, address _secondOwner) {
       BTRNFTAddress = _btrNFTAddress;
       owner = _owner;
       secondOwner = _secondOwner;
    }

    modifier doYouHoldBTRNFTS {
        if(IERC721(BTRNFTAddress).balanceOf(msg.sender) < 1) {
           revert NFT_BALANCE_EMPTY();
        }
        _;
    }

     modifier canYouMakeAnotherProposal {
        if(timeToCreateAnotherProposal[msg.sender] > block.timestamp) {
           revert CANT_MAKE_PROPOSAL_YET();
        }
        _;
    }

    modifier hasProposalBeenAccepted(uint index) {
      BTRProposal storage selectedBTRProposal = btrProposals[index];
        if(selectedBTRProposal.proposalAccepted == false) {
           revert PROPOSAL_HASNT_BEEN_ACCEPTED();
        }
        _;
    }

     modifier canProposalBeAccepted(uint index) {
      BTRProposal storage selectedBTRProposal = btrProposals[index];
        if(selectedBTRProposal.proposalOwner == address(0)) {
           revert PROPOSAL_DOESNT_EXIST();
        }
        if(msg.sender != owner || msg.sender != secondOwner) {
          revert NOT_AN_OWNER();
        }

        if(selectedBTRProposal.proposalAlreadyValidated == true) {
          revert PROPOSAL_ALREADY_VALIDATED();
        }
        _;
    }

    modifier haveYouVotedAlready(uint index) {
       BTRProposal storage selectedBTRProposal = btrProposals[index];
       if(selectedBTRProposal.votedAlready[msg.sender] == true) {
         revert ALREADY_VOTED();
       }
      _;
    }

    modifier canProposalBeExecuted(uint index) {
       BTRProposal storage selectedBTRProposal = btrProposals[index];
       if(selectedBTRProposal.totalVotes < 15) {
         revert MINIMUM_OF_15_VOTES();
       } 

       if(selectedBTRProposal.votedNo >= selectedBTRProposal.votedYes) {
         revert NOT_ENOUGH_YES_VOTES();
       }
        
        if(msg.sender != owner || msg.sender != secondOwner) {
          revert NOT_AN_OWNER();
        }
        
        if(((block.timestamp + 30 days) < selectedBTRProposal.timeThatProposalWasCreated) && (selectedBTRProposal.totalVotes != 100)) {
          revert HASNT_BEEN_30_DAYS();
        }  
       _;
    }
    
    struct BTRProposal {
      bytes proposal;
      address proposalOwner;
      bool proposalAccepted;
      bool proposalAlreadyValidated;
      bool proposalExecuted;
      uint votedYes;
      uint votedNo;
      uint totalVotes;
      uint timeThatProposalWasCreated;
      mapping(address => bool) votedAlready;
    }
    
    mapping(uint => BTRProposal) public btrProposals;


    mapping(address => uint) timeToCreateAnotherProposal;


    function createProposal(string calldata _proposal) external doYouHoldBTRNFTS canYouMakeAnotherProposal {
      BTRProposal storage currentBTRProposal = btrProposals[currentIndex];
      currentBTRProposal.proposal = abi.encode(_proposal);
      currentBTRProposal.proposalOwner = msg.sender;
      timeToCreateAnotherProposal[msg.sender] = block.timestamp + 24 hours;
      currentIndex++;
    }

    function acceptOrDenyProposal(bool _acceptProposal, uint index) external canProposalBeAccepted(index) {
       BTRProposal storage selectedBTRProposal = btrProposals[index];
       if(_acceptProposal == true) {
        selectedBTRProposal.proposalAccepted = true;
       } else {
        selectedBTRProposal.proposalAccepted = false;
       }
       selectedBTRProposal.proposalAlreadyValidated = true;
    }

    function voteOnProposal(Vote vote, uint index) external doYouHoldBTRNFTS haveYouVotedAlready(index) hasProposalBeenAccepted(index) {
      BTRProposal storage selectedBTRProposal = btrProposals[index];
      if(vote == Vote.YES) {
        selectedBTRProposal.votedYes++;
      } else {
         selectedBTRProposal.votedNo++;
      }
      selectedBTRProposal.totalVotes++;
      selectedBTRProposal.votedAlready[msg.sender] = true;
    }
   //Either anybody from the DAO can execute the proposal or only the owners of the DAO can execute the propoosal
    function executeProposal(uint index) external canProposalBeExecuted(index) {
       BTRProposal storage selectedBTRProposal = btrProposals[index];
       selectedBTRProposal.proposalExecuted = true;
    }


    function withdrawAnyFunds() external {
      require(address(this).balance > 0, "NO_BALANCE_TO_WITHDRAW");
      require(msg.sender == owner || msg.sender == secondOwner, "NOT_OWNER");
      (bool success, ) = payable(msg.sender).call{value: address(this).balance}("");
      require(success, "TRANSFER_FAILED");
    }

    function viewACreatedProposal(uint index) external view returns(string memory proposal, address proposalOwner, bool proposalAccepted, bool proposalAlreadyValidated, bool proposalExecuted, uint votedYes, uint votedNo, uint totalVotes, uint timeThatProposalWasCreated) {
       BTRProposal storage selectedBTRProposal = btrProposals[index];
       (proposal) = abi.decode(selectedBTRProposal.proposal, (string));
       return(proposal, selectedBTRProposal.proposalOwner, selectedBTRProposal.proposalAccepted, selectedBTRProposal.proposalAlreadyValidated, selectedBTRProposal.proposalExecuted, selectedBTRProposal.votedYes, selectedBTRProposal.votedNo, selectedBTRProposal.totalVotes, selectedBTRProposal.timeThatProposalWasCreated);
    }

    receive() external payable {}
    fallback() external payable {}
}