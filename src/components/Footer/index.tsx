import { Mail, Message, Twitter } from 'iconoir-react';
import { navItems } from '../../constants/navbar';
import { footerContent } from '../../constants/footer';
import ViewRulesButton from '../ViewRulesButton';
import ViewCodeOfConductButton from '../ViewCodeOfConductButton';
import { isEventActive } from '../../constants/eventConfig';

const Footer = () => {
  return (
    <div className="py-12 px-4 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="font-heading font-bold text-xl text-glow mb-4">
              {footerContent.brand.name}
            </div>
            <p className="font-body text-muted-foreground mb-4">
              {footerContent.brand.description}
            </p>
            <div className="flex space-x-4">
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
            <h3 className="font-body font-bold text-lg mb-4 text-foreground">
              {footerContent.quickLinks.title}
            </h3>
            <div className="grid grid-cols-2 gap-x-4">
              <ul className="space-y-2 font-body">
                {navItems.slice(0, 4).map((item) => (
                  <li key={item.name}>
                    <a
                      href={`${item.href}`}
                      className="text-muted-foreground hover:text-primary transition-colors duration-300"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
              <ul className="space-y-2 font-body">
                {navItems.slice(4, 8).map((item) => (
                  <li key={item.name}>
                    <a
                      href={`${item.href}`}
                      className="text-muted-foreground hover:text-primary transition-colors duration-300"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Event Info */}
          {isEventActive() && (
            <div>
              <h3 className="font-body font-bold text-lg mb-4 text-foreground">
                {footerContent.eventInfo.title}
              </h3>
              <ul className="space-y-2 font-body text-muted-foreground">
                {footerContent.eventInfo.items.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Contact */}
          <div>
            <h3 className="font-body font-bold text-lg mb-4 text-foreground">
              {footerContent.contact.title}
            </h3>
            <ul className="space-y-2 font-body text-muted-foreground">
              {footerContent.contact.items.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-col items-center md:items-start">
              <p className="font-body text-muted-foreground">{footerContent.bottom.copyright}</p>
              <p className="font-body text-muted-foreground text-sm mt-1">
                {footerContent.creator.text}{' '}
                <a
                  href={footerContent.creator.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary/80 transition-colors duration-300"
                >
                  {footerContent.creator.name}
                </a>
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-4 mt-4 md:mt-0">
              {footerContent.bottom.links.map((link, index) =>
                link.isModal ? (
                  link.modalType === 'rules' ? (
                    <ViewRulesButton key={index} size="sm" variant="outline">
                      {link.name}
                    </ViewRulesButton>
                  ) : (
                    <ViewCodeOfConductButton key={index} size="sm" variant="outline">
                      {link.name}
                    </ViewCodeOfConductButton>
                  )
                ) : (
                  <a
                    key={index}
                    href={link.href}
                    className="font-body text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                ),
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
