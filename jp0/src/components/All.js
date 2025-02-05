import React, { useState, useEffect } from 'react';
import { MessageSquare, FileText, Users, Check, Plus, X } from 'lucide-react';

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
          <span className="text-3xl font-semibold">${price}</span>
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
  const [openFAQ, setOpenFAQ] = useState(null);

  const faqData = [
    {
      id: 'what',
      question: 'What is Claude and how does it work?',
      answer: 'Claude is a next-generation AI assistant built by Anthropic, designed to help with a wide range of tasks while being safe, accurate, and secure.'
    },
    {
      id: 'use',
      question: 'What should I use Claude for?',
      answer: 'Claude can assist with various tasks including writing, analysis, coding, math, and general discussion. Its designed to be a versatile assistant that can help with both simple and complex tasks.'
    },
    {
      id: 'cost',
      question: 'How much does it cost to use?',
      answer: (
        <div>
          <p>
            Claude has four pricing plans available — Free, Pro, Team, and Enterprise. The
            Free plan offers limited use with no payment required.{' '}
            <a href="#pricing" className="text-gray-900 underline hover:no-underline">
              Learn more about Pro and Team pricing
            </a>
            .
          </p>
        </div>
      )
    }
  ];

  return (
    <div className="relative">
      <ScrollProgress />

      {/* Navigation */}
      <nav className="max-w-6xl mx-auto px-4 py-8 fixed top-0 left-0 right-0 bg-white z-40">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="text-orange-600 text-2xl">✴</div>
            <span className="text-xl font-semibold">Claude</span>
          </div>
          <div className="flex items-center space-x-6">
            <a href="#features" className="text-gray-600 hover:text-gray-900">Features</a>
            <a href="#pricing" className="text-gray-600 hover:text-gray-900">Pricing</a>
            <a href="#faq" className="text-gray-600 hover:text-gray-900">FAQ</a>
            <button className="bg-orange-700 hover:bg-orange-800 px-4 py-2 rounded-md text-white transition-colors">
              Get Started
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content Sections */}
      <div className="pt-32">
        {/* Hero Section */}
        <section className="max-w-6xl mx-auto px-4 py-8 mb-16">
          <div className="text-center">
            <h1 className="text-4xl font-serif mb-4">Meet Claude</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Claude is a next generation AI assistant built by Anthropic and trained to
              be safe, accurate, and secure to help you do your best work.
            </p>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="max-w-6xl mx-auto px-4 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                      <div className="space-y-4">
                        <div className="flex items-center space-x-3">
                          <MessageSquare className="h-6 w-6" />
                          <h2 className="text-2xl font-serif">Create with Claude</h2>
                        </div>
                        <p className="text-gray-600">
                          Draft and iterate on websites, graphics, documents, and code alongside
                          your chat with Artifacts.
                        </p>
                      </div>
            
                      <div className="space-y-4">
                        <div className="flex items-center space-x-3">
                          <FileText className="h-6 w-6" />
                          <h2 className="text-2xl font-serif">Bring your knowledge</h2>
                        </div>
                      </div>
            
                      <div className="space-y-4">
                        <div className="flex items-center space-x-3">
                          <Users className="h-6 w-6" />
                          <h2 className="text-2xl font-serif">Share and collaborate with your team</h2>
                        </div>
                      </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="bg-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-4">
            <h1 className="text-4xl font-serif text-center mb-16">Explore plans</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <PricingCard
                title="Free"
                subtitle="For individuals to get started"
                price="0"
                period="Free for everyone"
                features={[
                  "Talk to Claude on the web, iOS, and Android",
                  "Ask about images and docs",
                  "Access to one of our latest models"
                ]}
              />
                {/* Pro Plan */}
        <PricingCard
          title="Pro"
          subtitle="For Claude power users"
          price="18"
          period="Per month with annual subscription"
          monthly="$216 billed up front. $20 if billed monthly."
          features={[
            "Everything in Free, plus:",
            "More usage than Free",
            "Access to Projects to organize documents and chats",
            "Ability to use more models, like Claude 3.5 Sonnet and Claude 3 Opus",
            "Early access to new features"
          ]}
        />

        {/* Team Plan */}
        <PricingCard
          title="Team"
          subtitle="For fast-growing teams"
          price="25"
          period="Per person / month with annual subscription"
          monthly="$30 if billed monthly. Minimum 5 members."
          features={[
            "Everything in Pro, plus:",
            "More usage than Pro",
            "Central billing and administration",
            "Early access to collaboration features"
          ]}
        />

        {/* Enterprise Plan */}
        <PricingCard
          title="Enterprise"
          subtitle="For businesses operating at scale"
          features={[
            "Everything in Team, plus:",
            "More usage than Team",
            "Expanded context window",
            "Single sign-on (SSO) and domain capture",
            "Role-based access with fine grained permissioning",
            "System for Cross-domain Identity Management (SCIM)",
            "Audit logs",
            "Data source integrations"
          ]}
          cta="Contact sales"
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
              AI
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
  );
};

export default ClaudeLanding;