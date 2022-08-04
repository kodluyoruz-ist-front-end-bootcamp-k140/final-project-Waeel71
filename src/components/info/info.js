import React from "react";
import "./info.css"

function Info() {
    return (
        <div className="card icard mb-3">
        <div className="row g-0">
          <div className="col-md-2">
            <img src={"http://louisebellauthor.weebly.com/uploads/7/7/0/2/7702436/about-me_orig.jpg"} className="img-fluid rounded-start" alt="..."/>
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">About Me</h5>
              <p className="card-text">I'm Wael Derwish, because I like frontend developer programming, I opened this site to teach programming. I would like it to be useful for our site.</p>
              <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Info;