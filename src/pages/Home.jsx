import { Link } from 'react-router-dom';
import { FaPhone, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

const Home = () => {
  return (
    <main>
      {/* Hero Slider */}
      <section
        className="slider-area relative h-[600px] lg:h-[700px] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/assets/img/hero/h1_hero.png')" }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="container-custom relative z-10 h-full flex items-center">
          <div className="w-full lg:w-1/2">
            <div className="hero__caption text-white">
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight">
                Supporting Poor, Needy
                <br /> & Widows in Pakistan
              </h1>
              <p className="text-lg lg:text-xl mb-8 text-gray-100">
                Al-Khalid Trust Pakistan - Providing sustainable and immediate
                relief through food distribution, monthly grocery support,
                business setup assistance, and water projects.
              </p>
              <div className="hero__btn flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="btn btn-primary text-lg px-8 py-4"
                >
                  Donate Now
                </Link>
                {/* <Link to="/contact" className="flex items-center gap-3 text-white hover:text-theme-primary transition text-lg">
                  <i className="fas fa-phone text-2xl"></i>
                  <span>Contact Us</span>
                </Link> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Area */}
      <section className="service-area section-padding30 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="text-theme-primary font-semibold uppercase tracking-wide mb-4 block">
              Our Services
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-heading">
              Supporting Communities Through Sustainable Relief
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div
              className="single-cat text-center p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow"
              style={{
                background:
                  "linear-gradient(135deg, rgba(9, 204, 127, 0.75) 0%, rgba(9, 204, 127, 0.7) 100%)",
              }}
            >
              <div className="cat-icon mb-6">
                <div className="w-20 h-20 bg-theme-primary rounded-full flex items-center justify-center mx-auto">
                  <i className="fas fa-utensils text-white text-3xl"></i>
                </div>
              </div>
              <div className="cat-cap">
                <h5 className="text-xl font-semibold mb-4">
                  <Link
                    to="/programs/food-distribution"
                    className="text-heading hover:text-theme-primary transition"
                  >
                    Food Distribution for Poor & Needy
                  </Link>
                </h5>
                <p className="text-body-dark">
                  Providing essential food items to underprivileged families and
                  individuals in need, ensuring no one goes hungry in our
                  communities.
                </p>
              </div>
            </div>

            {/* Service 2 */}
            <div
              className="single-cat text-center p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow"
              style={{
                background:
                  "linear-gradient(135deg, rgba(9, 204, 127, 0.68) 0%, rgba(9, 204, 127, 0.63) 100%)",
              }}
            >
              <div className="cat-icon mb-6">
                <div className="w-20 h-20 bg-theme-primary rounded-full flex items-center justify-center mx-auto">
                  <i className="fas fa-shopping-basket text-white text-3xl"></i>
                </div>
              </div>
              <div className="cat-cap">
                <h5 className="text-xl font-semibold mb-4">
                  <Link
                    to="/programs/monthly-grocery"
                    className="text-heading hover:text-theme-primary transition"
                  >
                    Monthly Grocery Support
                  </Link>
                </h5>
                <p className="text-body-dark">
                  Regular monthly grocery packages for struggling families,
                  helping them meet their basic nutritional needs with dignity.
                </p>
              </div>
            </div>

            {/* Service 3 */}
            <div
              className="single-cat text-center p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow"
              style={{
                background:
                  "linear-gradient(135deg, rgba(9, 204, 127, 0.61) 0%, rgba(9, 204, 127, 0.56) 100%)",
              }}
            >
              <div className="cat-icon mb-6">
                <div className="w-20 h-20 bg-theme-primary rounded-full flex items-center justify-center mx-auto">
                  <i className="fas fa-briefcase text-white text-3xl"></i>
                </div>
              </div>
              <div className="cat-cap">
                <h5 className="text-xl font-semibold mb-4">
                  <Link
                    to="/programs/business-setup"
                    className="text-heading hover:text-theme-primary transition"
                  >
                    Small Business Setup for Poor & Widows
                  </Link>
                </h5>
                <p className="text-body-dark">
                  Empowering poor individuals and widows through small business
                  setup programs, enabling them to earn a dignified livelihood.
                </p>
              </div>
            </div>

            {/* Service 4 */}
            <div
              className="single-cat text-center p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow"
              style={{
                background:
                  "linear-gradient(135deg, rgba(9, 204, 127, 0.54) 0%, rgba(9, 204, 127, 0.49) 100%)",
              }}
            >
              <div className="cat-icon mb-6">
                <div className="w-20 h-20 bg-theme-primary rounded-full flex items-center justify-center mx-auto">
                  <i className="fas fa-tint text-white text-3xl"></i>
                </div>
              </div>
              <div className="cat-cap">
                <h5 className="text-xl font-semibold mb-4">
                  <Link
                    to="/programs/water-bore"
                    className="text-heading hover:text-theme-primary transition"
                  >
                    Water Bore Drilling in Water-Scarce Areas
                  </Link>
                </h5>
                <p className="text-body-dark">
                  Addressing water scarcity by arranging bore drilling in areas
                  lacking access to clean water, ensuring communities have safe
                  drinking water.
                </p>
              </div>
            </div>

            {/* Service 5 */}
            <div
              className="single-cat text-center p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow"
              style={{
                background:
                  "linear-gradient(135deg, rgba(9, 204, 127, 0.47) 0%, rgba(9, 204, 127, 0.42) 100%)",
              }}
            >
              <div className="cat-icon mb-6">
                <div className="w-20 h-20 bg-theme-primary rounded-full flex items-center justify-center mx-auto">
                  <i className="fas fa-box text-white text-3xl"></i>
                </div>
              </div>
              <div className="cat-cap">
                <h5 className="text-xl font-semibold mb-4">
                  <Link
                    to="/programs/ramzan-rashan"
                    className="text-heading hover:text-theme-primary transition"
                  >
                    Ramzan Rashan Package
                  </Link>
                </h5>
                <p className="text-body-dark">
                  Special Ramzan food packages containing essential items for
                  families to observe the holy month with dignity and ease.
                </p>
              </div>
            </div>

            {/* Service 6 */}
            <div
              className="single-cat text-center p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow"
              style={{
                background:
                  "linear-gradient(135deg, rgba(9, 204, 127, 0.40) 0%, rgba(9, 204, 127, 0.35) 100%)",
              }}
            >
              <div className="cat-icon mb-6">
                <div className="w-20 h-20 bg-theme-primary rounded-full flex items-center justify-center mx-auto">
                  <i className="fas fa-moon text-white text-3xl"></i>
                </div>
              </div>
              <div className="cat-cap">
                <h5 className="text-xl font-semibold mb-4">
                  <Link
                    to="/programs/iftar-dinners"
                    className="text-heading hover:text-theme-primary transition"
                  >
                    Iftar Dinners During Ramzan
                  </Link>
                </h5>
                <p className="text-body-dark">
                  Organizing community iftar dinners throughout Ramzan, bringing
                  together families and individuals to break their fast
                  together.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-low-area section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="mb-8">
                <span className="text-theme-primary font-semibold uppercase tracking-wide mb-4 block">
                  About Al-Khalid Trust
                </span>
                <h2 className="text-3xl lg:text-4xl font-bold text-heading mb-6">
                  Supporting Poor, Needy & Widows Since 2020
                </h2>
              </div>
              <p className="text-body mb-4 text-lg">
                Al-Khalid Trust Pakistan was established on 20 March 2020 with
                the primary aim of supporting poor, needy individuals and widows
                through sustainable and immediate relief initiatives. We are
                committed to making a meaningful difference in the lives of
                those who need it most.
              </p>
              <p className="text-body mb-8 text-lg">
                Our trust focuses on providing food distribution, monthly
                grocery support, business setup assistance, and water projects
                to empower communities and enable dignified livelihoods.
              </p>
              <Link to="/about" className="btn btn-primary">
                Learn More
              </Link>
            </div>
            <div className="about-img relative">
              <div className="hidden lg:block absolute -top-10 -left-10 z-10">
                <img
                  src="/assets/img/gallery/about2.png"
                  alt="About"
                  className="rounded-lg shadow-xl"
                />
              </div>
              <div className="relative z-0">
                <img
                  src="/assets/img/gallery/about1.png"
                  alt="About"
                  className="rounded-lg shadow-xl w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs/Cases Section */}
      <section className="our-cases-area section-padding30 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="text-theme-primary font-semibold uppercase tracking-wide mb-4 block">
              Our Active Programs
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-heading">
              Supporting Communities Through Our Welfare Programs
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Program 1 */}
            <Link
              to="/programs/food-distribution"
              className="single-cases bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow block"
            >
              <div className="cases-img">
                <img
                  src="/assets/img/gallery/case11.jpeg"
                  alt="Food Distribution"
                  className="w-full h-64 object-cover"
                />
              </div>
              <div className="cases-caption p-6">
                <h3 className="text-xl font-semibold mb-4 text-heading hover:text-theme-primary transition">
                  Food Distribution Program
                </h3>
                {/* <div className="mb-4">
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div
                      className="bg-theme-primary h-3 rounded-full"
                      style={{ width: "75%" }}
                    ></div>
                  </div>
                </div>
                <div className="flex justify-between text-body">
                  <p>
                    Families Helped:{" "}
                    <span className="font-semibold text-heading">500+</span>
                  </p>
                  <p>
                    Target:{" "}
                    <span className="font-semibold text-heading">650</span>
                  </p>
                </div> */}
              </div>
            </Link>

            {/* Program 2 */}
            <Link
              to="/programs/monthly-grocery"
              className="single-cases bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow block"
            >
              <div className="cases-img">
                <img
                  src="/assets/img/gallery/case22.jpeg"
                  alt="Monthly Grocery Support"
                  className="w-full h-64 object-cover"
                />
              </div>
              <div className="cases-caption p-6">
                <h3 className="text-xl font-semibold mb-4 text-heading hover:text-theme-primary transition">
                  Monthly Grocery Support
                </h3>
                {/* <div className="mb-4">
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div
                      className="bg-theme-primary h-3 rounded-full"
                      style={{ width: "60%" }}
                    ></div>
                  </div>
                </div>
                <div className="flex justify-between text-body">
                  <p>
                    Families Supported:{" "}
                    <span className="font-semibold text-heading">300+</span>
                  </p>
                  <p>
                    Target:{" "}
                    <span className="font-semibold text-heading">500</span>
                  </p>
                </div> */}
              </div>
            </Link>

            {/* Program 3 */}
            <Link
              to="/programs/water-bore"
              className="single-cases bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow block"
            >
              <div className="cases-img">
                <img
                  src="/assets/img/gallery/case33.jpeg"
                  alt="Water Bore Drilling"
                  className="w-full h-64 object-cover"
                />
              </div>
              <div className="cases-caption p-6">
                <h3 className="text-xl font-semibold mb-4 text-heading hover:text-theme-primary transition">
                  Water Bore Drilling Project
                </h3>
                {/* <div className="mb-4">
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div
                      className="bg-theme-primary h-3 rounded-full"
                      style={{ width: "45%" }}
                    ></div>
                  </div>
                </div>
                <div className="flex justify-between text-body">
                  <p>
                    Bores Completed:{" "}
                    <span className="font-semibold text-heading">18</span>
                  </p>
                  <p>
                    Target:{" "}
                    <span className="font-semibold text-heading">40</span>
                  </p>
                </div> */}
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Activities Section */}
      {/* <section
        className="featured-job-area section-padding30 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/assets/img/gallery/section_bg03.png')",
        }}
      >
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="text-white font-semibold uppercase tracking-wide mb-4 block">
              Our Activities
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-white">
              Community Events & Welfare Programs
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Donation is Hope",
                time: "8:30 - 9:30am",
                date: "18.01.2021",
                location: "Athens, Greece",
                image: "/assets/img/gallery/socialEvents1.png",
              },
              {
                title: "A hand for Children",
                time: "8:30 - 9:30am",
                date: "18.01.2021",
                location: "Athens, Greece",
                image: "/assets/img/gallery/socialEvents2.png",
              },
              {
                title: "Help for Children",
                time: "8:30 - 9:30am",
                date: "18.01.2021",
                location: "Athens, Greece",
                image: "/assets/img/gallery/socialEvents3.png",
              },
            ].map((activity, index) => (
              <div
                key={index}
                className="single-job-items bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
              >
                <div className="job-items flex flex-col lg:flex-row">
                  <div className="company-img">
                    <img
                      src={activity.image}
                      alt={activity.title}
                      className="w-full lg:w-32 h-48 lg:h-full object-cover"
                    />
                  </div>
                  <div className="job-tittle p-6 flex-1">
                    <h4 className="text-xl font-semibold mb-4 text-heading hover:text-theme-primary transition cursor-pointer">
                      {activity.title}
                    </h4>
                    <ul className="space-y-2 text-body">
                      <li className="flex items-center gap-2">
                        <FaClock className="text-theme-primary" />
                        {activity.time}
                      </li>
                      <li className="flex items-center gap-2">
                        <i className="fas fa-sort-amount-down text-theme-primary"></i>
                        {activity.date}
                      </li>
                      <li className="flex items-center gap-2">
                        <FaMapMarkerAlt className="text-theme-primary" />
                        {activity.location}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Team Section */}
      {/* <section className="team-area section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="text-theme-primary font-semibold uppercase tracking-wide mb-4 block">
              What we are doing
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-heading">
              Our Expert Volunteers Always Ready
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((num) => (
              <div
                key={num}
                className="single-team bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow group"
              >
                <div className="team-img relative overflow-hidden">
                  <img
                    src={`/assets/img/gallery/team${num}.png`}
                    alt={`Team Member ${num}`}
                    className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="team-social absolute bottom-0 left-0 right-0 bg-black/70 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <ul className="flex justify-center gap-4">
                      <li>
                        <a
                          href="#"
                          className="text-white hover:text-theme-primary transition"
                        >
                          <i className="fab fa-facebook-f"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="text-white hover:text-theme-primary transition"
                        >
                          <i className="fab fa-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="text-white hover:text-theme-primary transition"
                        >
                          <i className="fas fa-globe"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="team-caption p-6 text-center">
                  <h3 className="text-xl font-semibold text-heading mb-2">
                    Volunteer Leader
                  </h3>
                  <p className="text-body">Volunteer</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Call to Action */}
      <section
        className="wantToWork-area section-padding bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/assets/img/gallery/section_bg01.png')",
        }}
      >
        <div className="container-custom">
          <div className="wants-wrapper bg-theme-secondary/90 rounded-lg p-8 lg:p-12">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
              <div className="flex-1 text-center lg:text-left">
                <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                  Join Us in Making a Difference
                </h2>
              </div>
              <div>
                <Link
                  to="/contact"
                  className="btn bg-white text-theme-secondary hover:bg-gray-100 text-lg px-8 py-4"
                >
                  Donate Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      {/* <section className="testimonial-area section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <div className="single-testimonial">
              <div className="testimonial-caption">
                <div className="testimonial-founder mb-8">
                  <div className="founder-img">
                    <img
                      src="/assets/img/gallery/testimonial.png"
                      alt="Testimonial"
                      className="w-24 h-24 rounded-full mx-auto mb-4"
                    />
                    <span className="text-xl font-semibold text-heading block">
                      Margaret Lawson
                    </span>
                    <p className="text-body">Creative Director</p>
                  </div>
                </div>
                <div className="testimonial-top-cap">
                  <p className="text-xl text-body italic">
                    "I am at an age where I just want to be fit and healthy our
                    bodies are our responsibility! So start caring for your body
                    and it will care for you. Eat clean it will care for you and
                    workout hard."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Blog Section */}
      {/* <section className="home-blog-area section-padding30 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="text-theme-primary font-semibold uppercase tracking-wide mb-4 block">
              Our recent blog
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-heading">
              Latest News from our recent blog
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[1, 2].map((num) => (
              <div
                key={num}
                className="home-blog-single bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
              >
                <div className="blog-img-cap relative">
                  <div className="blog-img relative">
                    <img
                      src={`/assets/img/gallery/home-blog${num}.png`}
                      alt={`Blog ${num}`}
                      className="w-full h-64 object-cover"
                    />
                    <div className="blog-date absolute top-4 left-4 bg-white rounded-lg p-4 text-center shadow-lg">
                      <span className="text-2xl font-bold text-theme-primary block">
                        24
                      </span>
                      <p className="text-body text-sm">Now</p>
                    </div>
                  </div>
                  <div className="blog-cap p-6">
                    <p className="text-theme-primary mb-2">Creative Director</p>
                    <h3 className="text-xl font-semibold text-heading hover:text-theme-primary transition">
                      <Link to={`/blog/${num}`}>
                        Footprints in Time is perfect House in Kurashiki
                      </Link>
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Countdown/Stats Section */}
      {/* <section
        className="count-down-area section-padding bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/assets/img/gallery/section_bg02.png')",
        }}
      >
        <div className="container-custom">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: "800+", label: "Families Helped" },
              { number: "18+", label: "Water Bores" },
              { number: "50+", label: "Businesses Setup" },
              { number: "4+", label: "Years Serving" },
            ].map((stat, index) => (
              <div key={index} className="single-counter text-center">
                <span className="text-5xl lg:text-6xl font-bold text-theme-primary block mb-4">
                  {stat.number}
                </span>
                <p className="text-xl text-white font-semibold">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}
    </main>
  );
};

export default Home;
