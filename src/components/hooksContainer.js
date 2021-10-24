import React, {useState} from 'react'

function HooksContainer() {

    const initialState = 0
    const [count, setCount] = useState(0)

    const fakeIncrement = ()=>{
        for(let i=0;i<10;i++){
            setCount(count+1) //loop will run 10 times but count will never retain its old value
        }
    }

    const increment = ()=>{
        for(let i=0;i<10;i++){
            setCount(prevcount=>prevcount+1) //prevcount will retain previous state value
        }
    }
    return (
        <div>
        {count}
        <button onClick={()=>setCount((prevcount)=>prevcount+1)}>increment</button>
        <button onClick={()=>setCount((prevcount)=>prevcount-1)}>decrement</button>
        <button onClick={()=>setCount(initialState)}>Reset</button>
        <button onClick={fakeIncrement}>fake increment 10</button>
        <button onClick={increment}>increment 10</button>
        </div>
    )
}

export default HooksContainer
