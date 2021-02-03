let config: any = {};

const RESPONSE_CODES = {
	ERROR_RESPONSE: 'B500',
	API_NOT_FOUND : 'B501',
	USER_CONTRACT_NOT_FOUND: 'B502',
	USER_NOT_LOGGED_IN: 'B503',
	USER_ACCOUNT_NOT_FOUND: 'B504',
	NETWORK_ID_MISMATCH: 'B505',
	BICONOMY_NOT_INITIALIZED: 'B506',
	NETWORK_ID_NOT_FOUND: 'B507',
	SMART_CONTRACT_NOT_FOUND: 'B508',
	DAPP_NOT_FOUND: 'B509',
	INVALID_PAYLOAD: 'B510',
	DASHBOARD_DATA_MISMATCH: 'B511',
	SUCCESS_RESPONSE: 'B200',
	USER_CONTRACT_CREATION_FAILED:'B512',
	EVENT_NOT_SUPPORTED: 'B513',
	INVALID_DATA: 'B514'
};

config.instaBaseUrl = "http://localhost:3000/api/v1";
config.endPoint = "/insta-exit/initiate-exit";

const STATUS = {
	INIT: 'init',
	BICONOMY_READY:'biconomy_ready',
	NO_DATA:'no_data'
};

export default {
	config,
	RESPONSE_CODES,
	STATUS
}