import axios from 'axios';

const configuredApiUrl = import.meta.env.VITE_API_URL;

if (!configuredApiUrl) {
  throw new Error('VITE_API_URL is not configured');
}

export const api = axios.create({
  baseURL: `${configuredApiUrl.replace(/\/+$/, '')}/api`,
});
