
import { BigNumberish } from "@ethersproject/bignumber";
import { CallType, Transaction } from "./types";


const withdrawTransaction = (tokenAddress: string, withdrawAmount: BigNumberish): Transaction => ({
  to: tokenAddress,
  typeCode: CallType.Call,
  data: "80001",
  value: withdrawAmount.toString(),
});


