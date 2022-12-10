import React, { useEffect } from 'react'
import { useParams, useSearchParams } from 'react-router-dom'

function ViewUser() {
    const params= useParams();
    const searchParams= useSearchParams() 
    useEffect(() =>{

    },[])
  return (
    <div className='container'>
        <div className='row'>
            <div className='col-lg-6'>
                username:p1
            </div>
            <div className='col-lg-6'>

            </div>

        </div>
      
    </div>
  )
}

export default ViewUser
