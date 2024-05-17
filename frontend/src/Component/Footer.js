import React from "react";
import './NavBar.css'
const Footer = () => {
  return (
    <>
      <footer
        className="p-5 container-fluid"
        style={{ backgroundColor: "#131F22" }}
      >
        <div className="container row text-white mx-5 py-3 gap-3">
          <div className="col-md-5 social_icons">
            <p className="h1 mt-3">Get in Touch</p>
            <p>
              Ready to elevate your learning journey? Reach out to us today for
              personalized e-learning solutions tailored to your needs. Let's
              collaborate to unlock your full potential. Contact us now and
              embark on a transformative educational experience!
            </p>
            <i class="fa-brands fa-instagram  "></i>
            <i class="fa-brands fa-linkedin-in  "></i>
            <i class="fa-brands fa-pinterest  "></i>
            <i class="fa-brands fa-twitter "></i>
          </div>
          <div className="col-md-5 py-3 d-flex justify-content-center align-items-center  gap-5">
            <div className="flex_item d-flex flex-column justify-content-center align-items-center">
              <i class="fa-solid fa-basketball fs-2 "></i>

              <p className="mt-3 fw-bold"> www.NsLearning.com</p>
            </div>

            <div className="flex_item d-flex flex-column justify-content-center align-items-center">
              <i class="fa-regular fa-envelope fs-2"></i>

              <p className="mt-3 fw-bold ">NsLearning@gmail.com</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;