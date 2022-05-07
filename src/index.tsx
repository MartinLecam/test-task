import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { TransactionsService } from './services/TransactionsService';
import { loadTransactions } from './utils/functions';
import { BrowserRouter } from 'react-router-dom';

export const transactionService: TransactionsService = new TransactionsService({
  transactions: loadTransactions()
});

ReactDOM.render(
  <BrowserRouter>
      <App />
  </BrowserRouter>,
  document.getElementById('root')
);

