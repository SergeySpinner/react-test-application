import React, {useState} from 'react'
import Counter from "./components/Counter";

let App = () => {
    const [input, setInput] = useState('Cringe') //React hook

    let changeText = (string) => {
        setInput(string)
        console.log(`Text: ${input}`)
    }

    return (
        <div>
            <p><b>{input}</b></p>
            <input
                type="text"
                value={input}
                onChange={event => {
                    changeText(event.target.value)
                }}
            />

            <Counter />
        </div>
    );
}

export default App;
