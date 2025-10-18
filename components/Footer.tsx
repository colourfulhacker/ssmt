import Link from 'next/link';
import Image from 'next/image';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaTwitter, FaFacebook } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="space-y-4">
            <Image
              src="https://assets.zyrosite.com/dOqbv9lxjqcgzaab/logo-1a5478-YleMKeBbKPtZ382E.svg"
              alt="SSMT Solutions Logo"
              width={180}
              height={60}
              className="h-12 w-auto brightness-0 invert"
            />
            <p className="text-gray-300 text-sm leading-relaxed">
              Leading the way in digital transformation with AI-driven cloud and cybersecurity solutions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors" aria-label="LinkedIn">
                <FaLinkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors" aria-label="Twitter">
                <FaTwitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors" aria-label="Facebook">
                <FaFacebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-gray-300 hover:text-blue-400 transition-colors">About Us</Link></li>
              <li><Link href="/services" className="text-gray-300 hover:text-blue-400 transition-colors">Services</Link></li>
              <li><Link href="/training" className="text-gray-300 hover:text-blue-400 transition-colors">Training</Link></li>
              <li><Link href="/careers" className="text-gray-300 hover:text-blue-400 transition-colors">Careers</Link></li>
              <li><Link href="/portfolio" className="text-gray-300 hover:text-blue-400 transition-colors">Portfolio</Link></li>
              <li><Link href="/verify-certificate" className="text-yellow-400 hover:text-yellow-300 transition-colors font-semibold">Verify Certificate</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><Link href="/privacy-policy" className="text-gray-300 hover:text-blue-400 transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms-of-service" className="text-gray-300 hover:text-blue-400 transition-colors">Terms of Service</Link></li>
              <li><Link href="/refund-policy" className="text-gray-300 hover:text-blue-400 transition-colors">Refund Policy</Link></li>
              <li><Link href="/disclaimer" className="text-gray-300 hover:text-blue-400 transition-colors">Disclaimer</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Center</h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex items-start space-x-2">
                <FaMapMarkerAlt className="h-5 w-5 text-blue-400 flex-shrink-0 mt-0.5" />
                <span>Unit 101, Oxford Towers, 139, HAL Old Airport Rd, Kodihalli, Bengaluru, Karnataka 560008</span>
              </li>
              <li className="flex items-center space-x-2">
                <FaPhone className="h-4 w-4 text-blue-400" />
                <a href="tel:+919432588119" className="hover:text-blue-400 transition-colors">+91 9432588119</a>
              </li>
              <li className="flex items-center space-x-2">
                <FaPhone className="h-4 w-4 text-blue-400" />
                <a href="tel:+919182607068" className="hover:text-blue-400 transition-colors">+91 9182607068</a>
              </li>
              <li className="flex items-center space-x-2">
                <FaEnvelope className="h-4 w-4 text-blue-400" />
                <a href="mailto:info@ssmtsolutions.com" className="hover:text-blue-400 transition-colors">info@ssmtsolutions.com</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Development Center</h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex items-start space-x-2">
                <FaMapMarkerAlt className="h-5 w-5 text-blue-400 flex-shrink-0 mt-0.5" />
                <span>Shyam Nagar Colony, Pakur, Jharkhand, 816107</span>
              </li>
              <li className="flex items-center space-x-2">
                <FaPhone className="h-4 w-4 text-blue-400" />
                <a href="tel:+919432588119" className="hover:text-blue-400 transition-colors">+91 9432588119</a>
              </li>
              <li className="flex items-center space-x-2">
                <FaEnvelope className="h-4 w-4 text-blue-400" />
                <a href="mailto:info@ssmtsolutions.com" className="hover:text-blue-400 transition-colors">info@ssmtsolutions.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} SSMT Solutions. All rights reserved.</p>
          <p className="mt-2">
            Developed by{' '}
            <a 
              href="https://cehpoint.co.in" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 transition-colors font-semibold"
            >
              Cehpoint
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
