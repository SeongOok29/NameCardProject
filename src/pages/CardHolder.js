// pages/CardHolder.js
import React, { useState, useEffect } from 'react';

function CardHolder() {
  const [cards, setCards] = useState([]);
  
  // 예시로 더미 데이터를 사용하였습니다.
  useEffect(() => {
    // 실제로는 백엔드나 XRPL API에서 사용자가 수집한 명함 목록을 가져옵니다.
    setCards([
      { id: 1, name: 'John Doe', company: 'ABC Corp', position: 'Manager', dateAdded: '2023-10-15' },
      { id: 2, name: 'Jane Smith', company: 'XYZ Inc', position: 'Developer', dateAdded: '2023-10-14' }
    ]);
  }, []);

  return (
    <div className="cardholder-container">
      <h1>Card Holder</h1>

      <ul className="card-list">
        {cards.map(card => (
          <li key={card.id} className="card-item">
            <h2>{card.name}</h2>
            <p>{card.position} at {card.company}</p>
            <p>Date Added: {card.dateAdded}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CardHolder;
