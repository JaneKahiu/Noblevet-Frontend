import api from '../index';

export const getCustomerInfo = async ({ uid, bcheck, customer_id }) => {
  const { data } = await api.post('/vdash', { uid, bcheck, customer_id });
  return data;
};
