import axios from 'axios'

const api = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
})

export const createToken = async () => api.get(`/create_token`);

export const sendBriefing = async (briefing: any) => api.post('/register_briefing', briefing);

export const createContact = async (contact: any) => api.post('/contact', contact);

export const consultCommercialProposal = async (idProposta: string) => api.get('/proposal', { params: { idProposta } });

export default api;