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
			console.log("trackerCreated")
			console.log(trackerContract.options.address)
		}catch(ex) {
			console.log('Only the daddy account can create trackers')
		}
		
	}else {
		console.log('web3 doesnt exist')
	}

}



/**
@notice creates a survey with a name
@dev
**/
export const createSurvey = async(surveyBody) => {
	if(window.web3) {
		const web3js = new Web3(web3.currentProvider,null, {transactionConfirmationBlocks: 1})
		const accounts = await window.ethereum.enable()
		const title = surveyBody.title;
		try {
			const surveyContract = await deployContract(web3js,abiSurvey,bytecodeSurvey,title)
			console.log('new survey created')
			console.log(surveyContract.options.address)
		} catch(ex) {
			console.log(ex.toString())
		}
		
		
	} else {
		console.log("NO METAMASK")
	}
}

export const surveyTitle = async(surveyAddress) => {
	if(window.ethereum) {
		const web3js = new Web3(web3.currentProvider)
		const accounts = await window.ethereum.enable()
		const from = accounts[0]
		try {
			const trackerAddress = '0xdEAD8C48cdcF1d0CeAC0c18855b155318d86A963'
			const trackerContract = await getTracker(web3js,abiTracker,bytecodeTracker,trackerAddress)
			trackerContract.methods.getSurveyTitleByAddress(surveyAddress).call({}).then(console.log)
		}catch (ex) {
			console.log(ex.toString())
		}
	}else {
		console.log("no metamask")
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
