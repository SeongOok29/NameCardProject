import React, { useState, useEffect } from 'react';
import web3 from './web3';  // Web3 인스턴스 가져오기
import contractInstance from './contractInstance'; // 스마트 컨트랙트 인스턴스 가져오기

function CardList() {
    const [cards, setCards] = useState([]);

    useEffect(() => {
        async function fetchCards() {
            const accounts = await web3.eth.getAccounts();
            const cardCount = await contractInstance.methods.getCardCount(accounts[0]).call();
            let fetchedCards = [];
            for(let i = 0; i < cardCount; i++) {
                const card = await contractInstance.methods.getCard(accounts[0], i).call();
                fetchedCards.push(card);
            }
            setCards(fetchedCards);
        }

        fetchCards();
    }, []);

    return (
        <div>
            <h3>Your Cards</h3>
            <ul>
                {cards.map((card, index) => (
                    <li key={index}>
                        Name: {card.name}, Company: {card.company}, Phone: {card.phone}, Email: {card.email}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default CardList;
