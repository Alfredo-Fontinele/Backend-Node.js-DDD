// Original file: src/domain/protobufs/account.proto


export interface AccountTransferRequest {
  'accountFromDocument'?: (string);
  'accountToDocument'?: (string);
  'amount'?: (number);
}

export interface AccountTransferRequest__Output {
  'accountFromDocument': (string);
  'accountToDocument': (string);
  'amount': (number);
}
