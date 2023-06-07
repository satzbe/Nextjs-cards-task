import { cardProps } from '@/types'
import React from 'react'

const Card = ({ id, url, name }: cardProps) => {
    return (
        <div className="bg-white rounded shadow p-4">
            <img src={url} alt={id} className='w-full h-60' />
            <h3 className="text-lg font-bold mb-2">{name}</h3>
        </div>
    )
}

export default Card
