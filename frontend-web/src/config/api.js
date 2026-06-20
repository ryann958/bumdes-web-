export const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || '/api';

// Helper if you want to use it
export const getApiUrl = (endpoint) => `${API_BASE_URL}${endpoint}`;
