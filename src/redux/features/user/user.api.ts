import { baseApi } from "@/redux/baseApi";

export const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    profileUpdate: builder.mutation({
      query: ({ id, formData }) => ({
        url: `/user/${id}`,
        method: "PATCH",
        data: formData,
      }),
      invalidatesTags: ["USER", "USERS"],
    }),
    passwordUpdate: builder.mutation({
      query: (updatedData) => ({
        url: "/auth/change-password",
        method: "POST",
        data: updatedData,
      }),
      invalidatesTags: ["USER"],
    }),

    getAllUser: builder.query({
      query: () => ({
        url: "/user/all-users",
        method: "GET",
      }),
      providesTags: ["USERS"],
    }),
    getMe: builder.query({
      query: () => ({
        url: "/user/me",
        method: "GET",
      }),
      providesTags: ["ME"],
    }),
    getAdminStats: builder.query({
      query: () => ({
        url: "/stats/user",
        method: "GET",
      }),
      providesTags: ["ADMIN_STATS"],
    }),
  }),
});

export const {
  useProfileUpdateMutation,
  usePasswordUpdateMutation,
  useGetAllUserQuery,
  useGetMeQuery,
  useGetAdminStatsQuery,
} = userApi;
