import { Link } from 'react-router-dom';
import logoImage from "../assets/img/logo/footer-logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-wrapper bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/assets/img/gallery/footer_bg.png')" }}>
      {/* Footer Top */}
      <div className="footer-area footer-padding bg-black/90">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-16">
            {/* Logo */}
            <div className="flex justify-between py-4">
              {/* Logo */}
              <div className="logo">
                <Link to="/" className="flex items-center gap-3">
                  <img
                    src={logoImage}
                    alt="Al-Khalid Trust Pakistan"
                    className="h-15 w-auto"
                  />
                  <span className="text-xl lg:text-2xl font-bold text-white">
                    Al-Khalid Trust Pakistan
                  </span>
                </Link>
              </div>
              </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-white text-lg font-semibold mb-6">Contact Info</h4>
              <ul className="space-y-3 text-gray-300">
                <li>
                  <p>Address: Shop no 1, Street no 2, Railway Scheme no 7, Railway Workshop Road, Rawalpindi</p>
                </li>
                <li>
                  <Link to="/contact" className="hover:text-theme-primary transition">Phone: 0333-5702440</Link>
                </li>
                <li>
                  <Link to="/contact" className="hover:text-theme-primary transition">Email: khalidhashmi7640@gmail.com</Link>
                </li>
              </ul>
            </div>

            {/* Important Links */}
            <div>
              <h4 className="text-white text-lg font-semibold mb-6">Important Links</h4>
              <ul className="space-y-3">
                <li><Link to="/programs" className="text-gray-300 hover:text-theme-primary transition">Our Programs</Link></li>
                <li><Link to="/contact" className="text-gray-300 hover:text-theme-primary transition">Contact & Donate</Link></li>
                <li><Link to="/about" className="text-gray-300 hover:text-theme-primary transition">About Us</Link></li>
                <li><Link to="/ramzan" className="text-gray-300 hover:text-theme-primary transition">Ramzan Initiatives</Link></li>
                {/* <li><Link to="/activities" className="text-gray-300 hover:text-theme-primary transition">Activities</Link></li> */}
              </ul>
            </div>

      
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom-area bg-black/95 border-t border-gray-800">
        <div className="container-custom">
          <div className="flex justify-center items-center py-6">
            <div className="footer-copy-right text-gray-400 text-sm text-center">
              <p>Copyright &copy; {currentYear} Al-Khalid Trust Pakistan. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
