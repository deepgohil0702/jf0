import { Link } from 'react-router-dom';

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-sm p-6">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
          Terms of Service
        </h1>

        <div className="prose max-w-none">
      

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">1. Introduction</h2>
            <p className="text-gray-600 mb-4">
              Welcome to Jowb ("we," "our," or "us"). These Terms of Service govern your use of our AI-powered job application platform. By accessing or using our services, you agree to be bound by these terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">2. User Responsibilities</h2>
            <p className="text-gray-600 mb-4">
              You agree to:
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>Provide accurate information during registration</li>
                <li>Maintain the confidentiality of your account</li>
                <li>Use the platform only for lawful purposes</li>
                <li>Not engage in any activity that disrupts service functionality</li>
              </ul>
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">3. Intellectual Property</h2>
            <p className="text-gray-600 mb-4">
              All content on the platform, including logos, text, and software, is the property of Jowb and protected by intellectual property laws. You may not reproduce, modify, or distribute any content without explicit permission.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">4. Limitation of Liability</h2>
            <p className="text-gray-600 mb-4">
              Jowb shall not be liable for any indirect, incidental, or consequential damages arising from:
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>Use or inability to use the service</li>
                <li>Unauthorized access to user data</li>
                <li>Third-party actions conducted through the platform</li>
              </ul>
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">5. Termination</h2>
            <p className="text-gray-600 mb-4">
              We reserve the right to suspend or terminate your account at our sole discretion, without notice, for conduct that violates these terms or is harmful to other users.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">6. Governing Law</h2>
            <p className="text-gray-600 mb-4">
              These terms shall be governed by and construed in accordance with the laws of [Your Country/State], without regard to its conflict of law provisions.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">7. Changes to Terms</h2>
            <p className="text-gray-600 mb-4">
              We may update these terms periodically. Continued use of the service after changes constitutes acceptance of the modified terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4 text-gray-800">Contact Us</h2>
            <p className="text-gray-600">
              For questions about these Terms, contact us at:
              <br />
              <a href="mailto:legal@jowb.com" className="text-blue-600 hover:underline">
                legal@jowb.com
              </a>
            </p>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-500">
            This site is protected by reCAPTCHA Enterprise. The Google{' '}
            <Link to="/privacy" className="text-blue-600 hover:underline">
              Privacy Policy
            </Link>{' '}
            and{' '}
            <Link to="/terms" className="text-blue-600 hover:underline">
              Terms of Service
            </Link>{' '}
            apply.
          </p>
          <p className="text-sm text-gray-500 mt-2">
            © {new Date().getFullYear()} Jowb. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;