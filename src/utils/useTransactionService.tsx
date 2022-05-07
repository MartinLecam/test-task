import { useContext, useEffect } from 'react';
import AppContext from '../context/background/AppContext';
import { transactionService } from '../index';
import { Guid } from "guid-typescript";

export default function useTransactionService() {
  const { setState, state, addTransaction } = useContext(AppContext);

  const getTransactions = () => {
    transactionService.getListOfTransactions().then((result) => {
      setState({ ...state, transactions: result });
    });
  };

  const confirmTransaction = (toAddress: string, amount: number) => {
    transactionService
      .addTransaction({
        id: Guid.create(),
        from: state.publicAddress,
        to: toAddress,
        value: amount,
      })
      .then((result) => {
        addTransaction(result);
      });
  };

  useEffect(getTransactions, []);

  return { state, confirmTransaction };
}
