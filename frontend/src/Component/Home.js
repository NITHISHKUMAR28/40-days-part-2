import React from 'react'
import car1 from '../images/car1.jpg'
import car2 from '../images/car2.jpg'
import car3 from '../images/car3.jpeg'
import About from './About'
import Services from './Services'
import Footer from './Footer'
function Home() {
  return (
    <>
    <section>
                <div id="carouselId" class="carousel slide" data-bs-ride="carousel">
                    <ol class="carousel-indicators">
                        <li
                            data-bs-target="#carouselId"
                            data-bs-slide-to="0"
                            class="active"
                            aria-current="true"
                            aria-label="First slide"
                        ></li>
                        <li
                            data-bs-target="#carouselId"
                            data-bs-slide-to="1"
                            aria-label="Second slide"
                        ></li>
                        <li
                            data-bs-target="#carouselId"
                            data-bs-slide-to="2"
                            aria-label="Third slide"
                        ></li>
                    </ol>
                    <div class="carousel-inner" role="listbox">
                        <div class="carousel-item active">
                            <img
                                src={car1}
                                class="w-100 d-block"
                                alt="First slide"
                                width="100vw"
                                height="800vh"
                            />
                            <div class="carousel-caption d-none d-md-block">
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img
                                src={car2}
                                class="w-100 d-block"
                                alt="Second slide"
                                width="100vw"
                                height="800vh"
                            />
                            <div class="carousel-caption d-none d-md-block">
                                <h2>Learn from Anywhere Anytime</h2>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img
                                src={car3}
                                class="w-100 d-block"
                                alt="Third slide"
                                width="100vw"
                                height="800vh"
                            />
                            <div class="carousel-caption d-none d-md-block">
                                <h2>Learn from Experts all over the World</h2>
                            </div>
                        </div>
                    </div>
                    <button
                        class="carousel-control-prev"
                        type="button"
                        data-bs-target="#carouselId"
                        data-bs-slide="prev"
                    >
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button
                        class="carousel-control-next"
                        type="button"
                        data-bs-target="#carouselId"
                        data-bs-slide="next"
                    >
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </section>
            <section>
                <h3>Start Your Learning Journey Today</h3>
                <p>Ready to embark on your learning journey? Browse our course catalog, enroll in your preferred courses, and take the first step towards achieving your educational goals. Join our community of lifelong learners and unlock your full potential with our e-learning services.</p>
            </section>
            <About></About>  
            <Services></Services>
            <Footer></Footer>
    </>

  )
}

export default Home