import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import logoImage from '../assets/img/logo/logoo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  
  const isActive = (path) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  return (
    <header className="header-area">
      <div className="main-header">
        {/* Header Top */}
        <div className="header-top hidden lg:block bg-gray-100 border-b border-gray-200">
          <div className="container-custom">
            <div className="flex justify-center items-center py-3">
              <div className="flex items-center gap-6">
                <ul className="flex gap-4 text-sm text-gray-600">
                  <li>
                    <a
                      href="tel:+923335702440"
                      className="hover:text-theme-primary transition"
                    >
                      <i className="fas fa-phone mr-2"></i>Phone: 0333-5702440
                    </a>
                  </li>
                  <li>
                    <a
                      href="mailto:khalidhashmi7640@gmail.com"
                      className="hover:text-theme-primary transition"
                    >
                      <i className="fas fa-envelope mr-2"></i>Email:
                      khalidhashmi7640@gmail.com
                    </a>
                  </li>
                </ul>
                <div className="header-social">
                  <ul className="flex gap-3">
                  <li>
                      <a
                        href="https://www.facebook.com/share/p/1D9hCAVykm/"
                        className="text-gray-600 hover:text-theme-primary transition"
                        aria-label="Facebook"
                      >
                        <i className="fab fa-facebook-f"></i>
                      </a>
                    </li>                   
                    <li>
                      <a
                        href="http://www.youtube.com/@KhalidTrust"
                        className="text-gray-600 hover:text-theme-primary transition"
                        aria-label="YouTube"
                      >
                        <i className="fab fa-youtube"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Header Bottom */}
        <div className="header-bottom header-sticky bg-white shadow-md sticky top-0 z-50">
          <div className="container-custom">
            <div className="flex items-center justify-between py-4">
              {/* Logo */}
              <div className="logo">
                <Link to="/" className="flex items-center gap-3">
                  <img
                    src={logoImage}
                    alt="Al-Khalid Trust Pakistan"
                    className="h-15 w-auto"
                  />
                  <span className="text-xl lg:text-2xl font-bold text-heading">
                    Al-Khalid Trust Pakistan
                  </span>
                </Link>
              </div>

              {/* Desktop Menu */}
              <nav className="hidden lg:flex items-center gap-8">
                <ul className="flex items-center gap-6">
                  <li>
                    <Link
                      to="/"
                      className={`transition font-medium ${
                        isActive('/')
                          ? 'text-theme-primary'
                          : 'text-gray-700 hover:text-theme-primary'
                      }`}
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/about"
                      className={`transition font-medium ${
                        isActive('/about')
                          ? 'text-theme-primary'
                          : 'text-gray-700 hover:text-theme-primary'
                      }`}
                    >
                      About
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/programs"
                      className={`transition font-medium ${
                        isActive('/programs')
                          ? 'text-theme-primary'
                          : 'text-gray-700 hover:text-theme-primary'
                      }`}
                    >
                      Our Programs
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/ramzan"
                      className={`transition font-medium ${
                        isActive('/ramzan')
                          ? 'text-theme-primary'
                          : 'text-gray-700 hover:text-theme-primary'
                      }`}
                    >
                      Ramzan
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/gallery"
                      className={`transition font-medium ${
                        isActive('/gallery')
                          ? 'text-theme-primary'
                          : 'text-gray-700 hover:text-theme-primary'
                      }`}
                    >
                      Gallery
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/contact"
                      className={`transition font-medium ${
                        isActive('/contact')
                          ? 'text-theme-primary'
                          : 'text-gray-700 hover:text-theme-primary'
                      }`}
                    >
                      Contact & Donate
                    </Link>
                  </li>
                </ul>
                <Link to="/contact" className="btn btn-primary ml-4">
                  Donate
                </Link>
              </nav>

              {/* Mobile Menu Button */}
              <button
                className="lg:hidden text-gray-700 focus:outline-none"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <i className="fas fa-bars text-2xl"></i>
              </button>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
              <div className="lg:hidden mt-4 pb-4">
                <ul className="flex flex-col gap-4">
                  <li>
                    <Link
                      to="/"
                      className={`block transition font-medium ${
                        isActive('/')
                          ? 'text-theme-primary'
                          : 'text-gray-700 hover:text-theme-primary'
                      }`}
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/about"
                      className={`block transition font-medium ${
                        isActive('/about')
                          ? 'text-theme-primary'
                          : 'text-gray-700 hover:text-theme-primary'
                      }`}
                    >
                      About
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/programs"
                      className={`block transition font-medium ${
                        isActive('/programs')
                          ? 'text-theme-primary'
                          : 'text-gray-700 hover:text-theme-primary'
                      }`}
                    >
                      Our Programs
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/ramzan"
                      className={`block transition font-medium ${
                        isActive('/ramzan')
                          ? 'text-theme-primary'
                          : 'text-gray-700 hover:text-theme-primary'
                      }`}
                    >
                      Ramzan
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/gallery"
                      className={`block transition font-medium ${
                        isActive('/gallery')
                          ? 'text-theme-primary'
                          : 'text-gray-700 hover:text-theme-primary'
                      }`}
                    >
                      Gallery
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/contact"
                      className={`block transition font-medium ${
                        isActive('/contact')
                          ? 'text-theme-primary'
                          : 'text-gray-700 hover:text-theme-primary'
                      }`}
                    >
                      Contact & Donate
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/contact"
                      className="btn btn-primary w-full text-center"
                    >
                      Donate
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
