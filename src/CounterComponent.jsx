import React, { useState } from 'react'

export default function CounterComponent() {
    const [counter, setCounter] = useState(0);
    const incHandler = () => {
        if (counter >= 0)
            setCounter(counter + 1)

    }
    const decHandler = () => {
        if (counter > 0)
            setCounter(counter - 1)

    }
    return (
        <div>
            <center>
                <h1>counter component</h1>
                <button className="btn btn-primary" onClick={incHandler}>+</button>
                <span className='ms-3 me-3 border p-2 bg-dark text-white'>{counter}</span>
                <button className="btn btn-warning" onClick={decHandler}>-</button>
            </center>
        </div>
    )
}
