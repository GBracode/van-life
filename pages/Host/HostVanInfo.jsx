import React from "react"
import { useOutletContext } from "react-router-dom"

export default function HostVanInfo() {
    const { currentVan } = useOutletContext()
    
    return (
        <section className="host-van-detail-info">
            <h4>Name: <span>{currentVan.name}</span></h4>
            <h4>Category: <span>{currentVan.type}</span></h4>
            <h4>Description: <span>{currentVan.description}</span></h4>
            <h4>Visibility: <span>Public</span></h4>
        </section>
    )
}

// // {
//     id: "1", name: "Modest Explorer", 
//     price: 60, 
//     description: "The Modest Explorer is a van designed to get you out of the 
//     house and into nature. This beauty is equipped with solar panels, a 
//     composting toilet, a water tank and kitchenette. The idea is that you can 
//     pack up your home and escape for a weekend or even longer!", 
//     imageUrl: "https://assets.scrimba.com/advanced-react/react-router/modest-explorer.png", 
//     type: "simple", 
//     hostId: "123"}