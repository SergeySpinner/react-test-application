import React, {useState} from 'react';

const Inputs = () => {
    const [input, setInput] = useState('Cringe') //React hook

    let changeText = (string) => {
        setInput(string)
        console.log(`Text: ${input}`)
    }

    return (
        <div className="inputs">
            <p><b>{input}</b></p>
            <input
                type="text"
                value={input}
                onChange={event => {
                    changeText(event.target.value)
                }}
            />
        </div>
    );
};

export default Inputs;