import { Link } from 'react-router-dom';
import programsData from '../data/programs.json';

const Programs = () => {
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
              Our Programs
            </h2>
            <p className="text-white text-lg mt-4">
              Comprehensive Welfare Initiatives for Communities
            </p>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="our-cases-area section-padding30 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="text-theme-primary font-semibold uppercase tracking-wide mb-4 block">
              Our Active Programs
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-heading">
              Supporting Communities Through Our Welfare Programs
            </h2>
            <p className="text-body text-lg mt-4 max-w-3xl mx-auto">
              Explore our comprehensive range of welfare programs designed to
              address immediate needs and create long-term positive impact in
              communities.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programsData.map((program, index) => (
              <div
                key={program.id}
                className="single-cases bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow group"
              >
                <div className="cases-img relative overflow-hidden">
                  <img
                    src={program.mainImage}
                    alt={program.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-theme-primary text-white px-4 py-2 rounded-lg shadow-lg">
                    <i className={`${program.icon} mr-2`}></i>
                    <span className="font-semibold">#{index + 1}</span>
                  </div>
                </div>
                <div className="cases-caption p-6">
                  <h3 className="text-xl font-semibold mb-3">
                    <Link
                      to={`/programs/${program.slug}`}
                      className="text-heading hover:text-theme-primary transition"
                    >
                      {program.title}
                    </Link>
                  </h3>
                  <p className="text-body mb-4 line-clamp-3">
                    {program.description}
                  </p>

                  {/* View Details Button */}
                  <Link
                    to={`/programs/${program.slug}`}
                    className="btn btn-primary w-full text-center block mt-4"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            ))}
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
                  Support Our Programs
                </h2>
                <p className="text-white/90 text-lg">
                  Your donation helps us continue our mission of supporting
                  those in need and making a lasting impact in communities.
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

export default Programs;
