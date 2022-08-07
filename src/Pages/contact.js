import React from "react";

export function ContactPage (){
    const savedArray = JSON.parse(localStorage.getItem("key"))
    if(savedArray == null){return}
    return(
        <>
        {
            <div className="card">
                <img src={savedArray[0]} className="card-img-top" id="img" alt="..." />
                <div className="card-body">
                    <h5 className="card-title" id="title">{savedArray[1]}</h5>
                    <p className="card-text" id="messege">{savedArray[2]}</p>
                    {/* <button href="#" className="btn btn-primary">Add the lesson</button> */}
                </div>
            </div>
        }
        </>
    )
}