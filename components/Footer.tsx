// components/Footer.js
import {
  FiFacebook,
  FiInstagram,
  FiTwitter,
  FiMail,
  FiPhone,
  FiMapPin,
} from "react-icons/fi";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="bg-slate-900/80 backdrop-blur-md text-white pt-20 pb-10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-orange-500 mb-4">
              Yati Kitchen
            </h3>
            <p className="text-slate-400 mb-4">
              Feel Malaysia, Live Local. Home-cooked meals, cozy local stays,
              and real Cameron Highlands vibes.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-slate-400 hover:text-amber-400 transition-colors"
              >
                <FiFacebook size={20} />
              </a>
              <a
                href="#"
                className="text-slate-400 hover:text-amber-400 transition-colors"
              >
                <FiInstagram size={20} />
              </a>
              <a
                href="#"
                className="text-slate-400 hover:text-amber-400 transition-colors"
              >
                <FiTwitter size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#hero"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#experiences"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Experiences
                </a>
              </li>
              <li>
                <a
                  href="#packages"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Packages
                </a>
              </li>
              <li>
                <a
                  href="#testimonials"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Testimonials
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Contact Info
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <FiMapPin className="mt-1 mr-3 text-amber-400" />
                <span className="text-slate-400">
                  C-1-19, Cameron Fair, Jalan Camelia,
                  <br />
                  39000 Tanah Rata,
                  <br />
                  Cameron Highlands, Pahang
                </span>
              </li>
              <li className="flex items-center">
                <FiPhone className="mr-3 text-amber-400" />
                <span className="text-slate-400">+60 XXX-XXXXXXX</span>
              </li>
              <li className="flex items-center">
                <FiMail className="mr-3 text-amber-400" />
                <span className="text-slate-400">info@yatikitchen.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Business Info
            </h4>
            <p className="text-slate-400 mb-2">Yati Kitchen</p>
            <p className="text-slate-400 mb-2">202303143855 (LA0058339-D)</p>
            <p className="text-slate-400">
              Licensed tour operator and accommodation provider
            </p>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400">
          <p>© {new Date().getFullYear()} Yati Kitchen. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
