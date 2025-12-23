import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const About = () => {
  return (
    <main>
      <SEO
        title="About Us | Al-Khalid Trust Pakistan"
        description="Learn about Al-Khalid Trust Pakistan, founded by Khalid Nazir Hashmi on 20 March 2020. Our vision, mission, and commitment to supporting poor, needy individuals and widows in Pakistan."
        keywords="Al-Khalid Trust Pakistan, about us, founder, Khalid Nazir Hashmi, charity organization, welfare trust, Pakistan"
      />
      {/* Hero Banner */}
      <section
        className="slider-area2 relative h-[400px] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/assets/img/hero/h1_hero22.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="container-custom relative z-10 h-full flex items-center">
          <div className="text-center w-full">
            <h2 className="text-4xl lg:text-5xl font-bold text-white">
              About Us
            </h2>
            <p className="text-white text-lg mt-4">
              Serving Humanity Since 2020
            </p>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="about-low-area section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="mb-8">
                <span className="text-theme-primary font-semibold uppercase tracking-wide mb-4 block">
                  Our Story
                </span>
                <h2 className="text-3xl lg:text-4xl font-bold text-heading mb-6">
                  About Al-Khalid Trust
                </h2>
              </div>
              <div className="space-y-4 text-lg text-body">
                <p>
                  Founded on <strong>20 March 2020</strong>, our trust is a
                  non-profit welfare organization established with the purpose
                  of serving humanity and supporting poor, needy, and
                  underprivileged individuals. Since its inception, the trust
                  has remained committed to alleviating poverty, reducing
                  hunger, and improving the living conditions of vulnerable
                  communities.
                </p>
                <p>
                  We believe that meaningful social welfare requires both
                  immediate relief and long-term empowerment. Guided by this
                  belief, our trust actively works to provide essential support
                  to those facing financial hardship, while also creating
                  opportunities that promote dignity, self-reliance, and
                  sustainability.
                </p>
                <p>
                  Our welfare initiatives include food distribution for the poor
                  and needy, monthly grocery support for deserving families, and
                  financial assistance for small business setups, particularly
                  for poor individuals and widows. These efforts are designed to
                  help individuals meet their basic needs while also enabling
                  them to become financially independent.
                </p>
                <p>
                  In addition, the trust addresses critical community challenges
                  such as water scarcity by arranging bore drilling projects in
                  areas where access to clean water is limited. During the holy
                  month of Ramzan, we organize Ramzan Rashan packages and Iftar
                  dinners, ensuring that fasting families receive necessary
                  support and care during this blessed period.
                </p>
                <p>
                  <strong>Transparency, compassion, and accountability</strong>{" "}
                  form the foundation of all our activities. Every donation
                  received is treated as a responsibility and is utilized with
                  honesty to maximize positive impact within the community.
                </p>
              </div>
            </div>
            <div className="about-img relative">
              <div className="hidden lg:block absolute -top-10 -left-10 z-10">
                <img
                  src="/assets/img/gallery/aboytt2.jpeg"
                  alt="About"
                  className="rounded-lg shadow-xl w-64 border-t-12 border-r-12 border-theme-primary"
                />
              </div>
              <div className="relative z-0">
                <img
                  src="/assets/img/gallery/case11.jpeg"
                  alt="About Al-Khalid Trust"
                  className="rounded-lg shadow-xl w-150"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About the Founder Section */}
      <section className="founder-area section-padding30 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="text-theme-primary font-semibold uppercase tracking-wide mb-4 block">
              Leadership
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-heading mb-6">
              About the Founder
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Founder Image Card */}
            <div className="relative">
              <div className="bg-white rounded-xl shadow-2xl overflow-hidden max-w-md mx-auto">
                <div className="relative">
                  <img
                    src="/assets/img/gallery/founder1.jpeg"
                    alt="Khalid Nazir Hashmi - Founder"
                    className="w-full h-auto object-cover"
                  />
                  {/* Founder Badge Overlay */}
                  <div
                    className="absolute bottom-0 left-0 right-0 p-6"
                    style={{
                      background:
                        "linear-gradient(to top, rgba(0, 0, 0, 0.8), #00000073)",
                    }}
                  >
                    <div className="flex items-center gap-4">
                      <div className="bg-theme-primary p-3 rounded-lg">
                        <i className="fas fa-award text-white text-2xl"></i>
                      </div>
                      <div className="text-white">
                        <p className="font-bold text-lg">Khalid Nazir Hashmi</p>
                        <p className="text-sm text-white/90">
                          Founder • Since 2020
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Founder Content */}
            <div>
              <div className="space-y-5 text-lg text-body">
                <p>
                  The trust was founded by{" "}
                  <strong className="text-heading">Khalid Nazir Hashmi</strong>,
                  whose vision and dedication to social welfare laid the
                  foundation for this organization. Driven by compassion and a
                  strong sense of responsibility towards society, he established
                  the trust to provide structured, transparent, and impactful
                  support to those in need.
                </p>
                <p>
                  Since establishing the trust on{" "}
                  <strong className="text-heading">20 March 2020</strong>,
                  Khalid Nazir Hashmi has been actively involved in guiding and
                  overseeing its welfare initiatives. His focus has consistently
                  remained on addressing genuine needs through practical
                  solutions, ensuring that all activities are carried out with
                  integrity and sincerity.
                </p>
                <p>
                  Under his leadership, the trust continues to serve as a
                  reliable platform for charitable work, encouraging collective
                  effort and community participation to bring meaningful and
                  lasting change to society.
                </p>
              </div>

              {/* Leadership Qualities */}
              <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-white p-5 rounded-lg shadow-md border-l-4 border-theme-primary">
                  <div className="flex items-center gap-3">
                    <div className="bg-theme-primary/10 p-3 rounded-lg">
                      <i className="fas fa-check-circle text-theme-primary text-xl"></i>
                    </div>
                    <div>
                      <p className="font-semibold text-heading">
                        Visionary Leader
                      </p>
                      <p className="text-sm text-body">
                        Strategic & Forward-thinking
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-white p-5 rounded-lg shadow-md border-l-4 border-theme-primary">
                  <div className="flex items-center gap-3">
                    <div className="bg-theme-primary/10 p-3 rounded-lg">
                      <i className="fas fa-heart text-theme-primary text-xl"></i>
                    </div>
                    <div>
                      <p className="font-semibold text-heading">
                        Compassionate
                      </p>
                      <p className="text-sm text-body">Empathetic & Caring</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="vision-mission-area section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="text-theme-primary font-semibold uppercase tracking-wide mb-4 block">
              Our Foundation
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-heading">
              Vision & Mission
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Vision Card */}
            <div className="bg-green-50 border-2 border-green-100 p-10 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="mb-6">
                <div className="w-20 h-20 bg-theme-primary rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                  <i className="fas fa-eye text-white text-4xl"></i>
                </div>
                <h3 className="text-3xl font-bold mb-4 text-heading text-center">
                  Our Vision
                </h3>
              </div>
              <p className="text-lg text-body leading-relaxed text-center">
                To create a society where no individual suffers from hunger,
                poverty, or lack of basic necessities, and where everyone has
                the opportunity to live with dignity.
              </p>
            </div>

            {/* Mission Card */}
            <div className="bg-blue-50 border-2 border-blue-100 p-10 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="mb-6">
                <div className="w-20 h-20 bg-theme-secondary rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                  <i className="fas fa-bullseye text-white text-4xl"></i>
                </div>
                <h3 className="text-3xl font-bold mb-4 text-heading text-center">
                  Our Mission
                </h3>
              </div>
              <p className="text-lg text-body leading-relaxed text-center">
                To support poor and needy individuals through food assistance,
                financial aid, livelihood opportunities, water welfare projects,
                and community-based initiatives, while maintaining the highest
                standards of transparency and accountability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="values-area section-padding30 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="text-theme-primary font-semibold uppercase tracking-wide mb-4 block">
              What We Stand For
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-heading">
              Our Core Values
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "fas fa-shield-alt",
                title: "Transparency",
                description:
                  "Every donation and activity is conducted with complete transparency and accountability.",
              },
              {
                icon: "fas fa-heart",
                title: "Compassion",
                description:
                  "We approach every individual with empathy, understanding, and genuine care.",
              },
              {
                icon: "fas fa-handshake",
                title: "Accountability",
                description:
                  "We take responsibility for our actions and ensure every resource is used effectively.",
              },
            ].map((value, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow text-center"
              >
                <div className="w-20 h-20 bg-theme-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <i className={`${value.icon} text-white text-3xl`}></i>
                </div>
                <h4 className="text-xl font-semibold text-heading mb-4">
                  {value.title}
                </h4>
                <p className="text-body">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Programs Overview */}
      <section className="programs-overview section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="text-theme-primary font-semibold uppercase tracking-wide mb-4 block">
              What We Do
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-heading">
              Our Welfare Programs
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: "fas fa-utensils",
                title: "Food Distribution",
                slug: "food-distribution",
                description:
                  "Providing essential food items to underprivileged families and individuals in need.",
              },
              {
                icon: "fas fa-shopping-basket",
                title: "Monthly Grocery Support",
                slug: "monthly-grocery",
                description:
                  "Regular monthly grocery packages for struggling families to meet their nutritional needs.",
              },
              {
                icon: "fas fa-briefcase",
                title: "Business Setup",
                slug: "business-setup",
                description:
                  "Financial assistance for small business setups, especially for poor individuals and widows.",
              },
              {
                icon: "fas fa-tint",
                title: "Water Bore Drilling",
                slug: "water-bore",
                description:
                  "Addressing water scarcity by arranging bore drilling in water-scarce areas.",
              },
              {
                icon: "fas fa-box",
                title: "Ramzan Rashan",
                slug: "ramzan-rashan",
                description:
                  "Special Ramzan food packages for families to observe the holy month with dignity.",
              },
              {
                icon: "fas fa-moon",
                title: "Iftar Dinners",
                slug: "iftar-dinners",
                description:
                  "Organizing community iftar dinners throughout the holy month of Ramzan.",
              },
            ].map((program, index) => (
              <Link
                key={index}
                to={`/programs/${program.slug}`}
                className="bg-gray-50 p-6 rounded-lg hover:bg-theme-primary hover:text-white transition-all group block"
              >
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-theme-primary rounded-lg flex items-center justify-center group-hover:bg-white transition-colors flex-shrink-0">
                    <i
                      className={`${program.icon} text-white group-hover:text-theme-primary text-2xl transition-colors`}
                    ></i>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-heading group-hover:text-white mb-2 transition-colors">
                      {program.title}
                    </h4>
                    <p className="text-body group-hover:text-white/90 text-sm transition-colors">
                      {program.description}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/programs" className="btn btn-primary">
              View All Programs
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta-area section-padding bg-theme-primary">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Join Us in Making a Difference
            </h2>
            <p className="text-lg text-white/90 mb-8">
              Your support helps us continue our mission of serving humanity and
              supporting those in need. Together, we can create lasting change
              in our communities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="btn bg-white text-theme-primary hover:bg-gray-100 text-lg px-8 py-4"
              >
                Donate Now
              </Link>
              <Link
                to="/programs"
                className="btn bg-white/10 text-white border-2 border-white hover:bg-white hover:text-theme-primary text-lg px-8 py-4"
              >
                Our Programs
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
