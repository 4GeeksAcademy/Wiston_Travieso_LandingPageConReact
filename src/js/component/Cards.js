import React from 'react'
import Card from './Card'

const Cards = () => {
    return (
        <div className="row m-2">
            <div className="col">
                <Card image="https://images.unsplash.com/photo-1722903029367-5ed163ae5fef?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8NTAwJTIweCUyMDMyNXxlbnwwfHwwfHx8MA%3D%3D"
                    title="Card 1"
                    description="Description Card 1" />
            </div>
            <div className="col">
                <Card image="https://images.unsplash.com/photo-1727378743499-74a47a1feec4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8NTAwJTIweCUyMDMyNXxlbnwwfHwwfHx8MA%3D%3D"
                title="Card 2"
                description="Description Card 2"
                />
            </div>
            <div className="col">
                <Card image="https://images.unsplash.com/photo-1722096703718-a04f14ecde52?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8NTAwJTIweCUyMDMyNXxlbnwwfHwwfHx8MA%3D%3D"
                title="Card 3"
                description="Description Card 3"
                />
            </div>
            <div className="col">
                <Card 
                image="https://images.unsplash.com/photo-1727461442528-5b0b98644c66?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8NTAwJTIweCUyMDMyNXxlbnwwfHwwfHx8MA%3D%3D"
                title="Card 4"
                description="Description Card 4"
                />
            </div>
        </div>
    )
}

export default Cards