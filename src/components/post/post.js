import React, { useEffect, useState } from "react";

function Post() {
    const [posts, setPosts] = useState([])
    const [sortState, setSortState] = useState(false);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((x) => { return x.json() })
            .then((response) => { setPosts(response) })
    })
    return (
        <div className="container mb-5">
            <button className="btn btn-primary m-2" onClick={() => {
                if (sortState) {
                    setSortState(false)
                } else {
                    setSortState(true)
                }
            }}>Sort</button>
            {
                posts.sort((a, b) => sortState ? (a.id - b.id) : (b.id - a.id)).map((item) => {
                    return (
                        <ul className="list-group" key={item.id}>
                            <li className="list-group-item">
                                <h3>{item.title}</h3>
                                <p>{item.body}</p>
                            </li>
                        </ul>
                    )
                })}
        </div>
    )
}

export default Post;