import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://www.digi-api.com/api/v1/digimon/',
  }),
  endpoints: () => ({}),
});

export default api;
