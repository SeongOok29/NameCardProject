import React, { useState, useEffect } from 'react';
import web3 from './web3';  // Web3 인스턴스 가져오기
import contractInstance from './contractInstance'; // 스마트 컨트랙트 인스턴스 가져오기
import CardList from './CardList';
import BalanceDisplay from './BalanceDisplay';

function Home() {
    const [balance, setBalance] = useState(0);

    useEffect(() => {
        async function fetchBalance() {
            const accounts = await web3.eth.getAccounts();
            const balance = await contractInstance.methods.balanceOf(accounts[0]).call();
            setBalance(balance);
        }

        fetchBalance();
    }, []);

    return (
        <div>
            <h2>Home Page</h2>
            <BalanceDisplay balance={balance} />
            <CardList />
        </div>
    );
}

export default Home;
