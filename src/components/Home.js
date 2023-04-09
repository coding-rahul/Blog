import React, { useContext, useState } from "react";
import { Data } from "./Dashboard"
import Navbar from "./Navbar";
import "../components/Home.css"
import ReactPaginate from 'react-paginate';
import Footer from "./Footer";

const PER_PAGE = 6;

const Home = () => {
    const { apiData, BlogData } = useContext(Data);
    const [inputSearch, setInputsearch] = useState("");

    const [currentPage, setCurrentPage] = useState(0);     //for pagination
    function handlePageClick({ selected: selectedPage }) {
        setCurrentPage(selectedPage)
    }

    const offset = currentPage * PER_PAGE;
    const pageCount = Math.ceil(apiData.length / PER_PAGE);
    return (
        <>
            <Navbar />
            <div className="container-fluid">
                <div className="row heading">
                    <div className="col-md-12 d-flex justify-content-center">
                        <div className="input-group input-search">
                            <input type="text" className="form-control" onChange={(obj) => setInputsearch(obj.target.value)} value={inputSearch} placeholder="Search Blog..." />
                            <div className="input-group-text bg-dark text-white">
                                Search
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-6 d-flex justify-content-center pt-3 mt-5">
                        <img src="home.png" width="75%" height="75%" alt="home" />
                    </div>
                    <div className="col-md-6 col-lg-6  mt-5 pt-5">
                        <h2>Learn Everything About Bitcoin Investing & Trading.</h2>
                        <div className="d-flex mt-5">
                            <div className="home-reader">
                                <h5 className="text-warning"><i className="fa fa-diamond"></i> 16+ MILLION READERS</h5>
                                <p>Have learnt about Blockchain, Bitcoin and Cryptocurrencies through CoinSutra since 2016.</p>
                            </div>
                            <div className=" home_exc mx-5">
                                <h5 className="text-warning fw-3">Crypto Exchanges </h5>
                                <p>CoinSutra puts thousands of hours of research on wallets, exchanges and cryptocurrency industry and sources best resources to deliver you great quality and accurate content.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-12 text-center fs-2 heading-fw mt-5">Recent Articles</div>
                <div className="row gx-4 p-5">
                    {
                        apiData.filter(blog => {
                            if (inputSearch === "") {
                                return blog;
                            }
                            else if (blog.tittle.toLowerCase().includes(inputSearch.toLowerCase())) {
                                return blog;
                            }
                        }).map(blog => {
                            return (
                                <div className="col-lg-4 " key={blog.id} onClick={() => BlogData(blog.id)}>
                                    <div className="card shadow card-details mb-5">
                                        <img className="img" height="75%" src={blog.img} alt="img" />
                                        <div className="p-4 ">
                                            <h3>{blog.tittle}</h3>
                                            <p>{blog.sort}</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        }).slice(offset, offset + PER_PAGE)
                    }
                </div>

                <div className="mb-5">
                    <ReactPaginate
                        previousLabel={"Previous"}
                        nextLabel={"Next"}
                        breakLabel={"..."}
                        pageCount={pageCount}
                        marginPagesDisplayed={2}
                        pageRangeDisplayed={3}
                        onPageChange={handlePageClick}
                        containerClassName={"pagination  justify-content-center"}
                        pageClassName={"page-item "}
                        pageLinkClassName={"page-link"}
                        previousClassName={"page-item"}
                        previousLinkClassName={"page-link"}
                        nextClassName={"page-item"}
                        nextLinkClassName={"page-link"}
                        breakClassName={"page-item"}
                        breakLinkClassName={"page-link"}
                        activeClassName={"active primary"}
                    />
                </div>
            </div>
            <Footer />
        </>
    )
}
export default Home;