export type Config = {
    instaBaseUrl: string,
    initiateExitPath: string,
    getSupportedTokensPath: string,
    checkRequestStatusPath: string,
    checkTransferStatusPath: string,
    liquidityPoolManagerABI: object[],
    erc20TokenABI: object[],
    defaultSupportedTokens: Map<number,SupportedToken[]>,
    supportedNetworkIds: number[],
    defaultExitCheckInterval: number,
    maxDepositCheckCallbackCount: number
}

export type CheckStatusRequest = {
    tokenAddress: string,
    amount: number,
    fromChainId: number,
    toChainId: number
}

export type CheckStatusResponse = {
    code: number,
    message: string
}

export type SupportedToken = {
    tokenSymbol: string,
    decimal: number,
    address: string
}

export type Options = {
    fromChainId : string,
    toChainId: string,
    defaultAccount: string,
    debug: string,
    infiniteApproval: boolean,
    exitCheckInterval: number, // Interval in milli seconds to check for exit status
    onFundsTransfered: (data: ExitResponse) => void
}

export type FetchOption = {
    body?: string,
    method: string,
    headers: any
}

export enum SignatureType {
    PERSONAL_SIGN,
    EIP712_SIGN
}

export type ExitRequest = {
    sender: string,
    receiver: string,
    tokenAddress: string,
    amount: string,
    fromChainId?: string,
    toChainId?: string
}

export type CheckDepositStatusRequest = {
    depositHash: string,
    fromChainId: number
}

export type ExitResponse = {
    code: number,
    message: string,
    statusCode: number,
    fromChainId: number,
    toChainId: number,
    amount: string,
    tokenAddress: string,
    depositHash: string,
    exitHash: string
}

export type DepositRequest = {
    sender: string,
    receiver: string,
    tokenAddress: string,
    depositContractAddress: string,
    amount: string,
    fromChainId: string,
    toChainId: string
}

export type GenerateTransactionIdParams = {
    data: ExitRequest,
    signatureType: SignatureType
}