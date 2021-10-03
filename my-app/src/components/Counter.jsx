import React, {useState} from 'react';

const Counter = () => {
    const [likes, stateLikes] = useState(5)
    let increment = () => {
        stateLikes(likes + 1)
    }
    let decrement = () => {
        stateLikes(likes - 1)
    }

    return (
        <div>
            <p>Likes is <b>{likes}</b></p>
            <button onClick={increment}> Increment</button>
            <button onClick={decrement}> Decrement</button>
        </div>
    );
};

export default Counter;