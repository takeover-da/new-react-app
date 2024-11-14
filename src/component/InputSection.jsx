import React from 'react'
import { useState } from 'react'


const InputSection = ({addTransaction}) => {
  const [amount, setAmount] = useState('');

  const handleAddTransaction = () => {
    addTransaction(amount);
    setAmount('');
  };

  return (
    <div>

      <div class="input-section">
        금액 <input
        type="text" 
        value={amount} 
        onChange={(e) => setAmount(e.target.value)}
        placeholder="0" 
        />
        <button onClick={handleAddTransaction}>등록</button>
      </div>
      
    </div>
  );
};

export default InputSection