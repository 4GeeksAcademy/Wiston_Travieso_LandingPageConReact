import React from 'react'
import Cards from './Cards'

const Card = ({image, title, description}) => {
    return (
        <div className="card text-center" style={{width: "18rem"}}>
            <img src={image} alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <a href="#" className="btn btn-primary">Find out More!</a>
                </div>
        </div>
    )
}

export default Card