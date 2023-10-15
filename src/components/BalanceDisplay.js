import React from 'react';

function BalanceDisplay({ balance }) {
    return (
        <div>
            <h3>Your NCT Balance</h3>
            <p>{balance} NCT</p>
        </div>
    );
}

export default BalanceDisplay;
