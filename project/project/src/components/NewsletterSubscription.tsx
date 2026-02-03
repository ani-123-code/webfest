import { useState } from 'react';
import { API_ENDPOINTS } from '../config/api';

const NewsletterSubscription = () => {
  const [input, setInput] = useState('');
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubscribe = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!input.trim()) {
      setMessage('Please enter a valid email address.');
      return;
    }

    setIsLoading(true);
    setMessage('');

    try {
      const response = await fetch(API_ENDPOINTS.ADD_SUBSCRIBERS, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: input }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage(data.message);
        setInput(''); // Clear the input field on success
        
        // Clear success message after 5 seconds
        setTimeout(() => {
          setMessage('');
        }, 5000);
      } else {
        setMessage(data.message || 'An error occurred. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      setMessage('Network error. Please check your connection and try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-2">Stay Updated</h3>
            <p className="text-gray-400">
              Subscribe to our newsletter for the latest updates on e-waste management and environmental initiatives.
            </p>
          </div>
          
          <form onSubmit={handleSubscribe} className="space-y-4">
            <div className="md:flex md:gap-4 md:space-y-0 space-y-4">
              <input
                type="email"
                id="email"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Enter your email"
                className="w-full md:flex-1 px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                required
                disabled={isLoading}
              />
              <button
                type="submit"
                disabled={isLoading}
                className={`w-full md:w-auto px-6 py-3 rounded-lg font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-green-500 ${
                  isLoading
                    ? 'bg-gray-600 text-gray-300 cursor-not-allowed'
                    : 'bg-green-600 text-white hover:bg-green-500'
                }`}
              >
                {isLoading ? 'Subscribing...' : 'Subscribe'}
              </button>
            </div>
            
            {message && (
              <div className={`mt-4 p-3 rounded-lg ${
                message.includes('Thank you') || message.includes('confirmation')
                  ? 'bg-green-900/20 border border-green-500 text-green-400'
                  : 'bg-red-900/20 border border-red-500 text-red-400'
              }`}>
                <p className="text-sm">{message}</p>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewsletterSubscription;