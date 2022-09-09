import Link from "next/link"

function Blog3() {
  return (
    <>
     {/* <!-- Blog --> */}
		<section className="content-inner">
			<div className="container">
				<div className="section-head style-3 text-center">
					<h2 className="title">Our Blog & News</h2>
					<div className="dlab-separator style-2 bg-primary"></div>
				</div>
				<div className="row">
					<div className="col-xl-6 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.2s">
						<div className="dlab-blog blog-half m-b30">
							<div className="dlab-media">
								<img src="images/blog/default/thum1.jpg" alt=""/>
							</div>
							<div className="dlab-info">
								<h5 className="dlab-title">
									<Link href="blog-details-3"><a>Mech Tech Solutions:</a></Link>
								</h5>
								<p>A company with great work.Most trustable company!</p>
								<div className="dlab-meta">
									<ul>
										<li className="post-date"><i className="flaticon-clock m-r10"></i>7 March, 2019</li>
										<li className="post-comment"><a href="javascript:void(0);"><i className="flaticon-speech-bubble"></i><span>15</span></a></li>
										<li className="post-share"><i className="flaticon-share"></i>
											<ul>
												<li><a className="fa fa-facebook" href="javascript:void(0);"></a></li>
												<li><a className="fa fa-twitter" href="javascript:void(0);"></a></li>
												<li><a className="fa fa-linkedin" href="javascript:void(0);"></a></li>
											</ul>
										</li>
									</ul>
								</div>								
							</div>
						</div>
					</div>
					<div className="col-xl-6 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.4s">
						<div className="dlab-blog blog-half m-b30">
							<div className="dlab-media">
                                <img src="images/blog/default/thum2.jpg" alt=""/>
							</div>
							<div className="dlab-info">
								<h5 className="dlab-title">
									<Link href="blog-details-3"><a>News about MTS</a></Link>
								</h5>
								<p>Most improved company and you can rely on it completely.</p>
								<div className="dlab-meta">
									<ul>
										<li className="post-date"><i className="flaticon-clock m-r10"></i>9 July, 2016</li>
										<li className="post-comment"><a href="javascript:void(0);"><i className="flaticon-speech-bubble"></i><span>15</span></a></li>
										<li className="post-share"><i className="flaticon-share"></i>
											<ul>
												<li><a className="fa fa-facebook" href="javascript:void(0);"></a></li>
												<li><a className="fa fa-twitter" href="javascript:void(0);"></a></li>
												<li><a className="fa fa-linkedin" href="javascript:void(0);"></a></li>
											</ul>
										</li>
									</ul>
								</div>								
							</div>
						</div>
					</div>
					<div className="col-xl-6 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.6s">
						<div className="dlab-blog blog-half m-b30">
							<div className="dlab-media">
								<img src="images/blog/default/thum3.jpg" alt=""/>
							</div>
							<div className="dlab-info">
								<h5 className="dlab-title">
									<Link href="blog-details-3"><a>MTS company</a></Link>
								</h5>
								<p>This company is completely dependable! it has great developers and great team.</p>
								<div className="dlab-meta">
									<ul>
										<li className="post-date"><i className="flaticon-clock m-r10"></i>4 June, 2020</li>
										<li className="post-comment"><a href="javascript:void(0);"><i className="flaticon-speech-bubble"></i><span>15</span></a></li>
										<li className="post-share"><i className="flaticon-share"></i>
											<ul>
												<li><a className="fa fa-facebook" href="javascript:void(0);"></a></li>
												<li><a className="fa fa-twitter" href="javascript:void(0);"></a></li>
												<li><a className="fa fa-linkedin" href="javascript:void(0);"></a></li>
											</ul>
										</li>
									</ul>
								</div>								
							</div>
						</div>
					</div>
					<div className="col-xl-6 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.8s">
						<div className="dlab-blog blog-half m-b30">
							<div className="dlab-media">
								<img src="images/blog/default/thum4.jpg" alt=""/>
							</div>
							<div className="dlab-info">
								<h5 className="dlab-title">
									<Link href="blog-details-3"><a>News about MechTech</a></Link>
								</h5>
								<p>There clients are fully satisfied with their extraordinary work totally recommendable.</p>
								<div className="dlab-meta">
									<ul>
										<li className="post-date"><i className="flaticon-clock m-r10"></i>7 May, 2020</li>
										<li className="post-comment"><a href="javascript:void(0);"><i className="flaticon-speech-bubble"></i><span>15</span></a></li>
										<li className="post-share"><i className="flaticon-share"></i>
											<ul>
												<li><a className="fa fa-facebook" href="javascript:void(0);"></a></li>
												<li><a className="fa fa-twitter" href="javascript:void(0);"></a></li>
												<li><a className="fa fa-linkedin" href="javascript:void(0);"></a></li>
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
    </>
  )
}

export default Blog3;