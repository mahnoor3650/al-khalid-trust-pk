import { Link } from 'react-router-dom';

const Ramzan = () => {
  return (
    <main>
      {/* Hero Banner */}
      <section
        className="slider-area2 relative h-[400px] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/assets/img/hero/h1_hero22.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="container-custom relative z-10 h-full flex items-center">
          <div className="text-center w-full">
            <h2 className="text-4xl lg:text-5xl font-bold text-white">
              Ramzan Initiatives
            </h2>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="service-area section-padding30 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="text-theme-primary font-semibold uppercase tracking-wide mb-4 block">
              Supporting Fasting Families
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-heading">
              Our Ramzan Welfare Programs
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="single-cat text-center bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <div className="cat-icon mb-6">
                <div className="w-20 h-20 bg-theme-primary rounded-full flex items-center justify-center mx-auto">
                  <i className="fas fa-box text-white text-3xl"></i>
                </div>
              </div>
              <div className="cat-cap">
                <h5 className="text-xl font-semibold mb-4 text-heading">
                  Ramzan Rashan Packages
                </h5>
                <p className="text-body">
                  Providing essential food packages to needy families during the
                  holy month of Ramzan. Each package contains rice, flour,
                  cooking oil, dates, sugar, tea, and other essential items to
                  help families observe their fast with dignity.
                </p>
              </div>
            </div>

            <div className="single-cat text-center bg-theme-primary text-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <div className="cat-icon mb-6">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto">
                  <i className="fas fa-utensils text-theme-primary text-3xl"></i>
                </div>
              </div>
              <div className="cat-cap">
                <h5 className="text-xl font-semibold mb-4 text-white">
                  Iftar Dinners
                </h5>
                <p className="text-white/90">
                  Organizing community Iftar dinners for poor and needy
                  families, bringing communities together to break their fast.
                  These events provide nutritious meals and create a sense of
                  unity and compassion during this blessed month.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Ramzan Section */}
      <section className="about-low-area section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="mb-8">
                <span className="text-theme-primary font-semibold uppercase tracking-wide mb-4 block">
                  Ramzan Impact
                </span>
                <h2 className="text-3xl lg:text-4xl font-bold text-heading mb-6">
                  Making a Difference During the Holy Month
                </h2>
              </div>
              <div className="space-y-4 text-lg text-body mb-8">
                <p>
                  During Ramzan, Al-Khalid Trust Pakistan intensifies its
                  efforts to support fasting families who struggle to meet their
                  basic needs. Our Ramzan initiatives focus on providing
                  immediate relief through food packages and community Iftar
                  dinners.
                </p>
                <p>
                  <strong>Ramzan Rashan Packages:</strong> We distribute
                  comprehensive food packages containing essential items like
                  rice, flour, cooking oil, dates, sugar, tea, pulses, and other
                  necessities. These packages help families observe Ramzan
                  without worrying about their next meal.
                </p>
                <p>
                  <strong>Iftar Dinners:</strong> We organize community Iftar
                  dinners that bring together families from different
                  backgrounds, fostering a sense of community and shared
                  purpose. These events not only provide nutritious meals but
                  also create opportunities for social connection and spiritual
                  reflection.
                </p>
              </div>
              <Link to="/contact" className="btn btn-primary">
                Support Ramzan Programs
              </Link>
            </div>
            <div className="about-img relative">
              <div className="relative group">
                <img
                  src="/assets/img/gallery/ranzan-h1.png"
                  alt="Ramzan Initiatives Collage"
                  className="rounded-lg shadow-2xl w-full h-auto object-cover group-hover:scale-[1.02] transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

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
                  Support Fasting Families This Ramzan
                </h2>
                <p className="text-white/90 text-lg">
                  Your donation helps us provide essential food packages and
                  organize Iftar dinners for those in need.
                </p>
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
    </main>
  );
};

export default Ramzan;
