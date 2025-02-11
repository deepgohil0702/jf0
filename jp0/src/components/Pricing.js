import React from 'react';
import { Check } from 'lucide-react';

const PricingCard = ({ title, subtitle, price, period, features, cta, monthly }) => (
  <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col h-full">
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
);

const Pricing = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-serif text-center mb-16">Explore plans</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Free Plan */}
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
          monthly="₹216 billed up front. ₹20 if billed monthly."
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
          monthly="₹30 if billed monthly. Minimum 5 members."
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
  );
};

export default Pricing;