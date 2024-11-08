import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

function Github() {
    const [data, setData] =useState([])
    useEffect(() => {
        fetch('https://api.github.com/users/hiteshchoudhary')
        .then(Response => Response.json())
        .then(data => setData(data))
    })
  return (
    <div className='text-center text-white m-4 bg-gray-600 p-4 text-3xl'>Github followers: {data.followers}
    <img src={data.avatar_url} alt="Git Picture" width={200} /></div>
    
  )
}

export default Github    