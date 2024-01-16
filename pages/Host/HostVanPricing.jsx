import React from "react"
import { useOutletContext } from "react-router-dom"

export default function HostVanPricing () {
    const { currentVan } = useOutletContext()
    return (
        <h2 className="host-van-price">${currentVan.price}<span>/day</span></h2>
    )
}