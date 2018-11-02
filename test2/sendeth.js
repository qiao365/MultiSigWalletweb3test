const Web3 = require("web3");
var web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8555'));


web3.eth.sendTransaction({from:web3.eth.accounts[0],to:'0x8cdaf0cd259887258bc13a92c0a6da92698644c0',value:web3.toWei(10, "ether")}, function(err, address) { 
    if (!err) console.log(address); 
});