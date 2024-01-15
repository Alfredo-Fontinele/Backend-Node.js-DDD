// Original file: src/domain/protobufs/account.proto


export interface AccountDebitRequest {
  'document'?: (string);
  'amount'?: (number | string);
}

export interface AccountDebitRequest__Output {
  'document': (string);
  'amount': (number);
}
