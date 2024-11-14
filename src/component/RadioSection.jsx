import React from 'react'


function RadioSection({ transactionType, setTransactionType}) {
  return (
    <div>
      <div class="radio-section">
        
        <label>
        수입 <input 
          type='radio' 
          name="transactionType" 
          value='income'
          checked={transactionType === 'income'}
          onChange={() => setTransactionType('income')}
           />
        </label>

        <label>
        지출 <input 
          type='radio' 
          name="transactionType" 
          value='expense' 
          checked={transactionType === 'expense'}
          onClick={() => setTransactionType('expense')}
          />
        </label>

      </div>
    </div>
  );
}

export default RadioSection