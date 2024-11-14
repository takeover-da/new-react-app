import React from 'react'


const TotalSection = ({totalAmount}) => {
  return (
    <div>

      <div class="total-section">
        <h3> 총 금액: <span>{totalAmount}</span>원 </h3>
      </div>
      
    </div>
  );
};

export default TotalSection