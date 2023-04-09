import Navbar from "./Navbar";
import "../components/Blog.css"
import React, { useContext, useState } from "react";
import { Data } from "./Dashboard";
import Footer from "./Footer";
import { useAuth0 } from "@auth0/auth0-react";
import Editblog from "./Editblog";

const Blog = () => {
    const { apiData, BlogData, Delete, editFlag, Edit } = useContext(Data);
    const [inputSearch, setInputsearch] = useState("");
    const { loginWithRedirect, isAuthenticated } = useAuth0();
    return (
        <>
            {
                editFlag ?
                    <div>
                        <Navbar />
                        <div className="container">
                            <div className=" col-md-12 col-lg-12 d-flex justify-content-center">
                                <div className="input-group input-search">
                                    <input type="text" className="form-control" onChange={(obj) => setInputsearch(obj.target.value)} value={inputSearch} placeholder="Search Blog..." />
                                    <div className="input-group-text bg-dark text-white">
                                        Search
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-12 fs-1 fw-bold text-danger mt-4">Blogs</div>
                            <div className="row mt-4">
                                {
                                    apiData.filter(blog => {
                                        if (inputSearch === "") {
                                            return blog
                                        }
                                        else if (blog.tittle.toLowerCase().includes(inputSearch.toLowerCase())) {
                                            return blog;
                                        }
                                    }).map(blog => {
                                        return (
                                            <div className="col-sm-12 col-md-6 col-lg-4" key={blog.id} >
                                                <div className="card shadow blog-card mb-5">
                                                    <img className="Blog-card-img" height="75%" src={blog.img} alt="img" onClick={() => BlogData(blog.id)} />
                                                    <div className="p-3">
                                                        <h3>{blog.tittle}</h3>
                                                        <p>{blog.sort}</p>
                                                    </div>
                                                    {
                                                        isAuthenticated ?
                                                            <div className="d-flex justify-content-evenly mb-3">
                                                                <button className="btn btn-sm btn-warning" onClick={() => Edit(blog.id)}>Edit</button>
                                                                <button className="btn btn-sm btn-danger" onClick={() => Delete(blog.id)}>Delete</button>
                                                            </div> : ""
                                                    }
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                        <Footer />
                    </div>
                    :
                    <Editblog />
            }
        </>
    )
}
export default Blog