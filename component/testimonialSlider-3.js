import Slider from "react-slick";

function TestimonialSlider3() {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
		speed:3500,
		arrows:false,
    };
    return (
        <>
            <Slider
                {...settings}
                className="testimonials-carousel2 owl-carousel owl-theme owl-none owl-theme owl-dots-primary-full wow fadeIn" data-wow-duration="2s" data-wow-delay="0.6s"
            >

					<div className="item">
						<div className="testimonial-2">
							<div className="testimonial-pic quote-right">
								<img src="images/testimonials/pic1.jpg" alt=""/>
							</div>
							<div className="testimonial-text">
								<p>My all problems were solved within time.My emails and phone calls are answered quickly and i am never made to feel small.I think of the people at MTS are my freinds.</p>
								<strong className="testimonial-name">krutika</strong> 
							</div>
						</div>
					</div>
					<div className="item">
						<div className="testimonial-2">
							<div className="testimonial-pic quote-right">
								<img src="images/testimonials/pic3.jpg" alt=""/>
							</div>
							<div className="testimonial-text">
								<p>They contacted me quickly, and deal with my issue promptly and professionally.I can highly recommend this company.</p>
								<strong className="testimonial-name">Catherine</strong> 
							</div>
						</div>
					</div>
					<div className="item">
						<div className="testimonial-2">
							<div className="testimonial-pic quote-right">
								<img src="images/testimonials/pic1.jpg" alt=""/>
							</div>
							<div className="testimonial-text">
								<p>Any problem i have are dealt it with immediately and effeciently.I often make simple mistakes in this area so need help they contacted me and solved my problem.</p>
								<strong className="testimonial-name">larah</strong> 
							</div>
						</div>
					</div>
                    <div className="item">
						<div className="testimonial-2">
							<div className="testimonial-pic quote-right">
								<img src="images/testimonials/pic3.jpg" alt=""/>
							</div>
							<div className="testimonial-text">
								<p>I have a great experience with Mech Tech Solutions team.They worked for my website and make it on the first page of google. </p>
								<strong className="testimonial-name">Cak Dikin</strong> 
							</div>
						</div>
					</div>

                </Slider>
        </>
    );
}

export default TestimonialSlider3;
