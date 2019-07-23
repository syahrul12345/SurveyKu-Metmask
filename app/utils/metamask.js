const Web3 = require('web3');
const web3Temp = new Web3()
import {abiTracker,bytecodeTracker,abiSurvey,bytecodeSurvey} from './utils/reference.js'; //tracker info
import  {
  getAddress,
  deployContract,
  deployTracker,
  getTracker,
} from './deploy.js';
//checks if there is a web3 already injected, and then ALWAYS change the provider
export const login = () => {
	if(window.ethereum) {
		console.log("metamask detected")
		const provider = window['ethereum'] || window.web3.currentProvider
		console.log(window.ethereum)
		window.ethereum.enable()
	}else {
		console.log("NO METAMASK LOSER")
	}
}

/**
@notice Refills the ether way have with Quorum Ethers
@dev
**/	
export const beg = async (beggar) => {
	if(window.ethereum) {
		//gives the beggar some ethereum
		const accounts = await window.ethereum.enable()
		const richBoi = accounts[0]
		const params = [{
		  "from": richBoi,
		  "to": beggar,
		  "gas": '47000000',
		  "gasPrice": "0", // 10000000000000
		  "value":'20000000000000000'
		}]
		
		ethereum.send({
		  method: 'eth_sendTransaction',
		  params: params,
		  from: richBoi, // Provide the user's account to use.
		},(err,result) => {
			if(err) console.log(err)
			console.log(result.result)
		})
	}

}

export const createTracker = async() => {
	if(typeof web3 !== 'undefined') {
		const web3js = new Web3(web3.currentProvider,null,{transactionConfirmationBlocks: 1})
		const address = await getAddress(web3js)
		 try {
			const trackerContract = await deployTracker(web3js,abiTracker,bytecodeTracker)
			console.log(trackerContract.options.address)
		}catch(ex) {
			console.log('Only the daddy account can create trackers')
		}
		
	}else {
		console.log('web3 doesnt exist')
	}


	//new features
	// if(window.ethereum) {
	// 	const accounts = await window.ethereum.enable()
	// 	const from = accounts[0]
	// 	const params = [paramBuild({
	// 		"gas": "47000000",
	// 		"gasPrice": "0",
	// 		"from":accounts[0],
	// 		"data": bytecodeTracker,
	// 	})];
	// 	ethereum.send({
	// 	  method: 'eth_sendTransaction',
	// 	  params: params,
	// 	  from, // Provide the user's account to use.
	// 	},(err,result) => {
	// 		if(err) console.log(err)
	// 		const params2 = [result.result]
	// 		ethereum.send({
	// 			method:'eth_getTransactionReceipt',
	// 			params: params2,
	// 		},(err,result) => {
	// 			if(err) console.log(err)
	// 			console.log(result.result.contractAddress)
	// 		})
	// 	})
	// }else {
	// 	console.log("metamask not not detected")
	// }
}



/**
@notice creates a survey with a name
@dev
**/
export const createSurvey = async(surveyBody) => {
	// if(typeof web3 !== 'undefined') {
	// 	try {
	// 	    const survey = surveyBody;
	// 	    const web3js = new Web3(web3.currentProvider,null,{transactionConfirmationBlocks: 1})
	// 	    const title = survey.title;
	// 	    const questions = survey.questions;
	// 	    const promiseArray = [
	// 	      deployContract(web3js,abiSurvey,bytecodeSurvey,title),
	// 	      getAddress(web3js),
	// 	      getTracker(web3js,abiTracker, bytecodeTracker,'0xe1590a10E3d7BA8e2c42194f1faD4504318Af0A3'),
	// 	    ];
	// 	    Promise.all(promiseArray).then(result => {
	// 	      const surveyContract = result[0];
	// 	      const trackerContract = result[2];
	// 	      const surveyContractAddress = surveyContract.options.address;
	// 	      const currentAccount = result[1];
	// 	      trackerContract.methods
	// 	        .addSurvey(surveyContractAddress)
	// 	        .send({
	// 	          from: currentAccount,
	// 	        })
	// 	        .then(async result => {
	// 	          const questionPromiseArray = [];
	// 	          questions.forEach(item => {
	// 	            const options = item.options;
	// 	            stringToBytes32(options).then(async result => {
	// 	              const questionHex = await web3js.utils.fromAscii(item.text);
	// 	              //result is in bytes32
	// 	              questionPromiseArray.push(
	// 	                surveyContract.methods
	// 	                  .createQuestion(questionHex, result)
	// 	                  .send({
	// 	                    from: currentAccount,
	// 	                    gas: 470000000,
	// 	                  }),
	// 	              );
	// 	            });
	// 	          });
	// 	          Promise.all(questionPromiseArray).then(result => {
	// 	            console.log(result)
	// 	          });
	// 	        });
	// 	    });
	//   } catch (ex) {
	//     res.status(500).send(ex.toString());
	//   }
		
	// }else {
	// 	console.log('web3 doesnt exist')
	// }
	//using JSON-RPC instead of web3
	if(window.ethereum) {
		const accounts = await window.ethereum.enable()
		console.log(surveyBody.title)
		const from = accounts[0]
		const params = [paramBuild({
			"gas": "47000000",
			"gasPrice": "0",
			"from":accounts[0],
			"data": bytecodeSurvey,
		})];
		ethereum.send({
		  method: 'eth_sendTransaction',
		  params: params,
		  from, // Provide the user's account to use.
		},(err,result) => {
			if(err) console.log(err)
			const params2 = [result.result]
			ethereum.send({
				method:'eth_getTransactionReceipt',
				params: params2,
			},(err,result) => {
				if(err) console.log(err)
				console.log(result.result.contractAddress)
			})
		})
	}else {
		console.log("NO METAMASK")
	}
}

/**
@notice This function will not work until EIP2015 is implemented!
@dev
**/
export const updateProvider = async() => {
	if(window.ethereum) {
		console.log(window.ethereum)
		const params = [paramBuild({
			"chainId": 0,
			"networkId": 23753,
			"rpcUrl": "http://nd-101-939-662.rg-837-380.p2pify.com:8545",
			"nativeCurrency": {
				"name": "Ethereum",
				"symbol": "ETH"
			}
	    })]
	   	ethereum.send({
	   		method:'wallet_updateChain',
	   		params: params
	   	},(err,result) => {
	   		if(err) console.log(err)
	   		console.log(result)
	   	})

	}else {
		console.log("NO METAMASK")
	}
}

/**
@notice Helper functions 
@dev
**/
async function stringToBytes32(optionArray) {
  const tempArray = [];
  optionArray.forEach(item => {
    tempArray.push(web3Temp.utils.fromAscii(item));
  });
  return tempArray;
}

function bytes32toString(optionArray) {
  const tempArray = [];
  optionArray.forEach(item => {
    tempArray.push(web3Temp.utils.hexToUtf8(item));
  });
  return tempArray;
}

function hexToNumber(optionArray) {
  const tempArray = [];
  optionArray.forEach(item => {
    tempArray.push(web3Temp.utils.hexToNumber(item['_hex']));
  });
  return tempArray;
}

/**
@notice Build the required parameters
@dev have optional inputs
**/
const paramBuild = (payload) => {
	return Object.assign({
	}, payload);
};

// const paramBuild = (sender,receiver = null, data = null) => {
// 	const params= [{
// 		"from":sender,
// 		"to":receiver,
// 		"gas":"0x9184e72a000",
// 		"gasPrice":"0",
// 		"value": "0x9184e72a",
// 		"data": data,
// 	}]
// 	return params
// }
