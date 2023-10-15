// pages/Notification.js
import React, { useState, useEffect } from 'react';

function Notification() {
  const [notifications, setNotifications] = useState([]);
  
  // 예시로 더미 데이터를 사용하였습니다.
  useEffect(() => {
    // 실제로는 백엔드나 XRPL API에서 사용자의 알림 목록을 가져옵니다.
    setNotifications([
      { id: 1, message: 'John Doe shared a card with you.', dateReceived: '2023-10-15' },
      { id: 2, message: 'You received 10 tokens for sharing a card with Jane Smith.', dateReceived: '2023-10-14' }
    ]);
  }, []);

  return (
    <div className="notification-container">
      <h1>Notifications</h1>

      <ul className="notification-list">
        {notifications.map(notification => (
          <li key={notification.id} className="notification-item">
            <p>{notification.message}</p>
            <span>Date: {notification.dateReceived}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Notification;
