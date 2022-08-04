import React, { useContext } from "react";
import CardContext from "../../context/cardContext";
import "./card.css"
export function Card() {
    const Cdata = useContext(CardContext)
    return (
            <div className="card">
                <img src={Cdata.imgUrl} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{Cdata.title}</h5>
                    <p className="card-text">{Cdata.description}</p>
                    {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                </div>
            </div>
    )
}