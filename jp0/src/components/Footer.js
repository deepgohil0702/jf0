import React from 'react';

const Footer = () => {
  const footerLinks = {
    column1: [
      { text: 'Product', href: '#' },
      { text: 'Research', href: '#' },
      { text: 'Careers', href: '#' },
      { text: 'Company', href: '#' },
      { text: 'News', href: '#' },
    ],
    column2: [
      { text: 'Terms of Service', href: '#' },
    ],
  };

  return (
    <footer className="bg-black text-gray-400 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo Column */}
          <div className="flex items-start">
            <a href="/" className="text-white text-2xl font-bold">
              Jowb
            </a>
          </div>

          {/* Links Column 1 */}
          <div className="space-y-4">
            {footerLinks.column1.map((link) => (
              <div key={link.text}>
                <a
                  href={link.href}
                  className="hover:text-white transition-colors"
                >
                  {link.text}
                </a>
              </div>
            ))}
          </div>

          {/* Links Column 2 */}
          <div className="space-y-4">
            {footerLinks.column2.map((link) => (
              <div key={link.text}>
                <a
                  href={link.href}
                  className="hover:text-white transition-colors"
                >
                  {link.text}
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gray-800 text-sm">
          <p>
            This site is protected by reCAPTCHA Enterprise. The Google{' '}
            <a 
              href="#" 
              className="text-gray-400 hover:text-white underline"
            >
              Privacy Policy
            </a>{' '}
            and{' '}
            <a 
              href="#" 
              className="text-gray-400 hover:text-white underline"
            >
              Terms of Service
            </a>{' '}
            apply.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;