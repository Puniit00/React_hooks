import React, {useState,useEffect} from 'react'

function UseEffectanduseState() {

    const [count, setCount]= useState(0);
    const [name, setName]= useState('');

    useEffect(() => {
        console.log('updating title')
     document.title= `You clicked ${count} times`
    },[count]) //[count] allows useeffect to trigger only if count is changing whereas [] this will allow use effect to run once at page run only
    return (
        <div>
            <input type= 'text' value={name} onChange={(e)=>{
                setName(e.target.value)
            }}/>

            <button onClick={()=> setCount((prevCount=> prevCount+1))}>Clicked {count} times</button>
        </div>
    )
}

export default UseEffectanduseState
