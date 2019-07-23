const Web3 = require('web3')

web3 = new Web3(Web3.providers.HttpProvider('http://nd-101-939-662.rg-837-380.p2pify.com:8545'))

web3.eth.net.getId().then(console.log);
