// pages/MyPage.js
import React, { useState, useEffect } from 'react';

function MyPage() {
  const [transactions, setTransactions] = useState([]);
  
  // 예시로 더미 데이터를 사용하였습니다.
  useEffect(() => {
    // 실제로는 백엔드나 XRPL API에서 사용자의 트랜잭션을 가져옵니다.
    setTransactions([
      { id: 1, type: 'Send', amount: '100 XRP', date: '2023-10-15' },
      { id: 2, type: 'Receive', amount: '50 XRP', date: '2023-10-14' }
    ]);
  }, []);

  return (
    <div className="mypage-container">
      <h1>My Page</h1>

      <section className="transactions">
        <h2>Transactions</h2>
        <ul>
          {transactions.map(tx => (
            <li key={tx.id}>
              {tx.date} - {tx.type}: {tx.amount}
            </li>
          ))}
        </ul>
      </section>

      <section className="settings">
        <h2>Settings</h2>
        {/* 여기에 사용자 환경설정 관련 UI를 추가할 수 있습니다. */}
      </section>
    </div>
  );
}

export default MyPage;
