// Original file: src/domain/protobufs/account.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { AccountCreditRequest as _account_AccountCreditRequest, AccountCreditRequest__Output as _account_AccountCreditRequest__Output } from '../account/AccountCreditRequest';
import type { AccountCreditResponse as _account_AccountCreditResponse, AccountCreditResponse__Output as _account_AccountCreditResponse__Output } from '../account/AccountCreditResponse';
import type { AccountDebitRequest as _account_AccountDebitRequest, AccountDebitRequest__Output as _account_AccountDebitRequest__Output } from '../account/AccountDebitRequest';
import type { AccountDebitResponse as _account_AccountDebitResponse, AccountDebitResponse__Output as _account_AccountDebitResponse__Output } from '../account/AccountDebitResponse';
import type { AccountInfoRequest as _account_AccountInfoRequest, AccountInfoRequest__Output as _account_AccountInfoRequest__Output } from '../account/AccountInfoRequest';
import type { AccountInfoResponse as _account_AccountInfoResponse, AccountInfoResponse__Output as _account_AccountInfoResponse__Output } from '../account/AccountInfoResponse';
import type { AccountTransferRequest as _account_AccountTransferRequest, AccountTransferRequest__Output as _account_AccountTransferRequest__Output } from '../account/AccountTransferRequest';
import type { AccountTransferResponse as _account_AccountTransferResponse, AccountTransferResponse__Output as _account_AccountTransferResponse__Output } from '../account/AccountTransferResponse';

export interface AccountServiceClient extends grpc.Client {
  credit(argument: _account_AccountCreditRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_account_AccountCreditResponse__Output>): grpc.ClientUnaryCall;
  credit(argument: _account_AccountCreditRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_account_AccountCreditResponse__Output>): grpc.ClientUnaryCall;
  credit(argument: _account_AccountCreditRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_account_AccountCreditResponse__Output>): grpc.ClientUnaryCall;
  credit(argument: _account_AccountCreditRequest, callback: grpc.requestCallback<_account_AccountCreditResponse__Output>): grpc.ClientUnaryCall;
  credit(argument: _account_AccountCreditRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_account_AccountCreditResponse__Output>): grpc.ClientUnaryCall;
  credit(argument: _account_AccountCreditRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_account_AccountCreditResponse__Output>): grpc.ClientUnaryCall;
  credit(argument: _account_AccountCreditRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_account_AccountCreditResponse__Output>): grpc.ClientUnaryCall;
  credit(argument: _account_AccountCreditRequest, callback: grpc.requestCallback<_account_AccountCreditResponse__Output>): grpc.ClientUnaryCall;
  
  debit(argument: _account_AccountDebitRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_account_AccountDebitResponse__Output>): grpc.ClientUnaryCall;
  debit(argument: _account_AccountDebitRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_account_AccountDebitResponse__Output>): grpc.ClientUnaryCall;
  debit(argument: _account_AccountDebitRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_account_AccountDebitResponse__Output>): grpc.ClientUnaryCall;
  debit(argument: _account_AccountDebitRequest, callback: grpc.requestCallback<_account_AccountDebitResponse__Output>): grpc.ClientUnaryCall;
  debit(argument: _account_AccountDebitRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_account_AccountDebitResponse__Output>): grpc.ClientUnaryCall;
  debit(argument: _account_AccountDebitRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_account_AccountDebitResponse__Output>): grpc.ClientUnaryCall;
  debit(argument: _account_AccountDebitRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_account_AccountDebitResponse__Output>): grpc.ClientUnaryCall;
  debit(argument: _account_AccountDebitRequest, callback: grpc.requestCallback<_account_AccountDebitResponse__Output>): grpc.ClientUnaryCall;
  
  getAccountInfo(argument: _account_AccountInfoRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_account_AccountInfoResponse__Output>): grpc.ClientUnaryCall;
  getAccountInfo(argument: _account_AccountInfoRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_account_AccountInfoResponse__Output>): grpc.ClientUnaryCall;
  getAccountInfo(argument: _account_AccountInfoRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_account_AccountInfoResponse__Output>): grpc.ClientUnaryCall;
  getAccountInfo(argument: _account_AccountInfoRequest, callback: grpc.requestCallback<_account_AccountInfoResponse__Output>): grpc.ClientUnaryCall;
  getAccountInfo(argument: _account_AccountInfoRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_account_AccountInfoResponse__Output>): grpc.ClientUnaryCall;
  getAccountInfo(argument: _account_AccountInfoRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_account_AccountInfoResponse__Output>): grpc.ClientUnaryCall;
  getAccountInfo(argument: _account_AccountInfoRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_account_AccountInfoResponse__Output>): grpc.ClientUnaryCall;
  getAccountInfo(argument: _account_AccountInfoRequest, callback: grpc.requestCallback<_account_AccountInfoResponse__Output>): grpc.ClientUnaryCall;
  
  transfer(argument: _account_AccountTransferRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_account_AccountTransferResponse__Output>): grpc.ClientUnaryCall;
  transfer(argument: _account_AccountTransferRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_account_AccountTransferResponse__Output>): grpc.ClientUnaryCall;
  transfer(argument: _account_AccountTransferRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_account_AccountTransferResponse__Output>): grpc.ClientUnaryCall;
  transfer(argument: _account_AccountTransferRequest, callback: grpc.requestCallback<_account_AccountTransferResponse__Output>): grpc.ClientUnaryCall;
  transfer(argument: _account_AccountTransferRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_account_AccountTransferResponse__Output>): grpc.ClientUnaryCall;
  transfer(argument: _account_AccountTransferRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_account_AccountTransferResponse__Output>): grpc.ClientUnaryCall;
  transfer(argument: _account_AccountTransferRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_account_AccountTransferResponse__Output>): grpc.ClientUnaryCall;
  transfer(argument: _account_AccountTransferRequest, callback: grpc.requestCallback<_account_AccountTransferResponse__Output>): grpc.ClientUnaryCall;
  
}

export interface AccountServiceHandlers extends grpc.UntypedServiceImplementation {
  credit: grpc.handleUnaryCall<_account_AccountCreditRequest__Output, _account_AccountCreditResponse>;
  
  debit: grpc.handleUnaryCall<_account_AccountDebitRequest__Output, _account_AccountDebitResponse>;
  
  getAccountInfo: grpc.handleUnaryCall<_account_AccountInfoRequest__Output, _account_AccountInfoResponse>;
  
  transfer: grpc.handleUnaryCall<_account_AccountTransferRequest__Output, _account_AccountTransferResponse>;
  
}

export interface AccountServiceDefinition extends grpc.ServiceDefinition {
  credit: MethodDefinition<_account_AccountCreditRequest, _account_AccountCreditResponse, _account_AccountCreditRequest__Output, _account_AccountCreditResponse__Output>
  debit: MethodDefinition<_account_AccountDebitRequest, _account_AccountDebitResponse, _account_AccountDebitRequest__Output, _account_AccountDebitResponse__Output>
  getAccountInfo: MethodDefinition<_account_AccountInfoRequest, _account_AccountInfoResponse, _account_AccountInfoRequest__Output, _account_AccountInfoResponse__Output>
  transfer: MethodDefinition<_account_AccountTransferRequest, _account_AccountTransferResponse, _account_AccountTransferRequest__Output, _account_AccountTransferResponse__Output>
}
