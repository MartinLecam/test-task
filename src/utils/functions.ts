import Constants from './constants';
import { Transaction } from '../services/TransactionsService';
import { Guid } from "guid-typescript";

export const loadTransactions = () => {
    const pastTransactions = (Constants.pastTransactions as { [key: string]: any});
    const transactions = new Array<Transaction>();
    // eslint-disable-next-line
    Object.keys(pastTransactions).map(key => {

        const transaction: Transaction = {
            id: pastTransactions[key].id ?? Guid.create(),
            from: Constants.publicAddress,
            to: pastTransactions[key].recipient,
            value: pastTransactions[key].amount
        };

        transactions.push(transaction);
    });

    return transactions;
};

export const ellipsisText = (text: string): string => {
    return `${text.substring(0, 6)}...${text.substring(38)}`; 
}