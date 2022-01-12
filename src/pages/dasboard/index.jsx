import React from 'react'
import { useParams } from 'react-router-dom'

export default function Dasboard() {
    let params = useParams();
    return (
        <div className='text-center pt-5'>
            <h3 className='text-xl font-indigo-800 font-bold capitalize'>Dasboard {params.nama}</h3>
        </div>
    )
}
