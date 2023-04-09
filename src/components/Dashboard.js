import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Blog from "./Blog";
import Posts from "./Posts";
import BlogDetails from "./BlogDetails";
import React, { useState, createContext, useEffect } from "react";

export const Data = createContext()
const Dashboard = () => {
    const [apiData, setApidata] = useState([]);
    const [Id, setId] = useState();
    const [Blogflag, setBlogflag] = useState(true);
    const [editFlag, setEditflag] = useState(true);
    const [postData, setPostdata] = useState({ tittle: "", img: "", short: "", content: "" });

    const inputHandler = (e) => {
        setPostdata({ ...postData, [e.target.name]: e.target.value })
    }
    const Post = () => {
        let postItem = { tittle: postData.tittle, img: postData.img, sort: postData.short, content: postData.content }
        let url = "http://localhost:12345/Blog";
        let postMethod = {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify(postItem)
        }
        if (!postData.tittle || !postData.img || !postData.short || !postData.content) {
            alert("All field are mandatory !")
        }
        else {
            fetch(url, postMethod)
                .then(apiData => apiData.json())
                .then(res => {
                    alert("Post submitted!")
                    setPostdata({ tittle: "", img: "", short: "", content: "" })
                    getData()
                })
        }
    }
    const [tittle, setTittle] = useState("");
    const [img, setImg] = useState("");
    const [short, setShort] = useState("");
    const [content, setContent] = useState("");
    const [blogId, setBlogid] = useState();

    const Edit = (id) => {
        var url = "http://localhost:12345/Blog/" + id;
        fetch(url)
            .then(res => res.json())
            .then(blog => {
                setTittle(blog.tittle);
                setImg(blog.img);
                setShort(blog.sort);
                setContent(blog.content)
                setBlogid(id)
                setEditflag(false)
            })
    }
    const Update = () => {
        let Data = { tittle: tittle, img: img, sort: short, content: content }
        let url = "http://localhost:12345/Blog/" + blogId;
        let postMethod = {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: "PUT",
            body: JSON.stringify(Data)
        }
        fetch(url, postMethod)
            .then(resApi => resApi.json())
            .then(res => {
                alert(" Blog updated!")
                setEditflag(true)
                getData()
            })
    }

    const Delete = (id) => {
        let url = "http://localhost:12345/Blog/" + id;
        let postMethod = {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: "DELETE",
        }
        fetch(url, postMethod)
            .then(resApi => resApi.json())
            .then(res => {
                alert("Blog Deleted");
                getData();
            })
    }

    const BlogData = (id) => {
        setId(id)
        setBlogflag(false)
    }
    const Remove = () => {
        setBlogflag(true)
    }

    const getData = () => {
        fetch("http://localhost:12345/Blog")
            .then(apiRes => apiRes.json())
            .then(res => setApidata(res))
    }

    useEffect(() => {
        getData();
    }, [])
    return (
        <>
            <Data.Provider value={{ apiData, BlogData, postData, inputHandler, Post, Delete, tittle, img, short, content, Edit, setTittle, setImg, setShort, setContent, editFlag, Update }}>
                <BrowserRouter>
                    {
                        Blogflag ?
                            <Routes>
                                <Route exact path="/" element={<Home />} />
                                <Route exact path="/blog" element={<Blog />} />
                                <Route exact path="/create" element={<Posts />} />
                            </Routes>
                            :
                            <BlogDetails Id={Id} setBlogflag={setBlogflag} apiData={apiData} Remove={Remove} />
                    }
                </BrowserRouter>
            </Data.Provider>
        </>
    )
}
export default Dashboard;