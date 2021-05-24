import { Config, SupportedToken } from "./types";

const defaultSupportedTokens: Map<number, SupportedToken[]> = new Map();

// Set Mumbai Network Default Supported Tokens
defaultSupportedTokens.set(80001, [
	{
		"tokenSymbol": "USDT",
		"decimal": 18,
		"address": "0xeaBc4b91d9375796AA4F69cC764A4aB509080A58"
	},
	{
		"tokenSymbol": "USDC",
		"decimal": 6,
		"address": "0xdA5289fCAAF71d52a80A254da614a192b693e977"
	},
	{
		"tokenSymbol": "DAI",
		"decimal": 18,
		"address": "0x27a44456bEDb94DbD59D0f0A14fE977c777fC5C3"
	}
]);

// Set Goerli Network Default Supported Tokens
defaultSupportedTokens.set(5, [
	{
		"tokenSymbol": "USDT",
		"decimal": 18,
		"address": "0x64ef393b6846114bad71e2cb2ccc3e10736b5716"
	},
	{
		"tokenSymbol": "USDC",
		"decimal": 6,
		"address": "0xb5B640E6414b6DeF4FC9B3C1EeF373925effeCcF"
	},
	{
		"tokenSymbol": "DAI",
		"decimal": 18,
		"address": "0x2686eca13186766760a0347ee8eeb5a88710e11b"
	}
]);

const config: Config = {
	hyphenBaseUrl: {
		"test" : "https://hyphen-test-api.biconomy.io/api/v1",
		"staging" : "https://hyphen-staging-api.biconomy.io/api/v1",
		"prod" : "https://hyphen-api.biconomy.io/api/v1"
	},
	initiateExitPath: "/insta-exit/initiate-exit",
	getSupportedTokensPath: "/admin/supported-token/list",
	checkRequestStatusPath: "/insta-exit/system-status",
	getPoolInfoPath: "/insta-exit/get-pool-info",
	checkTransferStatusPath: "/insta-exit/check-status",
	liquidityPoolManagerABI: [{"inputs":[{"internalType":"address","name":"_executorManagerAddress","type":"address"},{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"_trustedForwarder","type":"address"},{"internalType":"uint256","name":"_adminFee","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"asset","type":"address"},{"indexed":true,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":true,"internalType":"address","name":"target","type":"address"}],"name":"AssetSent","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"tokenAddress","type":"address"},{"indexed":true,"internalType":"address","name":"receiver","type":"address"},{"indexed":false,"internalType":"uint256","name":"toChainId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"","type":"uint256"},{"indexed":true,"internalType":"uint256","name":"","type":"uint256"}],"name":"GasUsed","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"tokenAddress","type":"address"},{"indexed":true,"internalType":"address","name":"receiver","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"LiquidityAdded","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"tokenAddress","type":"address"},{"indexed":true,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"LiquidityRemoved","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Paused","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousPauser","type":"address"},{"indexed":true,"internalType":"address","name":"newPauser","type":"address"}],"name":"PauserChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Received","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Unpaused","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"tokenAddress","type":"address"},{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"fundsWithdraw","type":"event"},{"inputs":[],"name":"addNativeLiquidity","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"tokenAddress","type":"address"},{"internalType":"uint256","name":"minCapLimit","type":"uint256"},{"internalType":"uint256","name":"maxCapLimit","type":"uint256"}],"name":"addSupportedToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"tokenAddress","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"addTokenLiquidity","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"adminFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"baseGas","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"newAdminFee","type":"uint256"}],"name":"changeAdminFee","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newPauser","type":"address"}],"name":"changePauser","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"tokenAddress","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"addresspayable","name":"receiver","type":"address"},{"internalType":"bytes","name":"depositHash","type":"bytes"}],"name":"checkHashStatus","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"tokenAddress","type":"address"},{"internalType":"address","name":"receiver","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"toChainId","type":"uint256"}],"name":"depositErc20","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"receiver","type":"address"},{"internalType":"uint256","name":"toChainId","type":"uint256"}],"name":"depositNative","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"getAdminFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getExecutorManager","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"isOwner","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"isPaused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"isPauser","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"forwarder","type":"address"}],"name":"isTrustedForwarder","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"}],"name":"liquidityProvider","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"pauser","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"name":"processedHash","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"removeNativeLiquidity","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"tokenAddress","type":"address"}],"name":"removeSupportedToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"tokenAddress","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"removeTokenLiquidity","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renouncePauser","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"tokenAddress","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"addresspayable","name":"receiver","type":"address"},{"internalType":"bytes","name":"depositHash","type":"bytes"},{"internalType":"uint256","name":"tokenGasPrice","type":"uint256"}],"name":"sendFundsToUser","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"tokenAddress","type":"address"},{"internalType":"uint256","name":"gasOverhead","type":"uint256"}],"name":"setTokenTransferOverhead","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"forwarderAddress","type":"address"}],"name":"setTrustedForwarder","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"supportedToken","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"tokenLiquidity","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"tokenMaxCap","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"tokenMinCap","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"tokenTransferOverhead","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"trustedForwarder","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"unpause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"tokenAddress","type":"address"},{"internalType":"uint256","name":"minCapLimit","type":"uint256"},{"internalType":"uint256","name":"maxCapLimit","type":"uint256"}],"name":"updateTokenCap","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"versionRecipient","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"tokenAddress","type":"address"}],"name":"withdrawErc20","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"withdrawNative","outputs":[],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"}],
	erc20TokenABI: [ { "inputs": [ { "internalType": "string", "name": "name_", "type": "string" }, { "internalType": "string", "name": "symbol_", "type": "string" } ], "stateMutability": "nonpayable", "type": "constructor" }, { "inputs": [ { "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" } ], "name": "approve", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "account", "type": "address" } ], "name": "balanceOf", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "name", "outputs": [ { "internalType": "string", "name": "", "type": "string" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "symbol", "outputs": [ { "internalType": "string", "name": "", "type": "string" } ], "stateMutability": "view", "type": "function" }, {"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"}, { "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "address", "name": "spender", "type": "address" }], "name": "allowance", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" } ],
	proxyWalletFactoryAbi: [
		{
		  "constant": false,
		  "inputs": [],
		  "name": "renounceOwnership",
		  "outputs": [],
		  "payable": false,
		  "stateMutability": "nonpayable",
		  "type": "function"
		},
		{
		  "constant": true,
		  "inputs": [],
		  "name": "getHubAddr",
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
			  "name": "context",
			  "type": "bytes"
			}
		  ],
		  "name": "preRelayedCall",
		  "outputs": [
			{
			  "name": "",
			  "type": "bytes32"
			}
		  ],
		  "payable": false,
		  "stateMutability": "nonpayable",
		  "type": "function"
		},
		{
		  "constant": true,
		  "inputs": [],
		  "name": "owner",
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
		  "constant": true,
		  "inputs": [],
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
		  "inputs": [],
		  "name": "relayHubVersion",
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
			  "name": "context",
			  "type": "bytes"
			},
			{
			  "name": "success",
			  "type": "bool"
			},
			{
			  "name": "actualCharge",
			  "type": "uint256"
			},
			{
			  "name": "preRetVal",
			  "type": "bytes32"
			}
		  ],
		  "name": "postRelayedCall",
		  "outputs": [],
		  "payable": false,
		  "stateMutability": "nonpayable",
		  "type": "function"
		},
		{
		  "constant": false,
		  "inputs": [
			{
			  "name": "newOwner",
			  "type": "address"
			}
		  ],
		  "name": "transferOwnership",
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
			  "name": "oldRelayHub",
			  "type": "address"
			},
			{
			  "indexed": true,
			  "name": "newRelayHub",
			  "type": "address"
			}
		  ],
		  "name": "RelayHubChanged",
		  "type": "event"
		},
		{
		  "anonymous": false,
		  "inputs": [
			{
			  "indexed": true,
			  "name": "previousOwner",
			  "type": "address"
			},
			{
			  "indexed": true,
			  "name": "newOwner",
			  "type": "address"
			}
		  ],
		  "name": "OwnershipTransferred",
		  "type": "event"
		},
		{
		  "constant": false,
		  "inputs": [
			{
			  "name": "gsnModule",
			  "type": "address"
			}
		  ],
		  "name": "setGSNModule",
		  "outputs": [],
		  "payable": false,
		  "stateMutability": "nonpayable",
		  "type": "function"
		},
		{
		  "constant": true,
		  "inputs": [],
		  "name": "getGSNModule",
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
		  "constant": true,
		  "inputs": [],
		  "name": "getImplementation",
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
		  "constant": true,
		  "inputs": [
			{
			  "name": "",
			  "type": "address"
			},
			{
			  "name": "",
			  "type": "address"
			},
			{
			  "name": "",
			  "type": "bytes"
			},
			{
			  "name": "",
			  "type": "uint256"
			},
			{
			  "name": "",
			  "type": "uint256"
			},
			{
			  "name": "",
			  "type": "uint256"
			},
			{
			  "name": "",
			  "type": "uint256"
			},
			{
			  "name": "",
			  "type": "bytes"
			},
			{
			  "name": "",
			  "type": "uint256"
			}
		  ],
		  "name": "acceptRelayedCall",
		  "outputs": [
			{
			  "name": "doCall",
			  "type": "uint256"
			},
			{
			  "name": "context",
			  "type": "bytes"
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
			  "name": "",
			  "type": "bytes"
			}
		  ],
		  "name": "cloneConstructor",
		  "outputs": [],
		  "payable": false,
		  "stateMutability": "nonpayable",
		  "type": "function"
		},
		{
		  "constant": false,
		  "inputs": [
			{
			  "components": [
				{
				  "name": "typeCode",
				  "type": "uint8"
				},
				{
				  "name": "to",
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
			  "name": "calls",
			  "type": "tuple[]"
			}
		  ],
		  "name": "proxy",
		  "outputs": [
			{
			  "name": "returnValues",
			  "type": "bytes[]"
			}
		  ],
		  "payable": true,
		  "stateMutability": "payable",
		  "type": "function"
		}
	  ],
	defaultSupportedTokens,
	supportedNetworkIds: [5, 80001],
	defaultExitCheckInterval: 5000,
	maxDepositCheckCallbackCount: 720
}

const RESPONSE_CODES = {
	ERROR_RESPONSE: 500,
	OK: 144,
	ALREADY_EXISTS: 145,
	UNSUPPORTED_TOKEN: 146,
	NO_LIQUIDITY: 148,
	UNSUPPORTED_NETWORK: 149,
	ALLOWANCE_NOT_GIVEN: 150,
	BAD_REQUEST: 400,
	SUCCESS: 200
};

const EXIT_STATUS = {
	PROCESSING: 1,
	PROCESSED: 2,
	FAILED: 3
}

export {
	config,
	RESPONSE_CODES,
	EXIT_STATUS
}