pragma solidity 0.8.10;

contract Enum {

    string public name = "Dupe";

    enum Status {
        Undefined,
        Pending,
        Started,
        Finished
    }


    // the default value is the first value in enum
    Status public status;

    function get() public view returns (string memory, Status) {
        return (name, status);
    }

    function setUsingString(string memory _value) public returns (Status) {

        // string comparison using keccak abd encodePacked

        if ( keccak256(abi.encodePacked(_value)) == keccak256(abi.encodePacked("pending"))) {
            return status = Status.Pending;
        }

        if (keccak256(abi.encodePacked(_value)) == keccak256(abi.encodePacked("started"))) {
            return status = Status.Started;
        }

        else {
            return status = Status.Finished; 
        }
    }

    // this function is more optimal than setUsingstring function

    function setWithUint(Status _status) public {
        status = _status;
    }

}