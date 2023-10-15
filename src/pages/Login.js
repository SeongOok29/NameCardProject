// pages/Login.js
import React, { useState } from 'react';

function Login() {
  const [walletAddress, setWalletAddress] = useState('');
  
  const handleLogin = () => {
    // XRPL 지갑 연결 로직
    // 연결 성공 시, Home 페이지로 리다이렉트
  }

  return (
    <div className="login-container">
      <h1>Connect Your Wallet</h1>
      <div>
        <label>Enter Wallet Address:</label>
        <input 
          type="text" 
          value={walletAddress} 
          onChange={(e) => setWalletAddress(e.target.value)}
        />
      </div>
      <button onClick={handleLogin}>Connect</button>
    </div>
  );
}

export default Login;
