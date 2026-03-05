import React from 'react';
import { Instagram, Facebook, Twitter, Mail, Phone, MapPin, Clock } from 'lucide-react';

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer id="contact" aria-label="Site footer" className="bg-ev-greenDark text-white relative overflow-hidden">
      {/* Top accent line */}
      <div className="h-1 bg-gradient-to-r from-ev-green via-ev-gold to-ev-green" />

      {/* Decorative leaf */}
      <div className="absolute top-10 right-10 w-32 h-32 opacity-[0.06] pointer-events-none">
        <svg viewBox="0 0 100 100" fill="white">
          <path d="M50 5C30 20 10 45 15 75c5 25 30 20 35 15C55 85 75 70 80 45 85 20 65 5 50 5z"/>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="space-y-5">
            <div>
              <img src="/assets/products/logo-evaya.png" alt="Evaya Naturals" className="h-12 w-auto brightness-0 invert opacity-90" />
            </div>
            <p className="font-body text-sm text-white/70 leading-relaxed max-w-xs">
              Your trusted wellness partner. Premium natural herbs, superfoods & oils for a healthier you.
            </p>
            {/* Newsletter */}
            <div>
              <p className="font-body text-sm font-semibold text-white/90 mb-2">Subscribe to updates</p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-4 py-2.5 bg-white/10 border border-white/20 rounded-lg text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-ev-gold/60 transition-colors"
                />
                <button className="bg-ev-gold hover:bg-ev-goldLight text-ev-greenDark font-body font-bold text-sm px-4 py-2.5 rounded-lg transition-colors">
                  Join
                </button>
              </div>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-heading text-base font-semibold text-white mb-5">Shop</h4>
            <ul className="space-y-2.5 font-body text-sm text-white/70">
              {['Herbal Supplements', 'Spices & Herbs', 'Oils & Butters', 'Herbal Powders', 'Skincare', 'Hair Care', 'Herbal Teas'].map((item) => (
                <li key={item}>
                  <a href="#best-sellers" className="hover:text-ev-gold transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-base font-semibold text-white mb-5">Quick Links</h4>
            <ul className="space-y-2.5 font-body text-sm text-white/70">
              {['About Us', 'Wellness Hub', 'Reviews', 'FAQ', 'Shipping Policy', 'Privacy Policy'].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-ev-gold transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-base font-semibold text-white mb-5">Contact Us</h4>
            <ul className="space-y-3 font-body text-sm text-white/70">
              <li className="flex items-start gap-2.5">
                <MapPin size={16} className="text-ev-gold mt-0.5 flex-shrink-0" />
                <span>Kyato complex B4-03, next to Equatorial Mall, Kampala, Uganda</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone size={16} className="text-ev-gold flex-shrink-0" />
                <span>+256 773 178790</span>
              </li>
              <li>
                <a
                  href="https://wa.me/256773178790?text=Hi%20EVAYA%20Naturals%2C%20I%27d%20like%20to%20enquire%20about%20your%20products"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-1 px-4 py-2 bg-[#25D366] hover:bg-[#1EBE57] text-white rounded-lg text-sm font-semibold transition-all hover:-translate-y-0.5 shadow-lg shadow-[#25D366]/20"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Chat on WhatsApp
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail size={16} className="text-ev-gold flex-shrink-0" />
                <span>hello@evayanaturals.com</span>
              </li>
            </ul>

            {/* Opening Hours */}
            <div className="mt-5">
              <div className="flex items-center gap-2 mb-3">
                <Clock size={16} className="text-ev-gold flex-shrink-0" />
                <span className="font-body text-sm font-semibold text-white/90">Opening Hours</span>
                <span className="text-xs text-green-400 font-semibold ml-auto">Open now</span>
              </div>
              <ul className="space-y-1.5 font-body text-xs text-white/60">
                <li className="flex justify-between"><span>Monday</span><span className="text-white/80">Open 24 hours</span></li>
                <li className="flex justify-between"><span>Tuesday</span><span className="text-white/80">Open 24 hours</span></li>
                <li className="flex justify-between"><span>Wednesday</span><span className="text-white/80">Open 24 hours</span></li>
                <li className="flex justify-between"><span>Thursday</span><span className="text-white/80">Open 24 hours</span></li>
                <li className="flex justify-between"><span>Friday</span><span className="text-white/80">Open 24 hours</span></li>
                <li className="flex justify-between"><span>Saturday</span><span className="text-white/80">Open 24 hours</span></li>
                <li className="flex justify-between"><span>Sunday</span><span className="text-red-400/80">Closed</span></li>
              </ul>
            </div>

            {/* Social */}
            <div className="flex items-center gap-3 mt-5">
              {[Instagram, Facebook, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-full bg-white/10 border border-white/15 flex items-center justify-center hover:bg-ev-gold hover:border-ev-gold hover:text-ev-greenDark text-white/70 transition-all"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Google Maps */}
        <div className="mb-10 rounded-2xl overflow-hidden border border-white/15 shadow-lg">
          <a
            href="https://maps.app.goo.gl/avJCjRrbTZEfAEKy6"
            target="_blank"
            rel="noopener noreferrer"
            className="block font-body text-xs text-white/60 hover:text-ev-gold transition-colors px-4 py-2.5 bg-white/5 flex items-center gap-2"
          >
            <MapPin size={14} className="text-ev-gold" />
            View on Google Maps — Kyato Complex B4-03, next to Equatorial Mall
          </a>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3989.756652898385!2d32.571086874964664!3d0.3185587996783171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMMKwMTknMDYuOCJOIDMywrAzNCcyNS4yIkU!5e0!3m2!1sen!2sug!4v1772689403732!5m2!1sen!2sug"
            width="100%"
            height="220"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="EVAYA Naturals location on Google Maps"
            className="w-full"
          />
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/15 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-body text-xs text-white/50">
            &copy; {year} EVAYA Naturals. All rights reserved.
          </p>
          <div className="flex items-center gap-4 font-body text-xs text-white/50">
            <a href="#" className="hover:text-white/80 transition-colors">Terms & Conditions</a>
            <a href="#" className="hover:text-white/80 transition-colors">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
