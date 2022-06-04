ragma solidity 0.8.11;

// SPDX-License-Identifier: GPL-3.0

import "./tender.sol";
contract registerMultipleTendors {
    
  
     tender[] public TenderAddress;

    function createTender(uint _target,uint _minimum,string memory _fileurl) public {

        tender contractPointer = new tender();
        contractPointer.registerTender(_target,_minimum,_fileurl);
        TenderAddress.push(contractPointer);
    }

    function getDeployedTenderaddress()public view returns(tender[] memory){
        return TenderAddress;
    }
}
    
