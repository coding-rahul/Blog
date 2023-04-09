import React, { useContext } from "react";
import { Data } from "./Dashboard";
import Navbar from "./Navbar";
import "../components/Blogdetails.css";
import Footer from "./Footer";

const BlogDetails = ({ apiData, Id, Remove }) => {

    return (
        <>
            <Navbar />
            <div className="container">
                <div className="col-lg-12 d-flex justify-content-center mb-5">
                    <div className="card card-data mb-4">
                        <div className="text-end ">
                            <button className="btn btn-lg " onClick={Remove}> <i className="fa fa-times fw-light"></i></button>
                        </div>
                        {
                            apiData.map(blog => {
                                if (blog.id === Id) {
                                    return (
                                        <div className="mt-3 text-center" key={blog.id}>
                                            <h3 className="px-3 text-danger">{blog.tittle}</h3>
                                            <div className="mt-5">
                                                <img src={blog.img} alt="img" width="80%" />
                                                <p className=" textpara text-start">{blog.content}</p>
                                            </div>
                                        </div>
                                    )
                                }
                            })

                        }
                    </div>
                </div>
            </div>
            <Footer />

        </>
    )
}
export default BlogDetails