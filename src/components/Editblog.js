import Navbar from "./Navbar";
import React, { useContext } from "react";
import { Data } from "./Dashboard";

const Editblog = () => {
    const { Update, tittle, img, short, content, setTittle, setImg, setShort, setContent } = useContext(Data);
    return (
        <>
            <Navbar />
            <div className="container ">
                <div className="col-lg-12 d-flex justify-content-center mb-5">
                    <div className="border post-card p-5">
                        <div className="text-danger mb-3 ">
                            <h4 className="fw-bold">Edite BLOG</h4>
                            <hr />
                        </div>
                        <textarea
                            className="form-control shadow mb-3"
                            value={tittle}
                            placeholder="Tittle..."
                            type="text"
                            name="tittle"
                            onChange={obj => setTittle(obj.target.value)}>
                        </textarea>
                        <input
                            type="text"
                            className="form-control mb-4"
                            value={img}
                            onChange={obj => setImg(obj.target.value)}
                            name="img"
                            placeholder="Image url..." />
                        <textarea
                            className="form-control shadow mb-3"
                            value={short}
                            placeholder="Short Description..."
                            name="short"
                            type="text"
                            onChange={obj => setShort(obj.target.value)}
                        ></textarea>
                        <textarea
                            className="form-control shadow post-text"
                            value={content}
                            name="content"
                            type="text"
                            placeholder="Content..."
                            onChange={obj => setContent(obj.target.value)}
                        ></textarea>
                        <div className="text-end mt-4 ">
                            <button className="btn btn-sm btn-success post-btn" onClick={Update}>Update</button>
                        </div>
                    </div>

                </div>
            </div>


        </>
    )
}
export default Editblog;
