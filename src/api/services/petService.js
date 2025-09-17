import api from '../index';

export const getPets = async ({ uid, customer_id, bcheck }) => {
  const { data } = await api.post('/vgetpnt', { uid, customer_id, bcheck });
  return data;
};
