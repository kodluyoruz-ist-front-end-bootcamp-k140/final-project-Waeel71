import React, { useEffect, useState } from "react";
export function CoursesPage() {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch("https://api.jsonbin.io/v3/b/62ea6c6e70a3846ee752bb43?meta=false")
            .then((X) => { return X.json() })
            .then((response) => {
                setData(response)
            })
    })
    return (
        <>
            {data.sort((a, b) => a - b).map((item,index) => {
                return (
                    <div className="card" key={index}>
                        <img src={item.imageUrl} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{item.name}</h5>
                            <p className="card-text">{item.messege}</p>
                            <button href="#" className="btn btn-primary" onClick={()=> {
                                
                            }}>Add the lesson</button>
                        </div>