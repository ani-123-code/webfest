import type { ChangeEvent, ElementType, FormEvent } from 'react';
import { useState } from 'react';
import { Building2, Users } from 'lucide-react';
import { API_ENDPOINTS } from '../config/api';

type RequestPickupProps = {
  variant?: 'section' | 'modal';
};

type PickupFormData = {
  company: string;
  designation: string;
  name: string;
  address: string;
  email: string;
  phone: string;
  description: string;
};

export default function RequestPickup({ variant = 'section' }: RequestPickupProps) {
  const [userType, setUserType] = useState<'individual' | 'corporate'>('individual');
  const [formData, setFormData] = useState<PickupFormData>({
    company: '', designation: '', name: '', address: '', email: '', phone: '', description: '',
  });
  const [showPopup, setShowPopup] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value } as PickupFormData));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch(API_ENDPOINTS.REQUEST_PICKUP, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userType,
          company: formData.company || '',
          designation: formData.designation || '',
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          address: formData.address,
          description: formData.description || ''
        }),
      });

      if (!response.ok) {
        let errorMessage = 'Failed to submit request. Please try again.';
        try {
          const errorData = await response.json();
          errorMessage = errorData.message || errorData.error || errorMessage;
        } catch {
          errorMessage = `Server error: ${response.status} ${response.statusText}`;
        }
        alert(errorMessage);
        return;
      }

      await response.json();

      // Clear form and show success
      setFormData({ company: "", designation: "", name: "", email: "", phone: "", address: "", description: "" });
      setShowPopup(true);
    } catch (error: unknown) {
      console.error('Form submission error:', error);
      const message = error instanceof Error ? error.message : '';
      if (message.includes('Failed to fetch')) {
        alert('Cannot connect to server. Please make sure the backend is running on http://localhost:8000');
      } else {
        alert('Network error. Please check your connection and try again.');
      }
    } finally {
      setLoading(false);
    }
  };

  const closePopup = () => setShowPopup(false);

  const Wrapper: ElementType = variant === 'modal' ? 'div' : 'section';
  const wrapperProps =
    variant === 'modal'
      ? { className: 'w-full' }
      : {
          className: 'bg-gradient-to-br from-white via-green-50 to-emerald-50 py-24',
          id: 'request-pickup',
        };

  return (
    <Wrapper {...wrapperProps}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className={variant === 'modal' ? 'text-center mb-8' : 'text-center mb-12'}>
          <h2 className="text-5xl font-black text-green-950 mb-3">
            Request a <span className="bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent">Pickup</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Schedule an e‑waste collection that suits your needs
          </p>
        </div>

        {/* User Type Switch */}
        <div className="flex justify-center gap-4 mb-10">
          {['individual', 'corporate'].map(type => {
            const Icon = type === 'individual' ? Users : Building2;
            return (
              <button
                key={type}
                onClick={() => setUserType(type)}
                className={`flex items-center gap-2 px-5 py-3 rounded-2xl font-semibold text-sm transition-colors ${
                  userType === type
                    ? 'bg-green-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-green-50'
                }`}
              >
                <Icon className="w-5 h-5" />
                {type === 'individual' ? 'Individual' : 'Corporate'}
              </button>
            );
          })}
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Corporate fields */}
          {userType === 'corporate' && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {[
                ['company', 'Company Name'],
                ['designation', 'Designation']
              ].map(([name, label]) => (
                <div key={name}>
                  <label htmlFor={name} className="block text-sm font-medium text-gray-700">{label} *</label>
                  <input
                    id={name}
                    name={name}
                    value={formData[name as keyof PickupFormData]}
                    required
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-lg border-2 focus:outline-none border-gray-400 px-3 py-3 bg-white text-gray-900 shadow-sm focus:border-green-500 focus:ring-2 focus:ring-green-500"
                  />
                </div>
              ))}
            </div>
          )}

          {/* Split layout for lg+ */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left side */}
            <div className="space-y-6">
              {[
                ['name', 'Name'],
                ['email', 'Email'],
                ['phone', 'Phone']
              ].map(([name, label]) => (
                <div key={name}>
                  <label htmlFor={name} className="block text-sm font-medium text-gray-700">{label} *</label>
                  <input
                    id={name}
                    name={name}
                    type={name === 'email' ? 'email' : 'text'}
                    value={formData[name as keyof PickupFormData]}
                    required
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-lg border-2 border-gray-400 px-3 py-3 bg-white text-gray-900 shadow-sm focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-500"
                  />
                </div>
              ))}
            </div>

            {/* Right side */}
            <div className="space-y-6">
              <div>
                <label htmlFor="address" className="block text-sm font-medium text-gray-700">Pickup Address *</label>
                <textarea
                  id="address"
                  name="address"
                  value={formData.address}
                  required
                  rows={3}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-lg border-2 border-gray-400 px-3 py-3 bg-white text-gray-900 shadow-sm focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-500 resize-none"
                />
              </div>

              <div>
                <label htmlFor="description" className="block text-sm font-medium text-gray-700">E-Waste Items</label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  placeholder="List the items you want to dispose..."
                  onChange={handleChange}
                  rows={3}
                  className="mt-1 block w-full rounded-lg border-2 border-gray-400 px-3 py-3 bg-white text-gray-900 shadow-sm focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-500 resize-none"
                />
              </div>
            </div>
          </div>

          {/* Button center aligned */}
          <div className="flex justify-center pt-6">
            <button
              type="submit"
              disabled={loading}
              className="w-full lg:w-1/3 flex justify-center py-3 px-4 rounded-2xl bg-green-600 text-white font-semibold hover:bg-green-700 focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition disabled:opacity-50"
            >
              {loading ? (
                <span className="flex items-center gap-2">
                  <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <circle cx="12" cy="12" r="10" strokeWidth="2" className="opacity-25" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                  Submitting...
                </span>
              ) : "Schedule Pickup"}
            </button>
          </div>
        </form>

        {/* Success Popup */}
        {showPopup && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-xl shadow-xl max-w-sm text-center space-y-4">
              <svg className="mx-auto h-12 w-12 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 48 48">
                <circle cx="24" cy="24" r="20" strokeWidth="2" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 24l4 4 8-8" />
              </svg>
              <h3 className="text-lg font-semibold text-green-900">Request Submitted!</h3>
              <p className="text-gray-600 text-sm">We'll contact you within 24 hours to schedule your e‑waste pickup.</p>
              <button
                onClick={closePopup}
                className="px-6 py-2 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition"
              >Close</button>
            </div>
          </div>
        )}
      </div>
    </Wrapper>
  );
}
