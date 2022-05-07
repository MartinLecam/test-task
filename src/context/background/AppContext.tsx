import { createContext } from 'react';
import { Transaction } from '../../services/TransactionsService';
import { loadTransactions } from '../../utils/functions';
import Constants from '../../utils/constants';

import { IAppState } from './AppState';

type ContextType = {
  state: IAppState,
  addTransaction: (transaction: Transaction) => void
  setState: (state: IAppState) => void
}


export const initAppState: IAppState = {
  transactions: loadTransactions(),
  balance: Constants.accountBalance,
  ethPrice: Constants.ethPrice,
  publicAddress: Constants.publicAddress
};

const AppContext: React.Context<ContextType> = createContext<ContextType>({
  state: initAppState,
  addTransaction: () => {},
  setState: () => {}
});

export default AppContext;
