import { useState } from 'react';
import { FaHome, FaPhone, FaEnvelope } from 'react-icons/fa';
import SEO from '../components/SEO';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [copiedItem, setCopiedItem] = useState(null);

  const copyToClipboard = async (text, itemName) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedItem(itemName);
      setTimeout(() => {
        setCopiedItem(null);
      }, 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
      // Fallback for older browsers
      const textArea = document.createElement('textarea');
      textArea.value = text;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      setCopiedItem(itemName);
      setTimeout(() => {
        setCopiedItem(null);
      }, 2000);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <main>
      <SEO
        title="Contact & Donate | Al-Khalid Trust Pakistan"
        description="Contact Al-Khalid Trust Pakistan in Rawalpindi. Donate via bank transfer or EasyPaisa. Support our welfare programs for poor, needy individuals and widows."
        keywords="contact, donate, Al-Khalid Trust Pakistan, bank account, EasyPaisa, donation, Rawalpindi, charity"
      />
      {/* Hero Banner */}
      <section
        className="slider-area2 relative h-[250px] sm:h-[300px] md:h-[400px] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/assets/img/hero/h1_hero22.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="container-custom relative z-10 h-full flex items-center px-4">
          <div className="text-center w-full">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              Contact & Donate
            </h2>
          </div>
        </div>
      </section>

      {/* Donation Section */}
      <section className="contact-section section-padding bg-gray-50">
        <div className="container-custom">
          <div className="mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-heading mb-4">
              Make a Donation
            </h2>
            <p className="text-base sm:text-lg text-body mb-6 sm:mb-8">
              Support Al-Khalid Trust Pakistan's welfare programs. Your
              donations help us provide food, monthly grocery support, business
              setup assistance, and water projects to poor, needy individuals
              and widows.
            </p>
          </div>

          <div className="donation-section bg-gray-100 p-4 sm:p-6 md:p-8 rounded-lg mb-8 sm:mb-12">
            <h3 className="text-2xl font-semibold text-heading mb-6">
              Donation Methods
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Bank Account */}
              <div className="donation-method bg-white p-6 rounded-lg shadow-md">
                <h4 className="text-xl font-semibold text-heading mb-4 flex items-center gap-2">
                  <i className="fas fa-university text-theme-primary"></i>
                  Bank Account
                </h4>
                <div className="space-y-2 text-body text-sm sm:text-base">
                  <p>
                    <strong>Account Title:</strong> Khalid Nazir Hashmi
                  </p>
                  <div className="space-y-2">
                    <p className="flex flex-col sm:flex-row sm:items-center gap-2">
                      <strong className="whitespace-nowrap">
                        Account Number:
                      </strong>
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="font-mono text-md  text-theme-primary  break-all">
                          07550010047935840026
                        </span>
                        <button
                          onClick={() =>
                            copyToClipboard(
                              "07550010047935840026",
                              "bankAccount"
                            )
                          }
                          className="p-1.5 rounded hover:bg-gray-100 transition-colors group relative flex-shrink-0"
                          title="Copy account number"
                        >
                          {copiedItem === "bankAccount" ? (
                            <i className="fas fa-check text-theme-primary"></i>
                          ) : (
                            <i className="fas fa-copy text-gray-500 group-hover:text-theme-primary transition-colors"></i>
                          )}
                        </button>
                        {copiedItem === "bankAccount" && (
                          <span className="text-xs sm:text-sm text-theme-primary font-semibold animate-fade-in whitespace-nowrap">
                            Copied!
                          </span>
                        )}
                      </div>
                    </p>
                  </div>
                  <p>
                    <strong>Bank Name:</strong> Allied Bank Limited
                  </p>
                  {/* <p>
                    <strong>IBAN:</strong> [To be provided]
                  </p> */}
                  <p className="mt-3 text-sm">
                    You can transfer funds directly to our bank account. Please
                    include your name and contact number in the transfer
                    description.
                  </p>
                </div>
              </div>

              {/* EasyPaisa */}
              <div className="donation-method bg-white p-6 rounded-lg shadow-md">
                <h4 className="text-xl font-semibold text-heading mb-4 flex items-center gap-2">
                  <i className="fas fa-mobile-alt text-theme-primary"></i>
                  EasyPaisa
                </h4>
                <div className="space-y-2 text-body text-sm sm:text-base">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                    <strong className="whitespace-nowrap">
                      Account Number:
                    </strong>
                    <div className="flex items-center gap-2 flex-wrap">
                      <a
                        href="tel:03335702440"
                        className="text-theme-primary hover:underline font-mono text-md"
                      >
                        03335702440
                      </a>
                      <button
                        onClick={() =>
                          copyToClipboard("03335702440", "easypaisa")
                        }
                        className="p-1.5 rounded hover:bg-gray-100 transition-colors group relative flex-shrink-0"
                        title="Copy EasyPaisa number"
                      >
                        {copiedItem === "easypaisa" ? (
                          <i className="fas fa-check text-theme-primary"></i>
                        ) : (
                          <i className="fas fa-copy text-gray-500 group-hover:text-theme-primary transition-colors"></i>
                        )}
                      </button>
                      {copiedItem === "easypaisa" && (
                        <span className="text-xs sm:text-sm text-theme-primary font-semibold animate-fade-in whitespace-nowrap">
                          Copied!
                        </span>
                      )}
                    </div>
                  </div>
                  <p>
                    <strong>Account Name:</strong> Khalid Nazir Hashmi
                  </p>
                  <p className="mt-3 text-xs sm:text-sm">
                    Send your donation via EasyPaisa mobile wallet or EasyPaisa
                    app. Quick and secure way to support our cause.
                  </p>
                </div>
              </div>

              {/* Transparency */}
              {/* <div className="donation-method bg-white p-6 rounded-lg shadow-md">
                <h4 className="text-xl font-semibold text-heading mb-4 flex items-center gap-2">
                  <i className="fas fa-shield-alt text-theme-primary"></i>
                  Transparency
                </h4>
                <p className="text-body mb-3">
                  We ensure complete transparency in all our activities. Every
                  donation is used responsibly for welfare programs including:
                </p>
                <ul className="list-disc list-inside space-y-1 text-body text-sm">
                  <li>Food distribution programs</li>
                  <li>Monthly grocery support</li>
                  <li>Business setup for widows</li>
                  <li>Water bore drilling projects</li>
                  <li>Ramzan initiatives</li>
                </ul>
              </div> */}
            </div>

            <div className="mt-4 sm:mt-6 bg-blue-50 border-l-4 border-blue-500 p-3 sm:p-4 rounded">
              <p className="text-body text-sm sm:text-base">
                <strong>Note:</strong> After making a donation, please contact
                us with your transaction details so we can acknowledge your
                contribution and provide you with updates on how your donation
                is being used.
              </p>
            </div>
          </div>

          {/* Contact Info Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {/* Address Card */}
            <div className="contact-info bg-white p-4 sm:p-6 rounded-lg shadow-md">
              <div className="flex items-center gap-3 sm:gap-4">
                <span className="text-theme-primary text-xl sm:text-2xl flex-shrink-0">
                  <FaHome />
                </span>
                <div className="min-w-0">
                  <h3 className="text-lg sm:text-xl font-semibold text-heading mb-2">
                    Al-Khalid Trust Pakistan
                  </h3>
                  <p className="text-body text-sm sm:text-base break-words">
                    Shop No. 8, Railway Scheme No. 7, Railway Workshop Road,
                    Rawalpindi
                  </p>
                </div>
              </div>
            </div>

            {/* Phone Card */}
            <div className="contact-info bg-white p-4 sm:p-6 rounded-lg shadow-md">
              <div className="flex items-center gap-3 sm:gap-4">
                <span className="text-theme-primary text-xl sm:text-2xl flex-shrink-0">
                  <FaPhone />
                </span>
                <div className="min-w-0">
                  <h3 className="text-lg sm:text-xl font-semibold text-heading mb-2">
                    <a
                      href="tel:+923335702440"
                      className="hover:text-theme-primary transition break-all"
                    >
                      0333-5702440
                    </a>
                  </h3>
                  <p className="text-body mb-2 text-sm sm:text-base">
                    <a
                      href="tel:+923335327640"
                      className="hover:text-theme-primary transition break-all"
                    >
                      +92 333 5327640
                    </a>
                  </p>
                  <p className="text-body text-xs sm:text-sm">
                    Available for inquiries
                  </p>
                </div>
              </div>
            </div>

            {/* Email Card */}
            <div className="contact-info bg-white p-4 sm:p-6 rounded-lg shadow-md sm:col-span-2 lg:col-span-1">
              <div className="flex items-center gap-3 sm:gap-4">
                <span className="text-theme-primary text-xl sm:text-2xl flex-shrink-0">
                  <FaEnvelope />
                </span>
                <div className="min-w-0">
                  <h3 className="text-lg sm:text-xl font-semibold text-heading mb-2">
                    <a
                      href="mailto:khalidhashmi7640@gmail.com"
                      className="hover:text-theme-primary transition break-all text-sm sm:text-base"
                    >
                      khalidhashmi7640@gmail.com
                    </a>
                  </h3>
                  <p className="text-body text-sm sm:text-base">
                    Send us your query anytime!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
