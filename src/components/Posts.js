import Navbar from "./Navbar";
import React, { useContext } from "react";
import { Data } from "./Dashboard";

const Posts = () => {
    const { postData, inputHandler, Post } = useContext(Data);
    return (
        <>
            <Navbar />
            <div className="container ">
                <div className="col-md-12 col-lg-12 d-flex justify-content-center mb-5">
                    <div className="border post-card p-5">
                        <div className="text-danger mb-3 ">
                            <h4 className="fw-bold">CREATE BLOG</h4>
                            <hr />
                        </div>
                        <textarea
                            className="form-control shadow mb-3"
                            value={postData.tittle}
                            placeholder="Tittle..."
                            type="text"
                            name="tittle"
                            onChange={inputHandler}>
                        </textarea>
                        <input
                            type="text"
                            className="form-control mb-4"
                            value={postData.img}
                            onChange={inputHandler}
                            name="img"
                            placeholder="Image url..." />
                        <textarea
                            className="form-control shadow mb-3"
                            value={postData.short}
                            placeholder="Short Description..."
                            name="short"
                            type="text"
                            onChange={inputHandler}
                        ></textarea>
                        <textarea
                            className="form-control shadow post-text"
                            value={postData.content}
                            name="content"
                            type="text"
                            placeholder="Content..."
                            onChange={inputHandler}
                        ></textarea>
                        <div className="text-end mt-4 ">
                            <button className="btn btn-sm btn-success post-btn" onClick={Post}>Post</button>
                        </div>
                    </div>

                </div>
            </div>


        </>
    )
}
export default Posts;
