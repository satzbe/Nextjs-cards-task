import { cardProps } from '@/types'
import React from 'react'

const Card = ({ id, url, name }: cardProps) => {
    return (
        <div className="bg-white shadow p-4 rounded-md hover:scale-110">
            <img src={url} alt={id} className='w-full h-60 rounded-md ' />
            <h3 className="text-lg font-bold mb-2">{name}</h3>
        </div>
    )
}

export default Card
