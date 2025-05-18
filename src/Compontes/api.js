import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000' });

export const getAllProverbs = () => API.get('/proverbs');
export const getProverbById = (id) => API.get(`/proverbs/${id}`);
export const getRandomProverb = () => API.get('/proverbs/random');
export const getProverbsByCategory = (category) => API.get(`/proverbs?category=${category}`);

export const addProverb = (data) => API.post('/proverbs', data);
export const updateProverb = (id, data) => API.put(`/proverbs/${id}`, data);
export const deleteProverb = (id) => API.delete(`/proverbs/${id}`);
