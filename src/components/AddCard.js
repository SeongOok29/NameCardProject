import React, { useState } from 'react';

function AddCard() {
  const [name, setName] = useState('');

  const handleSubmit = () => {
    // 이름을 기반으로 새로운 카드 추가 로직
  };

  return (
    <div>
      <h2>Add a New Card</h2>
      <input value={name} onChange={e => setName(e.target.value)} />
      <button onClick={handleSubmit}>Add</button>
    </div>
  );
}
export default AddCard;
