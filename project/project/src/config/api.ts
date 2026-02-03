// API Configuration
// Priority: VITE_API_URL env variable > localhost (dev) > fallback
const API_BASE_URL = import.meta.env.VITE_API_URL || 
  (import.meta.env.DEV 
    ? 'http://localhost:8000' 
    : import.meta.env.VITE_BACKEND_URL || 'https://eco-dispose.onrender.com');

export const API_ENDPOINTS = {
  REQUEST_PICKUP: `${API_BASE_URL}/requestPickup`,
  ADD_SUBSCRIBERS: `${API_BASE_URL}/addSubscribers`,
};

export default API_BASE_URL;

