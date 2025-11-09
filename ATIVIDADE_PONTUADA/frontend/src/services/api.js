// src/services/api.js
import axios from 'axios';

const api = axios.create({
  // URL base da sua API do backend
  baseURL: 'http://localhost:3001',
});

export default api;