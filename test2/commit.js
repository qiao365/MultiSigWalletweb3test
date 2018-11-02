
const Web3 = require("web3");
var web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8555'));

var multisigwalletContract = web3.eth.contract([{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"owners","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"owner","type":"address"}],"name":"getOwnerSubmitAddress","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"isOwner","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"destination","type":"address"}],"name":"submitTransaction","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getOwners","outputs":[{"name":"","type":"address[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"deleteTransaction","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"ownerCommitedAddresses","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":true,"name":"sender","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"sender","type":"address"},{"indexed":true,"name":"destination","type":"address"}],"name":"SubmitTransaction","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"ExecuteTransaction","type":"event"}]);

var myContractInstance = multisigwalletContract.at("0x8cdaf0cd259887258bc13a92c0a6da92698644c0");

// myContractInstance.submitTransaction(web3.eth.accounts[3],{from: web3.eth.accounts[0],  gas: '4700000'},function(err, result){
// 	console.log(err);
// 	console.log(result);
// });

// myContractInstance.submitTransaction(web3.eth.accounts[3],{from: web3.eth.accounts[1],  gas: '4700000'},function(err, result){
// 	console.log(err);
// 	console.log(result);
// });

myContractInstance.deleteTransaction({from: web3.eth.accounts[0],  gas: '4700000'},function(err, result){
	console.log(err);
	console.log(result);
});

// myContractInstance.getOwners(function(err, result){
// 	console.log(err);
// 	console.log(result);
// });

myContractInstance.getOwnerSubmitAddress(web3.eth.accounts[0],function(err, result){
	console.log(err);
	console.log(result);
});

myContractInstance.getOwnerSubmitAddress(web3.eth.accounts[1],function(err, result){
	console.log(err);
	console.log(result);
});