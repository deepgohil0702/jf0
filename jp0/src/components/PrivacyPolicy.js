import { Link } from 'react-router-dom';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-sm p-6">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
          Privacy Policy
        </h1>

        <div className="prose max-w-none">
   

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">1. Information We Collect</h2>
            <p className="text-gray-600 mb-4">
              We collect various types of information to provide and improve our services:
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>Personal Information: Name, email, contact details</li>
                <li>Professional Information: Resume/CV, work experience, skills</li>
                <li>Usage Data: Application patterns, job search preferences</li>
                <li>Technical Data: IP address, browser type, device information</li>
              </ul>
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">2. Use of Data</h2>
            <p className="text-gray-600 mb-4">
              We use collected information to:
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>Provide and maintain our services</li>
                <li>Personalize job recommendations</li>
                <li>Process automated job applications</li>
                <li>Communicate service updates</li>
                <li>Improve platform functionality</li>
              </ul>
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">3. Data Sharing</h2>
            <p className="text-gray-600 mb-4">
              We may share information with:
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>Employers for job applications</li>
                <li>Third-party service providers</li>
                <li>Legal authorities when required</li>
                <li>Business partners with user consent</li>
              </ul>
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">4. Data Security</h2>
            <p className="text-gray-600 mb-4">
              We implement industry-standard security measures including:
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>SSL/TLS encryption</li>
                <li>Regular security audits</li>
                <li>Access controls</li>
              </ul>
              However, no electronic transmission is completely secure.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">5. User Rights</h2>
            <p className="text-gray-600 mb-4">
              You have the right to:
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>Access your personal data</li>
                <li>Request correction or deletion</li>
                <li>Opt-out of marketing communications</li>
                <li>Withdraw consent for data processing</li>
              </ul>
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">6. Cookies</h2>
            <p className="text-gray-600 mb-4">
              We use cookies to:
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>Maintain user sessions</li>
                <li>Analyze traffic patterns</li>
                <li>Personalize content</li>
              </ul>
              You can manage cookie preferences through browser settings.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">7. Policy Changes</h2>
            <p className="text-gray-600 mb-4">
              We may update this policy periodically. Material changes will be notified via email or platform notice.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4 text-gray-800">Contact Information</h2>
            <p className="text-gray-600">
              For privacy concerns or data requests:
              <br />
              <a href="mailto:privacy@jowb.com" className="text-blue-600 hover:underline">
                privacy@jowb.com
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

export default PrivacyPolicy;