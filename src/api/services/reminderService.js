import api from '../index';

export const getReminders = async ({ uid, customer_id, bcheck }) => {
  const { data } = await api.post('/vgetreminders', { uid, customer_id, bcheck });
  return data;
};
