const Web3 = require("web3");
var web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8555'));


web3.eth.sendTransaction({from:web3.eth.accounts[2],to:'0xaa588d3737b611bafd7bd713445b314bd453a5c8',value:web3.toWei(10, "ether")}, function(err, address) { 
    if (!err) console.log(address); 
});