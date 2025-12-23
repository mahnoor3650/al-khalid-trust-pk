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

          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {isMenuOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/50 z-[60] lg:hidden transition-opacity duration-300"
            onClick={() => setIsMenuOpen(false)}
          ></div>
          
          {/* Drawer */}
          <div className="fixed top-0 right-0 h-full w-80 bg-white shadow-2xl z-[70] lg:hidden drawer-slide-in">
            <div className="flex flex-col h-full">
              {/* Drawer Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-200">
                <div className="flex items-center gap-3">
                  <img
                    src={logoImage}
                    alt="Al-Khalid Trust Pakistan"
                    className="h-10 w-auto"
                  />
                  <span className="text-lg font-bold text-heading">
                    Al-Khalid Trust Pakistan
                  </span>
                </div>
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="text-gray-700 hover:text-theme-primary transition p-2"
                  aria-label="Close menu"
                >
                  <i className="fas fa-times text-2xl"></i>
                </button>
              </div>

              {/* Drawer Menu */}
              <nav className="flex-1 overflow-y-auto p-6">
                <ul className="flex flex-col gap-2">
                  <li>
                    <Link
                      to="/"
                      onClick={() => setIsMenuOpen(false)}
                      className={`block py-3 px-4 rounded-lg transition font-medium ${
                        isActive('/')
                          ? 'text-theme-primary bg-theme-primary/10'
                          : 'text-gray-700 hover:text-theme-primary hover:bg-gray-50'
                      }`}
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/about"
                      onClick={() => setIsMenuOpen(false)}
                      className={`block py-3 px-4 rounded-lg transition font-medium ${
                        isActive('/about')
                          ? 'text-theme-primary bg-theme-primary/10'
                          : 'text-gray-700 hover:text-theme-primary hover:bg-gray-50'
                      }`}
                    >
                      About
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/programs"
                      onClick={() => setIsMenuOpen(false)}
                      className={`block py-3 px-4 rounded-lg transition font-medium ${
                        isActive('/programs')
                          ? 'text-theme-primary bg-theme-primary/10'
                          : 'text-gray-700 hover:text-theme-primary hover:bg-gray-50'
                      }`}
                    >
                      Our Programs
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/ramzan"
                      onClick={() => setIsMenuOpen(false)}
                      className={`block py-3 px-4 rounded-lg transition font-medium ${
                        isActive('/ramzan')
                          ? 'text-theme-primary bg-theme-primary/10'
                          : 'text-gray-700 hover:text-theme-primary hover:bg-gray-50'
                      }`}
                    >
                      Ramzan
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/gallery"
                      onClick={() => setIsMenuOpen(false)}
                      className={`block py-3 px-4 rounded-lg transition font-medium ${
                        isActive('/gallery')
                          ? 'text-theme-primary bg-theme-primary/10'
                          : 'text-gray-700 hover:text-theme-primary hover:bg-gray-50'
                      }`}
                    >
                      Gallery
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/contact"
                      onClick={() => setIsMenuOpen(false)}
                      className={`block py-3 px-4 rounded-lg transition font-medium ${
                        isActive('/contact')
                          ? 'text-theme-primary bg-theme-primary/10'
                          : 'text-gray-700 hover:text-theme-primary hover:bg-gray-50'
                      }`}
                    >
                      Contact & Donate
                    </Link>
                  </li>
                  <li className="mt-4">
                    <Link
                      to="/contact"
                      onClick={() => setIsMenuOpen(false)}
                      className="btn btn-primary w-full text-center block"
                    >
                      Donate
                    </Link>
                  </li>
                </ul>
              </nav>

              {/* Drawer Footer */}
              <div className="p-6 border-t border-gray-200">
                <div className="flex flex-col gap-3 text-sm text-gray-600">
                  <a
                    href="tel:+923335702440"
                    className="flex items-center gap-2 hover:text-theme-primary transition"
                  >
                    <i className="fas fa-phone"></i>
                    <span>0333-5702440</span>
                  </a>
                  <a
                    href="mailto:khalidhashmi7640@gmail.com"
                    className="flex items-center gap-2 hover:text-theme-primary transition"
                  >
                    <i className="fas fa-envelope"></i>
                    <span>khalidhashmi7640@gmail.com</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </header>
  );
};

export default Header;
