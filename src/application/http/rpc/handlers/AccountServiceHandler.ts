import { ServerUnaryCall, sendUnaryData } from "@grpc/grpc-js";
import { AccountCreditRequest__Output } from "../../../../domain/protobufs/rpc/account/AccountCreditRequest";
import { AccountCreditResponse } from "../../../../domain/protobufs/rpc/account/AccountCreditResponse";
import { AccountDebitRequest__Output } from "../../../../domain/protobufs/rpc/account/AccountDebitRequest";
import { AccountDebitResponse } from "../../../../domain/protobufs/rpc/account/AccountDebitResponse";
import { AccountInfoRequest__Output } from "../../../../domain/protobufs/rpc/account/AccountInfoRequest";
import { AccountInfoResponse } from "../../../../domain/protobufs/rpc/account/AccountInfoResponse";
import { AccountServiceHandlers } from "../../../../domain/protobufs/rpc/account/AccountService";
import { AccountTransferRequest__Output } from "../../../../domain/protobufs/rpc/account/AccountTransferRequest";
import { AccountTransferResponse } from "../../../../domain/protobufs/rpc/account/AccountTransferResponse";

export const AccountServiceHandler: AccountServiceHandlers = {
  credit: function (
    call: ServerUnaryCall<AccountCreditRequest__Output, AccountCreditResponse>,
    callback: sendUnaryData<AccountCreditResponse>
  ): void {
    callback(null, {});
  },
  debit: function (
    call: ServerUnaryCall<AccountDebitRequest__Output, AccountDebitResponse>,
    callback: sendUnaryData<AccountDebitResponse>
  ): void {
    callback(null, {});
  },
  getAccountInfo: function (
    call: ServerUnaryCall<AccountInfoRequest__Output, AccountInfoResponse>,
    callback: sendUnaryData<AccountInfoResponse>
  ): void {
    callback(null, {});
  },
  transfer: function (
    call: ServerUnaryCall<
      AccountTransferRequest__Output,
      AccountTransferResponse
    >,
    callback: sendUnaryData<AccountTransferResponse>
  ): void {
    throw new Error("Function not implemented.");
  },
};
