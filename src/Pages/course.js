import React, { useEffect, useState } from "react";
export function CoursesPage() {
    const [data, setData] = useState([])
    let image = ""
    let title = ""
    let messege = ""
    useEffect(() => {
        fetch("https://api.npoint.io/e4ebb20fefc1e75cab6d")
            .then((X) => { return X.json() })
            .then((response) => {
                setData(response)
            })
    })
    return (
        <>
            {data.sort((a, b) => a - b).map((item, index) => {
                return (
                    <div className="card" key={index} onMouseDown={(e)=>{
                        image = e.currentTarget.querySelector("#img").src
                        title = e.currentTarget.querySelector("#title").innerHTML
                        messege = e.currentTarget.querySelector("#messege").innerHTML
                    }}>
                        <img src={item.imageUrl} className="card-img-top" id="img" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title" id="title">{item.name}</h5>
                            <p className="card-text" id="messege">{item.messege}</p>
                            <button href="#" className="btn btn-primary" onClick={() => {
                                const array = [image,title,messege]
                                const savedArray = JSON.stringify(array)
                                localStorage.setItem("key", savedArray)
                            }}>Add the lesson</button>
                        </div>
                    </div>
                )
            })}
        </>
    )
}