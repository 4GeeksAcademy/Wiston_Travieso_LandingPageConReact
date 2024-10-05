import React from 'react'
import Card from './Card'

const Cards = () => {
    return (
        <div className="row m-2">
            <div className="col">
                <Card />
            </div>
            <div className="col">
                <Card />
            </div>
            <div className="col">
                <Card />
            </div>
            <div className="col">
                <Card />
            </div>
        </div>
    )
}

export default Cards