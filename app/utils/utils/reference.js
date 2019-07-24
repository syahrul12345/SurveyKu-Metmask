export const abiTracker = [
	{
		"constant": true,
		"inputs": [],
		"name": "getSurveyIds",
		"outputs": [
			{
				"name": "",
				"type": "uint256[]"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_surveyAddress",
				"type": "address"
			},
			{
				"name": "_question",
				"type": "bytes32"
			}
		],
		"name": "getOptions",
		"outputs": [
			{
				"name": "",
				"type": "bytes32"
			},
			{
				"name": "",
				"type": "bytes32[]"
			},
			{
				"name": "",
				"type": "uint256[]"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_surveyAddress",
				"type": "address"
			}
		],
		"name": "getSurveyQuestionArray",
		"outputs": [
			{
				"name": "",
				"type": "bytes32[]"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_surveyId",
				"type": "uint256"
			}
		],
		"name": "getSurveyTitleById",
		"outputs": [
			{
				"name": "",
				"type": "string"
			},
			{
				"name": "",
				"type": "address"
			},
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_surveyAddress",
				"type": "address"
			},
			{
				"name": "_question",
				"type": "bytes32"
			},
			{
				"name": "_answer",
				"type": "bytes32"
			}
		],
		"name": "answerQuestion",
		"outputs": [
			{
				"name": "success",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_surveyAddress",
				"type": "address"
			}
		],
		"name": "getSurveyQuestionIds",
		"outputs": [
			{
				"name": "",
				"type": "bytes32[]"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_surveyAddress",
				"type": "address"
			}
		],
		"name": "addSurvey",
		"outputs": [
			{
				"name": "success",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_surveyAddress",
				"type": "address"
			}
		],
		"name": "getSurveyTitleByAddress",
		"outputs": [
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_surveyAddress",
				"type": "address"
			}
		],
		"name": "updateParticipants",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_surveyId",
				"type": "uint256"
			}
		],
		"name": "getSurveyAddressById",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "constructor"
	}
]

export const bytecodeTracker =  "0x608060405234801561001057600080fd5b50610fe5806100206000396000f3fe6080604052600436106100a4576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680633a825a34146100a9578063420249951461011557806380b674b1146102145780638276c1a9146102ba578063837d643a146103a8578063abaa171114610425578063c53fb613146104cb578063d5e0347d14610534578063db040070146105fe578063f94ce5af1461064f575b600080fd5b3480156100b557600080fd5b506100be6106ca565b6040518080602001828103825283818151815260200191508051906020019060200280838360005b838110156101015780820151818401526020810190506100e6565b505050509050019250505060405180910390f35b34801561012157600080fd5b5061016e6004803603604081101561013857600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610722565b604051808481526020018060200180602001838103835285818151815260200191508051906020019060200280838360005b838110156101bb5780820151818401526020810190506101a0565b50505050905001838103825284818151815260200191508051906020019060200280838360005b838110156101fd5780820151818401526020810190506101e2565b505050509050019550505050505060405180910390f35b34801561022057600080fd5b506102636004803603602081101561023757600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610893565b6040518080602001828103825283818151815260200191508051906020019060200280838360005b838110156102a657808201518184015260208101905061028b565b505050509050019250505060405180910390f35b3480156102c657600080fd5b506102f3600480360360208110156102dd57600080fd5b8101908080359060200190929190505050610995565b60405180806020018473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001838152602001828103825285818151815260200191508051906020019080838360005b8381101561036b578082015181840152602081019050610350565b50505050905090810190601f1680156103985780820380516001836020036101000a031916815260200191505b5094505050505060405180910390f35b3480156103b457600080fd5b5061040b600480360360608110156103cb57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035906020019092919080359060200190929190505050610ba4565b604051808215151515815260200191505060405180910390f35b34801561043157600080fd5b506104746004803603602081101561044857600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610c66565b6040518080602001828103825283818151815260200191508051906020019060200280838360005b838110156104b757808201518184015260208101905061049c565b505050509050019250505060405180910390f35b3480156104d757600080fd5b5061051a600480360360208110156104ee57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610d68565b604051808215151515815260200191505060405180910390f35b34801561054057600080fd5b506105836004803603602081101561055757600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610df5565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156105c35780820151818401526020810190506105a8565b50505050905090810190601f1680156105f05780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34801561060a57600080fd5b5061064d6004803603602081101561062157600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610ef7565b005b34801561065b57600080fd5b506106886004803603602081101561067257600080fd5b8101908080359060200190929190505050610f7c565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6060600080548060200260200160405190810160405280929190818152602001828054801561071857602002820191906000526020600020905b815481526020019060010190808311610704575b5050505050905090565b600060608060008590506060808273ffffffffffffffffffffffffffffffffffffffff166344374b70886040518263ffffffff167c01000000000000000000000000000000000000000000000000000000000281526004018082815260200191505060006040518083038186803b15801561079c57600080fd5b505afa1580156107b0573d6000803e3d6000fd5b505050506040513d6000823e3d601f19601f8201168201806040525060408110156107da57600080fd5b8101908080516401000000008111156107f257600080fd5b8281019050602081018481111561080857600080fd5b815185602082028301116401000000008211171561082557600080fd5b5050929190602001805164010000000081111561084157600080fd5b8281019050602081018481111561085757600080fd5b815185602082028301116401000000008211171561087457600080fd5b5050929190505050915091508682829550955095505050509250925092565b606060008290508073ffffffffffffffffffffffffffffffffffffffff166397221ab76040518163ffffffff167c010000000000000000000000000000000000000000000000000000000002815260040160006040518083038186803b1580156108fc57600080fd5b505afa158015610910573d6000803e3d6000fd5b505050506040513d6000823e3d601f19601f82011682018060405250602081101561093a57600080fd5b81019080805164010000000081111561095257600080fd5b8281019050602081018481111561096857600080fd5b815185602082028301116401000000008211171561098557600080fd5b5050929190505050915050919050565b606060008060006004600086815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690508073ffffffffffffffffffffffffffffffffffffffff1663ff3c1a8f6040518163ffffffff167c010000000000000000000000000000000000000000000000000000000002815260040160006040518083038186803b158015610a3457600080fd5b505afa158015610a48573d6000803e3d6000fd5b505050506040513d6000823e3d601f19601f820116820180604052506020811015610a7257600080fd5b810190808051640100000000811115610a8a57600080fd5b82810190506020810184811115610aa057600080fd5b8151856001820283011164010000000082111715610abd57600080fd5b50509291905050506004600087815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16635aa68ac06040518163ffffffff167c010000000000000000000000000000000000000000000000000000000002815260040160206040518083038186803b158015610b5b57600080fd5b505afa158015610b6f573d6000803e3d6000fd5b505050506040513d6020811015610b8557600080fd5b8101908080519060200190929190505050935093509350509193909250565b6000808490508073ffffffffffffffffffffffffffffffffffffffff1663ab65098185856040518363ffffffff167c01000000000000000000000000000000000000000000000000000000000281526004018083815260200182815260200192505050602060405180830381600087803b158015610c2157600080fd5b505af1158015610c35573d6000803e3d6000fd5b505050506040513d6020811015610c4b57600080fd5b81019080805190602001909291905050509150509392505050565b606060008290508073ffffffffffffffffffffffffffffffffffffffff166381563ba56040518163ffffffff167c010000000000000000000000000000000000000000000000000000000002815260040160006040518083038186803b158015610ccf57600080fd5b505afa158015610ce3573d6000803e3d6000fd5b505050506040513d6000823e3d601f19601f820116820180604052506020811015610d0d57600080fd5b810190808051640100000000811115610d2557600080fd5b82810190506020810184811115610d3b57600080fd5b8151856020820283011164010000000082111715610d5857600080fd5b5050929190505050915050919050565b600081600460008080549050815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600080805490509080600181540180825580915050906001820390600052602060002001600090919290919091505550919050565b606060008290508073ffffffffffffffffffffffffffffffffffffffff1663ff3c1a8f6040518163ffffffff167c010000000000000000000000000000000000000000000000000000000002815260040160006040518083038186803b158015610e5e57600080fd5b505afa158015610e72573d6000803e3d6000fd5b505050506040513d6000823e3d601f19601f820116820180604052506020811015610e9c57600080fd5b810190808051640100000000811115610eb457600080fd5b82810190506020810184811115610eca57600080fd5b8151856001820283011164010000000082111715610ee757600080fd5b5050929190505050915050919050565b60008190508073ffffffffffffffffffffffffffffffffffffffff16638d065a576040518163ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401600060405180830381600087803b158015610f6057600080fd5b505af1158015610f74573d6000803e3d6000fd5b505050505050565b60006004600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905091905056fea165627a7a72305820ad4c739fd63010763d2ce6f520212d2b80a985846b2938db955b5a81e4a4790c0029"

export const abiSurvey = [
	{
		"constant": true,
		"inputs": [
			{
				"name": "_question",
				"type": "bytes32"
			}
		],
		"name": "getOption",
		"outputs": [
			{
				"name": "",
				"type": "bytes32[]"
			},
			{
				"name": "",
				"type": "uint256[]"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "title",
		"outputs": [
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getParticipants",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getQuestionIds",
		"outputs": [
			{
				"name": "",
				"type": "bytes32[]"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "updateParticipants",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getQuestions",
		"outputs": [
			{
				"name": "",
				"type": "bytes32[]"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_question",
				"type": "bytes32"
			},
			{
				"name": "_answer",
				"type": "bytes32"
			}
		],
		"name": "answerQuestion",
		"outputs": [
			{
				"name": "success",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_question",
				"type": "bytes32"
			},
			{
				"name": "options",
				"type": "bytes32[]"
			}
		],
		"name": "createQuestion",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getTitle",
		"outputs": [
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"name": "_title",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "constructor"
	}
]

export const bytecodeSurvey = "0x608060405234801561001057600080fd5b50604051610d21380380610d218339810180604052602081101561003357600080fd5b81019080805164010000000081111561004b57600080fd5b8281019050602081018481111561006157600080fd5b815185600182028301116401000000008211171561007e57600080fd5b5050929190505050806000908051906020019061009c9291906100a3565b5050610148565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106100e457805160ff1916838001178555610112565b82800160010185558215610112579182015b828111156101115782518255916020019190600101906100f6565b5b50905061011f9190610123565b5090565b61014591905b80821115610141576000816000905550600101610129565b5090565b90565b610bca806101576000396000f3fe608060405260043610610099576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806344374b701461009e5780634a79d50c146101765780635aa68ac01461020657806381563ba5146102315780638d065a571461029d57806397221ab7146102b4578063ab65098114610320578063ed45e3c01461037d578063ff3c1a8f1461040d575b600080fd5b3480156100aa57600080fd5b506100d7600480360360208110156100c157600080fd5b810190808035906020019092919050505061049d565b604051808060200180602001838103835285818151815260200191508051906020019060200280838360005b8381101561011e578082015181840152602081019050610103565b50505050905001838103825284818151815260200191508051906020019060200280838360005b83811015610160578082015181840152602081019050610145565b5050505090500194505050505060405180910390f35b34801561018257600080fd5b5061018b6106ac565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156101cb5780820151818401526020810190506101b0565b50505050905090810190601f1680156101f85780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34801561021257600080fd5b5061021b61074a565b6040518082815260200191505060405180910390f35b34801561023d57600080fd5b50610246610754565b6040518080602001828103825283818151815260200191508051906020019060200280838360005b8381101561028957808201518184015260208101905061026e565b505050509050019250505060405180910390f35b3480156102a957600080fd5b506102b26107ac565b005b3480156102c057600080fd5b506102c96107c0565b6040518080602001828103825283818151815260200191508051906020019060200280838360005b8381101561030c5780820151818401526020810190506102f1565b505050509050019250505060405180910390f35b34801561032c57600080fd5b506103636004803603604081101561034357600080fd5b810190808035906020019092919080359060200190929190505050610818565b604051808215151515815260200191505060405180910390f35b34801561038957600080fd5b5061040b600480360360408110156103a057600080fd5b8101908080359060200190929190803590602001906401000000008111156103c757600080fd5b8201836020820111156103d957600080fd5b803590602001918460208302840111640100000000831117156103fb57600080fd5b90919293919293905050506108b5565b005b34801561041957600080fd5b50610422610afc565b6040518080602001828103825283818151815260200191508051906020019080838360005b83811015610462578082015181840152602081019050610447565b50505050905090810190601f16801561048f5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b60608060008360405160200180828152602001915050604051602081830303815290604052805190602001209050606060016000838152602001908152602001600020600101805490506040519080825280602002602001820160405280156105155781602001602082028038833980820191505090505b509050606060016000848152602001908152602001600020600101805490506040519080825280602002602001820160405280156105625781602001602082028038833980820191505090505b50905060008090505b600160008581526020019081526020016000206001018054905081101561068d57600060016000868152602001908152602001600020600201600060016000888152602001908152602001600020600101848154811015156105c957fe5b906000526020600020015481526020019081526020016000206000015490506000600160008781526020019081526020016000206002016000600160008981526020019081526020016000206001018581548110151561062557fe5b9060005260206000200154815260200190815260200160002060010154905081858481518110151561065357fe5b906020019060200201818152505080848481518110151561067057fe5b90602001906020020181815250505050808060010191505061056b565b508051825114151561069e57600080fd5b818194509450505050915091565b60008054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156107425780601f1061071757610100808354040283529160200191610742565b820191906000526020600020905b81548152906001019060200180831161072557829003601f168201915b505050505081565b6000600454905090565b606060028054806020026020016040519081016040528092919081815260200182805480156107a257602002820191906000526020600020905b81548152602001906001019080831161078e575b5050505050905090565b600460008154809291906001019190505550565b6060600380548060200260200160405190810160405280929190818152602001828054801561080e57602002820191906000526020600020905b8154815260200190600101908083116107fa575b5050505050905090565b6000808360405160200180828152602001915050604051602081830303815290604052805190602001209050600083604051602001808281526020019150506040516020818303038152906040528051906020012090506001600083815260200190815260200160002060020160008281526020019081526020016000206001016000815480929190600101919050555060019250505092915050565b6000836040516020018082815260200191505060405160208183030381529060405280519060200120905060006001026001600083815260200190815260200160002060000154141515610971576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601b8152602001807f546865205175657374696f6e20616c726561647920657869737473000000000081525060200191505060405180910390fd5b6002819080600181540180825580915050906001820390600052602060002001600090919290919091505550600384908060018154018082558091505090600182039060005260206000200160009091929091909150555083600160008381526020019081526020016000206000018190555060008090505b83839050811015610af55760008484838181101515610a0557fe5b9050602002013560405160200180828152602001915050604051602081830303815290604052805190602001209050600160008481526020019081526020016000206001018190806001815401808255809150509060018203906000526020600020016000909192909190915055508484838181101515610a8257fe5b90506020020135600160008581526020019081526020016000206002016000838152602001908152602001600020600001819055506000600160008581526020019081526020016000206002016000838152602001908152602001600020600101819055505080806001019150506109ea565b5050505050565b606060008054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610b945780601f10610b6957610100808354040283529160200191610b94565b820191906000526020600020905b815481529060010190602001808311610b7757829003601f168201915b505050505090509056fea165627a7a72305820f18c339cd569ad0f7bb793f9bb9aba28d418e9fa83f0a5051a875fd078a171db0029"
