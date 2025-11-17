import { baseApi } from "@/redux/baseApi";

export const reviewApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createReview: builder.mutation({
      query: ({ formData }) => ({
        url: `/review/create-review`,
        method: "POST",
        data: formData,
      }),
      invalidatesTags: ["REVIEW"],
    }),

    getAllReviews: builder.query({
      query: () => ({
        url: "/review/all-review",
        method: "GET",
      }),
      providesTags: ["REVIEW"],
    }),
    deleteReview: builder.mutation({
      query: (id) => ({
        url: `/review/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["REVIEW"],
    }),
  }),
});

export const {
  useCreateReviewMutation,
  useGetAllReviewsQuery,
  useDeleteReviewMutation,
} = reviewApi;
