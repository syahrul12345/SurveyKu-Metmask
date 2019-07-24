pragma solidity = 0.5.0;

interface SurveySimple {
	 function save(address _participant, bytes32 _answer) external;
	 function getAnswerByParticipant(address _participant) external view returns(bytes32);
	 function getAllAnswers() external view returns (bytes32[] memory);
	 function getTitle() external view returns(string memory);
	 function getParticipants() external view returns(uint256);
}

/**
@notice THIS CONTRACT WILL ONLY BE DEPLOYED ONCE
@dev DEPLOY THIS ONCE AT THE START OF THE PROJECT

**/

contract SurveyTrackerSimple {
	
	address private superAdmin;
	address[] private admins;

	address[] private surveyAddresses;
	mapping(address => string) surveyTitles;
	mapping(address => uint) surveyParticipants;
	
	constructor() public {}

	function save(address _surveyAddress,address _participantAddress,bytes32 _answer) external {
		SurveySimple survey = SurveySimple(_surveyAddress);
		survey.save(_participantAddress,_answer);
	}
	function getAnswerByParticipant(address _surveyAddress,address _participantAddress) external view returns (bytes32){
		SurveySimple survey = SurveySimple(_surveyAddress);
		return survey.getAnswerByParticipant(_participantAddress);
	}
	function getTitle(address _surveyAddress) external view returns(string memory) {
		SurveySimple survey = SurveySimple(_surveyAddress);
		return survey.getTitle();
	}
	function getAnswerBySurveyAddress(address _surveyAddress) external view returns(bytes32[] memory) {
		SurveySimple survey = SurveySimple(_surveyAddress);
		return survey.getAllAnswers();
	}
	function getSurveyParticipantCount(address _surveyAddress) external view returns(uint256) {
		SurveySimple survey = SurveySimple(_surveyAddress);
		return survey.getParticipants();
	}
	function getAllSurveyInfo() external view returns(address[],uint[]){
		
	}
	function updateSurveyTitles(string memory _title,address _surveyAddress) external {
		surveyTitles[_surveyAddress] = _title;
	}


}	
