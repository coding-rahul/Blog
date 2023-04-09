const Footer = () => {
    return (
        <>
            <div className="container-fluid bg-dark ">
                <div className="row text-white p-5">
                    <div className="col-lg-4 offset-1">
                        <div className="footerheading ">
                            <h6>KAPS ACADEMY</h6>
                            <p className="para text-muted mt-3">Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper.
                                Aenean ultricies mi vitae est. Mauris placerat eleifend leo.
                                Quisque sit amet est et sapien ullamcorper pharetra.
                            </p>
                            <div ><i className="fa fa-twitter"></i>  <i className="fa fa-facebook mx-3"></i>  <i className="fa fa-instagram"></i></div>
                        </div>
                    </div>
                    <div className="col-lg-2">
                        <h6>Product</h6>
                        <div className="text-muted para mt-3">
                            <p>how it works</p>
                            <p>Features</p>
                            <p>Pricing</p>
                            <p>Testimonials</p>
                        </div>
                    </div>
                    <div className="col-lg-2">
                        <h6>About form</h6>
                        <div className="text-muted para mt-3">
                            <p>Our team</p>
                            <p>Careers</p>
                            <p>Press</p>
                            <p>Stores</p>
                        </div>
                    </div>
                    <div className="col-lg-2">
                        <h6>Contact us</h6>
                        <div className="text-muted para mt-3">
                            <h6 className="para mb-2">info@kapsacademy.com</h6>
                            <h6 className="para">+91-9483514576</h6>
                            <h6 className="para">+91-9492519889</h6>
                        </div>
                    </div>
                    <div className="text-white"><hr /></div>
                    <div className="col-lg-5 offset-1 para text-muted">Term and Condition</div>
                    <div className="col-lg-5 para text-muted text-end">@2022 - KAPS Academy | All right reserved</div>
                </div>
            </div>
        </>
    )
}
export default Footer;