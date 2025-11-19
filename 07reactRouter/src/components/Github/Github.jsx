// import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
export default function Github() {

    const data = useLoaderData()

    // const [data, setData] = useState([])
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/histeshchoudhary')
    //     .then(response => response.json())
    //     .then(data=>{
    //         console.log(data);
    //         setData(data)
    //     })
    // },[])

  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
      Github Followers: {data.followers}
      <img src='https://avatars.githubusercontent.com/u/11613311?v=4' alt="Git picture" width={300} />
    </div>
  )
}


// eslint-disable-next-line react-refresh/only-export-components
export const githubInfoLoader = async ()=>{
    const response = await fetch('https://api.github.com/users/histeshchoudhary')
    return response.json()
    
    
}
