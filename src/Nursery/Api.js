
import axios, { formToJSON } from 'axios'
import { useEffect, useState } from 'react'

function Api() {
    const[data, setData] = useState([]);
    useEffect(()=>{
        axios.get('http://localhost:3000/users')
        .then((Response)=>Response.json())
        .then((Response)=>{
            console.log(formToJSON)
            setData(Response.data)
        })
    },[])

  return (
    <div>Api
    {data.map((data)=>{
        return(
            <div>{data.Salary}</div>
        )
    })}
  </div>
  )

}

export default Api