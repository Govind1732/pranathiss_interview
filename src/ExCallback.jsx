import React, { useState, useCallback } from 'react';

const ExCallback = () => {
    const [count, setCount] = useState(0);
    const increment = useCallback(() => {
        setCount(prevCount => prevCount + 1);
    }, []);

    return (
        <div>
            <h2>Click Counter</h2>
            <p>Count: {count}</p>
            <button onClick={increment}>Increment</button>
        </div>
    );
};

export default ExCallback;
