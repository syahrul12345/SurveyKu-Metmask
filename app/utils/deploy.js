const dotenv = require('dotenv');
const Web3 = require('web3');
dotenv.config();

export const getAddress = async(web3js) => {
  return web3js.eth.getAccounts().then(accounts => accounts[0]);
}

export const deployContract = async(web3js,abi,bytecode,title) => {
  const address = await getAddress(web3js);
  const contract = new web3js.eth.Contract(abi);
  return contract
    .deploy({
      data: bytecode,
      arguments:[title],
    })
    .send({
      from: address,
      gas: 470000000,
      gasPrice: 0,
    })
    .on('error', console.error)
    .then(contractInstance => {
      return contractInstance;
    });
}

export const deployTracker = async(web3js,abi,bytecode) =>{
  const address = await getAddress(web3js)
  const contract = new web3js.eth.Contract(abi)
  return contract
    .deploy({
      data: bytecode,
    })
    .send({
      from: address,
      gas: 470000000,
      gasPrice: 0,
    })
    .on('error', console.error)
    .then(contractInstance => {
      return contractInstance
    });
}

export const getTracker = async(web3js,abi,bytecode,TrackerAddress) =>{
  const address = await getAddress(web3js)
  const contract = new web3js.eth.Contract(abi,TrackerAddress);
  return contract
}
