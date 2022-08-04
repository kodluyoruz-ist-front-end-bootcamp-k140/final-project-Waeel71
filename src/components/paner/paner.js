import React from "react";
import "./panner.css"
import courseimg from "../images/10088.png"

export function Panner() {
    return (
        <div className="w-100 bg-img">
            <img src={courseimg} alt={"..."} className="img-s" />
            <div className="text-space">
                <h3 className="card-title m-2">Card Place</h3>
                <p className="card-text">this site you can find all coding courses you can learn to code in fun ways are you ready to learn.</p>
                {/* <a href="#" class="btn btn-danger">Go somewhere</a> */}
            </div>
        </div>
    )
}