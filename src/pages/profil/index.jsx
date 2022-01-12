import React from 'react'
import { useParams } from 'react-router-dom'

export default function Profil() {
    let params = useParams();
    console.log(params);
    return (
        <div className='text-center pt-5'>
            <h3 className='text-xl font-bold'>Profil {params.nama}</h3>
        </div>
    )
}
