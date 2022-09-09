import Link from "next/link";
import { useState } from "react";
import ModalVideo from "react-modal-video";
import ClientSlider from "../element/clients-3";
import TeamSlider3 from "../component/teamSlider-3";
import Testimonial3 from "../element/testimonial-3";
import AboutUs3 from "./../element/aboutUs-3";
import Footer3 from "./../layout/footer-3";
import Header3 from "./../layout/header-3";

function AboutUs_3() {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <Header3 />
      <div className="page-content bg-white">
        {/* <!-- Banner  --> */}
        <div
          className="dlab-bnr-inr style-1 bg-primary"
          style={{
            backgroundImage: "url(images/banner/bnr2.png), var(--gradient-sec)",
            backgroundSize: "cover, 200%",
          }}
        >
          <div className="container">
            <div className="dlab-bnr-inr-entry">
              <h1>About Us 3</h1>
              {/* <!-- Breadcrumb Row --> */}
              <nav aria-label="breadcrumb" className="breadcrumb-row style-1">
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link href="/">
                      <a>Home</a>
                    </Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    About Us
                  </li>
                </ul>
              </nav>
              {/* <!-- Breadcrumb Row End --> */}
            </div>
          </div>
        </div>
        {/* <!-- Banner End --> */}

        {/* <!-- About Us --> */}
        <AboutUs3 />

        {/* <!-- Video --> */}
        <section className="video-wraper-1">
          <div className="content-inner bg-gray">
            <div className="container">
              <div className="row align-items-center">
                <div
                  className="col-lg-6 wow fadeInLeft"
                  data-wow-duration="2s"
                  data-wow-delay="0.2s"
                >
                  <div className="section-head style-3 mb-4">
                    <h2 className="title">We Are Increasing Business Success With Technology</h2>
                    <div className="dlab-separator style-2 bg-primary"></div>
                  </div>
                  <p>
                  We are providing a variety of experts and engineers from different fields with over 15+ years of experience who are ready to be hired as your human resources, we are masters in finding, evaluating, and introducing the best specialists to conduct your tasks.Our members of dedicated teams are the experts because we not only care about working with the best professionals, but also have the resources to actively work with them.{" "}
                  </p>
                  <ul className="list-check style-1 primary m-b30">
                    <li>15+ years of experience.</li>
                    <li>Ready to be hired as your human resources.</li>
                    <li>
                    masters in finding, evaluating, and introducing the best specialists to conduct your tasks.
                    </li>
                  </ul>
                </div>
                <div
                  className="col-lg-6 wow fadeInRight"
                  data-wow-duration="2s"
                  data-wow-delay="0.4s"
                >
                  <div className="video-bx style-2">
                    <img src="images/video/pic2.jpg" alt="" />
                    <div className="video-btn"></div>
                    <a
                      href="#"
                      className="popup-youtube"
                      onClick={() => setOpen(true)}
                    >
                      <i className="flaticon-play"></i>
                    </a>
                  </div>
                  <ModalVideo
                    channel="youtube"
                    autoplay
                    isOpen={isOpen}
                    videoId="FzcfZyEhOoI"
                    onClose={() => setOpen(false)}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <!-- Services --> */}
        <section className="content-inner">
          <div className="container">
            <div className="section-head style-3 text-center mb-4">
              <h2 className="title">Our Speciallizations:</h2>
              <div className="dlab-separator style-2 bg-primary"></div>
            </div>
            <div className="row">
              <div
                className="col-lg-4 col-md-6 wow fadeInUp"
                data-wow-duration="2s"
                data-wow-delay="0.2s"
              >
                <div className="icon-bx-wraper style-5 box-hover text-center m-b30">
                  <div className="icon-bx">
                    <span className="icon-cell">
                      <i className="flaticon-office"></i>
                    </span>
                  </div>
                  <div className="icon-content">
                    <h4 className="dlab-title m-b15">Strategy & Research</h4>
                    <p className="m-b20">
                    Tell us your problem we'll provide the solution.


                    </p>
                    <Link href="services-3">
                      <a className="btn btn-outline-primary">
                        <i className="fa fa-angle-right"></i>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-4 col-md-6 wow fadeInUp"
                data-wow-duration="2s"
                data-wow-delay="0.4s"
              >
                <div className="icon-bx-wraper style-5 box-hover active text-center m-b30">
                  <div className="icon-bx">
                    <span className="icon-cell">
                      <i className="flaticon-coding"></i>
                    </span>
                  </div>
                  <div className="icon-content">
                    <h4 className="dlab-title m-b15">Web Development</h4>
                    <p className="m-b20">
                    Hire web designers and developers to help your business grow.


                    </p>
                    <Link href="services-3">
                      <a className="btn btn-outline-primary">
                        <i className="fa fa-angle-right"></i>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-4 col-md-6 wow fadeInUp"
                data-wow-duration="2s"
                data-wow-delay="0.6s"
              >
                <div className="icon-bx-wraper style-5 box-hover text-center m-b30">
                  <div className="icon-bx">
                    <span className="icon-cell">
                      <i className="flaticon-laptop"></i>
                    </span>
                  </div>
                  <div className="icon-content">
                    <h4 className="dlab-title m-b15">BlockChain</h4>
                    <p className="m-b20">
                    We will teach the advance knowledge about decentralized blockchain.
                    </p>
                    <Link href="services-3">
                      <a className="btn btn-outline-primary">
                        <i className="fa fa-angle-right"></i>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <!-- Team --> */}
        <section className="content-inner-1 bg-gray">
          <div className="container">
            <div className="section-head style-3 text-center">
              <h2 className="title">Our Expertise</h2>
              <div className="dlab-separator style-2 bg-primary"></div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <TeamSlider3 />
              </div>
            </div>
          </div>
        </section>

        {/* <!-- Newsletter --> */}
        <section
          className="content-inner-3 wow fadeIn"
          data-wow-duration="2s"
          data-wow-delay="0.2s"
          style={{
            backgroundImage:
              "url(images/background/bg12.png), var(--gradient-sec)",
            backgroundSize: "cover, 200%",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="container">
            <div className="row align-items-center subscribe-wraper-1">
              <div className="col-lg-7 col-md-6">
                <h2 className="text-white title m-b30">
                  Subscribe To Our Newsletter For Latest Update Of New Projects
                </h2>
              </div>
              <div className="col-lg-5 col-md-6">
                <div className="dlab-subscribe style-3 max-w500">
                  <form
                    className="dzSubscribe"
                    action="script/mailchamp.php"
                    method="post"
                  >
                    <div className="dzSubscribeMsg"></div>
                    <div className="form-group m-b30">
                      <div className="input-group mb-0">
                        <input
                          name="dzEmail"
                          required="required"
                          type="email"
                          className="form-control"
                          placeholder="Email Address"
                        />
                        <div className="input-group-addon">
                          <button
                            name="submit"
                            value="Submit"
                            type="submit"
                            className="btn btn-corner gradient shadow btn-primary"
                          >
                            Subscribe Now
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <!-- Testimonials --> */}
        <Testimonial3 />

        {/* <!-- Blog --> */}
        <section className="content-inner">
          <div className="container">
            <div className="section-head style-3 text-center">
              <h2 className="title">Our Blog & News</h2>
              <div className="dlab-separator style-2 bg-primary"></div>
            </div>
            <div className="row">
              <div
                className="col-xl-6 wow fadeInUp"
                data-wow-duration="2s"
                data-wow-delay="0.2s"
              >
                <div className="dlab-blog blog-half m-b30">
                    <div className="dlab-media">
                        <img src="images/blog/default/thum1.jpg" alt="" />
                    </div>
                  <div className="dlab-info">
                    <h5 className="dlab-title">
                      <Link href="blog-details-3">
                        <a>
                        Mech Tech Solutions
                        </a>
                      </Link>
                    </h5>
                    <p>
                    A company with great work.Most trustable company!
                    </p>
                    <div className="dlab-meta">
                      <ul>
                        <li className="post-date">
                          <i className="flaticon-clock m-r10"></i>7 March, 2019
                        </li>
                        <li className="post-comment">
                          <a href="javascript:void(0);">
                            <i className="flaticon-speech-bubble"></i>
                            <span>15</span>
                          </a>
                        </li>
                        <li className="post-share">
                          <i className="flaticon-share"></i>
                          <ul>
                            <li>
                              <a
                                className="fa fa-facebook"
                                href="javascript:void(0);"
                              ></a>
                            </li>
                            <li>
                              <a
                                className="fa fa-twitter"
                                href="javascript:void(0);"
                              ></a>
                            </li>
                            <li>
                              <a
                                className="fa fa-linkedin"
                                href="javascript:void(0);"
                              ></a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-6 wow fadeInUp"
                data-wow-duration="2s"
                data-wow-delay="0.4s"
              >
                <div className="dlab-blog blog-half m-b30">
                  <div className="dlab-media">
						<img src="images/blog/default/thum2.jpg" alt="" />
                  </div>
                  <div className="dlab-info">
                    <h5 className="dlab-title">
                      <Link href="blog-details-3">
                        <a>
                        News about MTS
                        </a>
                      </Link>
                    </h5>
                    <p>
                    Most improved company and you can rely on it completely.
                    </p>
                    <div className="dlab-meta">
                      <ul>
                        <li className="post-date">
                          <i className="flaticon-clock m-r10"></i>9 July, 2016
                        </li>
                        <li className="post-comment">
                          <a href="javascript:void(0);">
                            <i className="flaticon-speech-bubble"></i>
                            <span>15</span>
                          </a>
                        </li>
                        <li className="post-share">
                          <i className="flaticon-share"></i>
                          <ul>
                            <li>
                              <a
                                className="fa fa-facebook"
                                href="javascript:void(0);"
                              ></a>
                            </li>
                            <li>
                              <a
                                className="fa fa-twitter"
                                href="javascript:void(0);"
                              ></a>
                            </li>
                            <li>
                              <a
                                className="fa fa-linkedin"
                                href="javascript:void(0);"
                              ></a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-6 wow fadeInUp"
                data-wow-duration="2s"
                data-wow-delay="0.6s"
              >
                <div className="dlab-blog blog-half m-b30">
					<div className="dlab-media">
						<img src="images/blog/default/thum3.jpg" alt="" />
					</div>
                  <div className="dlab-info">
                    <h5 className="dlab-title">
                      <Link href="blog-details-3">
                        <a>
                        MTS company
                        </a>
                      </Link>
                    </h5>
                    <p>
                    This company is completely dependable! it has great developers and great team.
                    </p>
                    <div className="dlab-meta">
                      <ul>
                        <li className="post-date">
                          <i className="flaticon-clock m-r10"></i>4 June, 2020

                        </li>
                        <li className="post-comment">
                          <a href="javascript:void(0);">
                            <i className="flaticon-speech-bubble"></i>
                            <span>15</span>
                          </a>
                        </li>
                        <li className="post-share">
                          <i className="flaticon-share"></i>
                          <ul>
                            <li>
                              <a
                                className="fa fa-facebook"
                                href="javascript:void(0);"
                              ></a>
                            </li>
                            <li>
                              <a
                                className="fa fa-twitter"
                                href="javascript:void(0);"
                              ></a>
                            </li>
                            <li>
                              <a
                                className="fa fa-linkedin"
                                href="javascript:void(0);"
                              ></a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-6 wow fadeInUp"
                data-wow-duration="2s"
                data-wow-delay="0.8s"
              >
                <div className="dlab-blog blog-half m-b30">
                  <div className="dlab-media">
                  
                        <img src="images/blog/default/thum4.jpg" alt="" />
                      
                  </div>
                  <div className="dlab-info">
                    <h5 className="dlab-title">
                      <Link href="blog-details-3">
                        <a>
                        News about MechTech
                        </a>
                      </Link>
                    </h5>
                    <p>
                    There clients are fully satisfied with their extraordinary work totally recommendable.
                    </p>
                    <div className="dlab-meta">
                      <ul>
                        <li className="post-date">
                          <i className="flaticon-clock m-r10"></i>7 May, 2020
                        </li>
                        <li className="post-comment">
                          <a href="javascript:void(0);">
                            <i className="flaticon-speech-bubble"></i>
                            <span>15</span>
                          </a>
                        </li>
                        <li className="post-share">
                          <i className="flaticon-share"></i>
                          <ul>
                            <li>
                              <a
                                className="fa fa-facebook"
                                href="javascript:void(0);"
                              ></a>
                            </li>
                            <li>
                              <a
                                className="fa fa-twitter"
                                href="javascript:void(0);"
                              ></a>
                            </li>
                            <li>
                              <a
                                className="fa fa-linkedin"
                                href="javascript:void(0);"
                              ></a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <!-- Clients Logo --> */}
        <div className="p-tb50 bg-gray">
          <div className="container">
            <div className="clients-carousel owl-none owl-carousel">
              <ClientSlider />
            </div>
          </div>
        </div>

        {/* <!-- Contact Form --> */}
        <section className="content-inner">
          <div className="container">
            <div className="row align-items-center">
              <div
                className="col-lg-6 m-b30 wow fadeInLeft"
                data-wow-duration="2s"
                data-wow-delay="0.2s"
              >
                <div className="dlab-media">
                  <img src="images/about/img8.png" className="move-4" alt="" />
                </div>
              </div>
              <div
                className="col-lg-6 m-b30 wow fadeInRight"
                data-wow-duration="2s"
                data-wow-delay="0.4s"
              >
                <form
                  className="dlab-form style-1 dzForm"
                  method="POST"
                  action="script/contact.php"
                >
                  <div className="section-head style-3">
                    <h2 className="title">Get In Touch With Us</h2>
                    <div className="dlab-separator style-2 bg-primary"></div>
                  </div>
                  <div className="dzFormMsg"></div>
                  <input
                    type="hidden"
                    className="form-control"
                    name="dzToDo"
                    value="Contact"
                  />
                  <input
                    type="hidden"
                    className="form-control"
                    name="reCaptchaEnable"
                    value="0"
                  />
                  <div className="row">
                    <div className="col-sm-12">
                      <div className="input-group">
                        <input
                          name="dzName"
                          type="text"
                          required
                          className="form-control"
                          placeholder="Full Name"
                        />
                      </div>
                    </div>
                    <div className="col-sm-12">
                      <div className="input-group">
                        <input
                          name="dzEmail"
                          type="text"
                          required
                          className="form-control"
                          placeholder="Email Address"
                        />
                      </div>
                    </div>
                    <div className="col-sm-12">
                      <div className="input-group">
                        <input
                          name="dzOther[phone]"
                          type="text"
                          required
                          className="form-control"
                          placeholder="Phone No."
                        />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="input-group">
                        <input
                          name="dzOther[project_title]"
                          type="text"
                          required
                          className="form-control"
                          placeholder="Project Title"
                        />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="input-group">
                        <select
                          name="dzOther[choose_service]"
                          className="form-control"
                          required
                        >
                          <option>Choose Service</option>
                          <option value="1">Web Development</option>
                          <option value="2">Web Design</option>
                          <option value="3">Strategy & Research</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-sm-12">
                      <div className="input-group">
                        <textarea
                          className="form-control"
                          required
                          placeholder="Message"
                        ></textarea>
                      </div>
                    </div>
                    <div className="col-sm-12">
                      <button
                        type="submit"
                        className="btn btn-corner gradient btn-block btn-primary"
                      >
                        Submit Now
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer3 />
    </>
  );
}

export default AboutUs_3;
