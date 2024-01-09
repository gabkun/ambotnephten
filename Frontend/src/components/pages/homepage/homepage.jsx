import React, {useState} from 'react';
import image1 from '../homepage/images/img/image1.jpg';
import './homepage.css';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Trymodal from "../modal/Trymodal";
import CarouselComponent from '../../../components/carousel/carousel';
import Banner from '../banner/banner';
import Newsletter from '../../newsletter/newsletter';
import { motion } from 'framer-motion';



function Homepage(){
  const[show, setShow] = useState(false)
    return(
        <>
<main className="content">
  <div className="container-xxl py-5">
    <div className="container">
      <div className="row g-4">
        <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
          <div className="service-item text-center pt-3 hover-animate">
            <div className="p-4">
              <i className="fa fa-3x fa-graduation-cap mb-4"></i>
              <h5 className="mb-3">Why Mag-Aral?</h5>
              <p>Mag-Aral is a comprehensive e-learning platform designed to provide students with access to high-quality educational resources anytime, anywhere.</p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
          <div className="service-item text-center pt-3 hover-animate">
            <div className="p-4">
              <i className="fa fa-3x fa-globe mb-4"></i>
              <h5 className="mb-3">Overview</h5>
              <p>Mag-Aral offers a range of tools and resources to help educators enhance their teaching and engage students in new and exciting ways.</p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.5s">
          <div className="service-item text-center pt-3 hover-animate">
            <div className="p-4">
              <i className="fa fa-3x fa-home mb-4"></i>
              <h5 className="mb-3">Get Started</h5>
              <p>To get started with Mag-Aral, simply sign up for an account and explore the platform's features and resources.</p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.7s">
          <div className="service-item text-center pt-3 hover-animate">
            <div className="p-4">
              <i className="fa fa-3x fa-book mb-4"></i>
              <h5 className="mb-3">For Educators</h5>
              <p>Mag-Aral provides educators with a range of tools and resources to enhance their teaching, including customizable lesson plans, interactive quizzes, and multimedia content.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</main>

      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s" style={{ minHeight: '400px' }}>
              <div className='about-container'>
              <div className="position-relative h-100">
              <img className="img-fluid position-absolute w-100 h-100" src={image1} alt="" style={{ objectFit: 'cover' }} />
              </div>
            </div>
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
              <h1 className="mb-4">Designed in collaboration with educators <br /> Mag-Aral E-Learning</h1>
              <p className="mb-4">Mag-Aral E-Learning Platform is an innovative and user-friendly e-learning platform designed to provide educators with the tools and resources they need to create engaging and effective online learning experiences.</p>
              <div class="row gy-2 gx-4 mb-4">
                <div class="col-sm-6">
                  <div class="square">
                    <p class="mb-0"><i class="fa fa-arrow-right mb-2"></i>EASY ACCESS WEBSITE</p>
                  </div>
                  <br></br>
                  <div class="square">
                    <p class="mb-0"><i class="fa fa-arrow-right mb-2"></i>USER-FRIENDLY INTERFACE</p>
                  </div>
                  <div class="square">
                    <p class="mb-0"><i class="fa fa-arrow-right mb-2"></i>ACTIVE CONTACT SUPPORT</p>
                  </div>
                </div>
              </div>
              </div>
              <br></br>
              <br></br><button onClick={() => setShow(true)}>JOIN WITH US</button>
              <br></br>
              <br></br>
              <br></br>
            </div>
          </div>
        </div>
      </div>
      <CarouselComponent />
      <Banner />
      <Newsletter />
      </>
    )
}
export default Homepage;