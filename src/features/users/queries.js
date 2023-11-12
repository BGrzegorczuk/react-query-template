import { useQuery } from "@tanstack/react-query";
import {fetchUser} from "./userApi";
import {commonQueryConfig} from "../../config/query.config";

export const userQueries = {
  all: ['users'],
  // lists: () => [...userQueries.all, 'lists'],
  list: (filters={}) => [...userQueries.all, 'list', filters],
  views: () => [...userQueries.all, 'views'],
  view: (id) => [...userQueries.all, 'view', id]
};

export const useUserDetailsQuery = (
  id,
  additionalOpts = {}
) => useQuery({
  queryKey: userQueries.view(id),
  queryFn: () => fetchUser(id),
  ...commonQueryConfig,
  ...additionalOpts
})