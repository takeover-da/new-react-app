import React from 'react'


const TransactionList = ({transactions, deleteTransaction}) => {
  return (
    <div className='transaction-list'>

      <ul>
        {transactions.map((transaction) => (
          <li key={transaction.id}>
            ({transaction.type}) {transaction.amount}원
            <button onClick={() => deleteTransaction(transaction.id, transaction.amount, transaction.type)}>
              삭제
            </button>
          </li>
        ))}
      </ul>
      
    </div>
  );
};

export default TransactionList