// Original file: src/domain/protobufs/account.proto

import type { Transaction as _account_Transaction, Transaction__Output as _account_Transaction__Output } from '../account/Transaction';

export interface Account {
  'bank'?: (string);
  'branch'?: (string);
  'account'?: (string);
  'document'?: (string);
  'transactions'?: (_account_Transaction)[];
}

export interface Account__Output {
  'bank': (string);
  'branch': (string);
  'account': (string);
  'document': (string);
  'transactions': (_account_Transaction__Output)[];
}
