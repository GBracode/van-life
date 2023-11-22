import React from "react"
import { useParams, Link } from "react-router-dom"


export default function HostVanDetail () {
    const { id } = useParams()
    const [currentVan, setCurrentVan] = React.useState(null)

    React.useEffect(() => {
        fetch(`/api/host/vans/${id}`)
            .then(res => res.json())
            .then(data => setCurrentVan(data.vans))
    },[])

    if (!currentVan) {
        return <h1>Loading...</h1>
    }

    return (
    <section>
        <Link
            to=".."
            relative="path"
            className="back-button"
        >&larr; <span>Back to all vans</span></Link>

        <div className="host-van-detail-layout-container">
            <div className="host-van-detail">                
                <img src={currentVan.imageUrl} alt="" />
                <div className="host-van-detail-info-text">
                    <i
                        className={`van-type van-type-${currentVan.type}`}
                    >
                        {currentVan.type}
                    </i>
                    <h3>{currentVan.name}</h3>
                    <h4>{currentVan.price}/day</h4>

                </div>
            </div>
        </div>
    </section>

    )
}











// const hostVansDetEls = currentVan.map(van => ( 
//     <Link
//         to={`/host/vans/${van.id}`}
//         key={van.id}
//         className=""
//     > 
//         <div className="host-van-single" key={van.id}>
//             <img src={van.imageUrl} alt={`Photo of ${van.name}`} />
//             <div className="host-van-info">
//                 <h3>{van.name}</h3>
//                 <p>${van.price}/day</p>
//             </div>
//         </div>
//     </Link>
// ))