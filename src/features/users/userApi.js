import { apiClient } from '../../providers/api';

export const fetchUser = async (id) => {
  const res = await apiClient.get(`users/${id}`);
  return res.data;
}