import { baseApi } from "@/redux/baseApi";

export const orderAPI = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createOrder: builder.mutation({
      query: (orderInfo) => ({
        url: "/order/create-order",
        method: "POST",
        data: orderInfo,
      }),
    }),
    editOrder: builder.mutation({
      query: ({ orderId, data }) => ({
        url: `/order/${orderId}`,
        method: "PATCH",
        data: data,
      }),
      invalidatesTags: ["ORDER", "ORDERS"],
    }),

    getAllOrder: builder.query({
      query: (params) => ({
        url: "/order/all-order",
        method: "GET",
        params: params,
      }),
      providesTags: ["ORDERS"],
    }),
  }),
});

export const {
  useCreateOrderMutation,
  useEditOrderMutation,
  useGetAllOrderQuery,
} = orderAPI;
