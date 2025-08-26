import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="relative w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <span className="text-primary font-bold text-xl">A</span>
              </div>
              <span className="font-bold text-xl">Campus Plate</span>
            </div>
            <p className="text-sm text-white/80 max-w-xs">
              Transforming campus dining experiences with innovative food management solutions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-accent transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-white/80 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-white/80 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-white/80 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white/80 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-white/80 hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services/food-waste" className="text-white/80 hover:text-white transition-colors">
                  Food Waste Reduction
                </Link>
              </li>
              <li>
                <Link to="/services/meal-planning" className="text-white/80 hover:text-white transition-colors">
                  Meal Planning
                </Link>
              </li>
              <li>
                <Link to="/services/analytics" className="text-white/80 hover:text-white transition-colors">
                  Analytics Dashboard
                </Link>
              </li>
              <li>
                <Link to="/services/nutrition" className="text-white/80 hover:text-white transition-colors">
                  Nutrition Management
                </Link>
              </li>
              <li>
                <Link to="/services/consulting" className="text-white/80 hover:text-white transition-colors">
                  Consulting Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="flex-shrink-0 mt-1" />
                <span className="text-white/80">
                RVCE
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} />
                <span className="text-white/80">+91 9876543210</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} />
                <span className="text-white/80">contact@campusplate.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-white/60">
            &copy; {new Date().getFullYear()} All rights reserved.
          </p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link to="/privacy" className="text-sm text-white/60 hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-sm text-white/60 hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link to="/cookies" className="text-sm text-white/60 hover:text-white transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
