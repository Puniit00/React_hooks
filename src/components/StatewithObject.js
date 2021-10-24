import React, {useState} from 'react'

function StatewithObject() {

    const [name,setName] = useState({fristName:'', lastName: ''})
    return (
        <div>

        FristName : {name.firstName}<br/>
        LastName: {name.lastName}<br/>

        firstname not holding all its properties:
            <input type='text' value={name.firstName} onChange={
                (e)=>setName({firstName: e.target.value})
            }></input>

            <br/>
            Lastname not holding all its properties:
            <input type='text' value={name.lastName} onChange={
                (e)=>setName({lastName: e.target.value})
            }></input>

            <br/>
            Firstname holding all its properties:
            <input type='text' value={name.firstName} onChange={
                (e)=>setName({...name,firstName: e.target.value})
            }></input>
            
            <br/>
            Lastname holding all its properties:
            <input type='text' value={name.lastName} onChange={
                (e)=>setName({...name,lastName: e.target.value})
            }></input>
        </div>
    )
}

export default StatewithObject
