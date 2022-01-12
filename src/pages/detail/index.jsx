import React from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'


export default function Detail() {
    let navigate = useNavigate();
    let params = useParams();
    let location = useLocation();
    return (
        <div className='flex justify-center pt-5'>
            <div className="flex flex-col w-60 gap-3">
            <h3>Detail</h3>
            <p>location : {location.pathname}</p>
            <p>{params.id}</p>
            <button onClick={()=> navigate(-1)} className='px-10 py-2 rounded bg-blue-500 text-white'>kembali</button>

            </div>
        </div>
    )
}
