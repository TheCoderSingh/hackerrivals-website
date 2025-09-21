import { Github, Mail, Message, Twitter } from 'iconoir-react';
import { navItems } from '../../constants/navbar';

const Footer = () => {
  return (
    <div className="py-12 px-4 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="font-heading font-bold text-xl text-glow mb-4">HACKERRIVALS</div>
            <p className="font-body text-muted-foreground mb-4">
              The ultimate eSports hackathon experience, designed for spectators and built for
              innovation.
            </p>
            <div className="flex space-x-4">
              <a href="#" aria-label="GitHub">
                <Github className="hover:text-primary transition-colors duration-300 text-muted-foreground" />
              </a>
              <a href="#" aria-label="Twitter">
                <Twitter className="hover:text-primary transition-colors duration-300 text-muted-foreground" />
              </a>
              <a href="#" aria-label="Discord">
                <Message className="hover:text-primary transition-colors duration-300 text-muted-foreground" />
              </a>
              <a href="mailto:info@hackerrivals.com" aria-label="Email">
                <Mail className="hover:text-primary transition-colors duration-300 text-muted-foreground" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-body font-bold text-lg mb-4 text-foreground">Quick Links</h3>
            <ul className="space-y-2 font-body">
              {navItems.map((item) => (
                <li key={item.name}>
                  <a
                    href={`#${item.href}`}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Event Info */}
          <div>
            <h3 className="font-body font-bold text-lg mb-4 text-foreground">Event Details</h3>
            <ul className="space-y-2 font-body text-muted-foreground">
              <li>October 25, 2025</li>
              <li>In-Person Event</li>
              <li>$1000 Cash Prize</li>
              <li>1-5 Team Members</li>
              <li>All Skill Levels</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-body font-bold text-lg mb-4 text-foreground">Contact</h3>
            <ul className="space-y-2 font-body text-muted-foreground">
              <li>info@hackerrivals.com</li>
              <li>Discord: /hackerrivals</li>
              <li>Twitter: @hackerrivals</li>
              <li>GitHub: /hackerrivals</li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="font-body text-muted-foreground">
              © 2025 HackerRivals. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a
                href="#"
                className="font-body text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="font-body text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="font-body text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                Code of Conduct
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
