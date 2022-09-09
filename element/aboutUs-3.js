import Counter3 from "./counter3";
function AboutUs3() {
  return (
    <>
      {/* <!-- About Us --> */}
      <section className="content-inner ">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 m-b30">
              <div className="dz-media">
                <img src="images/about/img6.png" className="move-2" alt="" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="section-head style-3 mb-4">
                <h2 className="title">Why Our Agency?</h2>
                <div className="dlab-separator style-2 bg-primary"></div>
              </div>
              <p>
              We are providing a variety of experts and engineers from different fields with over 10 years of experience who are ready to be hired as your human resources, we are masters in finding, evaluating, and introducing the best specialists to conduct your tasks.
              </p>
              <p className="m-b30">
              We offer the perfect offshore development team to suit your needs. 
              </p>
              <Counter3 />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutUs3;
