import React, { useState, useMemo } from 'react';

const ExMemo = () => {
    const [count, setCount] = useState(0);
    const isEven = useMemo(() => {
        console.log('Checking if even or odd...');
        return count % 2 === 0;
    }, [count]);

    return (
        <div>
            <p>Count: {count}</p>
            <p>{isEven ? 'Even' : 'Odd'}</p>
            <button onClick={() => setCount((prevCount) => prevCount + 1)}>Increment</button>
        </div>
    );
};

export default ExMemo;
