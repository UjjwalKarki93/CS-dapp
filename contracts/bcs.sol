// SPDX-License-Identifier: MIT
pragma solidity 0.8.11;

contract bcs {

  
 //for transaction
    mapping(address=>uint) public donors; 
    address public beneficiary;
    string public url;
    uint public minimumContribution;
    uint public target;
    uint public raisedAmount;
    uint public noOfdonors;
    uint public numRequests;
      uint public numofregisteredTender;
    
    struct Request{
        string description;
        uint value;
        bool completed;
        uint noOfVoters;
        address payable recipient;
        mapping(address=>bool) voters;
    }
    
      mapping(uint=>Request) public requests;
     

    
     function registerTender(uint _target,uint _minimum,string memory _url)  external payable  {
          require(numofregisteredTender==0,"only one tender");
        target=_target;
        minimumContribution = _minimum;
        url=_url;
        beneficiary=msg.sender;
        numofregisteredTender++;
    }
    



    function donate() public payable{
        
         require(msg.value<=target,"amount greater than target");
        require(numRequests==0,"raised amount has already mey target");
        
        require(msg.value >=minimumContribution,"Minimum donation is not met");
         if(donors[msg.sender]==0){
            noOfdonors++;
        }
        donors[msg.sender]=msg.value+donors[msg.sender];
        raisedAmount+=msg.value;
    }
    

    modifier onlybeneficiary(){
        require(msg.sender==beneficiary,"Only beneficiary can calll this function");
        _;
    }

    modifier onlydonor(){
        require(donors[msg.sender]>0,"Only donors can calll this function");
        _;
    }


 function createRequests(string memory _description,address payable _recipient,uint _value) public onlybeneficiary{
        Request storage newRequest = requests[numRequests];
        numRequests++;
        newRequest.description=_description;
        newRequest.recipient=_recipient;
        newRequest.value=_value;
        newRequest.completed=false;
        newRequest.noOfVoters=0;
      }


    function voteRequest(uint _requestNo) public onlydonor{
        require(donors[msg.sender]>0,"YOu must be contributor");
        Request storage thisRequest=requests[_requestNo];
        require(thisRequest.voters[msg.sender]==false,"You have already voted");
        thisRequest.voters[msg.sender]=true;
        thisRequest.noOfVoters++;
    }
    function settleRequest(uint _requestNo) public onlydonor{
        require(raisedAmount>=target);
        Request storage thisRequest=requests[_requestNo];
        require(thisRequest.completed==false,"The request has been completed");
        require(thisRequest.noOfVoters > noOfdonors/2,"Majority does not support");
        thisRequest.recipient.transfer(thisRequest.value);
        thisRequest.completed=true;

    }

     function getTenderinfo() public view returns ( uint, uint,string memory,uint,address,uint,uint,uint)
     {
        return (
          minimumContribution,
          target,
          url,
          address(this).balance,
           beneficiary,
           noOfdonors,
           numRequests,
           raisedAmount


          
        );
    }

    function getRequeststatus() public view returns ( uint, uint,string memory,address,address,uint)
     {
        return (

          requests[numRequests].noOfVoters,
           noOfdonors,
           requests[numRequests].description,
           beneficiary,
           requests[numRequests].recipient,
           numRequests
          
        );
    }

   

}