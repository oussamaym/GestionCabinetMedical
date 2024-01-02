const Index = () => {
    return (
      <>
        <header className="header">
          <div className="header-inner">
            <div className="container">
              <div className="inner">
                <div className="d-flex justify-content-between">
                  <div className="col-lg-7 col-md-9 col-12">
                    <div className="main-menu">
                      <nav className="navigation">
                        <ul className="nav menu">
                          <li className="active">
                            <a href="#">
                              Home <i className="icofont-rounded-down"></i>
                            </a>
                            <ul className="dropdown">
                              <li>
                                <a href="index.html">Home Page 1</a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href="#">Doctos </a>
                          </li>
                          <li>
                            <a href="#">Services </a>
                          </li>
                          <li>
                            <a href="#">
                              Pages <i className="icofont-rounded-down"></i>
                            </a>
                            <ul className="dropdown">
                              <li>
                                <a href="404.html">404 Error</a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href="#">
                              Blogs <i className="icofont-rounded-down"></i>
                            </a>
                            <ul className="dropdown">
                              <li>
                                <a href="blog-single.html">Blog Details</a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href="contact.html">Contact Us</a>
                          </li>
                        </ul>
                      </nav>
                    </div>
                  </div>
                  <div className="col-lg-2 col-12">
                    <div className="get-quote">
                      <a
                        href="https://localhost:7208/home/login"
                        className="btn"
                        style={{ paddingInline: 60 + "px" }}
                      >
                        Login
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        <section className="slider">
          <div className="hero-slider">
            <div
              className="single-slider"
              style={{ backgroundImage: 'url("/slider2.jpg")' }}
            >
              <div className="container">
                <div className="row">
                  <div className="col-lg-7">
                    <div className="text">
                      <h1>
                        We Provide <span>Medical</span> Services That You Can{" "}
                        <span>Trust!</span>
                      </h1>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Mauris sed nisl pellentesque, faucibus libero eu,
                        gravida quam.{" "}
                      </p>
                      <div className="button">
                        <a
                          href="https://localhost:7208/home/login"
                          className="btn"
                          style={{ paddingInline: 60 + "px" }}
                        >
                          Login
                        </a>
                        <a href="#" className="btn primary">
                          Learn More
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="single-slider"
              style={{ backgroundImage: "url('/slider3.jpg')" }}
            >
              <div className="container">
                <div className="row">
                  <div className="col-lg-7">
                    <div className="text">
                      <h1>
                        We Provide <span>Medical</span> Services That You Can{" "}
                        <span>Trust!</span>
                      </h1>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Mauris sed nisl pellentesque, faucibus libero eu,
                        gravida quam.{" "}
                      </p>
                      <div className="button">
                        <a
                          href="https://localhost:7208/home/login"
                          className="btn"
                          style={{ paddingInline: 60 + "px" }}
                        >
                          Login
                        </a>
                        <a href="#" className="btn primary">
                          Conatct Now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="schedule">
          <div className="container">
            <div className="schedule-inner">
              <div className="row">
                <div className="col-lg-4 col-md-6 col-12 ">
                  <div className="single-schedule first">
                    <div className="inner">
                      <div className="icon">
                        <i className="fa fa-ambulance"></i>
                      </div>
                      <div className="single-content">
                        <span>Lorem Amet</span>
                        <h4>Emergency Cases</h4>
                        <p>
                          Lorem ipsum sit amet consectetur adipiscing elit.
                          Vivamus et erat in lacus convallis sodales.
                        </p>
                        <a href="#">
                          LEARN MORE<i className="fa fa-long-arrow-right"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-12">
                  <div className="single-schedule middle">
                    <div className="inner">
                      <div className="icon">
                        <i className="icofont-prescription"></i>
                      </div>
                      <div className="single-content">
                        <span>Fusce Porttitor</span>
                        <h4>Doctors Timetable</h4>
                        <p>
                          Lorem ipsum sit amet consectetur adipiscing elit.
                          Vivamus et erat in lacus convallis sodales.
                        </p>
                        <a href="#">
                          LEARN MORE<i className="fa fa-long-arrow-right"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-12 col-12">
                  <div className="single-schedule last">
                    <div className="inner">
                      <div className="icon">
                        <i className="icofont-ui-clock"></i>
                      </div>
                      <div className="single-content">
                        <span>Donec luctus</span>
                        <h4>Opening Hours</h4>
                        <ul className="time-sidual">
                          <li className="day">
                            Monday - Fridayp <span>8.00-20.00</span>
                          </li>
                          <li className="day">
                            Saturday <span>9.00-18.30</span>
                          </li>
                          <li className="day">
                            Monday - Thusday <span>9.00-15.00</span>
                          </li>
                        </ul>
                        <a href="#">
                          LEARN MORE<i className="fa fa-long-arrow-right"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="Feautes section">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title">
                  <h2>We Are Always Ready to Help You & Your Family</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipiscing elit
                    praesent aliquet. pretiumts
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 col-12">
                <div className="single-features">
                  <div className="signle-icon">
                    <i className="icofont icofont-ambulance-cross"></i>
                  </div>
                  <h3>Emergency Help</h3>
                  <p>
                    Lorem ipsum sit, consectetur adipiscing elit. Maecenas mi
                    quam vulputate.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-12">
                <div className="single-features">
                  <div className="signle-icon">
                    <i className="icofont icofont-medical-sign-alt"></i>
                  </div>
                  <h3>Enriched Pharmecy</h3>
                  <p>
                    Lorem ipsum sit, consectetur adipiscing elit. Maecenas mi
                    quam vulputate.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-12">
                <div className="single-features last">
                  <div className="signle-icon">
                    <i className="icofont icofont-stethoscope"></i>
                  </div>
                  <h3>Medical Treatment</h3>
                  <p>
                    Lorem ipsum sit, consectetur adipiscing elit. Maecenas mi
                    quam vulputate.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div id="fun-facts" className="fun-facts section overlay">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6 col-12">
                <div className="single-fun">
                  <i className="icofont icofont-home"></i>
                  <div className="content">
                    <span className="counter">3468</span>
                    <p>Hospital Rooms</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-12">
                <div className="single-fun">
                  <i className="icofont icofont-user-alt-3"></i>
                  <div className="content">
                    <span className="counter">557</span>
                    <p>Specialist Doctors</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-12">
                <div className="single-fun">
                  <i className="icofont-simple-smile"></i>
                  <div className="content">
                    <span className="counter">4379</span>
                    <p>Happy Patients</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-12">
                <div className="single-fun">
                  <i className="icofont icofont-table"></i>
                  <div className="content">
                    <span className="counter">32</span>
                    <p>Years of Experience</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className="why-choose section">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title">
                  <h2>We Offer Different Services To Improve Your Health</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipiscing elit
                    praesent aliquet. pretiumts
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6 col-12">
                <div className="choose-left">
                  <h3>Who We Are</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Maecenas pharetra antege vel est lobortis, a commodo magna
                    rhoncus. In quis nisi non emet quam pharetra commodo.{" "}
                  </p>
                  <p>
                    className aptent taciti sociosqu ad litora torquent per
                    conubia nostra, per inceptos himenaeos.{" "}
                  </p>
                  <div className="row">
                    <div className="col-lg-6">
                      <ul className="list">
                        <li>
                          <i className="fa fa-caret-right"></i>Maecenas vitae
                          luctus nibh.{" "}
                        </li>
                        <li>
                          <i className="fa fa-caret-right"></i>Duis massa massa.
                        </li>
                        <li>
                          <i className="fa fa-caret-right"></i>Aliquam feugiat
                          interdum.
                        </li>
                      </ul>
                    </div>
                    <div className="col-lg-6">
                      <ul className="list">
                        <li>
                          <i className="fa fa-caret-right"></i>Maecenas vitae
                          luctus nibh.{" "}
                        </li>
                        <li>
                          <i className="fa fa-caret-right"></i>Duis massa massa.
                        </li>
                        <li>
                          <i className="fa fa-caret-right"></i>Aliquam feugiat
                          interdum.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-12">
                <div className="choose-right">
                  <div className="video-image">
                    <div className="promo-video">
                      <div className="waves-block">
                        <div className="waves wave-1"></div>
                        <div className="waves wave-2"></div>
                        <div className="waves wave-3"></div>
                      </div>
                    </div>
                    <a
                      href="https://www.youtube.com/watch?v=RFVXy6CRVR4"
                      className="video video-popup mfp-iframe"
                    >
                      <i className="fa fa-play"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          className="call-action overlay"
          data-stellar-background-ratio="0.5"
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-12">
                <div className="content">
                  <h2>Do you need Emergency Medical Care? Call @ 1234 56789</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Quisque porttitor dictum turpis nec gravida.
                  </p>
                  <div className="button">
                    <a href="#" className="btn">
                      Contact Now
                    </a>
                    <a href="#" className="btn second">
                      Learn More<i className="fa fa-long-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="services section">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title">
                  <h2>We Offer Different Services To Improve Your Health</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipiscing elit
                    praesent aliquet. pretiumts
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-6 col-12">
                <div className="single-service">
                  <i className="icofont icofont-prescription"></i>
                  <h4>
                    <a href="service-details.html">General Treatment</a>
                  </h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec luctus dictum eros ut imperdiet.{" "}
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-12">
                <div className="single-service">
                  <i className="icofont icofont-tooth"></i>
                  <h4>
                    <a href="service-details.html">Teeth Whitening</a>
                  </h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec luctus dictum eros ut imperdiet.{" "}
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-12">
                <div className="single-service">
                  <i className="icofont icofont-heart-alt"></i>
                  <h4>
                    <a href="service-details.html">Heart Surgery</a>
                  </h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec luctus dictum eros ut imperdiet.{" "}
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-12">
                <div className="single-service">
                  <i className="icofont icofont-listening"></i>
                  <h4>
                    <a href="service-details.html">Ear Treatment</a>
                  </h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec luctus dictum eros ut imperdiet.{" "}
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-12">
                {/* Start Single Service */}
                <div className="single-service">
                  <i className="icofont icofont-eye-alt"></i>
                  <h4>
                    <a href="service-details.html">Vision Problems</a>
                  </h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec luctus dictum eros ut imperdiet.{" "}
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-12">
                <div className="single-service">
                  <i className="icofont icofont-blood"></i>
                  <h4>
                    <a href="service-details.html">Blood Transfusion</a>
                  </h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec luctus dictum eros ut imperdiet.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="pricing-table section">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title">
                  <h2>We Provide You The Best Treatment In Resonable Price</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipiscing elit
                    praesent aliquet. pretiumts
                  </p>
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-center">
              <div className="col-lg-4 col-md-12 col-12">
                <div className="single-table">
                  <div className="table-head">
                    <div className="icon">
                      <i className="icofont icofont-ui-cut"></i>
                    </div>
                    <h4 className="title">Plastic Suggery</h4>
                    <div className="price">
                      <p className="amount">
                        $199<span>/ Per Visit</span>
                      </p>
                    </div>
                  </div>
                  <ul className="table-list">
                    <li>
                      <i className="icofont icofont-ui-check"></i>Lorem ipsum
                      dolor sit
                    </li>
                    <li>
                      <i className="icofont icofont-ui-check"></i>Cubitur
                      sollicitudin fentum
                    </li>
                    <li className="cross">
                      <i className="icofont icofont-ui-close"></i>Nullam
                      interdum enim
                    </li>
                    <li className="cross">
                      <i className="icofont icofont-ui-close"></i>Donec
                      ultricies metus
                    </li>
                    <li className="cross">
                      <i className="icofont icofont-ui-close"></i>Pellentesque
                      eget nibh
                    </li>
                  </ul>
                  <div className="table-bottom">
                    <a className="btn" href="#">
                      Book Now
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-12 col-12">
                <div className="single-table">
                  <div className="table-head">
                    <div className="icon">
                      <i className="icofont icofont-tooth"></i>
                    </div>
                    <h4 className="title">Teeth Whitening</h4>
                    <div className="price">
                      <p className="amount">
                        $299<span>/ Per Visit</span>
                      </p>
                    </div>
                    <ul className="table-list">
                      <li>
                        <i className="icofont icofont-ui-check"></i>Lorem ipsum
                        dolor sit
                      </li>
                      <li>
                        <i className="icofont icofont-ui-check"></i>Cubitur
                        sollicitudin fentum
                      </li>
                      <li>
                        <i className="icofont icofont-ui-check"></i>Nullam
                        interdum enim
                      </li>
                      <li className="cross">
                        <i className="icofont icofont-ui-close"></i>Donec
                        ultricies metus
                      </li>
                      <li className="cross">
                        <i className="icofont icofont-ui-close"></i>Pellentesque
                        eget nibh
                      </li>
                    </ul>
                    <div className="table-bottom">
                      <a className="btn" href="#">
                        Book Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="blog section" id="blog">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title">
                  <h2>Keep up with Our Most Recent Medical News.</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipiscing elit
                    praesent aliquet. pretiumts
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-6 col-12">
                {/* Single Blog */}
                <div className="single-news">
                  <div className="news-head"></div>
                  <div className="news-body">
                    <div className="news-content">
                      <div className="date">22 Aug, 2020</div>
                      <h2>
                        <a href="blog-single.html">
                          We have annnocuced our new product.
                        </a>
                      </h2>
                      <p className="text">
                        Lorem ipsum dolor a sit ameti, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt sed do incididunt
                        sed.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-12">
                <div className="single-news">
                  <div className="news-head"></div>
                  <div className="news-body">
                    <div className="news-content">
                      <div className="date">15 Jul, 2020</div>
                      <h2>
                        <a href="blog-single.html">
                          Top five way for solving teeth problems.
                        </a>
                      </h2>
                      <p className="text">
                        Lorem ipsum dolor a sit ameti, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt sed do incididunt
                        sed.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-12">
                <div className="single-news">
                  <div className="news-head"></div>
                  <div className="news-body">
                    <div className="news-content">
                      <div className="date">05 Jan, 2020</div>
                      <h2>
                        <a href="blog-single.html">
                          We provide highly business soliutions.
                        </a>
                      </h2>
                      <p className="text">
                        Lorem ipsum dolor a sit ameti, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt sed do incididunt
                        sed.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="appointment">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title">
                  <h2>We Are Always Ready to Help You. Book An Appointment</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipiscing elit
                    praesent aliquet. pretiumts
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6 col-md-12 col-12">
                <form className="form" action="#">
                  <div className="row">
                    <div className="col-lg-6 col-md-6 col-12">
                      <div className="form-group">
                        <input name="name" type="text" placeholder="Name" />
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-12">
                      <div className="form-group">
                        <input name="email" type="email" placeholder="Email" />
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-12">
                      <div className="form-group">
                        <input name="phone" type="text" placeholder="Phone" />
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-12">
                      <div className="form-group">
                        <div
                          className="nice-select form-control wide"
                          tabIndex={0}
                        >
                          <span className="current">Department</span>
                          <ul className="list">
                            <li data-value="1" className="option selected ">
                              Department
                            </li>
                            <li data-value="2" className="option">
                              Cardiac Clinic
                            </li>
                            <li data-value="3" className="option">
                              Neurology
                            </li>
                            <li data-value="4" className="option">
                              Dentistry
                            </li>
                            <li data-value="5" className="option">
                              Gastroenterology
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-12">
                      <div className="form-group">
                        <div
                          className="nice-select form-control wide"
                          tabIndex={0}
                        >
                          <span className="current">Doctor</span>
                          <ul className="list">
                            <li data-value="1" className="option selected ">
                              Doctor
                            </li>
                            <li data-value="2" className="option">
                              Dr. Akther Hossain
                            </li>
                            <li data-value="3" className="option">
                              Dr. Dery Alex
                            </li>
                            <li data-value="4" className="option">
                              Dr. Jovis Karon
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-12">
                      <div className="form-group">
                        <input type="text" placeholder="Date" id="datepicker" />
                      </div>
                    </div>
                    <div className="col-lg-12 col-md-12 col-12">
                      <div className="form-group">
                        <textarea
                          name="message"
                          placeholder="Write Your Message Here....."
                        ></textarea>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-5 col-md-4 col-12">
                      <div className="form-group">
                        <div className="button">
                          <button type="submit" className="btn">
                            Book An Appointment
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-7 col-md-8 col-12">
                      <p>( We will be confirm by an Text Message )</p>
                    </div>
                  </div>
                </form>
              </div>
              <div className="col-lg-6 col-md-12 ">
                <div className="appointment-image"></div>
              </div>
            </div>
          </div>
        </section>
        <section className="newsletter section">
          <div className="container">
            <div className="row ">
              <div className="col-lg-6  col-12">
                <div className="subscribe-text ">
                  <h6>Sign up for newsletter</h6>
                  <p className="">
                    Cu qui soleat partiendo urbanitas. Eum aperiri indoctum eu,
                    homero alterum.
                  </p>
                </div>
              </div>
              <div className="col-lg-6  col-12">
                <div className="subscribe-form ">
                  <form
                    action="mail/mail.php"
                    method="get"
                    target="_blank"
                    className="newsletter-inner"
                  >
                    <input
                      name="EMAIL"
                      placeholder="Your email address"
                      className="common-input"
                      type="email"
                    />
                    <button className="btn">Subscribe</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
        <footer id="footer" className="footer ">
          <div className="footer-top">
            <div className="container">
              <div className="row">
                <div className="col-lg-3 col-md-6 col-12">
                  <div className="single-footer">
                    <h2>About Us</h2>
                    <p>
                      Lorem ipsum dolor sit am consectetur adipisicing elit do
                      eiusmod tempor incididunt ut labore dolore magna.
                    </p>
                    <ul className="social">
                      <li>
                        <a href="#">
                          <i className="icofont-facebook"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="icofont-google-plus"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="icofont-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="icofont-vimeo"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="icofont-pinterest"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-12">
                  <div className="single-footer f-link">
                    <h2>Quick Links</h2>
                    <div className="row">
                      <div className="col-lg-6 col-md-6 col-12">
                        <ul>
                          <li>
                            <a href="#">
                              <i
                                className="fa fa-caret-right"
                                aria-hidden="true"
                              ></i>
                              Home
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i
                                className="fa fa-caret-right"
                                aria-hidden="true"
                              ></i>
                              About Us
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i
                                className="fa fa-caret-right"
                                aria-hidden="true"
                              ></i>
                              Services
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i
                                className="fa fa-caret-right"
                                aria-hidden="true"
                              ></i>
                              Our Cases
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i
                                className="fa fa-caret-right"
                                aria-hidden="true"
                              ></i>
                              Other Links
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="col-lg-6 col-md-6 col-12">
                        <ul>
                          <li>
                            <a href="#">
                              <i
                                className="fa fa-caret-right"
                                aria-hidden="true"
                              ></i>
                              Consuling
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i
                                className="fa fa-caret-right"
                                aria-hidden="true"
                              ></i>
                              Finance
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i
                                className="fa fa-caret-right"
                                aria-hidden="true"
                              ></i>
                              Testimonials
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i
                                className="fa fa-caret-right"
                                aria-hidden="true"
                              ></i>
                              FAQ
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i
                                className="fa fa-caret-right"
                                aria-hidden="true"
                              ></i>
                              Contact Us
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-12">
                  <div className="single-footer">
                    <h2>Open Hours</h2>
                    <p>
                      Lorem ipsum dolor sit ame consectetur adipisicing elit do
                      eiusmod tempor incididunt.
                    </p>
                    <ul className="time-sidual">
                      <li className="day">
                        Monday - Fridayp <span>8.00-20.00</span>
                      </li>
                      <li className="day">
                        Saturday <span>9.00-18.30</span>
                      </li>
                      <li className="day">
                        Monday - Thusday <span>9.00-15.00</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-12">
                  <div className="single-footer">
                    <h2>Newsletter</h2>
                    <p>
                      subscribe to our newsletter to get allour news in your
                      inbox.. Lorem ipsum dolor sit amet, consectetur
                      adipisicing elit,
                    </p>
                    <form
                      action="mail/mail.php"
                      method="get"
                      target="_blank"
                      className="newsletter-inner"
                    >
                      <input
                        name="email"
                        placeholder="Email Address"
                        className="common-input"
                        type="email"
                      />
                      <button className="button">
                        <i className="icofont icofont-paper-plane"></i>
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="copyright">
            <div className="container">
              <div className="row">
                <div className="col-lg-12 col-md-12 col-12">
                  <div className="copyright-content">
                    <p>
                      © Copyright 2018 | All Rights Reserved by{" "}
                      <a href="https://www.wpthemesgrid.com" target="_blank">
                        wpthemesgrid.com
                      </a>{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </>
    );
}
 
export default Index;