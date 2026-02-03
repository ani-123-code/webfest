import { ArrowRight, Mail } from 'lucide-react';
import UserStoriesSection from '../components/UserStoriesSection';

export default function Stories() {
  return (
    <div className="pt-20">
      <UserStoriesSection />

      <div className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-6">Become an EcoDispose Captain</h2>
            <p className="text-lg text-gray-600 mb-8">
              Join our mission to create a sustainable future by becoming an EcoDispose Captain. Our captains are passionate individuals and corporate leaders who drive environmental change in their communities and organizations.
            </p>
            <a
              href="mailto:team@eco-dispose.com"
              className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-500 transition-colors"
            >
              <Mail className="h-5 w-5" />
              Apply to Join
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-green-50 rounded-xl p-8">
              <h3 className="text-xl font-bold mb-4">Individual Captains</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <ArrowRight className="h-5 w-5 text-green-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Lead local community initiatives for e-waste collection</span>
                </li>
                <li className="flex items-start gap-3">
                  <ArrowRight className="h-5 w-5 text-green-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Organize awareness programs in your neighborhood</span>
                </li>
                <li className="flex items-start gap-3">
                  <ArrowRight className="h-5 w-5 text-green-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Receive recognition and rewards for your impact</span>
                </li>
              </ul>
            </div>

            <div className="bg-green-50 rounded-xl p-8">
              <h3 className="text-xl font-bold mb-4">Corporate Champions</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <ArrowRight className="h-5 w-5 text-green-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Drive sustainability initiatives within your organization</span>
                </li>
                <li className="flex items-start gap-3">
                  <ArrowRight className="h-5 w-5 text-green-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Implement effective e-waste management programs</span>
                </li>
                <li className="flex items-start gap-3">
                  <ArrowRight className="h-5 w-5 text-green-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Get featured in our success stories</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-gray-50 rounded-xl p-8">
            <h3 className="text-xl font-bold mb-4">How to Apply</h3>
            <p className="text-gray-600 mb-6">
              Send us an email at team@eco-dispose.com with the following information:
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <ArrowRight className="h-5 w-5 text-green-600 flex-shrink-0 mt-1" />
                <span className="text-gray-700">Your name and contact information</span>
              </li>
              <li className="flex items-start gap-3">
                <ArrowRight className="h-5 w-5 text-green-600 flex-shrink-0 mt-1" />
                <span className="text-gray-700">Whether you're applying as an individual or corporate champion</span>
              </li>
              <li className="flex items-start gap-3">
                <ArrowRight className="h-5 w-5 text-green-600 flex-shrink-0 mt-1" />
                <span className="text-gray-700">Your vision for sustainable e-waste management</span>
              </li>
              <li className="flex items-start gap-3">
                <ArrowRight className="h-5 w-5 text-green-600 flex-shrink-0 mt-1" />
                <span className="text-gray-700">Previous experience in environmental initiatives (if any)</span>
              </li>
              <li className="flex items-start gap-3">
                <ArrowRight className="h-5 w-5 text-green-600 flex-shrink-0 mt-1" />
                <span className="text-gray-700">Ideas for implementing e-waste management in your community/organization</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
