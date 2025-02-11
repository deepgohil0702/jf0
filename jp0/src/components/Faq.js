import React, { useState } from 'react';
import { Plus, X } from 'lucide-react';
import Footer from './Footer';

const FAQItem = ({ question, answer, isOpen, onToggle }) => (
  // FAQItem component remains the same
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

const FAQ = () => {
  const [openItem, setOpenItem] = useState('cost');
  
  const faqData = [
    {
      id: 'what',
      question: 'What is Claude and how does it work?',
      answer: 'Claude is a next-generation AI assistant built by Jowb, designed to help with a wide range of tasks while being safe, accurate, and secure.'
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
            <a 
              href="#" 
              className="text-gray-900 underline hover:no-underline"
            >
              Learn more about Pro and Team pricing
            </a>
            .
          </p>
        </div>
      )
    }
  ];

  return (
    <>
      <div className="max-w-3xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-serif text-center mb-12">
          Frequently asked questions
        </h1>
        
        <div className="divide-y divide-gray-200">
          {faqData.map((item) => (
            <FAQItem
              key={item.id}
              question={item.question}
              answer={item.answer}
              isOpen={openItem === item.id}
              onToggle={() => setOpenItem(openItem === item.id ? null : item.id)}
            />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default FAQ;