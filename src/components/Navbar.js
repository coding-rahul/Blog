import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = () => {
    const { loginWithRedirect, logout, isAuthenticated } = useAuth0();

    return (
        <>
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark text-white p-2 fixed-top">
                <div className="container-fluid p-2">
                    <img src="logo1.png" className=" rounded mx-5" alt="logo" width='6%' />
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse " id="mynavbar">
                        <ul className="navbar-nav me-auto ">
                            <li className="nav-item px-4">
                                <Link className="nav-link active" to="/" >
                                    <i className="fa fa-home"></i> Home
                                </Link>
                            </li>

                            <li className="nav-item px-4">
                                <Link className="nav-link active" to="/blog" >
                                    <i className="fa fa-book"></i> Blog
                                </Link>
                            </li>
                            <li className="nav-item px-4">
                                <Link className="nav-link active" to="/create" >
                                    <i className="fa fa-plus"></i> Create Blog
                                </Link>
                            </li>


                        </ul>
                        <div className="nav-item px-4 text-danger">
                            {
                                isAuthenticated ?
                                    (<button className="btn btn-sm text-danger" onClick={() => logout({ returnTo: window.location.origin })}>Logout</button>)
                                    :
                                    (<button className="btn btn-sm  text-danger" onClick={() => loginWithRedirect()}><i className="fa fa-lock "></i> Login</button>)
                            }


                        </div>

                    </div>
                </div>

            </nav>
        </>
    )
}
export default Navbar;