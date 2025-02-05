import React, { useState, useEffect } from "react";

export default function Textscrlrevl() {
  const [displayedText, setDisplayedText] = useState("");
  const fullText = "Settings Options As part of the design of an accounting platform, our team created these emails to keep users informed about their new invoices, payment confirmations, and task statuses. To add a touch of personality to the emails, we created a custom set of hand-drawn illustrations."; // The full text to be revealed
  const typingSpeed = 100; // Speed of typing in milliseconds

  useEffect(() => {
    let currentIndex = 0;

    const typingInterval = setInterval(() => {
      setDisplayedText((prev) => prev + fullText[currentIndex]);
      currentIndex += 1;

      // Clear the interval when typing is complete
      if (currentIndex === fullText.length) {
        clearInterval(typingInterval);
      }
    }, typingSpeed);

    return () => clearInterval(typingInterval); // Cleanup on component unmount
  }, []);

  return (
    <div className="text-center text-lg font-semibold text-gray-700 mt-10">
      {displayedText}
      <span className="blinking-cursor">|</span>
    </div>
  );
}