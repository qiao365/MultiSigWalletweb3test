const Web3 = require("web3");
var web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8555'));


let abi = [
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"name": "owners",
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
		"constant": false,
		"inputs": [
			{
				"name": "transactionId",
				"type": "uint256"
			}
		],
		"name": "revokeConfirmation",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"name": "isOwner",
		"outputs": [
			{
				"name": "",
				"type": "bool"
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
				"name": "",
				"type": "uint256"
			},
			{
				"name": "",
				"type": "address"
			}
		],
		"name": "confirmations",
		"outputs": [
			{
				"name": "",
				"type": "bool"
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
				"name": "pending",
				"type": "bool"
			},
			{
				"name": "executed",
				"type": "bool"
			}
		],
		"name": "getTransactionCount",
		"outputs": [
			{
				"name": "count",
				"type": "uint256"
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
				"name": "transactionId",
				"type": "uint256"
			}
		],
		"name": "isConfirmed",
		"outputs": [
			{
				"name": "",
				"type": "bool"
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
				"name": "transactionId",
				"type": "uint256"
			}
		],
		"name": "getConfirmationCount",
		"outputs": [
			{
				"name": "count",
				"type": "uint256"
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
				"name": "",
				"type": "uint256"
			}
		],
		"name": "transactions",
		"outputs": [
			{
				"name": "destination",
				"type": "address"
			},
			{
				"name": "value",
				"type": "uint256"
			},
			{
				"name": "data",
				"type": "bytes"
			},
			{
				"name": "executed",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getOwners",
		"outputs": [
			{
				"name": "",
				"type": "address[]"
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
				"name": "from",
				"type": "uint256"
			},
			{
				"name": "to",
				"type": "uint256"
			},
			{
				"name": "pending",
				"type": "bool"
			},
			{
				"name": "executed",
				"type": "bool"
			}
		],
		"name": "getTransactionIds",
		"outputs": [
			{
				"name": "_transactionIds",
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
				"name": "transactionId",
				"type": "uint256"
			}
		],
		"name": "getConfirmations",
		"outputs": [
			{
				"name": "_confirmations",
				"type": "address[]"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "transactionCount",
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
		"constant": false,
		"inputs": [
			{
				"name": "transactionId",
				"type": "uint256"
			}
		],
		"name": "confirmTransaction",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "destination",
				"type": "address"
			},
			{
				"name": "value",
				"type": "uint256"
			},
			{
				"name": "data",
				"type": "bytes"
			}
		],
		"name": "submitTransaction",
		"outputs": [
			{
				"name": "transactionId",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "MAX_OWNER_COUNT",
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
		"name": "required",
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
		"constant": false,
		"inputs": [
			{
				"name": "transactionId",
				"type": "uint256"
			}
		],
		"name": "executeTransaction",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"payable": true,
		"stateMutability": "payable",
		"type": "fallback"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "sender",
				"type": "address"
			},
			{
				"indexed": true,
				"name": "transactionId",
				"type": "uint256"
			}
		],
		"name": "Confirmation",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "sender",
				"type": "address"
			},
			{
				"indexed": true,
				"name": "transactionId",
				"type": "uint256"
			}
		],
		"name": "Revocation",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "transactionId",
				"type": "uint256"
			}
		],
		"name": "Submission",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "transactionId",
				"type": "uint256"
			}
		],
		"name": "Execution",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "transactionId",
				"type": "uint256"
			}
		],
		"name": "ExecutionFailure",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "sender",
				"type": "address"
			},
			{
				"indexed": false,
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "Deposit",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "owner",
				"type": "address"
			}
		],
		"name": "OwnerAddition",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "owner",
				"type": "address"
			}
		],
		"name": "OwnerRemoval",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"name": "required",
				"type": "uint256"
			}
		],
		"name": "RequirementChange",
		"type": "event"
	}
];
var MyContract = web3.eth.contract(abi);
var myContractInstance = MyContract.at("0xaa588d3737b611bafd7bd713445b314bd453a5c8");

// myContractInstance.submitTransaction(web3.eth.accounts[3],1*1e18,'',{from: web3.eth.accounts[0],  gas: '4700000'},function(err, result){
// 	console.log(err);
// 	console.log(result);
// });

// myContractInstance.confirmTransaction(1,{from: web3.eth.accounts[1],  gas: '4700000'},function(err, result){
// 	console.log(err);
// 	console.log(result);
// });

// myContractInstance.getOwners(function(err, result){
// 	console.log(err);
// 	console.log(result);
// });


// myContractInstance.transactionCount(function(err, result){
// 	console.log(err);
// 	console.log(result.toNumber());
// });

// myContractInstance.confirmations(1,function(err, result){
// 	console.log(err);
// 	console.log(result);
// });

myContractInstance.getConfirmationCount(1,function(err, result){
	console.log(err);
	console.log(result.toNumber());
});



