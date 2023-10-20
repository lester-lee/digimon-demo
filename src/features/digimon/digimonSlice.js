import api from '../../store/api';

const digimonApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getDigimon: builder.query({
      query: () => ({
        url: '/',
        params: {
          pageSize: 50,
        },
      }),
      transformResponse: (response) => response.content,
    }),
    getDigimonById: builder.query({
      query: (id) => `/${id}`,
    }),
  }),
});

export const { useGetDigimonQuery, useGetDigimonByIdQuery } = digimonApi;
