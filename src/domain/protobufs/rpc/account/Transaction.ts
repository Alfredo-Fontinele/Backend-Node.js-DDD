// Original file: src/domain/protobufs/account.proto


export interface Transaction {
  'type'?: (string);
  'amount'?: (number | string);
}

export interface Transaction__Output {
  'type': (string);
  'amount': (number);
}
