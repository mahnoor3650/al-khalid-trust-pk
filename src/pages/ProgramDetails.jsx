import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import programsData from '../data/programs.json';
import SEO from '../components/SEO';

const ProgramDetails = () => {
  const { slug } = useParams();
  const [program, setProgram] = useState(null);
  const [selectedImage, setSelectedImage] = useState(0);

  useEffect(() => {
    const foundProgram = programsData.find(p => p.slug === slug);
    setProgram(foundProgram);
    if (foundProgram) {
      setSelectedImage(0);
    }
  }, [slug]);

  if (!program) {
    return (
      <main>
        <section className="section-padding bg-white">
          <div className="container-custom text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Program Not Found
            </h2>
            <p className="text-body mb-8">
              The program you're looking for doesn't exist.
            </p>
            <Link to="/programs" className="btn btn-primary">
              Back to Programs
            </Link>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main>
      <SEO
        title={`${program.title} | Al-Khalid Trust Pakistan`}
        description={program.shortDescription || program.fullDescription.substring(0, 160)}
        keywords={`${program.title}, ${program.shortTitle}, welfare program, charity, Al-Khalid Trust Pakistan`}
      />
      {/* Hero Banner */}
      <section
        className="slider-area2 relative h-[400px] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('${program.mainImage}')` }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="container-custom relative z-10 h-full flex items-center">
          <div className="text-white max-w-3xl">
            <div className="mb-4">
              <Link
                to="/programs"
                className="text-white/80 hover:text-white transition flex items-center gap-2"
              >
                <i className="fas fa-arrow-left"></i>
                Back to Programs
              </Link>
            </div>
            <h1 className="text-4xl text-white lg:text-5xl font-bold mb-4">
              {program.title}
            </h1>
            <p className="text-xl text-white/90">{program.description}</p>
          </div>
        </div>
      </section>
      

      {/* Program Details */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Full Description */}
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-heading mb-4">
                  About This Program
                </h2>
                <p className="text-lg text-body leading-relaxed mb-4">
                  {program.fullDescription}
                </p>
              </div>

              {/* Program Details List */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-heading mb-4">
                  Program Details
                </h3>
                <ul className="space-y-3">
                  {program.details.map((detail, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <i className="fas fa-check-circle text-theme-primary text-xl shrink-0"></i>
                      <span className="text-body text-lg">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Image Gallery */}
              {program.images && program.images.length > 0 && (
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-heading mb-4">
                    Program Gallery
                  </h3>
                  <div className="space-y-4">
                    {/* Main Image */}
                    <div className="rounded-lg overflow-hidden shadow-lg">
                      <img
                        src={program.images[selectedImage]}
                        alt={`${program.title} - Image ${selectedImage + 1}`}
                        className="w-full h-100 object-cover"
                      />
                    </div>
                    {/* Thumbnail Images */}
                    {program.images.length > 1 && (
                      <div className="grid grid-cols-4 gap-4">
                        {program.images.map((image, index) => (
                          <button
                            key={index}
                            onClick={() => setSelectedImage(index)}
                            className={`rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all ${
                              selectedImage === index
                                ? "ring-4 ring-theme-primary"
                                : ""
                            }`}
                          >
                            <img
                              src={image}
                              alt={`${program.title} - Thumbnail ${index + 1}`}
                              className="w-full h-24 object-cover"
                            />
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Impact Card */}
              <div className="bg-gray-50 rounded-lg p-6 mb-6 border-2 border-theme-primary">
                <div className="text-center mb-6">
                  <div className="w-20 h-20 bg-theme-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className={`${program.icon} text-white text-3xl`}></i>
                  </div>
                  <h3 className="text-xl font-bold text-heading mb-2">
                    Program Impact
                  </h3>
                </div>

                {/* Stats */}
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg">
                    <p className="text-body text-sm mb-1">
                      {program.impact.label}
                    </p>
                    <p className="text-2xl font-bold text-theme-primary">
                      {program.impact.peopleServed ||
                        program.impact.householdsSupported ||
                        program.impact.businessesEstablished ||
                        program.impact.boresCompleted ||
                        program.impact.familiesServed ||
                        program.impact.dailyService}
                    </p>
                  </div>
                </div>
              </div>

              {/* Donate CTA */}
              <div className="bg-theme-primary text-white rounded-lg p-6 text-center">
                <h3 className="text-xl font-bold mb-2">Support This Program</h3>
                <p className="text-white/90 mb-4 text-sm">
                  Your donation helps us continue this important work.
                </p>
                <Link
                  to="/contact"
                  className="btn bg-white text-theme-primary hover:bg-gray-100 w-full"
                >
                  Donate Now
                </Link>
              </div>

              {/* Related Programs */}
              <div className="mt-6">
                <h3 className="text-lg font-bold text-heading mb-4">
                  Other Programs
                </h3>
                <div className="space-y-3">
                  {programsData
                    .filter((p) => p.id !== program.id)
                    .slice(0, 3)
                    .map((relatedProgram) => (
                      <Link
                        key={relatedProgram.id}
                        to={`/programs/${relatedProgram.slug}`}
                        className="block bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow border-l-4 border-theme-primary"
                      >
                        <h4 className="font-semibold text-heading mb-1">
                          {relatedProgram.shortTitle}
                        </h4>
                        <p className="text-body text-sm line-clamp-2">
                          {relatedProgram.description}
                        </p>
                      </Link>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ProgramDetails;

