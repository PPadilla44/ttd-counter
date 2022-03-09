import React, { useState } from 'react'

const Counter = () => {

    const [counter, setCounter] = useState(0);

    const handleCounter = (amount: number) => {
        const currentCount = counter + amount;
        if (currentCount >= 0) {
            setCounter(currentCount)
        }
    }

    return (
        <div>
            <h1>This is counter app</h1>
            <button id="increment-btn" onClick={() => handleCounter(1)}>Increment</button>
            <button id="decrement-btn" onClick={() => handleCounter(-1)}>Decrement</button>
            <div id="counter-value">{counter}</div>
        </div>
    )
}

export default Counter