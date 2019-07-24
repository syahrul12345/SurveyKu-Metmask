pragma solidity = 0.5.0;

contract surveySimple {
    string private title;
    bytes32[] private answerArray;
    bytes32[] private details;
    uint256 private participants;
    mapping(address => bytes32) addressMap;
    mapping (address => bool) addressBool;
    constructor(string memory _title,bytes32[] memory _details) public {
        title = _title;
        details = _details;
        participants = 0;
    }
    
    function save(address _participant, bytes32 _answer) external {
        require(addressBool[_participant] == false,'Already participated');
        addressMap[_participant] = _answer;
        addressBool[_participant] = true;
        answerArray.push(_answer);
        updateParticipants();
    }
    function getAnswerByParticipant(address _participant) external view returns(bytes32){
        return addressMap[_participant];
    } 
    function getAllAnswers() external view returns (bytes32[] memory) {
        return answerArray;
    }
    function getTitle() external view returns(string memory) {
        return title;
    }
    function updateParticipants() internal {
        participants++;
    }
    function getParticipants() external view returns(uint256) {
        return participants;
    }
    
    
    

}   

