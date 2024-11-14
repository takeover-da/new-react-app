import './App.css';
import React, {useState} from 'react';
import RadioSection from './component/RadioSection';
import InputSection from './component/InputSection';
import TotalSection from './component/TotalSection';
import TransactionList from './component/TransactionList';


function App() {

  const [totalAmount, setTotalAmount] = useState(0);  // 총금액
  const [transactions, setTransactions] = useState([]);  // 거래 리스트
  const [transactionType, setTransactionType] = useState('income');  // 수입/지출

  // 추가 버튼 함수
  const addTransaction = (amount) => {
    const transactionAmount = parseInt(amount, 10);
    if (isNaN(transactionAmount)) return;

    // 수입/ 지출 버튼 함수
    const newTotal = transactionType === 'income'
    ? totalAmount + transactionAmount
    : totalAmount - transactionAmount;
    setTotalAmount(newTotal);

    // 거래 내역
    const newTransaction = {
      id: transactionAmount.length + 1,
      amount: transactionAmount,
      type: transactionType === 'income' ? '수입' : '지출',
    };
    setTransactions([...transactions, newTransaction]);
  };

    // 삭제 버튼 함수
    const deleteTransaction = (id, amount, type) => {
      const updatedTransactions = transactions.filter((transaction) => transaction.id !== id);
      setTransactions(updatedTransactions);

      const adjustedTotal = type === '수입'
        ? totalAmount + amount
        : totalAmount - amount;
      setTotalAmount(adjustedTotal);
  };

  return (
    <div>
      <h1>가계부</h1>
      
      {/* 수입/지출 체크박스 */}
      <RadioSection
        transactionType={transactionType}
        setTransactionType={setTransactionType}
      />

      {/* 금액 입력 */}
      <InputSection
        addTransaction={addTransaction}
      />

      {/* 총 금액 */}
      <TotalSection
        totalAmount={totalAmount}
      />

      {/* 거래 항목 리스트 */}
      <TransactionList
        transactions={transactions}
        deleteTransaction={deleteTransaction}
      />

    </div>
  );
}

export default App;
