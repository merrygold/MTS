import { useState } from "react";
import Link from 'next/link';

function AllServices3() {
	const [open, setOpen] = useState("p2")
	return (
		<>
			{/* <!-- Service --> */}
			<section className="content-inner">
			<div className="container">
				<div className="row">
					<div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.1s">
					<div className={`${open === "p1" ? "icon-bx-wraper style-5 box-hover text-center m-b30 active" : "icon-bx-wraper style-5 box-hover text-center m-b30"}`} onMouseOver={() => setOpen("p1")}>
							<div className="icon-bx"> 
								<span className="icon-cell"><i className="flaticon-office"></i></span> 
							</div>
							<div className="icon-content">
								<h4 className="dlab-title m-b15">Strategy & Research</h4>
								<p className="m-b20">A Research Strategy is a step-by-step plan of action that gives direction to your thoughts and efforts, enabling you to conduct research systematically and on schedule to produce quality results and detailed reporting.</p>
								<Link href="services-3"><a className="btn btn-outline-primary"><i className="fa fa-angle-right"></i></a></Link>
							</div>
						</div>
					</div>
					<div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.2s">
						<div className={`${open === "p2" ? "icon-bx-wraper style-5 box-hover text-center m-b30 active" : "icon-bx-wraper style-5 box-hover text-center m-b30"}`} onMouseOver={() => setOpen("p2")}>
							<div className="icon-bx"> 
								<span className="icon-cell"><i className="flaticon-coding"></i></span> 
							</div>
							<div className="icon-content">
								<h4 className="dlab-title m-b15">Web Development</h4>
								<p className="m-b20">Web development services help create all types of web-based software and ensure great experience for web users. At ScienceSoft, we professionally design, redesign and continuously support customer-facing and enterprise web apps to achieve high conversion and adoption rates</p>
								<Link href="services-3"><a className="btn btn-outline-primary"><i className="fa fa-angle-right"></i></a></Link>
							</div>
						</div>
					</div>
					<div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.3s">
						<div className={`${open === "p3" ? "icon-bx-wraper style-5 box-hover text-center m-b30 active" : "icon-bx-wraper style-5 box-hover text-center m-b30"}`} onMouseOver={() => setOpen("p3")}>
							<div className="icon-bx"> 
								<span className="icon-cell"><i className="flaticon-laptop"></i></span> 
							</div>
							<div className="icon-content">
								<h4 className="dlab-title m-b15">Web Solutions</h4>
								<p className="m-b20">web solution is a program distributed over a network (typically a corporate intranet or the Internet the same platform) and accessible through a common web browser.</p>
								<Link href="services-3"><a className="btn btn-outline-primary"><i className="fa fa-angle-right"></i></a></Link>
							</div>
						</div>
					</div>
					<div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.4s">
						<div className={`${open === "p4" ? "icon-bx-wraper style-5 box-hover text-center m-b30 active" : "icon-bx-wraper style-5 box-hover text-center m-b30"}`} onMouseOver={() => setOpen("p4")}>
							<div className="icon-bx"> 
								<span className="icon-cell"><i className="flaticon-dollar"></i></span> 
							</div>
							<div className="icon-content">
								<h4 className="dlab-title m-b15">IOT</h4>
								<p className="m-b20">Internet of Things, refers to the collective network of connected devices and the technology that facilitates communication between devices and the cloud, as well as between the devices themselves.</p>
								<Link href="services-3"><a className="btn btn-outline-primary"><i className="fa fa-angle-right"></i></a></Link>
							</div>
						</div>
					</div>
					<div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.5s">
						<div className={`${open === "p5" ? "icon-bx-wraper style-5 box-hover text-center m-b30 active" : "icon-bx-wraper style-5 box-hover text-center m-b30"}`} onMouseOver={() => setOpen("p5")}>
							<div className="icon-bx"> 
								<span className="icon-cell"><i className="flaticon-line-chart"></i></span> 
							</div>
							<div className="icon-content">
								<h4 className="dlab-title m-b15">BlockChain</h4>
								<p className="m-b20"> Blockchain is a shared, immutable ledger that facilitates the process of recording transactions and tracking assets in a business network.</p>
								<Link href="services-3"><a className="btn btn-outline-primary"><i className="fa fa-angle-right"></i></a></Link>
							</div>
						</div>
					</div>
					<div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.6s">
						<div className={`${open === "p6" ? "icon-bx-wraper style-5 box-hover text-center m-b30 active" : "icon-bx-wraper style-5 box-hover text-center m-b30"}`} onMouseOver={() => setOpen("p6")}>
							<div className="icon-bx"> 
								<span className="icon-cell"><i className="flaticon-help"></i></span> 
							</div>
							<div className="icon-content">
								<h4 className="dlab-title m-b15">24X7 Support</h4>
								<p className="m-b20">Our globally distributed team allows us to serve as reliable partners for your needs, no matter what time of day. We are always accessible via Slack instant messenger, Zoom, Text, Phone, Email, or our project management portal, Teamwork.


Security and Up-Time
Ensure security, performance, and up-time, from the hosting platform to the website to the CDN and WAF.

</p>
								<Link href="services-3"><a className="btn btn-outline-primary"><i className="fa fa-angle-right"></i></a></Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
		</>
	)
}

export default AllServices3;