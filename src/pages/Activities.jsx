import { FaClock, FaMapMarkerAlt } from 'react-icons/fa';

const Activities = () => {
  const activities = [
    { title: "Donation is Hope", time: "8:30 - 9:30am", date: "18.01.2021", location: "Athens, Greece", image: "/assets/img/gallery/socialEvents1.png" },
    { title: "A hand for Children", time: "8:30 - 9:30am", date: "18.01.2021", location: "Athens, Greece", image: "/assets/img/gallery/socialEvents2.png" },
    { title: "Help for Children", time: "8:30 - 9:30am", date: "18.01.2021", location: "Athens, Greece", image: "/assets/img/gallery/socialEvents3.png" },
    { title: "Community Food Drive", time: "10:00 - 12:00pm", date: "25.02.2021", location: "Karachi, Pakistan", image: "/assets/img/gallery/socialEvents1.png" },
    { title: "Water Project Launch", time: "2:00 - 4:00pm", date: "15.03.2021", location: "Lahore, Pakistan", image: "/assets/img/gallery/socialEvents2.png" },
    { title: "Business Workshop", time: "9:00 - 1:00pm", date: "20.04.2021", location: "Islamabad, Pakistan", image: "/assets/img/gallery/socialEvents3.png" },
  ];

  return (
    <main>
      {/* Hero Banner */}
      <section className="slider-area2 relative h-[400px] bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/assets/img/hero/h1_hero2.png')" }}>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="container-custom relative z-10 h-full flex items-center">
          <div className="text-center w-full">
            <h2 className="text-4xl lg:text-5xl font-bold text-white">Our Activities</h2>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="count-down-area section-padding bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/assets/img/gallery/section_bg02.png')" }}>
        <div className="container-custom">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: "800+", label: "Families Helped" },
              { number: "18+", label: "Water Bores" },
              { number: "50+", label: "Businesses Setup" },
              { number: "4+", label: "Years Serving" },
            ].map((stat, index) => (
              <div key={index} className="single-counter text-center">
                <span className="text-5xl lg:text-6xl font-bold text-theme-primary block mb-4">{stat.number}</span>
                <p className="text-xl text-white font-semibold">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Activities Section */}
      <section className="featured-job-area section-padding30 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="text-theme-primary font-semibold uppercase tracking-wide mb-4 block">Our Activities</span>
            <h2 className="text-3xl lg:text-4xl font-bold text-heading">Community Events & Welfare Programs</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {activities.map((activity, index) => (
              <div key={index} className="single-job-items bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                <div className="job-items flex flex-col lg:flex-row">
                  <div className="company-img lg:w-48">
                    <img src={activity.image} alt={activity.title} className="w-full lg:w-full h-64 lg:h-full object-cover" />
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
      </section>
    </main>
  );
};

export default Activities;
