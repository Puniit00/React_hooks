import React, {useState, useEffect} from 'react'
import axios from 'axios'

function FetchingUsingHooks() {
    const [id, setId] = useState(0)
    const [post, setPost]= useState('')
    const [idFromButtonClick, setIdFromButtonClick]= useState(0)

    const handler = ()=>{
        setIdFromButtonClick(id)
    }

    useEffect(() => {
       axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
       .then(response=>{
            setPost(response.data);
            console.log(post)
       })
       .catch(error=>{
           console.log(error.Message);
       })
    },[idFromButtonClick])
    return (
        <div>
            <input type='number' value={id} onChange={(e)=>{
                setId(e.target.value)
            }}/>

            <button type="button" onClick={handler}>Get Data </button>
            
            <p>{post.title}</p>
        </div>
    )
}

export default FetchingUsingHooks
