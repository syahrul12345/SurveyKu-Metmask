pragma solidity = 0.5.0;

contract Survey {
    string private title;
    bytes[] private answerArray;
    bytes[] private details;

    mapping(address => bytes) addresMap;

    constructor(string calldata _title,bytes[] calldata _details) public {
        title = _title;
        details = _details
    }
    function save(address _participant, bytes calldata _answer) external {
        require(addresMap[_participant] == 0,'Already participated');
        addressMap[_participant] = _answer;
        answerArray.push(_answer)
    }
    function getAnswerByParticipant(address _participant) external view returns(bytes memory){
        return addresMap[_participant]
    } 
    function getAllAnswers() external view returns (bytes[] memory) {
        return answerArray;
    }

}   

