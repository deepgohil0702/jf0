import React, { useState, useEffect } from 'react';
import { MessageSquare, FileText, Users, Check, Plus, X } from 'lucide-react';
import Formmain from './Formmain';
// Scroll Progress Bar Component
const ScrollProgress = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = (window.scrollY / windowHeight) * 100;
      setProgress(scrolled);
    };

    window.addEventListener('scroll', updateScrollProgress);
    return () => window.removeEventListener('scroll', updateScrollProgress);
  }, []);


  return (
    <div className="fixed top-0 left-0 h-1 w-full bg-gray-200 z-50">
      <div 
        className="h-full bg-orange-600 transition-all duration-300" 
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};

// Animated Pricing Card Component
const PricingCard = ({ title, subtitle, price, period, features, cta, monthly }) => (
  <div className="relative bg-gradient-to-r from-orange-500 to-purple-500 p-1 rounded-2xl animate-gradient hover:animate-gradient-hover">
    <div className="bg-white rounded-2xl p-6 h-full">
      <div className="mb-6">
        <h2 className="text-2xl font-serif mb-2">{title}</h2>
        <p className="text-gray-600 mb-4">{subtitle}</p>
        
        <div className="mb-4">
          <span className="text-3xl font-semibold">₹{price}</span>
          {period && <span className="text-gray-600 text-sm ml-2">{period}</span>}
        </div>
        
        {monthly && (
          <p className="text-sm text-gray-600">{monthly}</p>
        )}
      </div>

      <div className="flex-grow">
        {features.map((feature, index) => (
          <div key={index} className="flex items-start space-x-3 mb-4">
            <Check className="w-5 h-5 text-gray-900 mt-1 flex-shrink-0" />
            <span className="text-gray-700">{feature}</span>
          </div>
        ))}
      </div>

      {cta && (
        <button className="w-full mt-6 py-2 px-4 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors">
          {cta}
        </button>
      )}
    </div>
  </div>
);

// FAQ Item Component
const FAQItem = ({ question, answer, isOpen, onToggle }) => (
  <div className="border-b border-gray-200 py-6">
    <button
      onClick={onToggle}
      className="w-full flex justify-between items-start text-left"
    >
      <h2 className="text-xl font-serif text-gray-900 pr-8">{question}</h2>
      {isOpen ? (
        <X className="w-6 h-6 text-gray-900 flex-shrink-0" />
      ) : (
        <Plus className="w-6 h-6 text-gray-900 flex-shrink-0" />
      )}
    </button>
    
    {isOpen && (
      <div className="mt-4 text-gray-600 prose">
        {typeof answer === 'string' ? (
          <p>{answer}</p>
        ) : (
          answer
        )}
      </div>
    )}
  </div>
);

// Main Landing Page Component
const ClaudeLanding = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const [openFAQ, setOpenFAQ] = useState(null);
  const footerLinks = {
    column1: [
      { text: 'Product', href: '#' },
      { text: 'Research', href: '#' }
    ],
    column2: [
      { text: 'Terms of Service', href: '/termsofservice' },

    ],
  };
const faqData = [
  {
    id: 'what',
    question: 'What is this automated job application platform and how does it work?',
    answer:
      'Our platform is an AI-powered solution that completely automates the job application process. Simply upload your resume and provide your email credentials, and our system will parse your resume, generate personalized application emails, and submit applications to multiple companies on your behalf.'
  },
  {
    id: 'setup',
    question: 'What do I need to get started?',
    answer:
      'Getting started is easy! All you need is your updated resume and your email login credentials. Once you provide these, our AI takes over—handling resume parsing, custom email creation, and application submissions—so you can focus on preparing for interviews.'
  },
  {
    id: 'cost',
    question: 'How much does it cost to use this platform?',
    answer: (
      <div>
        <p>
          We offer a range of pricing plans to suit different needs, including a free plan with essential features and premium plans for advanced functionality.{' '}
          <a href="#pricing" className="text-gray-900 underline hover:no-underline">
            Learn more about our pricing options
          </a>
          .
        </p>
      </div>
    )
  }
];

  return (
    <>
    <div className="relative">
      
      <ScrollProgress />


      {/* Main Content Sections */}
      <div className="pt-32">
        {/* Hero Section */}
        <section className="max-w-6xl mx-auto px-4 py-8 mb-16">
          <div className="text-center">
            <h1 className="text-4xl font-serif mb-4">Let AI Do The Work</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Jowb is an innovative AI-powered job search platform designed to streamline and automate the job hunting process. Built with advanced AI agents, it eliminates the need for manual multi-platform applications
            </p>
          </div>
        </section>

        <section id="features" className="max-w-6xl mx-auto px-4 py-16">
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
    {/* Feature 1: Resume Upload & Parsing */}
    <div className="space-y-4">
      <div className="flex items-center space-x-3">
        <FileText className="h-6 w-6" />
        <h2 className="text-2xl font-serif">Effortless Resume Parsing</h2>
      </div>
      <p className="text-gray-600">
        Upload your resume and let our AI quickly extract your skills, experience, and career goals, setting the stage for targeted applications.
      </p>
    </div>

    {/* Feature 2: Personalized Application Emails */}
    <div className="space-y-4">
      <div className="flex items-center space-x-3">
        <MessageSquare className="h-6 w-6" />
        <h2 className="text-2xl font-serif">Custom Application Emails</h2>
      </div>
      <p className="text-gray-600">
        Our system generates tailored emails for each job opportunity, ensuring your application perfectly aligns with the job requirements.
      </p>
    </div>

    {/* Feature 3: Automated Multi-Company Applications */}
    <div className="space-y-4">
      <div className="flex items-center space-x-3">
        <Users className="h-6 w-6" />
        <h2 className="text-2xl font-serif">Automated Submissions</h2>
      </div>
      <p className="text-gray-600">
        With a single setup, our platform sends your applications to multiple companies—eliminating tedious manual submissions and saving you time.
      </p>
    </div>
  </div>
</section>

        {/* Pricing Section */}
        <section id="pricing" className="bg-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-4">
            <h1 className="text-4xl font-serif text-center mb-16">Explore plans</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
              <PricingCard
  title="Free"
  subtitle="For early adopters (First 10 users only)"
  price="0"
  period="Limited offer for first 10 users"
                features={[
                  "50 emails per day",
    "Basic resume parsing",
    "Limited personalized application emails",
    "Access to core features"
                ]}
              />
                {/* Pro Plan */}
        <PricingCard
 title="Pro"
 subtitle="For professionals and high-volume users"
 price="150"
 period="Per week"
 monthly="150rs billed weekly"
 features={[
   "1000 emails per day",
   "Full security with spam prevention",
   "Advanced resume parsing",
   "Send documents (CV and resume) with applications",
   "Early access to new features",
   "Priority support and additional benefits"
 ]}
        />

      
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="max-w-3xl mx-auto px-4 py-16">
          <h1 className="text-4xl font-serif text-center mb-12">Frequently asked questions</h1>
          <div className="divide-y divide-gray-200">
            {faqData.map((item) => (
              <FAQItem
                key={item.id}
                question={item.question}
                answer={item.answer}
                isOpen={openFAQ === item.id}
                onToggle={() => setOpenFAQ(openFAQ === item.id ? null : item.id)}
              />
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-black text-gray-400 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo Column */}
          <div className="flex items-start">
            <a href="/" className="text-white text-2xl font-bold">
              JOWB
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
      </div>

      <style jsx global>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 5s ease infinite;
        }
        .animate-gradient-hover:hover {
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </div>
    </>
  );
};

export default ClaudeLanding;