import React from "react"
import { useParams, Link, Outlet, NavLink } from "react-router-dom"


export default function HostVanDetail () {
    const { id } = useParams()
    const [currentVan, setCurrentVan] = React.useState(null)
   
    const activeStyles = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616"
    }

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

            <nav className="host-van-detail-nav">
                
                    <NavLink
                        to="."
                        end
                        style={({isActive}) => isActive ? activeStyles : null}
                    >
                        Details
                    </NavLink>

                    <NavLink
                        to="pricing"
                        style={({isActive}) => isActive ? activeStyles : null}
                    >
                        Pricing
                    </NavLink>

                    <NavLink
                        to="photos"
                        style={({isActive}) => isActive ? activeStyles : null}
                    >
                        Photos
                    </NavLink>
                
            </nav>

            <Outlet context={{ currentVan }} />
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